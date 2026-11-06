"use client";

import React from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/business/company";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function LinkedInConnectCta() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12 lg:p-16 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
              Connect & Collaborate
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white mb-4">
              Join the conversation.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Whether you are an engineering peer, startup founder, or enterprise team exploring bespoke technology development, follow our LinkedIn updates or start a direct conversation with our studio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={COMPANY.linkedinCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group text-center"
            >
              <span>Follow Rishvin Labs</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center"
            >
              <span>Contact Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
