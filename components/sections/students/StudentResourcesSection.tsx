"use client";

import React, { useState } from "react";
import { 
  ExternalLink 
} from "lucide-react";
import { ENGINEERING_RESOURCES } from "@/data/students-hub";

export function StudentResourcesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Web & Full-Stack",
    "Cybersecurity & AppSec",
    "Forensics & DFIR",
    "IoT & Embedded",
    "Blockchain & EVM",
    "Cloud, Linux & DevOps"
  ];

  const filteredResources = activeCategory === "All"
    ? ENGINEERING_RESOURCES
    : ENGINEERING_RESOURCES.filter(r => r.category === activeCategory);

  return (
    <section id="resources-library" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 04_CURATED_LIBRARY"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Official Engineering Resource Library
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Authoritative, primary documentation, RFC specifications, and interactive laboratories. No paid sponsorships or speculative courses—only verified, open technical references.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-12 border-b border-zinc-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((res) => {
            const tierBadge = {
              "Official Documentation": "bg-blue-50 text-blue-700 border-blue-200",
              "Interactive Academy": "bg-emerald-50 text-emerald-700 border-emerald-200",
              "Community Standard": "bg-purple-50 text-purple-700 border-purple-200"
            };

            return (
              <div
                key={res.id}
                className="bg-[#fafafa] border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-600 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-500">
                      {res.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border ${tierBadge[res.tier]}`}>
                      {res.tier}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {res.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-sans">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-zinc-500">
                    <span className="text-zinc-400">By </span>
                    <span className="font-semibold text-zinc-700">{res.provider}</span>
                  </div>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Read Docs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center text-xs text-zinc-500 font-mono">
          <span>All linked resources are 100% free and open-access. External links navigate to official provider portals.</span>
        </div>
      </div>
    </section>
  );
}
