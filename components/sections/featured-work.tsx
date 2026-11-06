"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWork() {
  const featured = getFeaturedProjects();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Production Ready":
      case "Working Tool":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Working Prototype":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Research & PoC":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-zinc-100 text-zinc-700 border-zinc-200";
    }
  };

  return (
    <section id="work" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>[ FEATURED WORK ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950">
              Technical Case Studies.
            </h2>
            <p className="text-zinc-600 text-base mt-2 max-w-xl font-sans">
              Real systems engineered for verified business problems, backed by documented architecture and testbed metrics.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-200 shadow-xs transition-all w-fit"
          >
            <span>Explore All Systems</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#fafafa] rounded-3xl p-8 border border-zinc-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-200/60">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md border border-zinc-200 bg-white text-zinc-600 truncate max-w-[170px]">
                    {project.category}
                  </span>
                  <span
                    className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getStatusBadge(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="font-mono text-xs text-zinc-400 mb-1">0{idx + 1}</div>
                <h3 className="font-serif font-bold text-2xl text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-zinc-500 mb-4">
                  {project.subtitle}
                </div>

                <p className="font-sans text-sm text-zinc-600 leading-relaxed mb-8">
                  {project.problem}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-zinc-600 bg-white border border-zinc-200 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-zinc-200 flex items-center justify-between">
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-zinc-900 group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                  <div className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
