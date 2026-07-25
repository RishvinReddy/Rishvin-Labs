"use client";

import React, { useState } from "react";
import { motion, type Variants } from "motion/react";
import { STUDIO_TECHNOLOGIES } from "@/data/technologies";
import { Terminal, Cpu, Database, Shield, Blocks, Cloud, CheckCircle2 } from "lucide-react";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "IoT & Hardware", "Security", "Blockchain", "AI & Cloud"];

  const filteredTech = activeCategory === "All"
    ? STUDIO_TECHNOLOGIES
    : STUDIO_TECHNOLOGIES.filter(t => t.category === activeCategory);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Frontend": return Terminal;
      case "Backend": return Database;
      case "IoT & Hardware": return Cpu;
      case "Security": return Shield;
      case "Blockchain": return Blocks;
      default: return Cloud;
    }
  };

  return (
    <section className="py-24 border-t border-white/10 bg-[#0a0b0f] relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>ENGINEERING ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mb-4">
            Modern Stack, Zero Compromises.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            We select tools for performance, security, and long-term maintainability—never for fleeting trends.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 font-semibold"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredTech.map((tech) => {
            const Icon = getCategoryIcon(tech.category);
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className={`p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                  tech.highlight
                    ? "bg-[#131722] border-blue-500/30 hover:border-blue-500/60 shadow-md shadow-blue-950/20"
                    : "bg-white/[0.02] border-white/5 hover:border-white/15"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    tech.highlight ? "bg-blue-500/10 text-blue-400" : "bg-white/5 text-slate-400 group-hover:text-white"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
                {tech.highlight && (
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom architecture assurance */}
        <div className="mt-12 text-center">
          <span className="font-mono text-xs text-slate-500">
            [ ARCHITECTURE COMPATIBILITY: NEXT.JS 16+ · REACT 19 · TAILWIND V4 · VERCEL EDGE ]
          </span>
        </div>

      </div>
    </section>
  );
}
