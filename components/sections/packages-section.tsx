"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { FLAGSHIP_PACKAGES } from "@/data/catalog";
import { Check, ArrowUpRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { toUSD, formatINR } from "@/lib/currency";

export function PackagesSection() {
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
    <section id="packages" className="py-28 border-t border-white/10 bg-[#0a0b0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>ENGAGEMENT MODELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-white mb-4">
            Transparent, Value-Driven Tiers.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Whether you are launching a startup MVP or fortifying an enterprise infrastructure, choose the engagement model tailored for your speed.
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch"
        >
          {FLAGSHIP_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative transition-all ${
                pkg.popular
                  ? "bg-gradient-to-b from-[#131722] to-[#0e1017] border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-[1.02]"
                  : "glass-panel hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-mono text-[10px] uppercase font-bold tracking-widest py-1 px-4 rounded-full shadow-lg">
                  MOST POPULAR SPRINT
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                    {pkg.name}
                  </h3>
                  {pkg.id === "mvp-launchpad" && <Zap className="w-5 h-5 text-amber-400" />}
                  {pkg.id === "enterprise-transformation" && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                  {pkg.id === "advisory-retainer" && <Sparkles className="w-5 h-5 text-blue-400" />}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-sans mb-6">
                  {pkg.description}
                </p>

                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="flex flex-col gap-1">
                    {pkg.pricing.type === "starting" && (
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Starting from</span>
                    )}
                    {pkg.pricing.type === "fixed" && (
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Fixed price</span>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-mono text-slate-400 font-bold">₹</span>
                      <span className="text-4xl sm:text-4xl font-mono font-black text-white tracking-tight">
                        {formatINR(pkg.pricing.startingPrice)}
                      </span>
                      {pkg.pricing.advancedPrice && (
                        <>
                          <span className="text-xl font-medium text-slate-400 mx-1">–</span>
                          <span className="text-xl font-bold font-mono text-white">
                            {formatINR(pkg.pricing.advancedPrice)}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      {toUSD(pkg.pricing.startingPrice)}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 uppercase block">
                      {pkg.pricing.type === "monthly" ? "/ month" : "per project"}
                    </span>
                  </div>

                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#contact"
                className={`w-full py-4 rounded-xl font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                  pkg.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                <span>{pkg.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

            </motion.div>
          ))}
        </motion.div>

        {/* Custom Bundles info link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-white transition-colors border-b border-dashed border-slate-700 pb-0.5"
          >
            <span>Need a custom student project, hackathon sponsorship, or academic training bundle? View Full Catalog →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
