"use client";

import React from "react";
import { RishvinLogo } from "@/components/shared/RishvinLogo";
import { COMPANY } from "@/lib/business/company";
import { ArrowUpRight, ArrowDown, ShieldCheck } from "lucide-react";

export function LinkedInHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white border-b border-zinc-200">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-12 left-1/3 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-medium uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Official Studio Channel
          </div>

          {/* Logo & Headline */}
          <div className="flex items-center gap-4 mb-6">
            <RishvinLogo variant="mark" width={48} height={48} className="shrink-0 shadow-xs" />
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                Company Presence
              </span>
              <span className="font-sans font-bold text-lg text-zinc-950">
                Rishvin Labs
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-zinc-950 leading-[1.08] mb-6">
            Rishvin Labs on LinkedIn.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 font-sans leading-relaxed mb-8">
            Follow our engineering journey, product developments, technical insights and updates from the Rishvin Labs ecosystem.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={COMPANY.linkedinCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 group"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>Follow Company Profile</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#featured-updates"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Explore Featured Updates</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Verification pill */}
          <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Public company identifier: <code>144037286</code> • Verified company page</span>
          </div>
        </div>
      </div>
    </section>
  );
}
