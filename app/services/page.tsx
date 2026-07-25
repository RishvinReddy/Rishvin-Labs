"use client";

import React, { useState } from "react";
import { ServicesHero } from "@/components/sections/services-hero";
import { toUSD } from "@/lib/currency";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SERVICE_CATEGORIES } from "@/data/services";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Terminal, 
  LayoutTemplate, 
  Cpu, 
  Shield, 
  Radio, 
  Blocks, 
  MessageSquare, 
  Code2, 
  Workflow, 
  Package, 
  GraduationCap 
} from "lucide-react";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  Terminal,
  LayoutTemplate,
  Cpu,
  Shield,
  Radio,
  Blocks,
  MessageSquare,
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories = activeCategory === "all" 
    ? SERVICE_CATEGORIES 
    : SERVICE_CATEGORIES.filter(c => c.id === activeCategory);

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

      {/* CATEGORY FILTER TABS */}
      <section className="py-12 px-10 bg-[#fafafa]">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
              activeCategory === "all"
                ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/20"
                : "bg-white text-zinc-700 border border-zinc-200 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/20"
                  : "bg-white text-zinc-700 border border-zinc-200 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </section>

      {/* 2. DYNAMIC SERVICE CATALOGUE */}
      <section className="py-12 px-10 bg-[#fafafa] pb-24">
        <div className="max-w-screen-2xl mx-auto space-y-20">
          {filteredCategories.map(cat => {
            const IconComponent = ICON_MAP[cat.icon] || Globe;
            return (
              <div key={cat.id} id={cat.id} className="space-y-8 scroll-mt-28">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-200 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-blue-600 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">{cat.title}</h2>
                      <p className="text-zinc-600 text-sm">{cat.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.services.map(service => (
                    <div
                      key={service.name}
                      className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all relative group"
                    >
                      {service.popular && (
                        <span className="absolute -top-3 right-8 bg-blue-600 text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
                          Most Requested
                        </span>
                      )}

                      <div>
                        <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-zinc-600 text-sm mb-6 leading-relaxed min-h-[40px]">
                          {service.description}
                        </p>

                        <div className="mb-6 pb-6 border-b border-zinc-100">
                          {/* Primary: Indian Rupee */}
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-mono text-lg font-bold text-zinc-500">₹</span>
                            <span className="text-3xl font-extrabold text-zinc-950 font-mono tracking-tight">
                              {service.price}
                            </span>
                            {/* Secondary: USD equivalent as small text */}
                            <span className="text-xs font-mono text-zinc-400 ml-1 font-semibold">
                              {toUSD(service.price ?? "0")}
                            </span>
                          </div>
                          <span className="text-xs text-zinc-500 mt-1 block">/ project</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {service.features?.map(feat => (
                            <li key={feat} className="flex items-center gap-3 text-sm text-zinc-700 font-sans">
                              <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="w-full py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-blue-600 transition-all shadow-sm"
                      >
                        [ INQUIRE NOW ]
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. THE 5 CORE PILLARS */}
      <section className="py-24 bg-white border-t border-zinc-200 px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-12 pb-6 border-b border-zinc-200 gap-4">
            <div>
              <div className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                [ ARCHITECTURE ]
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950">
                The 5 Core Pillars
              </h2>
            </div>
            <p className="text-zinc-600 text-sm sm:text-base text-left sm:text-right max-w-xs">
              Our expertise, not a list of random services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Pillar 1 */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-blue-600 transition-all group">
              <div>
                <div className="font-mono text-xs font-bold text-blue-600 mb-4">[ 01 ]</div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">Full-Stack Development</h3>
                <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                  Web platforms, SaaS, dashboards, APIs, and mobile-ready applications.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200 font-mono text-[10px] font-semibold text-zinc-500">
                React &bull; Node.js &bull; Python
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-violet-600 transition-all group">
              <div>
                <div className="font-mono text-xs font-bold text-violet-600 mb-4">[ 02 ]</div>
                <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center mb-6 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">IoT &amp; Smart Systems</h3>
                <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                  Hardware-to-cloud pipelines, smart agriculture, home automation.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200 font-mono text-[10px] font-semibold text-zinc-500">
                Arduino &bull; ESP32 &bull; MQTT
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-teal-600 transition-all group">
              <div>
                <div className="font-mono text-xs font-bold text-teal-600 mb-4">[ 03 ]</div>
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-md shadow-teal-500/20 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">Cybersecurity</h3>
                <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                  Security audits, zero-trust architecture, vulnerability assessment.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200 font-mono text-[10px] font-semibold text-zinc-500">
                OWASP &bull; NIST &bull; TLS 1.3
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-blue-600 transition-all group">
              <div>
                <div className="font-mono text-xs font-bold text-blue-600 mb-4">[ 04 ]</div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">Automation Systems</h3>
                <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                  Business workflow automation, CRM pipelines, API integrations.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200 font-mono text-[10px] font-semibold text-zinc-500">
                Python &bull; AI APIs &bull; Zapier
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-violet-600 transition-all group">
              <div>
                <div className="font-mono text-xs font-bold text-violet-600 mb-4">[ 05 ]</div>
                <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center mb-6 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">Digital Products</h3>
                <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                  Templates, developer kits, productivity systems, and micro-SaaS.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200 font-mono text-[10px] font-semibold text-zinc-500">
                Gumroad &bull; Stripe &bull; SaaS
              </div>
            </div>
          </div>
        </div>
      </section>

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
