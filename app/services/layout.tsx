import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Services & Divisions Catalogue | Rishvin Labs",
  description:
    "Explore the core engineering capabilities of Rishvin Labs: Software & Product Engineering, Cybersecurity & Digital Trust, IoT & Intelligent Systems, and AI Automation.",
  canonicalUrl: "https://rishvin-labs.vercel.app/services",
  keywords: [
    "Software Engineering Services",
    "Cybersecurity Reviews",
    "IoT Embedded Systems",
    "AI Workflow Automation",
    "Custom Web Applications",
    "Full-Stack Development Studio",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

