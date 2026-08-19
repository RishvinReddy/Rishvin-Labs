import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Funnel Sections
import { Hero } from "@/components/sections/hero";
import { CapabilityStrip } from "@/components/sections/capability-strip";
import { ProblemSection } from "@/components/sections/problem-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { WhyUs } from "@/components/sections/why-us";
import { CommunityTeaser } from "@/components/sections/community-teaser";
import { FounderTeaser } from "@/components/sections/founder-teaser";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Homepage Hero with Interactive App UI */}
      <Hero />

      {/* 3. Capability Strip (Studio Capabilities) */}
      <CapabilityStrip />

      {/* 4. Problem Statement */}
      <ProblemSection />

      {/* 5. Core Capabilities (Build/Automate/Secure) */}
      <CapabilitiesSection />

      {/* 6. Services Overview */}
      <ServicesPreview />

      {/* 7. Solutions / Business Outcomes */}
      <SolutionsSection />

      {/* 8. Featured Technical Case Studies */}
      <FeaturedWork />

      {/* 9. Engineering Process */}
      <Process />

      {/* 10. Why Rishvin Labs */}
      <WhyUs />

      {/* 11. Community & Mentorship */}
      <CommunityTeaser />

      {/* 12. Founder & Engineering Background */}
      <FounderTeaser />

      {/* 13. Final CTA Banner */}
      <section id="contact" className="py-28 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(37,99,235,0.15),transparent_100%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ACCEPTING NEW COMMISSIONS &amp; CONSULTATIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white mb-6">
            Let&apos;s engineer something <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic font-normal">meaningful.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Whether you need a high-performance web platform, an IoT telemetry system, or a technical architecture audit, let&apos;s build it right.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?source=homepage"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-mono text-xs font-bold tracking-wider uppercase hover:bg-blue-600 hover:text-white active:scale-98 transition-all shadow-xl shadow-white/5 group"
            >
              <span>[ INITIATE_PROJECT_INQUIRY ]</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Global Footer */}
      <Footer />
    </main>
  );
}
