import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Systems Portfolio & Engineering Case Studies | Rishvin Labs",
  description:
    "Explore delivered engineering systems by Rishvin Labs: custom full-stack web platforms, cybersecurity auditing tools, blockchain forensics, and IoT telemetry networks.",
  canonicalUrl: "https://rishvin-labs.vercel.app/work",
  keywords: [
    "Software Portfolio",
    "Engineering Case Studies",
    "Full-Stack Web Applications",
    "Cybersecurity Tools",
    "Blockchain Forensics",
    "IoT Embedded Systems",
  ],
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

