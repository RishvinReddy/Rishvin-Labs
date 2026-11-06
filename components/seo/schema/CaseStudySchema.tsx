import React from 'react';
import { siteConfig } from '@/lib/seo/site';

export interface CaseStudySchemaProps {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  category: string;
  technologies: string[];
  datePublished?: string;
  image?: string;
}

export function CaseStudySchema({
  title,
  subtitle,
  description,
  url,
  category,
  technologies,
  datePublished = "2026-01-01",
  image = `${siteConfig.url}/og-default.png`,
}: CaseStudySchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#casestudy`,
    headline: `${title}: ${subtitle}`,
    description,
    url,
    image: [image],
    articleSection: category,
    keywords: technologies.join(', '),
    datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.founder,
      url: `${siteConfig.url}/about/rishvin-reddy`,
      '@id': `${siteConfig.url}/#rishvin-reddy`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      '@id': `${siteConfig.url}/#rishvin-labs`,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

