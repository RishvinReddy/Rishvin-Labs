import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { getPublishedMetrics } from "@/lib/business/metrics";
import { EngineeringMetrics } from "@/components/sections/engineering-metrics";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  BarChart3,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Engineering Results & Studio Verification | Rishvin Labs",
  description:
    "Documented engineering performance metrics, verified client milestones, and transparent revenue reporting guidelines for Rishvin Labs.",
  canonicalUrl: "https://rishvin-labs.vercel.app/results",
});

export default function ResultsPage() {
  const publishedMetrics = getPublishedMetrics();

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Results", url: "/results" },
        ]}
      />

      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 bg-white border-b border-zinc-200 text-left relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Studio Transparency &amp; Evidence Log</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-tight">
            Measurable <span className="text-blue-600 font-normal italic">Outcomes.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-sans mb-8">
            We believe engineering credibility is earned through empirical evidence, transparent business milestones, and documented operational benchmarks—not unsubstantiated marketing claims.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-100 font-mono text-xs text-zinc-500">
            <div>
              <span className="font-bold text-zinc-900">Operating Model: </span>
              Founder-Led Engineering
            </div>
            <div>
              <span className="font-bold text-zinc-900">Verification Basis: </span>
              Empirical Testbed &amp; Source Audit
            </div>
            <div>
              <span className="font-bold text-zinc-900">Last Reconciled: </span>
              October 2026
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS MILESTONES (PRIMARY METRICS) */}
      <section className="py-20 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              {"// SECTION_01_COMMERCIAL_DELIVERY"}
            </span>
            <h2 className="text-3xl font-serif font-bold text-zinc-950">
              Commercial Delivery Milestones
            </h2>
            <p className="text-zinc-600 text-base mt-2">
              Authoritative records of completed engagements and delivered systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {publishedMetrics.map((metric) => (
              <div
                key={metric.key}
                className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-600">
                      {metric.verificationStatus.replace("_", " ")}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="font-serif font-black text-4xl sm:text-5xl text-zinc-950 mb-2">
                    {metric.displayValue}
                  </div>
                  <h3 className="font-sans font-bold text-lg text-zinc-900 mb-3">
                    {metric.label}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
                {metric.auditNotes && (
                  <div className="pt-4 mt-6 border-t border-zinc-200 font-mono text-[10px] text-zinc-400">
                    {metric.auditNotes}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Revenue Reconciliation Notice — figure withheld until bank reconciliation is complete */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex items-start gap-4">
            <FileText className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
            <p className="text-zinc-600 text-sm leading-relaxed font-sans">
              <strong className="text-zinc-900">Revenue reporting:</strong>{" "}
              Cumulative commercial earnings are currently undergoing formal cash-basis reconciliation against bank statements, issued invoices, and customer receipts. The reconciled figure will be published here once independently verified. No unverified financial amount is disclosed on this page.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL INTELLIGENCE & BENCHMARKS */}
      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              {"// SECTION_02_TECHNICAL_INTELLIGENCE"}
            </span>
            <h2 className="text-3xl font-serif font-bold text-zinc-950">
              Verified Engineering Benchmarks
            </h2>
            <p className="text-zinc-600 text-base mt-2">
              Performance metrics measured under documented testing environments. Zero generic uptime or latency badges.
            </p>
          </div>

          <EngineeringMetrics showLinkToFullResults={false} />
        </div>
      </section>

      {/* 4. VERIFICATION LEVELS EXPLAINED */}
      <section className="py-20 px-6 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-8 text-center">
            Our Data Verification Hierarchy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">
                Level 01
              </span>
              <h3 className="font-bold text-zinc-950 text-base mb-2">Founder Reported</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Internal figures logged by the studio founder (client counts, project delivery records). Clearly labeled as preliminary until third-party confirmation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Level 02
              </span>
              <h3 className="font-bold text-zinc-950 text-base mb-2">Testbed Verified</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Technical metrics produced in reproducible laboratory conditions, such as local Hardhat gas benchmarks, ESP32 hardware timers, and Lighthouse CLI runs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-2">
                Level 03
              </span>
              <h3 className="font-bold text-zinc-950 text-base mb-2">Independently Audited</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Metrics validated by external counterparties (verified customer reviews with signed publication releases, bank statement audits, certified security reviews).
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact?source=results"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
            >
              <span>Commission an Engineering Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

