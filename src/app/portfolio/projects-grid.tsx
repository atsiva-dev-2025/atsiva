"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Category = { id: string; name: string; slug: string };
type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  featured_image: string | null;
  is_featured: boolean;
  is_published: boolean;
  category_id: string | null;
};

const tabs = [
  { key: 'all', label: 'All Projects' },
  { key: 'renewable-energy', label: 'Renewable Energy' },
  { key: 'smart-solutions', label: 'Smart Solutions' },
];

export function ProjectsGrid({
  categories,
  projects,
}: {
  categories: Category[];
  projects: Project[];
}) {
  const [active, setActive] = useState<string>('all');

  const categorySlugById = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of categories) map.set(c.id, c.slug);
    return map;
  }, [categories]);

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    return projects.filter((p) => categorySlugById.get(p.category_id || '') === active);
  }, [active, projects, categorySlugById]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={
                "rounded-full px-4 py-2 text-sm border transition-colors " +
                (isActive
                  ? "bg-foreground text-background border-foreground"
                  : "border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]")
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.slug}`}>
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.featured_image || 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80'}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="mt-8 rounded-md border border-black/10 dark:border-white/10 p-6 text-center text-foreground/70">
          No projects found for this category.
        </div>
      )}
    </div>
  );
}


