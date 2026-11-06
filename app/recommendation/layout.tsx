import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Solution Calculator & Architectural Recommendation | Rishvin Labs",
  description:
    "Interactive engineering scope and stack recommendation tool. Configure your project parameters to compute optimal architectural dependencies and delivery packages.",
  canonicalUrl: "https://rishvin-labs.vercel.app/recommendation",
  keywords: [
    "Software Architecture Recommendation",
    "Project Scope Calculator",
    "Engineering Package Calculator",
    "Rishvin Labs Solution Advisor",
  ],
});

export default function RecommendationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

