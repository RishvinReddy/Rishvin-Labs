"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Globe, Terminal, LayoutTemplate, Cpu, Shield, Radio, Blocks, MessageSquare, GraduationCap, Code2, Award, Briefcase, BookOpen } from "lucide-react";
import { STUDENT_CATEGORIES } from "@/data/catalog";
import { toUSD, formatINR } from "@/lib/currency";

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Code2,
  Globe,
  Terminal,
  LayoutTemplate,
  Cpu,
  Shield,
  Radio,
  Blocks,
  MessageSquare,
  Award,
  Briefcase,
  BookOpen
};

export function StudentServicesSection() {
  const [activeCategory, setActiveCategory] = useState(STUDENT_CATEGORIES[0].id);

  return (
    <section className="py-24 px-6 bg-white border-t border-zinc-200">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: Category Nav */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
              Technical Support
            </h2>
            <p className="text-zinc-600 text-lg">
              Targeted engineering support, debugging, and career guidance sessions.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            {STUDENT_CATEGORIES.map(cat => {
              const TabIcon = ICON_MAP[cat.icon] || Globe;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-start gap-4 p-4 rounded-2xl text-left transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#fafafa] border border-zinc-200 shadow-sm"
                      : "hover:bg-zinc-50 border border-transparent"
                  }`}
                >
                  <div className={`mt-0.5 shrink-0 ${activeCategory === cat.id ? "text-blue-600" : "text-zinc-400"}`}>
                    <TabIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold font-serif text-lg mb-1 ${activeCategory === cat.id ? "text-zinc-950" : "text-zinc-600"}`}>
                      {cat.title}
                    </h3>
                    <p className={`text-sm ${activeCategory === cat.id ? "text-zinc-600" : "text-zinc-400"}`}>
                      {cat.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Content Area */}
        <div className="w-full lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {STUDENT_CATEGORIES.find(c => c.id === activeCategory)?.services.map((service, idx) => (
                <div 
                  key={idx}
                  className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-600 transition-all flex flex-col group relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-bl-xl font-bold shadow-md">
                      Most Requested
                    </div>
                  )}
                  
                  <div className="mb-6 flex-1">
                    <h3 className="text-xl font-bold font-serif text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-zinc-500 mb-6 min-h-[40px] leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="mb-6 pb-6 border-b border-zinc-200/60 flex flex-col gap-1">
                      {service.pricing.type === "starting" && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Starting from</span>
                      )}
                      {service.pricing.type === "fixed" && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Fixed price</span>
                      )}
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-mono text-sm font-bold text-zinc-400">₹</span>
                        <span className="text-3xl font-black font-serif text-zinc-950 tracking-tight">
                          {formatINR(service.pricing.startingPrice)}
                        </span>
                        {service.pricing.advancedPrice && (
                          <>
                            <span className="text-xl font-medium text-zinc-400 mx-1">–</span>
                            <span className="text-xl font-bold font-serif text-zinc-950">
                              {formatINR(service.pricing.advancedPrice)}
                            </span>
                          </>
                        )}
                        <span className="text-xs font-mono text-zinc-400 ml-1 font-semibold">
                          {toUSD(service.pricing.startingPrice)}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-500 mt-1 block">/ session</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {service.features?.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?service=${service.id}&source=students`}
                    className="w-full py-4 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <span>[ INQUIRE NOW ]</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
