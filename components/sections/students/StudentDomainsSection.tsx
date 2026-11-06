import React from "react";
import Link from "next/link";
import { 
  Code2, 
  ShieldCheck, 
  FileSearch, 
  Cpu, 
  Blocks, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Layers
} from "lucide-react";
import { ENGINEERING_DOMAINS } from "@/data/students-hub";

const ICON_COMPONENTS = {
  Code2,
  ShieldCheck,
  FileSearch,
  Cpu,
  Blocks,
  Server
};

export function StudentDomainsSection() {
  return (
    <section id="learning-domains" className="py-24 px-6 bg-[#fafafa] border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 01_ENGINEERING_DISCIPLINES"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Explore Core Engineering Domains
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Specialized technical tracks designed to ground students in foundational mechanics, rigorous engineering trade-offs, and practical implementations.
          </p>
        </div>

        {/* 6 Domains Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {ENGINEERING_DOMAINS.map((domain) => {
            const Icon = ICON_COMPONENTS[domain.iconName as keyof typeof ICON_COMPONENTS] || Code2;
            return (
              <div
                key={domain.id}
                className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-blue-600 hover:shadow-xl transition-all group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                      {domain.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="font-medium text-zinc-700 text-sm mb-3">
                    {domain.tagline}
                  </p>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {domain.description}
                  </p>

                  {/* Key Topics List */}
                  <div className="mb-6 pt-6 border-t border-zinc-100">
                    <h4 className="font-mono text-xs font-bold text-zinc-950 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      <span>Key Curricular Topics</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {domain.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prerequisites & Outcomes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-zinc-50 rounded-2xl p-5 border border-zinc-200/60">
                    <div>
                      <h5 className="font-mono text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Prerequisites
                      </h5>
                      <ul className="space-y-1.5">
                        {domain.prerequisites.map((p, i) => (
                          <li key={i} className="text-xs text-zinc-600 leading-snug">
                            • {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-mono text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Practical Outcomes
                      </h5>
                      <ul className="space-y-1.5">
                        {domain.practicalOutcomes.map((o, i) => (
                          <li key={i} className="text-xs text-zinc-700 leading-snug flex items-start gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Reference Lab Project */}
                  {domain.referenceProjectId && (
                    <div className="mb-6 px-4 py-3 rounded-xl bg-blue-50/60 border border-blue-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-blue-700 block">
                          Associated Reference Architecture
                        </span>
                        <span className="font-semibold text-zinc-900">
                          {domain.referenceProjectTitle}
                        </span>
                      </div>
                      <Link 
                        href={`/work/${domain.referenceProjectId}`}
                        className="text-blue-600 hover:text-blue-800 font-mono font-bold flex items-center gap-1 group/link"
                      >
                        <span>Case Study</span>
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <a
                    href={domain.actionHref}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider group-hover:translate-x-1 transition-all"
                  >
                    <span>{domain.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href={`/contact?service=track-${domain.id}&source=students-domains`}
                    className="text-xs font-mono text-zinc-400 hover:text-zinc-700"
                  >
                    Request Review
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice on Academic Rigor */}
        <div className="p-6 rounded-2xl bg-white border border-zinc-200 text-center text-xs text-zinc-500 font-mono">
          <span>
            {"// ACADEMIC_DISCLOSURE: These tracks represent curated technical roadmaps and self-guided project specifications. We do not sell automated certificates or make unverified job placement claims."}
          </span>
        </div>
      </div>
    </section>
  );
}
