import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { SEO_KEYWORDS } from "@/lib/seo/keywords";
import { BreadcrumbSchema, StudentHubSchema } from "@/components/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: "Student Hub & Engineering Mentorship | Rishvin Labs",
  description:
    "Curated technical roadmaps, project guidance, code reviews, and architectural mentorship for computer science engineering students.",
  canonicalUrl: "https://rishvin-labs.vercel.app/students",
  keywords: [
    // Preserved existing keywords
    "Student Engineering Mentorship",
    "Computer Science Roadmaps",
    "Capstone Project Advisory",
    "Technical Code Review",
    "Student Portfolio Optimization",
    // Expanded Student Engineering & Technical Support keywords
    ...SEO_KEYWORDS.studentHub,
    ...SEO_KEYWORDS.technicalSessions.slice(0, 8),
  ],
});

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Students Hub", url: "/students" },
        ]}
      />
      <StudentHubSchema />
      {children}
    </>
  );
}

