import { MetadataRoute } from 'next';
import { getAllMdx } from '@/lib/mdx';
import { siteConfig } from '@/lib/seo/site';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = siteConfig.url;

  const staticRoutes = [
    '',
    '/about',
    '/about/rishvin-reddy',
    '/services',
    '/work',
    '/results',
    '/journal',
    '/students',
    '/linkedin',
    '/contact',
    '/faq',
    '/blog',
    '/legal/privacy-policy',
    '/legal/terms-and-conditions',
    '/legal/refund-policy',
    '/legal/cookie-policy',
    '/legal/disclaimer',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Map dynamic routes
  const generateDynamicRoutes = (dir: string, priority: number) => {
    return getAllMdx(dir).map((post) => ({
      url: `${SITE_URL}/${dir}/${post.slug}`,
      lastModified: post.publishedAt || new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority,
    }));
  };

  const dynamicCaseStudies = generateDynamicRoutes('case-studies', 0.9);
  const dynamicBlog = generateDynamicRoutes('blog', 0.7);
  const dynamicResearch = generateDynamicRoutes('research', 0.8);
  const dynamicWhitepapers = generateDynamicRoutes('whitepapers', 0.8);

  const dynamicWorkProjects = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.id}`,
    lastModified: '2026-10-15',
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    ...staticRoutes,
    ...dynamicWorkProjects,
    ...dynamicCaseStudies,
    ...dynamicBlog,
    ...dynamicResearch,
    ...dynamicWhitepapers,
  ];
}
