"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, ExternalLink, MessageSquare } from "lucide-react";
import { COMPANY } from "@/lib/business/company";

export function FounderContactCta() {
  return (
    <section id="contact-founder" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6">
          <MessageSquare className="w-3.5 h-3.5" />
          Section 14 • Direct Correspondence
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 max-w-3xl mx-auto leading-tight">
          Interested in engineering, technology research, cybersecurity, or building something useful?
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed max-w-2xl mx-auto mb-10">
          I welcome direct conversations regarding software architecture, cybersecurity reviews,
          collaborative research, and production client engagements.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact?source=founder"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-2xl transition-all shadow-md group"
          >
            <span>Initiate Project Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href={`mailto:${COMPANY.founder.email}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-900 font-mono text-xs font-bold uppercase tracking-wider rounded-2xl hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-xs"
          >
            <Mail className="w-4 h-4 text-blue-600" />
            <span>Send Direct Email</span>
          </a>

          <a
            href={COMPANY.founder.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider rounded-2xl hover:bg-blue-100 transition-colors"
          >
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-8 text-xs font-mono text-zinc-400">
          Direct email: <a href={`mailto:${COMPANY.founder.email}`} className="text-zinc-600 hover:underline">{COMPANY.founder.email}</a> • Studio: <Link href="/services" className="text-blue-600 hover:underline">Rishvin Labs Catalogue</Link>
        </div>
      </div>
    </section>
  );
}

