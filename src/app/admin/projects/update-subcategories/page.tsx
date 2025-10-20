'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

interface Project {
  id: string;
  title: string;
  description: string;
  subcategory: string | null;
  project_categories: {
    name: string;
    slug: string;
  };
}

export default function UpdateSubcategoriesPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects');
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  const updateSubcategory = async (projectId: string, newSubcategory: string) => {
    setUpdating(projectId);
    try {
      const response = await fetch(`/api/admin/projects/${projectId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subcategory: newSubcategory }),
      });

      if (response.ok) {
        toast.success('Subcategory updated successfully!');
        fetchProjects(); // Refresh the list
      } else {
        toast.error('Failed to update subcategory');
      }
    } catch (error) {
      console.error('Error updating subcategory:', error);
      toast.error('Network error');
    } finally {
      setUpdating(null);
    }
  };

  const getSuggestedSubcategory = (project: Project) => {
    const title = project.title.toLowerCase();
    const description = project.description?.toLowerCase() || '';
    
    if (title.includes('home') || title.includes('residential') || description.includes('home')) {
      return 'residential-solar';
    }
    if (title.includes('commercial') || title.includes('office') || description.includes('commercial')) {
      return 'commercial-solar';
    }
    if (title.includes('battery') || title.includes('storage') || description.includes('battery')) {
      return 'battery-storage';
    }
    if (title.includes('automation') || title.includes('smart') || description.includes('automation')) {
      return 'automation';
    }
    if (title.includes('telecom') || title.includes('network') || description.includes('telecom')) {
      return 'telecom';
    }
    if (title.includes('construction') || title.includes('build') || description.includes('construction')) {
      return 'construction';
    }
    if (title.includes('it') || title.includes('consulting') || description.includes('consulting')) {
      return 'it-consulting';
    }
    
    return 'residential-solar'; // Default fallback
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/projects">
            <Button variant="outline" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Projects
            </Button>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Update Project Subcategories</h2>
        </div>
        <div className="text-center py-8">
          <p className="text-gray-500">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/projects">
          <Button variant="outline" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Back to Projects
          </Button>
        </Link>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Update Project Subcategories</h2>
          <p className="text-gray-600 mt-1">Set subcategories for your existing projects</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-gray-200">
          {projects.map((project) => {
            const suggested = getSuggestedSubcategory(project);
            return (
              <div key={project.id} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge>{project.project_categories?.name}</Badge>
                      {project.subcategory && (
                        <Badge variant="outline">Current: {project.subcategory}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Suggested: <span className="font-medium">{suggested}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      onClick={() => updateSubcategory(project.id, suggested)}
                      loading={updating === project.id}
                      leftIcon={<Save className="w-4 h-4" />}
                    >
                      Set to {suggested}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {projects.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <p className="text-gray-500">No projects found.</p>
        </div>
      )}
    </div>
  );
}
