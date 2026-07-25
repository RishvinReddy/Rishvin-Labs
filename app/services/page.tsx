"use client";

import React from "react";
import { ServicesHero } from "@/components/sections/services-hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { StudioServicesSection } from "@/components/sections/studio-services-section";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function ServicesPage() {

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. EDITORIAL HERO — Monitor + Keyboard + Mouse */}
      <ServicesHero />

      {/* REVENUE MODEL STRIP */}
      <section className="bg-white border-y border-zinc-200 py-8 px-10 overflow-x-auto">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between min-w-[700px] gap-8 font-mono text-xs font-semibold text-zinc-600 uppercase tracking-wider">
          <div className="flex items-center gap-2 text-blue-600 font-bold">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>01. Services - Fast Cash</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
            <span>02. Packages</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
            <span>03. Digital Products</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
            <span>04. SaaS Platforms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
            <span>05. Dedicated Retainers</span>
          </div>
        </div>
      </section>

      <StudioServicesSection />


      {/* 4. STUDENT CTA BANNER */}
      <section className="py-16 bg-white px-10 pb-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50/60 via-violet-50/60 to-white border border-zinc-200 rounded-3xl p-12 text-center flex flex-col items-center justify-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-zinc-950 mb-4">
              Looking for student-focused services?
            </h3>
            <p className="text-zinc-600 max-w-xl mb-8 leading-relaxed text-base">
              Portfolio building, placements, hackathons, academic projects, GitHub optimization &amp; career acceleration.
            </p>
            <Link
              href="/students"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-zinc-300 text-zinc-950 font-semibold text-base hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
            >
              <span>Explore Student Hub</span>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
