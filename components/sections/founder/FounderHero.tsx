"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/business/company";
import {
  GitBranch,
  Globe,
  ExternalLink,
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

export function FounderHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Founder Portrait Card */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-zinc-200 shadow-xl bg-zinc-900 group">
              <Image
                src="/rishvin-reddy-founder-rishvin-labs.png"
                alt="Erolla Rishvin Reddy — Founder of Rishvin Labs"
                fill
                priority
                sizes="(max-width: 768px) 208px, 256px"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hyderabad, India • Engineering Practicing</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Designation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Founder &amp; Software Engineer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-2 leading-[1.08]">
              Rishvin Reddy
            </h1>

            <div className="font-mono text-xs sm:text-sm text-zinc-500 mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>Legal Name: <strong>Erolla Rishvin Reddy</strong></span>
              <span>•</span>
              <Link href="/about" className="text-blue-600 hover:underline flex items-center gap-1 font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                Founder of Rishvin Labs
              </Link>
            </div>

            <p className="text-lg sm:text-xl text-zinc-700 font-sans leading-relaxed mb-8 max-w-2xl">
              Building practical software systems across cybersecurity, digital forensics, full-stack engineering, IoT, and blockchain. Translating technical ideas into reliable, maintainable products.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={COMPANY.founder.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Personal Portfolio</span>
              </a>

              <a
                href={COMPANY.founder.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-800 font-mono text-xs font-bold uppercase tracking-wider hover:border-zinc-400 hover:bg-zinc-50 transition-colors shadow-xs"
              >
                <GitBranch className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={COMPANY.founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-800 font-mono text-xs font-bold uppercase tracking-wider hover:border-blue-600 hover:text-blue-600 hover:bg-zinc-50 transition-colors shadow-xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <Link
                href="/contact?source=founder"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-100 transition-colors"
              >
                <span>Direct Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-10 pt-6 border-t border-zinc-200/80 flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-zinc-400">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-zinc-400" />
              <span>Scroll to explore engineering journey, systems, and research</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
