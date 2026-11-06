import React from "react";
import { EngineeringMetrics } from "./engineering-metrics";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ResultsPreview() {
  return (
    <section id="results" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>[ MEASURED TELEMETRY ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950">
              Verified Engineering Intelligence.
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg mt-3 leading-relaxed font-sans">
              We evaluate systems through empirical benchmarks, laboratory testbeds, and production Core Web Vitals. Zero hypothetical or fabricated figures. Supporting evidence available on demand.
            </p>
          </div>

          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-200 shadow-xs transition-all w-fit hover:border-zinc-300"
          >
            <span>Full Verification Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Reusable Engineering Metrics Component */}
        <EngineeringMetrics showLinkToFullResults={true} />
      </div>
    </section>
  );
}
