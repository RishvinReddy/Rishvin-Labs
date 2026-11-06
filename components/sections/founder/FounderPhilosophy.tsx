"use client";

import React from "react";
import { Compass, Shield, Terminal, CheckCircle2, FileText, Wrench, Eye } from "lucide-react";

interface PhilosophyPrinciple {
  number: string;
  title: string;
  icon: React.ElementType;
  statement: string;
  explanation: string;
}

const PRINCIPLES: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Systems Over Features",
    icon: Terminal,
    statement: "Build cohesive, observable systems—not isolated, fragile features.",
    explanation:
      "A feature added without consideration for state lifecycle, error boundaries, and relational consistency becomes technical debt on day one. Engineering demands understanding how every component interacts under stress.",
  },
  {
    number: "02",
    title: "Security by Default",
    icon: Shield,
    statement: "Security is an architectural foundation, never an afterthought.",
    explanation:
      "Bolting security onto an insecure design post-deployment is futile. Defensive engineering starts with strict input validation schemas, least-privilege RBAC, encrypted credentials, and automated vulnerability scanning in CI/CD.",
  },
  {
    number: "03",
    title: "Empirical Reliability",
    icon: Eye,
    statement: "Reliability requires automated testing, telemetry, and observability.",
    explanation:
      "Hope is not a deployment strategy. If a system's behavior cannot be verified through automated tests, monitored through structured logs, or reproduced in a staging sandbox, it cannot be deemed reliable.",
  },
  {
    number: "04",
    title: "Balanced Maintainability",
    icon: Wrench,
    statement: "Good engineering balances user elegance with code maintainability.",
    explanation:
      "Clever code that only the original author understands is a liability. Software should be written clearly, typed strictly, and structured so that another engineer can debug and extend it with confidence six months later.",
  },
  {
    number: "05",
    title: "Living Documentation",
    icon: FileText,
    statement: "Documentation is a first-class engineering deliverable.",
    explanation:
      "An API without documentation is incomplete. A database schema without entity-relationship context is a trap. Clear READMEs, environment runbooks, and schema comments are just as essential as the application logic.",
  },
  {
    number: "06",
    title: "Real Problem Solving",
    icon: Compass,
    statement: "Technology exists to solve real human and operational problems.",
    explanation:
      "Adopting new frameworks or complex distributed primitives simply because they are trending is wasteful. The best engineering decision is often the simplest, most boring architecture that reliably solves the problem.",
  },
  {
    number: "07",
    title: "Verifiable Evidence",
    icon: CheckCircle2,
    statement: "Prefer verifiable technical evidence over exaggerated claims.",
    explanation:
      "In an industry saturated with hype, credibility is earned through open-source code, reproducible benchmarks, honest developmental statuses, and transparent commercial contracts.",
  },
];

export function FounderPhilosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            Section 09 • First Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Engineering Philosophy &amp; Principles
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            The core tenets that guide every architectural decision, line of code, and client engagement
            delivered under Rishvin Labs.
          </p>
        </div>

        {/* 7 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRINCIPLES.map((p, idx) => {
            const Icon = p.icon;
            const isFullWidth = idx === PRINCIPLES.length - 1;
            return (
              <div
                key={p.number}
                className={`bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all ${
                  isFullWidth ? "md:col-span-2 bg-gradient-to-r from-blue-50/50 via-white to-white border-blue-200/80" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-400">
                      Principle {p.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-zinc-950 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono font-semibold text-blue-700 mb-3 leading-snug">
                    &ldquo;{p.statement}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                    {p.explanation}
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

