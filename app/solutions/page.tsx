"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { solutions } from "@/data/solutions";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-50 text-zinc-950 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-zinc-200 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 font-mono text-[11px] font-bold text-emerald-700 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>BUSINESS OUTCOMES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 max-w-3xl leading-[1.05] mb-6">
            Stop buying software. Start engineering <span className="italic font-normal text-emerald-600">solutions.</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed mb-8">
            Identify the friction in your business operations. We build targeted, high-leverage systems to permanently resolve it.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-screen-2xl mx-auto flex flex-col gap-8">
          {solutions.map((sol, idx) => (
            <div key={sol.id} className="bg-white border border-zinc-200 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left: The Problem/Question */}
              <div className="lg:col-span-5 relative">
                <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  Problem 0{idx + 1}
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 leading-tight">
                  {sol.question}
                </h2>
              </div>

              {/* Middle: Arrow/Connector */}
              <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
                <div className="w-12 h-12 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 rotate-45" />
                </div>
              </div>

              {/* Right: The Outcome & Solution */}
              <div className="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h3 className="font-mono text-sm font-bold text-zinc-950 uppercase tracking-widest">
                    {sol.outcome}
                  </h3>
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  {sol.description}
                </p>
                <Link
                  href={sol.link}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Explore Engineering Specs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 mb-6">
            Don&apos;t see your problem listed?
          </h2>
          <p className="text-lg text-zinc-600 mb-10">
            We specialize in solving unique technical challenges. Let&apos;s discuss your specific operational bottlenecks.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-md group"
          >
            <span>Book a Technical Discovery</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
