"use client";

import React from "react";
import Link from "next/link";
import { Check, Clock, ArrowRight, HeartHandshake } from "lucide-react";
import { MAINTENANCE_PLANS, MaintenancePlan } from "@/data/catalog/service-portfolio";

export function MaintenancePlansSection() {
  return (
    <section id="maintenance-plans" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            Post-Launch Peace of Mind
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-zinc-950">
            Monthly Continuous Care & Engineering Retainers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Software isn&apos;t static. Prevent dependency rot, security regressions, broken third-party APIs,
            and SSL lapses with dedicated engineering hours reserved exclusively for your production stack.
          </p>
        </div>

        {/* Retainer Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MAINTENANCE_PLANS.map((plan: MaintenancePlan) => {
            const isFeatured = plan.popular || plan.id === "standard-care";
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? "bg-gradient-to-b from-blue-50/50 via-white to-white border-2 border-blue-600 shadow-xl shadow-blue-500/5 ring-1 ring-blue-600/20"
                    : "bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 hover:shadow-md"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                      RECOMMENDED FOR SMBS
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-sans font-bold text-zinc-950">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    {plan.description}
                  </p>

                  <div className="mt-6 pb-6 border-b border-zinc-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-sans font-black tracking-tight text-zinc-950">
                        ₹{plan.monthlyPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase">
                        / month
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-xs font-mono text-zinc-600">
                      <span className="font-semibold text-blue-600">
                        {plan.hoursAllowance} Included / mo
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-zinc-400" />
                        {plan.responseWindow}
                      </span>
                    </div>
                  </div>

                  {/* Included Scope */}
                  <div className="mt-6">
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-400 block mb-3">
                      Monthly Routine Deliverables
                    </span>
                    <ul className="space-y-2.5">
                      {plan.includedTasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-snug">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <Link
                    href={`/contact?service=${plan.id}&type=retainer&budget=₹${plan.monthlyPrice}/mo`}
                    className={`w-full py-3 px-4 rounded-xl text-center text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        : "bg-zinc-950 text-white hover:bg-zinc-800"
                    }`}
                  >
                    Select {plan.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <p className="mt-2 text-center text-[10px] font-mono text-zinc-400">
                    Unused monthly hours roll over up to 30 days. No long-term lock-in.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
