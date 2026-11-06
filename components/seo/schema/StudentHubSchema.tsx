import React from 'react';
import { COMPANY } from '@/lib/business/company';

/**
 * StudentHubSchema JSON-LD
 * Represents the Student Engineering Hub & Technical Mentorship Program at Rishvin Labs.
 * Fully grounded in real offerings: Project Mentorship, 1-on-1 Technical Debugging,
 * and Code Architecture Reviews without fabricated ratings or completion statistics.
 */
export function StudentHubSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    '@id': `${COMPANY.canonicalUrl}/students/#program`,
    name: 'Rishvin Labs Student Engineering Hub',
    description:
      'Curated technical roadmaps, 1-on-1 engineering debugging sessions, project architecture reviews, and mentorship for computer science and engineering students.',
    url: `${COMPANY.canonicalUrl}/students`,
    provider: {
      '@type': 'Organization',
      '@id': `${COMPANY.canonicalUrl}/#rishvin-labs`,
      name: COMPANY.name,
      url: COMPANY.canonicalUrl,
    },
    educationalProgramMode: 'blended',
    programType: 'Technical Mentorship & Practical Engineering Guidance',
    occupationalCategory: '15-1252.00 - Software Developers',
    hasPart: [
      {
        '@type': 'Course',
        name: 'Technical Code & Architecture Review',
        description:
          'In-depth review of student code repositories, architectural patterns, zero-trust security practices, and performance profiling.',
        provider: {
          '@id': `${COMPANY.canonicalUrl}/#rishvin-labs`,
        },
      },
      {
        '@type': 'Course',
        name: 'Targeted Engineering Debugging Sessions',
        description:
          '1-on-1 live troubleshooting covering API integrations, Next.js deployments, ESP32 IoT firmware, and database pipelines.',
        provider: {
          '@id': `${COMPANY.canonicalUrl}/#rishvin-labs`,
        },
      },
      {
        '@type': 'Course',
        name: 'Capstone & Developer Portfolio Advisory',
        description:
          'Structured guidance for final-year engineering capstone projects, open-source GitHub workflow, and portfolio presentation.',
        provider: {
          '@id': `${COMPANY.canonicalUrl}/#rishvin-labs`,
        },
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        category: 'Student Mentorship',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${COMPANY.canonicalUrl}/students#programs`,
        description: 'Student engineering advisory, project guidance, and debugging support.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

