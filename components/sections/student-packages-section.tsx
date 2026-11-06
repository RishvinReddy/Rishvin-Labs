"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { STUDENT_PACKAGES, STUDENT_PRICING_POLICY } from "@/data/catalog";
import { 
  Check, 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  Ban,
  Info
} from "lucide-react";
import { toUSD, formatINR } from "@/lib/currency";

const PACKAGE_ICONS: Record<string, React.ElementType> = {
  "student-starter": GraduationCap,
  "developer-launch": Terminal,
  "portfolio-career-launch": Briefcase,
  "project-engineering-pack": Layers,
  "fullstack-developer-pack": Code2,
  "cybersecurity-practitioner-pack": ShieldCheck,
  "iot-prototype-pack": Cpu,
  "advanced-engineering-pack": Sparkles,
};

export function StudentPackagesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="student-packages" className="py-24 bg-[#fafafa] border-t border-zinc-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>CURATED STUDENT ENGINEERING PACKAGES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-tight">
            Structured Programs. Fixed Defined Scope.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Eight comprehensive packages engineered for portfolio launches, competitive placements, and capstone systems. Each package defines explicit deliverables, scope boundaries, and fixed transparent pricing.
          </p>
        </div>

        {/* Packages Grid: Balanced 4-Column Layout on Desktop (2 rows of 4) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {STUDENT_PACKAGES.map((pkg) => {
            const IconComponent = PACKAGE_ICONS[pkg.id] || Code2;

            return (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                className={`rounded-3xl p-7 flex flex-col justify-between relative transition-all bg-white border ${
                  pkg.popular
                    ? "border-blue-600 shadow-lg ring-1 ring-blue-600/20"
                    : "border-zinc-200 hover:border-zinc-300 hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-mono text-[9px] uppercase font-bold tracking-widest py-1 px-3.5 rounded-full shadow-sm whitespace-nowrap">
                    Most Requested Track
                  </div>
                )}

                <div>
                  {/* Top Bar: Name & Icon */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-blue-600 tracking-wider block mb-1">
                        Package {pkg.id.replace("-pack", "").replace("-", " ")}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-zinc-950 tracking-tight leading-snug">
                        {pkg.name}
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Target Audience Badge */}
                  {pkg.targetAudience && (
                    <div className="mb-4">
                      <span className="inline-block text-[11px] font-sans font-medium text-zinc-600 bg-zinc-100/80 px-2.5 py-1 rounded-lg leading-relaxed">
                        {pkg.targetAudience}
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-zinc-500 leading-relaxed mb-6 min-h-[44px]">
                    {pkg.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="pb-5 mb-5 border-b border-zinc-100 flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600">
                      Fixed Package Scope
                    </span>

                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-mono text-zinc-400 font-bold">₹</span>
                      <span className="text-3xl sm:text-4xl font-mono font-black text-zinc-950 tracking-tight">
                        {formatINR(pkg.pricing.startingPrice)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-1 text-[11px] font-mono text-zinc-400">
                      <span>{toUSD(pkg.pricing.startingPrice)}</span>
                      <span className="uppercase">one-time / fixed</span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-5">
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-2.5">
                      Included Deliverables
                    </span>
                    <ul className="space-y-2">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-snug">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  {pkg.exclusions && pkg.exclusions.length > 0 && (
                    <div className="mb-6 pt-3 border-t border-zinc-100">
                      <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 flex items-center gap-1.5 mb-2">
                        <Ban className="w-3 h-3 text-zinc-400" />
                        <span>Scope Exclusions</span>
                      </span>
                      <ul className="space-y-1.5">
                        {pkg.exclusions.map((exc) => (
                          <li key={exc} className="text-[11px] text-zinc-500 leading-snug pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-zinc-400">
                            {exc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/contact?service=${pkg.id}&source=students`}
                  className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all group mt-2 shadow-xs ${
                    pkg.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20"
                      : "bg-zinc-950 hover:bg-blue-600 text-white"
                  }`}
                >
                  <span>{pkg.ctaLabel || "Select Package"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pricing Policy Disclaimer Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-zinc-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Transparent Scope Policy:</strong> {STUDENT_PRICING_POLICY.disclaimer}
            </p>
          </div>
          <Link
            href="/contact?source=students-custom"
            className="text-blue-600 hover:text-blue-800 font-bold whitespace-nowrap shrink-0"
          >
            Need Custom Scope? Get a Quote &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
