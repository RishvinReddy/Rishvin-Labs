"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FEATURED_PROJECTS } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return FEATURED_PROJECTS.filter((proj) => {
      const matchesFilter = activeFilter === "all" || proj.category === activeFilter;
      const matchesSearch = 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const filters = [
    { id: "all", label: "All" },
    { id: "iot", label: "IoT" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "software", label: "Software" },
    { id: "automation", label: "Automation" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 bg-white border-b border-zinc-200 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            Portfolio of Systems
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-6 max-w-3xl mx-auto leading-tight">
            Engineering <span className="text-blue-600 font-normal italic">Case Studies.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-sans">
            High-performance systems architected for scale, security, and precision&mdash;from concept to production.
          </p>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="bg-white border-b border-zinc-200 py-4 px-6 sticky top-20 z-40 shadow-sm">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === f.id
                    ? "bg-zinc-950 text-white shadow-sm"
                    : "bg-[#fafafa] text-zinc-700 border border-zinc-200 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-[#fafafa] border border-zinc-200 rounded-xl px-4 py-2 w-full sm:w-64 focus-within:border-blue-600 focus-within:bg-white transition-all">
            <Search className="w-4 h-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="bg-transparent border-none outline-none font-mono text-xs text-zinc-800 placeholder:text-zinc-400 w-full"
            />
          </div>
        </div>
      </section>

      {/* 3. PROJECTS GRID */}
      <section className="py-20 px-6 bg-[#fafafa] flex-1">
        <div className="max-w-screen-2xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-mono text-sm text-zinc-500 uppercase">// NO_SYSTEMS_FOUND_MATCHING_CRITERIA</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => {
                const isLive = project.id !== "project-vault";
                return (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                        <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
                          [ {project.category} ]
                        </span>
                        <span
                          className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                            isLive
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {isLive ? "Live" : "Concept"}
                        </span>
                      </div>

                      <div className="font-mono text-xs text-zinc-400 mb-2">0{idx + 1}</div>
                      <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] px-2.5 py-1 bg-[#fafafa] border border-zinc-200 rounded-md text-zinc-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between font-semibold text-sm text-zinc-950 group-hover:text-blue-600 transition-colors">
                        <span>View Architecture</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
            [ Next Project ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-8 leading-tight">
            Let&apos;s build something <span className="text-blue-600 font-normal italic">intelligent.</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-zinc-300 text-zinc-950 font-semibold text-base hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
            >
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
