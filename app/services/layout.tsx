import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { SEO_KEYWORDS } from "@/lib/seo/keywords";
import { BreadcrumbSchema } from "@/components/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Services & Divisions Catalogue | Rishvin Labs",
  description:
    "Explore the core engineering capabilities of Rishvin Labs: Software & Product Engineering, Cybersecurity & Digital Trust, IoT & Intelligent Systems, and AI Automation.",
  canonicalUrl: "https://rishvin-labs.vercel.app/services",
  keywords: [
    // Preserved existing keywords
    "Software Engineering Services",
    "Cybersecurity Reviews",
    "IoT Embedded Systems",
    "AI Workflow Automation",
    "Custom Web Applications",
    "Full-Stack Development Studio",
    // Expanded Service Domain Keywords
    ...SEO_KEYWORDS.softwareEngineering.slice(0, 8),
    ...SEO_KEYWORDS.cybersecurity.slice(0, 6),
    ...SEO_KEYWORDS.iot.slice(0, 6),
    ...SEO_KEYWORDS.automation.slice(0, 6),
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      {children}
    </>
  );
}

