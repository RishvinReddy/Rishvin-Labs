"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { RishvinLogo } from "@/components/shared/RishvinLogo";

export function FounderCompanyConnection() {
  return (
    <section id="rishvin-labs" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 lg:p-16 border border-zinc-800 relative overflow-hidden">
          {/* Subtle Glow Mesh */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5" />
              Section 12 • Venture &amp; Leadership
            </div>

            {/* Logo & Headline */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <RishvinLogo variant="mark" width={44} height={44} className="shrink-0 shadow-xs" />
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
                  Founder &amp; Lead Architect at Rishvin Labs
                </h2>
                <span className="font-mono text-xs text-blue-400 tracking-wider uppercase">
                  Founder-Led Engineering Studio
                </span>
              </div>
            </div>

            {/* Body Prose */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-3xl">
              <p>
                Rishvin Labs was founded to reject the bloated, opaque practices of traditional software consultancies. Too often, clients are sold senior expertise only to have their projects handed off to junior subcontractors, resulting in architecture drift, unmaintained dependencies, and surprise invoices.
              </p>
              <p>
                As founder and lead engineer, I personally oversee and author the technical blueprints for every client engagement. We limit our active client pipeline to maintain strict craftsmanship, enforce automated testing on every deployment, and openly publish all service prices starting from ₹300.
              </p>
            </div>

            {/* Reciprocal Distinction Callout */}
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                  Page Scope Boundary
                </span>
                <p className="text-xs text-zinc-300">
                  This profile details my personal engineering background and technical philosophy. To learn about Rishvin Labs&apos; organizational mission, commercial divisions, and studio capabilities, visit the official studio overview.
                </p>
              </div>

              <Link
                href="/about"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-sm"
              >
                <span>Explore Rishvin Labs About Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
