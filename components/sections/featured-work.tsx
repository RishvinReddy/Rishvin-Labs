"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  const displayProjects = projects.slice(0, 3);

  return (
    <section id="work" className="py-24 bg-white border-t border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>[ FEATURED SYSTEMS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950">
              Technical Case Studies.
            </h2>
          </div>
          
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-200 shadow-sm transition-all w-fit"
          >
            <span>VIEW_ALL_SYSTEMS()</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Bar */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50 text-blue-600">
                      {project.category}
                    </span>
                    <div className="font-mono text-[10px] font-bold text-zinc-500 bg-white px-2.5 py-1 rounded-lg border border-zinc-200">
                      {project.status}
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-zinc-600 leading-relaxed mb-8">
                    {project.solution}
                  </p>
                </div>

                {/* Bottom Bar: Tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] text-zinc-500 bg-white border border-zinc-200 px-2.5 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-zinc-200 flex items-center justify-between">
                    <Link
                      href={project.link || `/work`}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-zinc-900 group-hover:text-blue-600 transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                    <div className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
