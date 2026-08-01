import React from 'react';
import { siteConfig } from '@/lib/site';

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName = siteConfig.founder,
  image
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image ? [image] : [`${siteConfig.url}/og-default.png`],
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: [{
      '@type': 'Person',
      name: authorName,
      url: siteConfig.url
    }],
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
