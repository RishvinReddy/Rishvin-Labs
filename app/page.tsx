import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Homepage V2 Sections (Exact Canonical Order)
import { Hero } from "@/components/sections/hero";
import { BusinessCredibility } from "@/components/sections/business-credibility";
import { EngineeringDivisions } from "@/components/sections/engineering-divisions";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ResultsPreview } from "@/components/sections/results-preview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FounderTeaser } from "@/components/sections/founder-teaser";
import { JournalPreview } from "@/components/sections/journal-preview";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Rishvin Labs | Software Engineering, Cybersecurity & Intelligent Systems",
  description:
    "Founder-led software engineering, cybersecurity and intelligent connected systems for businesses, startups and ambitious teams.",
  canonicalUrl: "https://rishvin-labs.vercel.app",
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Navigation */}
      <Navbar />

      {/* SECTION 01 — HERO */}
      <Hero />

      {/* SECTION 02 — BUSINESS CREDIBILITY */}
      <BusinessCredibility />

      {/* SECTION 03 — ENGINEERING DIVISIONS */}
      <EngineeringDivisions />

      {/* SECTION 04 — FEATURED PROJECTS */}
      <FeaturedWork />

      {/* SECTION 05 — ENGINEERING RESULTS */}
      <ResultsPreview />

      {/* SECTION 06 — CUSTOMER TESTIMONIALS (Hidden until explicit client consent is logged) */}
      <TestimonialsSection />

      {/* SECTION 07 — FOUNDER */}
      <FounderTeaser />

      {/* SECTION 08 — JOURNAL AND RESEARCH */}
      <JournalPreview />

      {/* SECTION 09 — PROJECT CONVERSION (Clean High-Intent CTA) */}
      <section id="contact" className="py-28 relative overflow-hidden bg-zinc-950 text-white border-t border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(37,99,235,0.15),transparent_100%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>FOUNDER-LED COMMISSIONS &amp; CONSULTATIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white mb-6">
            Let&apos;s engineer something <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent italic font-normal">resilient.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Whether you need a custom web platform, security architecture review, or an IoT hardware pipeline, let&apos;s build it right from first principles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?source=homepage"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-mono text-xs font-bold tracking-wider uppercase hover:bg-blue-600 hover:text-white active:scale-98 transition-all shadow-xl shadow-white/5 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border border-zinc-700 text-white font-mono text-xs font-bold tracking-wider uppercase hover:border-zinc-500 hover:bg-zinc-900 transition-all"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
