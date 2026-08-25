import React from 'react';

import { siteConfig } from '@/lib/seo/site';

export function OrganizationSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#rishvin-labs`,
    name: siteConfig.name,
    alternateName: ["Rishvin Labs", "RishvinLabs"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    founder: {
      '@id': `${siteConfig.url}/#rishvin-reddy`
    },
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.github,
      siteConfig.socials.twitter,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
