import React from "react";
import { getPublishedMetrics } from "@/lib/business/metrics";
import { CheckCircle2, ShieldCheck, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function BusinessCredibility() {
  const publishedMetrics = getPublishedMetrics();

  return (
    <section className="py-20 px-6 bg-white border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Evidence-Driven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950">
              Verified Studio Benchmarks
            </h2>
          </div>
          <Link
            href="/results"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-zinc-950 transition-colors"
          >
            <span>Inspect Verification Protocol</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {publishedMetrics.map((metric) => (
            <div
              key={metric.key}
              className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
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
                <h3 className="font-sans font-bold text-base text-zinc-900 mb-2">
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

        {/* Official Udyam MSME Registration Credibility Card */}
        <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6 hover:border-zinc-300 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700">
                  Official Registration Credential
                </span>
                <span className="font-mono text-xs font-semibold text-zinc-500">
                  UDYAM-TS-08-0110899
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-zinc-950 mb-1">
                Udyam Registered MSME · Government of India
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl">
                Rishvin Labs is officially registered under the Government of India&apos;s Ministry of Micro, Small and Medium Enterprises (MSME) framework (Class: Micro Enterprise · Services).
              </p>
            </div>
          </div>
          <Link
            href="/about#credentials"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 hover:text-blue-600 hover:border-blue-200 font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-2xs"
          >
            <span>View Credentials</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Revenue Reconciliation Notice — no figure disclosed until reconciliation complete */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
            <span className="text-zinc-600">
              <strong className="text-zinc-900">Revenue reporting: </strong>
              Cumulative commercial earnings are in formal cash-basis reconciliation. The verified figure will be published once independently reviewed.
            </span>
          </div>
          <Link
            href="/results"
            className="text-blue-600 hover:underline font-bold shrink-0 uppercase tracking-wider text-[11px]"
          >
            Review Audit Policy &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

