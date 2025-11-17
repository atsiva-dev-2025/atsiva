import { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use canonical site URL from env; avoids build-time issues and ensures correct domain in sitemap
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from('projects')
    .select('slug, updated_at')
    .eq('is_published', true);

  const projectUrls = (projects || []).map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.updated_at as unknown as string),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Static public pages to include in sitemap
  const staticPaths = [
    '/about',
    // Services
    '/services/residential-solar',
    '/services/commercial-solar',
    '/services/battery-storage',
    '/services/automation',
    '/services/telecom',
    '/services/construction',
    // Smart Solutions (IT & Consulting)
    '/smart-solutions/it-consulting',
    '/smart-solutions/it-consulting/capacity-development',
    '/smart-solutions/it-consulting/cybersecurity',
    '/smart-solutions/it-consulting/innovation-labs',
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...staticUrls,
    ...projectUrls,
  ];
}


