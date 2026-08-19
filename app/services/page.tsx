"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, Globe, Terminal, Cpu, ShieldCheck } from "lucide-react";
import { serviceCategories, engagementModels } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  "business-website": Globe,
  "custom-web-application": Terminal,
  "business-automation": Cpu,
  "security-review": ShieldCheck,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans">
      <Navbar />

      {/* ── HERO: Desktop + Widgets ── */}
      <ServicesHero />

      {/* Services Catalog */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col gap-24">
          {serviceCategories.map((category, idx) => {
            const Icon = ICON_MAP[category.id] || Globe;
            
            return (
              <div key={category.id} id={category.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* Left: Sticky Header & Description */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-8">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                    0{idx + 1} // {category.id}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-black text-zinc-950 mb-6">
                    {category.title}
                  </h2>
                  <p className="text-zinc-600 text-lg leading-relaxed mb-8">
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
                <div className="lg:col-span-7 space-y-12">
                  {/* Who this is for */}
                  <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 sm:p-10">
                    <h3 className="font-mono text-xs font-bold text-zinc-950 uppercase tracking-widest mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Who this is for
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.bestFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-700 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Services */}
                  <div>
                    <h3 className="font-mono text-xs font-bold text-zinc-950 uppercase tracking-widest mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      Core Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.services.map((service, i) => (
                        <div key={i} className="bg-white border border-zinc-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group">
                          <span className="font-serif font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
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

      {/* Engagement Models (Optional CTA section) */}
      <section className="py-24 px-6 bg-zinc-950 text-white border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-serif font-black mb-6">How we work together</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-sans">
              We offer structured engagement models tailored to your immediate business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model) => (
              <div key={model.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
                <h3 className="font-serif font-bold text-2xl text-white mb-2">{model.title}</h3>
                <p className="text-sm text-zinc-400 mb-8 min-h-[40px]">{model.description}</p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {model.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-zinc-300">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={model.ctaLink}
                  className="w-full py-3.5 rounded-xl bg-zinc-800 hover:bg-white hover:text-zinc-950 border border-zinc-700 hover:border-transparent text-white font-mono text-xs font-bold uppercase tracking-wider text-center transition-all mt-auto"
                >
                  {model.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
