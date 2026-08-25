import React from 'react';
import { siteConfig } from '@/lib/seo/site';

export function SoftwareApplicationSchema({
  name,
  description,
  applicationCategory = 'WebApplication',
  operatingSystem = 'Any',
  url,
  image
}: {
  name: string;
  description: string;
  applicationCategory?: string;
  operatingSystem?: string;
  url?: string;
  image?: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory,
    operatingSystem,
    url: url || siteConfig.url,
    image: image ? [image] : [`${siteConfig.url}/og-default.png`],
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
