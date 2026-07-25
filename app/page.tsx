import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { QuickLinks } from "@/components/sections/quick-links";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { WhyUs } from "@/components/sections/why-us";

import { Process } from "@/components/sections/process";
import { FounderTeaser } from "@/components/sections/founder-teaser";
import { CommunityTeaser } from "@/components/sections/community-teaser";
import Link from "next/link";
import { ArrowUpRight, Terminal, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Homepage Hero with Interactive App UI */}
      <Hero />

      {/* 3. Quick Links Access Panel */}
      <QuickLinks />

      {/* 4. Infinite Scrolling Tech Marquee */}
      <TechMarquee />

      {/* 5. Why Rishvin Labs (The Engineering Advantage) */}
      <WhyUs />



      {/* 7. The 6-Step Workflow Timeline */}
      <Process />

      {/* 8. Studio Philosophy Banner */}
      <section id="philosophy" className="py-24 border-t border-b border-zinc-200 bg-zinc-50/80 relative">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="tech-badge mb-4">
                <span className="w-2 h-2 rounded-full bg-violet-600" />
                <span>STUDIO PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-6">
                Built Like an Engineering Firm, Designed Like an Editorial Studio.
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 font-sans">
                Rishvin Labs represents the convergence of high-concurrency software engineering and modern digital design. We build robust systems that scale seamlessly without technical debt.
              </p>
              
              <div className="flex items-center gap-4 font-mono text-xs text-zinc-700">
                <div className="flex items-center gap-2 bg-white border border-zinc-200 px-3.5 py-2 rounded-xl shadow-sm">
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-bold">ZERO DEBT</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-zinc-200 px-3.5 py-2 rounded-xl shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-bold">OWASP HARDENED</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-zinc-950 text-xl mb-3">Performance First</h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  Every page and API handler is optimized for edge execution, sub-second latency, and Core Web Vitals perfection.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-zinc-950 text-xl mb-3">Security Hardened</h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  Zero-trust architecture, automated vulnerability scanning, and strict encryption protocols embedded in every line of code.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Principal Architect / Behind the Code Highlight */}
      <FounderTeaser />

      {/* 10. Community, Student Mentorship & R&D Labs */}
      <CommunityTeaser />

      {/* 11. Final CTA Banner */}
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
              href="mailto:rishvinreddy@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-mono text-xs font-bold tracking-wider uppercase hover:bg-blue-600 hover:text-white active:scale-98 transition-all shadow-xl shadow-white/5 group"
            >
              <span>[ INITIATE_PROJECT_INQUIRY ]</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Global Footer */}
      <Footer />
    </main>
  );
}
