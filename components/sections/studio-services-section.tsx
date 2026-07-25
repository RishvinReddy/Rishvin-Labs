"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Globe, Terminal, LayoutTemplate, Cpu, Shield, Radio, Blocks, MessageSquare, TrendingUp } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/catalog";
import { toUSD, formatINR } from "@/lib/currency";

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Terminal,
  LayoutTemplate,
  Cpu,
  Shield,
  Radio,
  Blocks,
  MessageSquare,
  TrendingUp,
};

export function StudioServicesSection() {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);

  return (
    <section className="py-24 px-6 bg-white border-t border-zinc-200">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: Category Nav */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
              Studio Services
            </h2>
            <p className="text-zinc-600 text-lg">
              Select a domain below to explore our tailored architecture and engineering solutions.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            {SERVICE_CATEGORIES.map(cat => {
              const Icon = ICON_MAP[cat.icon] || Globe;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all text-left ${
                    isActive 
                      ? "bg-zinc-50 border border-zinc-200 shadow-sm" 
                      : "hover:bg-zinc-50 border border-transparent"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-blue-600 text-white shadow-md" : "bg-white border border-zinc-200 text-zinc-600"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`font-bold text-base ${isActive ? "text-zinc-950" : "text-zinc-600"}`}>
                      {cat.title}
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                      {cat.description}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* RIGHT: Services Grid */}
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
              {SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.services.map((service, idx) => (
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
                      <span className="text-xs text-zinc-500 mt-1 block">
                        {service.pricing.type === "monthly" ? "/ month" : "/ project"}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {(service.features || []).map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                          </div>
                          <span className="text-sm text-zinc-700 font-medium">{feat}</span>
                        </div>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm text-zinc-900 font-mono text-xs font-bold uppercase tracking-wider text-center group-hover:bg-zinc-950 group-hover:text-white group-hover:border-transparent transition-all mt-auto"
                  >
                    [ Inquire Now ]
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
