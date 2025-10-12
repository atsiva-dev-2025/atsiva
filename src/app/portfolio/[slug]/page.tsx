// src/app/portfolio/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { Project } from '@/types'

export const revalidate = 60

type PageProps = {
  params: { slug: string }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const supabase = createClient()

  const { data: project, error } = await supabase
    .from('projects')
    .select(
      'id, created_at, updated_at, title, slug, description, client_name, location, completion_date, featured_image, gallery_images, specifications, category_id'
    )
    .eq('slug', params.slug)
    .single()

  if (error || !project) return notFound()

  const { data: related } = await supabase
    .from('projects')
    .select('id, title, slug, featured_image')
    .eq('is_published', true)
    .eq('category_id', project.category_id)
    .neq('id', project.id)
    .order('order_index', { ascending: true })
    .order('created_at', { ascending: false })
    .limit(3)

  const specs = (project.specifications as Record<string, any> | null) || null
  const gallery = (project.gallery_images as string[] | null) || []

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6">
        <Link href="/portfolio" className="text-sm hover:underline">
          ← Back to Portfolio
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <header className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
            <dl className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-foreground/70">
              <div>
                <dt className="font-medium text-foreground">Client</dt>
                <dd>{project.client_name || '—'}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Location</dt>
                <dd>{project.location || '—'}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Completion</dt>
                <dd>{project.completion_date || '—'}</dd>
              </div>
            </dl>
          </header>

          {project.featured_image ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
              <Image
                src={project.featured_image}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>
          ) : null}

          <section className="prose prose-neutral dark:prose-invert max-w-none mt-6">
            <p className="whitespace-pre-wrap">{project.description}</p>
          </section>

          {gallery.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">Gallery</h2>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {gallery.map((src, i) => (
                  <li key={src + i} className="relative aspect-[4/3] overflow-hidden rounded-md border border-black/10 dark:border-white/10">
                    <Image src={src} alt={`${project.title} image ${i + 1}`} fill className="object-cover" unoptimized />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {specs && Object.keys(specs).length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">Specifications</h2>
              <div className="mt-3 overflow-hidden rounded-md border border-black/10 dark:border-white/10">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(specs).map(([key, value]) => (
                      <tr key={key} className="border-b last:border-b-0 border-black/10 dark:border-white/10">
                        <td className="bg-black/[0.03] dark:bg-white/[0.05] px-3 py-2 font-medium capitalize w-1/3">
                          {key.replace(/_/g, ' ')}
                        </td>
                        <td className="px-3 py-2">
                          {formatSpecValue(value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </article>

        <aside className="lg:col-span-1">
          {related && related.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold">Related projects</h2>
              <ul className="mt-3 grid gap-3">
                {related.map((r) => (
                  <li key={r.id} className="overflow-hidden rounded-md border border-black/10 dark:border-white/10">
                    <Link href={`/portfolio/${r.slug}`} className="block">
                      <div className="relative h-32 w-full">
                        {r.featured_image ? (
                          <Image src={r.featured_image} alt={r.title} fill className="object-cover" unoptimized />
                        ) : (
                          <div className="h-full w-full bg-black/[0.04] dark:bg-white/[0.06]" />
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium line-clamp-1">{r.title}</p>
                        <p className="text-xs text-foreground/70">View details →</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>
    </main>
  )
}

function formatSpecValue(value: unknown): string {
  if (value == null) return '—'
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}


