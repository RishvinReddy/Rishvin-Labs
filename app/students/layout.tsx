import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Student Hub & Engineering Mentorship | Rishvin Labs",
  description:
    "Curated technical roadmaps, project guidance, code reviews, and architectural mentorship for computer science engineering students.",
  canonicalUrl: "https://rishvin-labs.vercel.app/students",
  keywords: [
    "Student Engineering Mentorship",
    "Computer Science Roadmaps",
    "Capstone Project Advisory",
    "Technical Code Review",
    "Student Portfolio Optimization",
  ],
});

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

