"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SERVICE_CATEGORIES } from "@/data/catalog";
import { ArrowUpRight, Globe, Terminal, LayoutTemplate, Cpu, Shield, Radio, Blocks, MessageSquare, Package, Workflow, Code2 } from "lucide-react";
import { formatINR } from "@/lib/currency";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  Terminal,
  LayoutTemplate,
  Cpu,
  Shield,
  Radio,
  Blocks,
  MessageSquare,
  Package,
  Workflow,
  Code2
};

export function ServicesPreview() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-zinc-200 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 max-w-xl">
              Core Studio Engineering Offerings.
            </h2>
          </div>
          <p className="text-zinc-600 text-base max-w-md font-sans">
            We do not use cookie-cutter templates. Every system is architected from the ground up for speed, security, and scalability.
          </p>
        </div>

        {/* Services Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const IconComponent = ICON_MAP[cat.icon] || Globe;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white hover:bg-zinc-50 p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Top Corner Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-400 group-hover:text-blue-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-zinc-950 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed font-sans mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Service Items List & Explore Link */}
                <div className="pt-4 border-t border-zinc-100">
                  <div className="space-y-2 mb-6">
                    {cat.services.slice(0, 2).map((svc) => (
                      <div key={svc.name} className="flex items-center justify-between text-xs font-mono text-zinc-600">
                        <span className="truncate pr-2">• {svc.name}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services#${cat.id}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-zinc-500 group-hover:text-blue-600 transition-colors uppercase"
                  >
                    <span>EXPLORE_SPECS()</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
