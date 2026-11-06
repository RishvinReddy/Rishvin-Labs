"use client";

import React from "react";
import { GitBranch, ExternalLink, Users, Code2, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/lib/business/company";

export function FounderOpenSource() {
  return (
    <section id="community" className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            Section 11 • Open Engineering &amp; Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Open Source &amp; Developer Community
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Public repositories, active developer ecosystem participation, and open engineering resources
            authored for the student and builder community.
          </p>
        </div>

        {/* Community Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* GitHub Pillar */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-zinc-950 mb-2">
                Public GitHub Repositories
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed mb-6">
                Open-source boilerplates, protocol inspectors, security tooling, and experimental scripts developed under public repositories.
              </p>
            </div>
            <a
              href={COMPANY.founder.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-950 hover:text-blue-600 transition-colors"
            >
              <span>Explore github.com/RishvinReddy</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Developer Communities */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-zinc-950 mb-2">
                Developer Ecosystems
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed mb-6">
                Active member in developer networks including HackIndia and WeMakeDevs, engaging in collaborative technical discussions.
              </p>
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href={COMPANY.founder.hackIndiaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 hover:text-blue-600 flex items-center justify-between"
              >
                <span>HackIndia Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY.founder.weMakeDevsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 hover:text-blue-600 flex items-center justify-between"
              >
                <span>WeMakeDevs Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Student Hub Leadership */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-zinc-950 mb-2">
                Student Hub Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed mb-6">
                Curating free technical roadmaps, project challenges, and office-hour sessions for aspiring undergraduate engineers.
              </p>
            </div>
            <a
              href="/students"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-blue-600 hover:underline"
            >
              <span>Visit Rishvin Labs Student Hub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
