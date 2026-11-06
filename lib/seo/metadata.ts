import { Metadata } from 'next';
import { siteConfig } from './site';

export type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  authors?: string[];
  canonicalUrl?: string;
  keywords?: string[];
  noIndex?: boolean;
  locale?: string;
};

export function constructMetadata({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  image = `${siteConfig.url}/og-default.png`,
  type = 'website',
  publishedTime,
  authors,
  canonicalUrl,
  keywords,
  noIndex = false,
  locale = 'en_US',
}: MetadataProps = {}): Metadata {
  const resolvedCanonical = canonicalUrl || siteConfig.url;

  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;

  const verification: Metadata['verification'] = {};
  if (googleVerification) verification.google = googleVerification;
  if (yandexVerification) verification.yandex = yandexVerification;
  if (bingVerification) {
    verification.other = {
      'msvalidate.01': bingVerification,
    };
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    applicationName: siteConfig.name,
    authors: authors
      ? authors.map((a) => ({ name: a }))
      : [{ name: siteConfig.founder, url: siteConfig.url }],
    creator: siteConfig.founder,
    publisher: siteConfig.name,
    category: 'technology',
    classification: 'Founder-Led Engineering Studio & Software Development',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical: resolvedCanonical,
    },
    openGraph: {
      title,
      description,
      url: resolvedCanonical,
      siteName: siteConfig.name,
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
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
      site: siteConfig.socials.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.png', type: 'image/png' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }],
    },
    manifest: '/manifest.webmanifest',
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
  };
}
