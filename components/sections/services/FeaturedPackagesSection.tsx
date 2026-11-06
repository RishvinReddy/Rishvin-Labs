"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { BUNDLED_PACKAGES, BundledPackage } from "@/data/catalog/service-portfolio";

export function FeaturedPackagesSection() {
  const [activeTab, setActiveTab] = useState<"starter" | "expanded">("starter");

  const corePackages = BUNDLED_PACKAGES.filter((p) =>
    [
      "quick-fix",
      "launch-website",
      "portfolio-profile",
      "business-starter",
      "automation-starter",
      "seo-foundation",
      "storefront-starter",
      "internal-dashboard",
    ].includes(p.id)
  );

  const expandedPackages = BUNDLED_PACKAGES.filter(
    (p) => !corePackages.some((c) => c.id === p.id)
  );

  const displayedPackages = activeTab === "starter" ? corePackages : expandedPackages;

  return (
    <section id="packages" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Transparent Bundled Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-zinc-950">
              Curated Fixed-Scope Packages
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
              Every package is strictly bounded with unambiguous deliverables, base assumptions,
              and explicit exclusions so you know exactly what is delivered before writing a single line of code.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 bg-zinc-100 rounded-xl border border-zinc-200 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("starter")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                activeTab === "starter"
                  ? "bg-white text-zinc-950 shadow-xs border border-zinc-200/80"
                  : "text-zinc-500 hover:text-zinc-950"
              }`}
            >
              Essential Starters ({corePackages.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("expanded")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                activeTab === "expanded"
                  ? "bg-white text-zinc-950 shadow-xs border border-zinc-200/80"
                  : "text-zinc-500 hover:text-zinc-950"
              }`}
            >
              Advanced Bundles ({expandedPackages.length})
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPackages.map((pkg: BundledPackage) => {
            const isFeatured = pkg.badge === "POPULAR" || pkg.badge === "FLAGSHIP" || pkg.badge === "BEST VALUE";
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-2xl transition-all duration-200 p-6 ${
                  isFeatured
                    ? "bg-gradient-to-b from-blue-50/40 via-white to-white border-2 border-blue-500/70 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/20"
                    : "bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 hover:shadow-md"
                }`}
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs ${
                        pkg.badge === "FLAGSHIP"
                          ? "bg-blue-600 text-white"
                          : pkg.badge === "POPULAR"
                          ? "bg-zinc-900 text-white"
                          : "bg-emerald-600 text-white"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="pt-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                    {pkg.targetAudience}
                  </span>
                  <h3 className="text-xl font-sans font-bold text-zinc-950 mt-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-zinc-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-zinc-500 font-mono">Starting at</span>
                    <span className="text-3xl font-sans font-black tracking-tight text-zinc-950">
                      ₹{pkg.startingPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 text-[11px] font-mono text-zinc-500">
                    <span>{pkg.inclusions.length} Core Inclusions</span>
                    <span>•</span>
                    <span>Fixed Scope</span>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="mt-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-zinc-400 block mb-2.5">
                      Included In Scope
                    </span>
                    <ul className="space-y-2 mb-4">
                      {pkg.inclusions.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 leading-snug">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Exclusions Notice */}
                    {pkg.exclusions.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-zinc-100">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-zinc-400 block mb-1.5">
                          Scope Exclusions
                        </span>
                        <ul className="space-y-1">
                          {pkg.exclusions.slice(0, 2).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-[11px] text-zinc-400 leading-tight">
                              <X className="w-3 h-3 text-zinc-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col gap-2">
                    <Link
                      href={`/contact?service=${pkg.id}&type=package&budget=₹${pkg.startingPrice}`}
                      className={`w-full py-2.5 px-4 rounded-xl text-center text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                        isFeatured
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                          : "bg-zinc-950 text-white hover:bg-zinc-800"
                      }`}
                    >
                      {pkg.ctaLabel || "Book Package"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="#estimate-builder"
                      className="text-center text-[11px] font-mono text-zinc-500 hover:text-blue-600 transition-colors py-1"
                    >
                      Customize in Estimator →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote callout */}
        <div className="mt-12 p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-zinc-600">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Zero-Drift Inclusions:</strong> All package deliverables are delivered in production-ready condition with clean git repository transfer, basic README, and 14 days of post-handover warranty for defect fixes.
            </span>
          </div>
          <a
            href="#pricing-policy"
            className="text-blue-600 font-mono text-xs font-semibold hover:underline shrink-0"
          >
            Review Commercial Terms →
          </a>
        </div>
      </div>
    </section>
  );
}
