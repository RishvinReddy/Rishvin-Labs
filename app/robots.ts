import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo/site';

export default function robots(): MetadataRoute.Robots {
  const SITE_URL = siteConfig.url;
  
  // Disable indexing for Vercel preview environments
  const isPreview = process.env.VERCEL_ENV === 'preview';
  
  if (isPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
