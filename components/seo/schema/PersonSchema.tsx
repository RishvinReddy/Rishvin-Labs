import React from 'react';
import { COMPANY } from '@/lib/business/company';

/**
 * Person JSON-LD Schema
 * Represents Founder & Lead Engineer Erolla Rishvin Reddy as a distinct Person entity.
 * Keeps personal profiles completely decoupled from the Organization entity schema.
 */
export function PersonSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://rishvin-labs.vercel.app/#rishvin-reddy',
    name: COMPANY.founder.name,
    alternateName: COMPANY.founder.displayName,
    url: COMPANY.founder.portfolioUrl,
    email: COMPANY.founder.email,
    image: 'https://rishvin-labs.vercel.app/rishvin-reddy-founder-rishvin-labs.png',
    jobTitle: 'Founder & Lead Engineer',
    worksFor: {
      '@id': 'https://rishvin-labs.vercel.app/#rishvin-labs'
    },
    sameAs: [
      COMPANY.founder.githubUrl,
      COMPANY.founder.linkedinUrl,
      COMPANY.founder.youtubeUrl,
      COMPANY.founder.orcidUrl,
      COMPANY.founder.weMakeDevsUrl,
      COMPANY.founder.hackIndiaUrl,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
