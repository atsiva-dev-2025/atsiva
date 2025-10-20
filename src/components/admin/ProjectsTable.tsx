'use client';

import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectsTableProps {
  projects: any[];
}

export function ProjectsTable({ projects }: ProjectsTableProps) {
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    const response = await fetch(`/api/admin/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      window.location.reload();
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    const response = await fetch(`/api/admin/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_published: !currentStatus }),
    });

    if (response.ok) {
      window.location.reload();
    }
  };

  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <p className="text-gray-500">No projects yet. Create your first one!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 divide-y divide-gray-200">
        {projects.map((project) => (
          <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-6">
              {/* Image */}
              {project.featured_image && (
                <div className="w-32 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={project.featured_image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge>{project.project_categories?.name}</Badge>
                      {project.subcategory && (
                        <Badge variant="outline">{project.subcategory}</Badge>
                      )}
                      {project.is_featured && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-800 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={project.is_published ? <Eye className="w-4 h-4 text-gray-600" /> : <EyeOff className="w-4 h-4 text-gray-600" />}
                      onClick={() => togglePublish(project.id, project.is_published)}
                      title={project.is_published ? 'Unpublish' : 'Publish'}
                    />
                    <Link href={`/admin/projects/${project.id}/edit`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        leftIcon={<Edit className="w-4 h-4 text-gray-600" />}
                      />
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={<Trash2 className="w-4 h-4 text-red-600" />}
                      onClick={() => handleDelete(project.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


