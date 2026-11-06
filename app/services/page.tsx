"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesCatalogueNav } from "@/components/sections/services/ServicesCatalogueNav";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Globe,
  Terminal,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { serviceCategories } from "@/data/services";

// New Comprehensive V2 Pricing & Catalogue Sections
import { FeaturedPackagesSection } from "@/components/sections/services/FeaturedPackagesSection";
import { ProjectEstimateBuilder } from "@/components/sections/services/ProjectEstimateBuilder";
import { ServiceCatalogueDirectory } from "@/components/sections/services/ServiceCatalogueDirectory";
import { AddonsPricingSection } from "@/components/sections/services/AddonsPricingSection";
import { MaintenancePlansSection } from "@/components/sections/services/MaintenancePlansSection";
import { PricingRulesPolicySection } from "@/components/sections/services/PricingRulesPolicySection";

const ICON_MAP: Record<string, React.ElementType> = {
  "software-engineering": Terminal,
  "cybersecurity": ShieldCheck,
  "iot-intelligent-systems": Cpu,
  "ai-automation": Globe,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans">
      <Navbar />

      {/* ── HERO: Desktop + Widgets ── */}
      <ServicesHero />

      {/* ── SUB-NAV / QUICK JUMP CATALOGUE RAIL ── */}
      <ServicesCatalogueNav />

      {/* ── 1. CURATED FIXED-SCOPE PACKAGES (Starting from ₹300) ── */}
      <FeaturedPackagesSection />

      {/* ── 2. INTERACTIVE ESTIMATE BUILDER ── */}
      <ProjectEstimateBuilder />

      {/* ── 3. 36-GROUP COMPLETE SERVICE TAXONOMY DIRECTORY ── */}
      <ServiceCatalogueDirectory />

      {/* ── 4. CUSTOMIZATION ADD-ONS PRICING ── */}
      <AddonsPricingSection />

      {/* ── 5. MONTHLY CONTINUOUS CARE RETAINERS ── */}
      <MaintenancePlansSection />

      {/* ── 6. EXISTING ARCHITECTURAL CORE DOMAINS (Preserved) ── */}
      <section id="architectural-domains" className="py-24 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
              Domain Specialization
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-zinc-950 mb-4">
              Core Engineering Domains
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed">
              For teams requiring dedicated end-to-end architectural leadership, we anchor our capabilities across four key technical pillars.
            </p>
          </div>

          {serviceCategories.map((category, idx) => {
            const Icon = ICON_MAP[category.id] || Globe;

            return (
              <div
                key={category.id}
                id={category.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
              >
                {/* Left: Sticky Header & Description */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-8">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                    0{idx + 1} {"//"} {category.id}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-black text-zinc-950 mb-6">
                    {category.title}
                  </h3>
                  <p className="text-zinc-600 text-base leading-relaxed mb-8">
                    {category.description}
                  </p>

                  <Link
                    href={`/contact?service=${category.id}&source=services`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Right: Who it's for & Capabilities */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Who this is for */}
                  <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                    <h4 className="font-mono text-xs font-bold text-zinc-950 uppercase tracking-widest mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Who this is for
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-700 text-xs leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Services */}
                  <div>
                    <h4 className="font-mono text-xs font-bold text-zinc-950 uppercase tracking-widest mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Core Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.services.map((service, i) => (
                        <div
                          key={i}
                          className="bg-white border border-zinc-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-sm transition-all group"
                        >
                          <span className="font-sans font-bold text-xs text-zinc-950 group-hover:text-blue-600 transition-colors">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 7. COMMERCIAL RULES & ENGAGEMENT POLICY (Transparent Terms) ── */}
      <PricingRulesPolicySection />

      <Footer />
    </main>
  );
}
