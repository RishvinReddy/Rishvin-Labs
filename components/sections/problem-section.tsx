"use client";

import React from "react";
import { ArrowRight, AlertTriangle, Layers, RotateCcw } from "lucide-react";
import Link from "next/link";

export function ProblemSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-zinc-200">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 font-mono text-[11px] font-bold text-rose-900 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              <span>THE PROBLEM</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-tight">
              Your business shouldn&apos;t depend on <span className="italic text-rose-600 font-normal">disconnected tools.</span>
            </h2>
            
            <p className="text-zinc-600 text-lg leading-relaxed mb-8 font-sans">
              As companies scale, they patch together SaaS tools, manual spreadsheets, and generic templates. This creates data silos, operational friction, and slow execution. 
            </p>
            <p className="text-zinc-950 font-bold text-lg leading-relaxed mb-8 font-sans border-l-2 border-zinc-950 pl-4">
              We replace operational friction with engineered systems.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-950 mb-3">Off-the-shelf limits</h3>
              <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                Generic SaaS products force you to adapt your business logic to their software, not the other way around.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-950 mb-3">Data Silos</h3>
              <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                Important customer and operational data gets trapped across a dozen different applications that don&apos;t communicate.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 hover:shadow-lg transition-all group sm:col-span-2">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RotateCcw className="w-5 h-5 text-violet-500" />
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-950 mb-3">Manual Repetition</h3>
              <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                High-value team members spend hours on repetitive, automatable tasks like data entry, syncs, and reporting instead of focusing on growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
