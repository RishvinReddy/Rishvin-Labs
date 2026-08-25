import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo/site';

export default function robots(): MetadataRoute.Robots {
  const SITE_URL = siteConfig.url;
  
  // Disable indexing for preview deployments or if explicitly told to
  const isProduction = process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === 'production';
  
  if (!isProduction) {
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
