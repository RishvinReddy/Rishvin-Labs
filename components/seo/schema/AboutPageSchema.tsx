import React from 'react';
import { COMPANY } from '@/lib/business/company';

export function AboutPageSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${COMPANY.canonicalUrl}/about/#webpage`,
    url: `${COMPANY.canonicalUrl}/about`,
    name: 'About Rishvin Labs | Founder-Led Technology Studio',
    description: COMPANY.description,
    isPartOf: {
      '@id': `${COMPANY.canonicalUrl}/#website`,
    },
    about: {
      '@id': `${COMPANY.canonicalUrl}/#rishvin-labs`,
    },
    mainEntity: {
      '@id': `${COMPANY.canonicalUrl}/#rishvin-labs`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

