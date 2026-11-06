"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/business/company";
import { RishvinSignature } from "@/components/shared/RishvinSignature";
import { GitBranch, Globe, ArrowUpRight, UserCheck } from "lucide-react";

export function LinkedInFounderSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-zinc-800 relative overflow-hidden">
          {/* Subtle glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: Bio & Distinction */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" />
                Leadership & Authorship
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white mb-2">
                  Meet the Founder
                </h2>
                <span className="font-mono text-sm text-blue-400">
                  {COMPANY.founder.name} • {COMPANY.founder.role}
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-2xl">
                {COMPANY.founder.bio}
              </p>

              <div className="pt-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block mb-2">
                  Author Signature
                </span>
                <div className="w-48 text-zinc-300">
                  <RishvinSignature className="w-full h-auto text-zinc-300" />
                </div>
              </div>

              {/* Entity separation note */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                <strong className="text-zinc-200">Entity Boundary:</strong> The links below belong to Rishvin Reddy in an individual professional capacity, distinct from the official Rishvin Labs company profile.
              </div>

              {/* Verified Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={COMPANY.founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-all group"
                >
                  <span>Founder LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={COMPANY.founder.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={COMPANY.founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Personal Portfolio</span>
                </a>

                <Link
                  href="/about/rishvin-reddy"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 font-mono text-xs font-semibold transition-colors"
                >
                  <span>Full Biography Page →</span>
                </Link>
              </div>
            </div>

            {/* Right: Founder Photo & Credentials Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-900 mb-4">
                <Image
                  src="/rishvin-reddy-founder-rishvin-labs.png"
                  alt="Erolla Rishvin Reddy, Founder of Rishvin Labs"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover"
                />
              </div>

              <div className="text-center">
                <span className="font-sans font-bold text-sm text-white block">
                  Erolla Rishvin Reddy
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  Founder & Lead Architect
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
