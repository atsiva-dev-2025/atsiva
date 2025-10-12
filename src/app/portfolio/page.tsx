// src/app/portfolio/page.tsx
import { createClient } from '@/lib/supabase/server';
import { ProjectsGrid } from './projects-grid';

export const revalidate = 60; // cache for a minute

export default async function PortfolioPage() {
  const supabase = createClient();

  const { data: categories } = await supabase
    .from('project_categories')
    .select('id, name, slug')
    .order('name', { ascending: true });

  const { data: projects } = await supabase
    .from('projects')
    .select(
      'id, title, slug, description, featured_image, is_featured, is_published, category_id'
    )
    .eq('is_published', true)
    .order('order_index', { ascending: true })
    .order('created_at', { ascending: false });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
      <p className="text-foreground/70 mt-2">Explore our latest work.</p>
      <div className="mt-8">
        <ProjectsGrid categories={categories ?? []} projects={projects ?? []} />
      </div>
    </main>
  );
}


