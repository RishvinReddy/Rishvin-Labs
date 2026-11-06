"use client";

import React from "react";
import { PlusCircle, Clock } from "lucide-react";
import { CUSTOMIZATION_ADDONS, CustomizationAddon } from "@/data/catalog/service-portfolio";

export function AddonsPricingSection() {
  return (
    <section id="addons" className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <PlusCircle className="w-3.5 h-3.5" />
            Transparent Scope Modifiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-zinc-950">
            A La Carte Customization Add-ons
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Need an extra route, a third-party payment integration, or transactional messaging?
            Add pre-costed engineering units to any base service or bundled package without ambiguity or hidden fees.
          </p>
        </div>

        {/* Addons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMIZATION_ADDONS.map((addon: CustomizationAddon) => (
            <div
              key={addon.id}
              className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">
                    MODIFIER
                  </span>
                  <span className="text-xs font-mono font-medium text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Turnaround Impact
                  </span>
                </div>

                <h3 className="text-lg font-sans font-bold text-zinc-950 mb-1.5">
                  {addon.name}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  {addon.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Fixed Price
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-sans font-black text-zinc-950">
                      {addon.indicativePrice}
                    </span>
                  </div>
                </div>

                <a
                  href="#estimate-builder"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 transition-colors py-1 px-2.5 rounded-lg hover:bg-blue-50"
                >
                  Add in Builder →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
