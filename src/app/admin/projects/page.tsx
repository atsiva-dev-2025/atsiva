import { createClient } from '@/lib/supabase/server';
import { ProjectsTable } from '@/components/admin/ProjectsTable';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 0;

export default async function ProjectsPage() {
  const supabase = createClient();
  
  const { data: projects } = await supabase
    .from('projects')
    .select(`
      *,
      project_categories (
        name,
        slug
      )
    `)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="text-gray-600 mt-1">Manage your portfolio projects</p>
        </div>
        
        <Link href="/admin/projects/new">
          <Button leftIcon={<Plus className="w-4 h-4" />}>Add Project</Button>
        </Link>
      </div>

      <ProjectsTable projects={(projects as any) || []} />
    </div>
  );
}


