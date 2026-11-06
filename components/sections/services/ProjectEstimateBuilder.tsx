"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  SERVICE_GROUPS,
  BUNDLED_PACKAGES,
  CUSTOMIZATION_ADDONS,
  CustomizationAddon,
} from "@/data/catalog/service-portfolio";
import {
  Calculator,
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  RotateCcw,
} from "lucide-react";

export function ProjectEstimateBuilder() {
  // Mode: Package vs Individual Group
  const [selectionMode, setSelectionMode] = useState<"package" | "group">("package");
  const [selectedPackageId, setSelectedPackageId] = useState<string>("business-starter");
  const [selectedGroupId, setSelectedGroupId] = useState<string>("quick-fixes");

  // Scope Tier
  const [scopeTier, setScopeTier] = useState<"basic" | "standard" | "advanced">("standard");

  // Selected Add-ons
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([
    "extra-page",
    "payment-gateway",
  ]);

  // Priority Rush toggle
  const [rushDelivery, setRushDelivery] = useState<boolean>(false);

  // Active base item
  const activePackage = useMemo(() => {
    return BUNDLED_PACKAGES.find((p) => p.id === selectedPackageId) || BUNDLED_PACKAGES[0];
  }, [selectedPackageId]);

  const activeGroup = useMemo(() => {
    return SERVICE_GROUPS.find((g) => g.id === selectedGroupId) || SERVICE_GROUPS[0];
  }, [selectedGroupId]);

  const groupMinPrice = activeGroup?.services[0]?.startingPrice || 300;
  const basePrice = selectionMode === "package" ? activePackage.startingPrice : groupMinPrice;
  const baseName = selectionMode === "package" ? activePackage.name : activeGroup.title;

  // Multiplier based on scope tier
  const tierMultiplier = scopeTier === "basic" ? 1.0 : scopeTier === "standard" ? 1.35 : 1.85;

  // Addons total
  const selectedAddons = useMemo(() => {
    return CUSTOMIZATION_ADDONS.filter((a) => selectedAddonIds.includes(a.id));
  }, [selectedAddonIds]);

  const addonsTotalInr = useMemo(() => {
    return selectedAddons.reduce((sum, a) => sum + a.numericStartingPrice, 0);
  }, [selectedAddons]);

  // Compute calculated estimate
  const subtotal = Math.round(basePrice * tierMultiplier) + addonsTotalInr;
  const rushFee = rushDelivery ? Math.round(subtotal * 0.35) : 0;
  const totalEstimateMin = subtotal + rushFee;
  const totalEstimateMax = Math.round(totalEstimateMin * 1.25);

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetEstimator = () => {
    setSelectionMode("package");
    setSelectedPackageId("business-starter");
    setScopeTier("standard");
    setSelectedAddonIds([]);
    setRushDelivery(false);
  };

  const isCustomQuoteTier = totalEstimateMin >= 30000;

  return (
    <section id="estimate-builder" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Scope & Cost Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-zinc-950">
              Build an Instant Project Estimate
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
              Configure your requirements, select specific capabilities, add specialized integrations, and receive an instant transparent pricing range derived directly from our authoritative pricebook.
            </p>
          </div>

          <button
            type="button"
            onClick={resetEstimator}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Estimator
          </button>
        </div>

        {/* Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Selection Mode */}
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-400">
                  Step 01 • Base Architecture
                </span>
                <div className="inline-flex p-1 bg-zinc-200/60 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setSelectionMode("package")}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                      selectionMode === "package"
                        ? "bg-white text-zinc-950 shadow-xs font-bold"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    Bundled Packages ({BUNDLED_PACKAGES.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectionMode("group")}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                      selectionMode === "group"
                        ? "bg-white text-zinc-950 shadow-xs font-bold"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    Individual Groups ({SERVICE_GROUPS.length})
                  </button>
                </div>
              </div>

              {selectionMode === "package" ? (
                <div>
                  <label className="block text-xs font-mono text-zinc-600 mb-2 font-medium">
                    Select Curated Package:
                  </label>
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full p-3 rounded-xl border border-zinc-200 bg-white text-sm font-sans text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    {BUNDLED_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} — From ₹{pkg.startingPrice.toLocaleString("en-IN")} ({pkg.targetAudience})
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-xs text-zinc-500">{activePackage.description}</p>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-mono text-zinc-600 mb-2 font-medium">
                    Select Specialized Service Group:
                  </label>
                  <select
                    value={selectedGroupId}
                    onChange={(e) => setSelectedGroupId(e.target.value)}
                    className="w-full p-3 rounded-xl border border-zinc-200 bg-white text-sm font-sans text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    {SERVICE_GROUPS.map((group) => {
                      const minPrice = group.services[0]?.startingPrice || 300;
                      return (
                        <option key={group.id} value={group.id}>
                          Group {group.number}: {group.title} — From ₹{minPrice.toLocaleString("en-IN")}
                        </option>
                      );
                    })}
                  </select>
                  <p className="mt-2 text-xs text-zinc-500">{activeGroup.description}</p>
                </div>
              )}
            </div>

            {/* Step 2: Complexity / Scope Tier */}
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-400 block mb-3">
                Step 02 • Complexity & Implementation Tier
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "basic",
                    title: "Standard Starter",
                    mult: "1.0x",
                    desc: "Core baseline deliverables, standard templates, single-environment setup.",
                  },
                  {
                    id: "standard",
                    title: "Enhanced Scope",
                    mult: "1.35x",
                    desc: "Custom layouts, responsive optimizations, refined animations, automated testing.",
                  },
                  {
                    id: "advanced",
                    title: "Production Custom",
                    mult: "1.85x",
                    desc: "High-scale engineering, custom architectural components, enterprise security.",
                  },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setScopeTier(tier.id as "basic" | "standard" | "advanced")}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      scopeTier === tier.id
                        ? "bg-white border-blue-600 shadow-sm ring-1 ring-blue-600/20"
                        : "bg-white/60 border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold text-zinc-900">
                        {tier.title}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                        {tier.mult}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-tight">{tier.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Customizations */}
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-400">
                  Step 03 • Optional Add-ons & Integrations ({selectedAddonIds.length} selected)
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  +₹{addonsTotalInr.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CUSTOMIZATION_ADDONS.map((addon: CustomizationAddon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-start justify-between gap-3 transition-all ${
                        isChecked
                          ? "bg-blue-50/70 border-blue-500/80 shadow-2xs"
                          : "bg-white border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-sans font-bold text-zinc-900">
                          {addon.name}
                        </div>
                        <div className="text-[10px] text-zinc-500 leading-tight mt-0.5 line-clamp-1">
                          {addon.description}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono font-bold text-blue-700 block">
                          {addon.indicativePrice}
                        </span>
                        <span
                          className={`inline-block mt-1 w-4 h-4 rounded-md border flex items-center justify-center ${
                            isChecked
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-zinc-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Rush Sprint Option */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 flex items-center justify-between gap-4">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-sans font-bold text-amber-950">
                    Priority Express Sprint (+35% base surcharge)
                  </div>
                  <div className="text-[11px] text-amber-800 leading-tight">
                    Expedited dedicated schedule, daily status check-in, priority testing lane.
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={rushDelivery}
                onChange={(e) => setRushDelivery(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Estimate Summary Panel (Right Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Specification Summary
                  </span>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    Live Calculation
                  </span>
                </div>

                {/* Estimate Amount Box */}
                <div className="py-6 border-b border-zinc-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    Estimated Indicative Investment
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-white">
                      ₹{totalEstimateMin.toLocaleString("en-IN")}
                    </span>
                    <span className="text-lg font-mono text-zinc-400">
                      – ₹{totalEstimateMax.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    Turnaround: {rushDelivery ? "Expedited schedule" : "Standard sprint window"}
                  </p>
                </div>

                {/* Breakdown List */}
                <div className="py-5 space-y-3 text-xs font-mono border-b border-zinc-800">
                  <div className="flex justify-between items-center text-zinc-300">
                    <span className="truncate pr-2">Base: {baseName}</span>
                    <span className="text-white font-semibold shrink-0">
                      ₹{basePrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-300">
                    <span>Complexity Multiplier ({scopeTier})</span>
                    <span className="text-zinc-400">{tierMultiplier}x</span>
                  </div>
                  {selectedAddons.length > 0 && (
                    <div className="pt-2 border-t border-zinc-800/60">
                      <span className="text-zinc-400 text-[11px] uppercase block mb-1.5">
                        Selected Add-ons ({selectedAddons.length}):
                      </span>
                      <ul className="space-y-1.5">
                        {selectedAddons.map((addon) => (
                          <li key={addon.id} className="flex justify-between text-zinc-300 text-[11px]">
                            <span className="truncate pr-2">• {addon.name}</span>
                            <span className="text-zinc-200 shrink-0">
                              +₹{addon.numericStartingPrice.toLocaleString("en-IN")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {rushDelivery && (
                    <div className="flex justify-between items-center text-amber-300 pt-1">
                      <span>Express Priority (+35%)</span>
                      <span>+₹{rushFee.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                </div>

                {/* Scope Guardrail Notice */}
                <div className="py-4">
                  {isCustomQuoteTier ? (
                    <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/60 text-purple-200 text-xs leading-relaxed flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>Custom Milestone Proposal Required:</strong> Projects exceeding ₹30,000 are delivered through structured multi-week sprints with dedicated milestones, formal SLA, and staging acceptance.
                      </div>
                    </div>
                  ) : (
                    <div className="text-[11px] font-sans text-zinc-400 leading-relaxed">
                      * Indicative pricing strictly covers custom engineering by Rishvin Labs. Third-party cloud hosting, domains, SaaS subscriptions, and messaging API costs are billed directly to client accounts.
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-zinc-800">
                <Link
                  href={`/contact?service=${selectionMode === "package" ? selectedPackageId : selectedGroupId}&estimate=₹${totalEstimateMin.toLocaleString("en-IN")}&addons=${selectedAddonIds.join(",")}`}
                  className="w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  Request Formal Written Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-2.5 text-center text-[10px] font-mono text-zinc-500">
                  Fixed-scope contract • 14-day warranty • Direct engineer contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
