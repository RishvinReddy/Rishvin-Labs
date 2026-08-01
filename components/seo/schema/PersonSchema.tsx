import React from 'react';

import { siteConfig } from '@/lib/site';

export function PersonSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.founder,
    url: siteConfig.url,
    image: `${siteConfig.url}/rishvin-reddy-founder-rishvin-labs.png`,
    jobTitle: 'Lead Architect / Founder',
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.github,
      siteConfig.socials.portfolio,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
