import { MetadataRoute } from 'next';
import { getAllMdx } from '@/lib/mdx';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = siteConfig.url;

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/faq',
    '/case-studies',
    '/blog',
    '/research',
    '/whitepapers',
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

  return [
    ...staticRoutes,
    ...dynamicCaseStudies,
    ...dynamicBlog,
    ...dynamicResearch,
    ...dynamicWhitepapers,
  ];
}
