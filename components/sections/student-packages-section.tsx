"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { STUDENT_PACKAGES } from "@/data/catalog";
import { Check, ArrowRight, Zap, GraduationCap, Briefcase, Code2, Layers } from "lucide-react";
import { toUSD, formatINR } from "@/lib/currency";

export function StudentPackagesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="student-packages" className="py-24 bg-[#fafafa] border-t border-zinc-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>BUNDLED FOR SUCCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
            Student Packages
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Comprehensive kits for placements, internships, and massive project launches. 
            Don't just build a project—build your engineering presence.
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch"
        >
          {STUDENT_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all bg-white ${
                pkg.popular
                  ? "border-2 border-blue-600 shadow-xl scale-[1.02] z-10"
                  : "border border-zinc-200 hover:border-zinc-300 hover:shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-mono text-[10px] uppercase font-bold tracking-widest py-1 px-4 rounded-full shadow-md whitespace-nowrap">
                  Most Requested
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif font-bold text-zinc-950 tracking-tight">
                    {pkg.name}
                  </h3>
                  {pkg.id === "student-starter" && <GraduationCap className="w-5 h-5 text-blue-600" />}
                  {pkg.id === "portfolio-launch" && <Zap className="w-5 h-5 text-amber-500" />}
                  {pkg.id === "project-launch" && <Layers className="w-5 h-5 text-violet-500" />}
                  {pkg.id === "developer-presence" && <Briefcase className="w-5 h-5 text-emerald-500" />}
                  {pkg.id === "project-engineering-support" && <Code2 className="w-5 h-5 text-zinc-950" />}
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed min-h-[60px] mb-6">
                  {pkg.description}
                </p>

                <div className="pb-6 mb-6 border-b border-zinc-100 flex flex-col gap-1">
                  {pkg.pricing.type === "starting" && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Starting from</span>
                  )}
                  {pkg.pricing.type === "fixed" && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Fixed price</span>
                  )}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-mono text-zinc-400 font-bold">₹</span>
                    <span className="text-4xl font-mono font-black text-zinc-950 tracking-tight">
                      {formatINR(pkg.pricing.startingPrice)}
                    </span>
                    {pkg.pricing.advancedPrice && (
                      <>
                        <span className="text-xl font-medium text-zinc-400 mx-1">–</span>
                        <span className="text-xl font-bold font-mono text-zinc-950">
                          {formatINR(pkg.pricing.advancedPrice)}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-mono text-zinc-400 font-semibold">
                      {toUSD(pkg.pricing.startingPrice)}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-400 uppercase block">
                      {pkg.pricing.type === "monthly" ? "/ month" : "per package"}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-zinc-600">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`w-full py-4 rounded-xl font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all group ${
                  pkg.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900"
                }`}
              >
                <span>{pkg.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
