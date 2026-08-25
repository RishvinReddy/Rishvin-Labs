import React from 'react';

import { siteConfig } from '@/lib/seo/site';

export function PersonSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#rishvin-reddy`,
    name: siteConfig.founder,
    url: `${siteConfig.url}/about/rishvin-reddy`,
    image: `${siteConfig.url}/rishvin-reddy-founder-rishvin-labs.png`,
    jobTitle: 'Lead Architect / Founder',
    worksFor: {
      '@id': `${siteConfig.url}/#rishvin-labs`
    },
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.github,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
