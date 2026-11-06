"use client";

import React from "react";
import { Award, FileText, ExternalLink, ShieldCheck } from "lucide-react";
import { RishvinStamp } from "@/components/shared/RishvinStamp";
import { RishvinSignature } from "@/components/shared/RishvinSignature";
import { COMPANY } from "@/lib/business/company";

export function FounderInnovation() {
  return (
    <section id="innovation" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            Section 08 • Intellectual Property &amp; Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Innovation, Registered IP &amp; Governance
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Verifiable intellectual property, official design registrations, and authenticated studio governance.
            Every claim is backed by official government registration documentation.
          </p>
        </div>

        {/* IP Highlight Card: Registered Design */}
        <div className="bg-gradient-to-br from-zinc-50 via-white to-zinc-50 rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-zinc-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-mono font-bold tracking-wider uppercase mb-3">
                <FileText className="w-3.5 h-3.5 text-blue-700" />
                <span>OFFICIAL INTELLECTUAL PROPERTY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
                Government of India Registered Design
              </h3>
              <div className="font-mono text-sm text-zinc-600 mt-1">
                Design Registration No: <strong className="text-zinc-950">{COMPANY.founder.patentNumber}</strong>
              </div>
            </div>

            <a
              href={COMPANY.founder.patentCertificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors shrink-0 shadow-sm"
            >
              <span>View Official Certificate (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-zinc-700">
            <div className="md:col-span-2 space-y-3">
              <p className="leading-relaxed text-zinc-600">
                Officially granted and registered under the <strong>Designs Act, 2000</strong> by the Patent Office, Government of India. Represents original structural and industrial design engineering authored by Erolla Rishvin Reddy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs text-zinc-500 pt-2">
                <span>• Granting Authority: The Patent Office, India</span>
                <span>• Status: Officially Registered &amp; In Force</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-100/70 border border-zinc-200 text-xs text-zinc-600">
              <strong className="font-mono text-[10px] uppercase text-zinc-400 block mb-1">
                Factual Scope Note:
              </strong>
              This credential represents an official Government of India Registered Design for novel industrial configuration, accurately distinguished from an invention utility patent.
            </div>
          </div>
        </div>

        {/* Studio Authentication & Signature Seal */}
        <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>OFFICIAL STUDIO VERIFICATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Authenticated Authorship &amp; Governance
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg leading-relaxed font-sans">
              All architectural blueprints, cryptographic frameworks, and software deliverables authored under Rishvin Labs are designed and authenticated by founder Erolla Rishvin Reddy under the studio seal.
            </p>
            <div className="pt-2 flex flex-col items-center md:items-start gap-1">
              <div className="w-56 max-w-full text-zinc-200">
                <RishvinSignature className="w-full text-zinc-200" />
              </div>
              <div className="font-mono text-[11px] text-zinc-500">
                Erolla Rishvin Reddy • Founder &amp; Lead Engineer
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center">
            <a
              href="/rishvin-labs-stamp.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white border border-zinc-200 p-2 shadow-sm flex items-center justify-center hover:scale-105 transition-transform group"
              title="View Official Rishvin Labs Stamp (Full Resolution Original SVG)"
            >
              <RishvinStamp className="w-full h-auto" size={170} />
            </a>
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase mt-2">
              SEAL NO. RL-2024-IN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
