"use client";

import React from "react";
import Link from "next/link";
import {
  ENGAGEMENT_MODELS,
  EngagementModelOption,
} from "@/data/catalog/service-portfolio";
import {
  ShieldAlert,
  FileText,
  CreditCard,
  RefreshCw,
  Server,
  ArrowRight,
} from "lucide-react";

export function PricingRulesPolicySection() {
  return (
    <section id="pricing-policy" className="py-20 md:py-28 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            Commercial Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Pricing Policy, Commercial Rules & Engagement Models
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            We believe client trust begins with radical pricing clarity. Here are the precise rules, payment
            structures, and operational policies governing all Rishvin Labs contracts.
          </p>
        </div>

        {/* 6 Engagement Models */}
        <div className="mb-20">
          <h3 className="text-xl font-sans font-bold text-white mb-6 flex items-center gap-2">
            <span>Engagement Models & Commercial Formats</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model: EngagementModelOption) => (
              <div
                key={model.id}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
                    {model.pricingModel}
                  </span>
                  <h4 className="text-lg font-sans font-bold text-white mb-2">
                    {model.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {model.description}
                  </p>
                  <div className="text-xs text-zinc-300">
                    <strong className="text-[11px] font-mono uppercase text-zinc-500 block mb-1">
                      Ideal For:
                    </strong>
                    <p className="text-zinc-400 leading-snug">{model.idealFor}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-0.5">
                    Payment Terms
                  </span>
                  <span className="text-xs font-mono font-medium text-emerald-400">
                    {model.paymentTerms}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Pillars of our Commercial Policy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-800">
          {/* Pillar 1: Scope Exclusions & Pass-Through Costs */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-sans font-bold text-white mb-3">
              1. Direct Third-Party Infrastructure Pass-Through
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Our service fees cover professional engineering, architecture, code authorship, testing, and deployment.
              They never artificially bundle or mark up third-party services:
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span><strong>Domains & DNS:</strong> Billed directly to client (Namecheap, Cloudflare, Route53).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span><strong>Cloud Hosting:</strong> Billed to client cloud account (Vercel, AWS, GCP, Supabase).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span><strong>AI Model Tokens & Inference:</strong> Billed to client OpenAI, Gemini, or Anthropic keys.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span><strong>WhatsApp & SMS:</strong> Meta Graph API, Twilio, or Gupshup usage fees paid directly.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Milestone Payment Schedule */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-sans font-bold text-white mb-3">
              2. Transparent Milestone Billing
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              We align payment checkpoints strictly with delivered milestones so you never pay upfront for unverified work:
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">01</span>
                <span><strong>Micro-tasks (under ₹5,000):</strong> 100% upon written confirmation or staging preview approval.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">02</span>
                <span><strong>Standard Projects (₹5,000 – ₹30,000):</strong> 50% mobilization deposit, 50% on final staging acceptance prior to DNS transfer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">03</span>
                <span><strong>Custom Milestone Engineering (₹30,000+):</strong> 30% kickoff, 30% core architecture staging demo, 40% production release.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Change Requests & Scope Drift */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-sans font-bold text-white mb-3">
              3. Scope Change & Variation Management
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Requirement changes during development are completely normal. Here is how we handle them smoothly:
            </p>
            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              Any feature request outside the agreed Statement of Work is documented in a quick Change Request (CR)
              specifying exact cost and turnaround impact. No surprise invoices, ever.
            </p>
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs font-mono text-emerald-400">
              ✓ Minor text/color tweaks during staging are complimentary.
            </div>
          </div>

          {/* Pillar 4: Post-Launch Warranty */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-sans font-bold text-white mb-3">
              4. 14-Day Post-Launch Defect Warranty
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Every fixed-scope project includes 14 calendar days of complimentary defect resolution:
            </p>
            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              If an edge-case bug, broken link, or layout regression arises that deviates from agreed specifications,
              we patch and redeploy it immediately at zero additional charge.
            </p>
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs font-mono text-zinc-400">
              * Applies to agreed deliverables; excludes modifications made by third-party contributors.
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-sans font-bold text-white">
              Have a complex requirement or custom RFP?
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Talk directly with a founding engineer. We review technical specifications within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0"
          >
            Start Technical Scoping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
