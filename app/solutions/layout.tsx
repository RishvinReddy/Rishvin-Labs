import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Targeted Systems & Business Outcomes | Rishvin Labs",
  description:
    "High-leverage engineering solutions, process automation, and bespoke internal systems engineered for business operations.",
  canonicalUrl: "https://rishvin-labs.vercel.app/solutions",
  keywords: [
    "Business Engineering Solutions",
    "Process Automation",
    "Internal Tooling",
    "Workflow Optimization",
    "Custom Software Engineering",
  ],
});

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

