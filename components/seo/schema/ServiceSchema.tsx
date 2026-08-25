import React from 'react';
import { siteConfig } from '@/lib/seo/site';

type ServiceProps = {
  name: string;
  description: string;
  url: string;
  provider?: string;
  image?: string;
};

export function ServiceSchema({
  name,
  description,
  url,
  provider = siteConfig.name,
  image = `${siteConfig.url}/logo.png`,
}: ServiceProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    provider: {
      '@type': 'Organization',
      name: provider,
      '@id': `${siteConfig.url}/#rishvin-labs`
    },
    image,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
