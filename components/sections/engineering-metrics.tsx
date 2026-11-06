"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ENGINEERING_METRICS,
  TechnicalDomain,
  TechnicalMetric,
} from "@/lib/business/engineering-metrics";
import { 
  CheckCircle2, 
  FlaskConical, 
  Layers, 
  ChevronDown, 
  ArrowUpRight 
} from "lucide-react";

interface EngineeringMetricsProps {
  initialDomain?: TechnicalDomain | "All";
  showLinkToFullResults?: boolean;
}

export function EngineeringMetrics({
  initialDomain = "All",
  showLinkToFullResults = true,
}: EngineeringMetricsProps) {
  const [selectedDomain, setSelectedDomain] = useState<TechnicalDomain | "All">(initialDomain);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const domains: (TechnicalDomain | "All")[] = [
    "All",
    "Application Performance",
    "IoT & Telemetry",
    "Security & Code Quality",
  ];

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const metrics: TechnicalMetric[] =
    selectedDomain === "All"
      ? ENGINEERING_METRICS
      : ENGINEERING_METRICS.filter((m) => m.domain === selectedDomain);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {domains.map((d) => {
          const count = d === "All" 
            ? ENGINEERING_METRICS.length 
            : ENGINEERING_METRICS.filter((m) => m.domain === d).length;
          const isSelected = selectedDomain === d;

          return (
            <button
              key={d}
              type="button"
              onClick={() => setSelectedDomain(d)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                isSelected
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900"
              }`}
            >
              <span>{d}</span>
              <span className={`ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                isSelected ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-500"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Metrics Grid */}
      {metrics.length === 0 ? (
        <div className="py-16 text-center bg-white border border-zinc-200 rounded-3xl p-8">
          <p className="text-zinc-500 font-sans text-sm">
            No verified benchmarks logged under this category yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((item) => {
            const isExpanded = expandedIds.has(item.id);
            const isMeasured = item.verificationStatus === "measured";

            return (
              <div
                key={item.id}
                className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:border-zinc-300 transition-all group duration-200"
              >
                <div>
                  {/* Top: Category & Verification Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5 pb-3.5 border-b border-zinc-100">
                    <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest truncate max-w-[170px]">
                      {item.domain}
                    </span>
                    
                    {isMeasured ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>MEASURED</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                        <FlaskConical className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>TESTBED VERIFIED</span>
                      </span>
                    )}
                  </div>

                  {/* Middle: Metric Value & Title */}
                  <div className="font-mono text-4xl sm:text-5xl font-black text-zinc-950 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.displayValue}
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-zinc-900 mb-2 leading-snug">
                    {item.metricName}
                  </h3>

                  {item.interpretation && (
                    <p className="text-xs text-zinc-500 font-sans leading-relaxed mb-4">
                      {item.interpretation}
                    </p>
                  )}
                </div>

                {/* Bottom: Project Association & Measurement Details Toggle */}
                <div className="pt-4 mt-2 border-t border-zinc-100">
                  <div className="font-mono text-xs text-zinc-600 mb-3 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="truncate">{item.projectAssociation}</span>
                  </div>

                  {/* Expandable Control */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`metric-details-${item.id}`}
                    className="w-full flex items-center justify-between py-2 text-xs font-mono font-medium text-zinc-500 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg cursor-pointer pt-2 border-t border-zinc-100/70"
                  >
                    <span>{isExpanded ? "Hide measurement details" : "View measurement details"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180 text-blue-600" : "text-zinc-400"}`} />
                  </button>

                  {/* Evidence Drawer */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`metric-details-${item.id}`}
                        role="region"
                        aria-label={`Measurement details for ${item.metricName}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="pt-3 border-t border-zinc-100 overflow-hidden"
                      >
                        <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-4 space-y-2.5 text-xs font-sans">
                          {item.testingEnvironment && (
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                              <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider shrink-0 sm:w-24">
                                Testbed:
                              </span>
                              <span className="text-zinc-700 leading-relaxed font-sans">
                                {item.testingEnvironment}
                              </span>
                            </div>
                          )}

                          {item.sampleSize && (
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                              <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider shrink-0 sm:w-24">
                                Sample:
                              </span>
                              <span className="text-zinc-700 leading-relaxed font-sans">
                                {item.sampleSize}
                              </span>
                            </div>
                          )}

                          {item.methodology && (
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                              <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider shrink-0 sm:w-24">
                                Method:
                              </span>
                              <span className="text-zinc-700 leading-relaxed font-sans">
                                {item.methodology}
                              </span>
                            </div>
                          )}

                          {item.measurementDate && (
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                              <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider shrink-0 sm:w-24">
                                Date:
                              </span>
                              <span className="font-mono text-zinc-700">
                                {item.measurementDate}
                              </span>
                            </div>
                          )}

                          {item.evidenceSource && (
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                              <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider shrink-0 sm:w-24">
                                Evidence:
                              </span>
                              <span className="text-zinc-700 leading-relaxed font-sans">
                                {item.evidenceSource}
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showLinkToFullResults && (
        <div className="mt-12 text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-zinc-950 transition-colors group"
          >
            <span>View Full Engineering &amp; Commercial Results Dashboard</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
