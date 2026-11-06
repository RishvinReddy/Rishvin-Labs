import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { COMPANY } from "@/lib/business/company";
import { constructMetadata } from "@/lib/seo/metadata";

// Section Components
import { LinkedInHero } from "@/components/sections/linkedin/LinkedInHero";
import { LinkedInCompanyIntro } from "@/components/sections/linkedin/LinkedInCompanyIntro";
import { LinkedInFeaturedPosts } from "@/components/sections/linkedin/LinkedInFeaturedPosts";
import { LinkedInEditorialCategories } from "@/components/sections/linkedin/LinkedInEditorialCategories";
import { LinkedInFounderSection } from "@/components/sections/linkedin/LinkedInFounderSection";
import { LinkedInConnectCta } from "@/components/sections/linkedin/LinkedInConnectCta";

export const metadata: Metadata = constructMetadata({
  title: "Rishvin Labs on LinkedIn | Engineering Updates",
  description:
    "Explore Rishvin Labs' LinkedIn presence, engineering updates, software development, cybersecurity, research and product developments.",
  canonicalUrl: "https://rishvin-labs.vercel.app/linkedin",
});

export default function LinkedInPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://rishvin-labs.vercel.app/linkedin/#webpage",
    url: "https://rishvin-labs.vercel.app/linkedin",
    name: "Rishvin Labs on LinkedIn | Engineering Updates",
    description:
      "Explore Rishvin Labs' LinkedIn presence, engineering updates, software development, cybersecurity, research and product developments.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://rishvin-labs.vercel.app/#website",
      name: COMPANY.name,
      url: COMPANY.canonicalUrl,
    },
    about: {
      "@type": "Organization",
      "@id": `${COMPANY.canonicalUrl}/#rishvin-labs`,
      name: COMPANY.name,
      url: COMPANY.canonicalUrl,
      sameAs: [COMPANY.linkedinCompanyUrl],
    },
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      {/* WebPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* 1. Page Hero */}
      <LinkedInHero />

      {/* 2. Company Introduction & Capabilities */}
      <LinkedInCompanyIntro />

      {/* 3. Featured LinkedIn Posts (Embeds) */}
      <LinkedInFeaturedPosts />

      {/* 4. Editorial Content Categories */}
      <LinkedInEditorialCategories />

      {/* 5. Founder Section (Distinct Entity) */}
      <LinkedInFounderSection />

      {/* 6. Connect CTA */}
      <LinkedInConnectCta />

      <Footer />
    </main>
  );
}

