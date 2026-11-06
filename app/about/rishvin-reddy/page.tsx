import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, PersonSchema } from "@/components/seo/schema";

// 14 Specialized Founder Profile Sections
import { FounderHero } from "@/components/sections/founder/FounderHero";
import { FounderStory } from "@/components/sections/founder/FounderStory";
import { FounderTimeline } from "@/components/sections/founder/FounderTimeline";
import { FounderDomains } from "@/components/sections/founder/FounderDomains";
import { FounderProjects } from "@/components/sections/founder/FounderProjects";
import { FounderEducation } from "@/components/sections/founder/FounderEducation";
import { FounderExperience } from "@/components/sections/founder/FounderExperience";
import { FounderInnovation } from "@/components/sections/founder/FounderInnovation";
import { FounderPhilosophy } from "@/components/sections/founder/FounderPhilosophy";
import { FounderResearch } from "@/components/sections/founder/FounderResearch";
import { FounderOpenSource } from "@/components/sections/founder/FounderOpenSource";
import { FounderCompanyConnection } from "@/components/sections/founder/FounderCompanyConnection";
import { FounderPresence } from "@/components/sections/founder/FounderPresence";
import { FounderContactCta } from "@/components/sections/founder/FounderContactCta";

export const metadata: Metadata = constructMetadata({
  title: "Rishvin Reddy | Founder & Lead Engineer at Rishvin Labs",
  description:
    "Erolla Rishvin Reddy is a Computer Science Engineering student (Woxsen University), software builder, and founder of Rishvin Labs, working across web platforms, cybersecurity, digital forensics, IoT, and blockchain.",
  canonicalUrl: "https://rishvin-labs.vercel.app/about/rishvin-reddy",
});

export default function FounderPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      {/* ── SEO BREADCRUMB & PERSON STRUCTURED DATA ── */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Rishvin Reddy", url: "/about/rishvin-reddy" },
        ]}
      />
      <PersonSchema />

      <Navbar />

      {/* ── 01. FOUNDER HERO ── */}
      <FounderHero />

      {/* ── 02. EDITORIAL INTRODUCTION (MY STORY) ── */}
      <FounderStory />

      {/* ── 03. THE ENGINEERING JOURNEY (CHRONOLOGICAL TIMELINE) ── */}
      <FounderTimeline />

      {/* ── 04. PRIMARY ENGINEERING DOMAINS (6 PILLARS) ── */}
      <FounderDomains />

      {/* ── 05. SELECTED ENGINEERING PROJECTS ── */}
      <FounderProjects />

      {/* ── 06. ACADEMIC FOUNDATION & CREDENTIALS ── */}
      <FounderEducation />

      {/* ── 07. EXPERIENCE & PROFESSIONAL DEVELOPMENT ── */}
      <FounderExperience />

      {/* ── 08. INNOVATION, REGISTERED IP & GOVERNANCE ── */}
      <FounderInnovation />

      {/* ── 09. ENGINEERING PHILOSOPHY & PRINCIPLES ── */}
      <FounderPhilosophy />

      {/* ── 10. RESEARCH & TECHNICAL EXPLORATION ── */}
      <FounderResearch />

      {/* ── 11. OPEN SOURCE & DEVELOPER COMMUNITY ── */}
      <FounderOpenSource />

      {/* ── 12. FOUNDER OF RISHVIN LABS (VENTURE & LEADERSHIP) ── */}
      <FounderCompanyConnection />

      {/* ── 13. PROFESSIONAL PRESENCE & VERIFIED CHANNELS ── */}
      <FounderPresence />

      {/* ── 14. CONTACT & FINAL INQUIRY CTA ── */}
      <FounderContactCta />

      <Footer />
    </main>
  );
}
