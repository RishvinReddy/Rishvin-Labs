import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Field Notes & Engineering Journal | Rishvin Labs",
  description:
    "Technical essays, systems retrospectives, and architecture field notes authored by Rishvin Reddy on software engineering, cybersecurity, and IoT.",
  canonicalUrl: "https://rishvin-labs.vercel.app/journal",
  keywords: [
    "Engineering Journal",
    "Systems Architecture Notes",
    "Cybersecurity Field Notes",
    "IoT Systems Engineering",
    "Technical Retrospectives",
  ],
});

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

