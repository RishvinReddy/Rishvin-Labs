import React from 'react';
import { COMPANY } from '@/lib/business/company';

/**
 * Organization JSON-LD Schema
 * Represents the Rishvin Labs Studio entity.
 * Keeps personal accounts separated in the Person entity, referencing founder by @id.
 */
export function OrganizationSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${COMPANY.canonicalUrl}/#rishvin-labs`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    alternateName: ["Rishvin Labs", "RishvinLabs"],
    url: COMPANY.canonicalUrl,
    logo: `${COMPANY.canonicalUrl}/logo.png`,
    image: `${COMPANY.canonicalUrl}/og-default.png`,
    description: COMPANY.description,
    sameAs: [
      COMPANY.linkedinCompanyUrl,
    ],
    identifier: {
      '@type': 'PropertyValue',
      name: 'Udyam Registration Number',
      value: COMPANY.registration.registrationNumber
    },
    founder: {
      '@id': `${COMPANY.canonicalUrl}/#rishvin-reddy`
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Studio Inquiries & Client Engagements',
      email: COMPANY.contactEmail,
      url: `${COMPANY.canonicalUrl}/contact`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
