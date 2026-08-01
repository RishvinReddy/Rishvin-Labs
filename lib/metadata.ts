import { Metadata } from 'next';
import { siteConfig } from './site';

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  authors?: string[];
  canonicalUrl?: string;
};

export function constructMetadata({
  title = `${siteConfig.name} | Engineering Studio`,
  description = siteConfig.description,
  image = `${siteConfig.url}/og-default.png`,
  type = 'website',
  publishedTime,
  authors,
  canonicalUrl,
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: siteConfig.socials.twitter,
    },
    alternates: {
      canonical: canonicalUrl || siteConfig.url,
    },
  };
}
