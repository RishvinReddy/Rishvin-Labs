import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo/site';

export default function manifest(): MetadataRoute.Manifest {
  const COMPANY_NAME = siteConfig.name;
  
  return {
    name: `${COMPANY_NAME} | Engineering Studio`,
    short_name: COMPANY_NAME,
    description: siteConfig.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
