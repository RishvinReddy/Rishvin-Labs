"use client";

import React from "react";
import {
  Terminal,
  ShieldCheck,
  Search,
  Cpu,
  Boxes,
  Zap,
  Layout,
  CheckCircle2,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Terminal,
    title: "Software Engineering",
    desc: "Robust full-stack platforms, high-throughput APIs, and modern Next.js/TypeScript architectures built for scale.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Hardening",
    desc: "Proactive threat modeling, OWASP vulnerability audits, Multi-Factor Authentication (2FA), and secure RBAC systems.",
  },
  {
    icon: Search,
    title: "Digital Forensics",
    desc: "System log reconstruction, compromised credential investigation, tamper-evident audit trails, and evidence preservation.",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Hardware",
    desc: "ESP32 and microcontroller firmware, real-time MQTT telemetry pipelines, and sensor-to-cloud interfaces.",
  },
  {
    icon: Boxes,
    title: "Blockchain & Cryptography",
    desc: "EVM-compatible smart contract engineering, cryptographic proof-of-state verification, and decentralized protocols.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    desc: "End-to-end webhook integrations, official WhatsApp Business API dispatchers, n8n orchestrations, and LLM workflows.",
  },
  {
    icon: Layout,
    title: "Product Development",
    desc: "From rapid 14-day prototype sprints to production SaaS dashboards, internal operating tools, and D2C storefronts.",
  },
];

export function LinkedInCompanyIntro() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
            About Rishvin Labs
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-6">
            Engineering practical technology for real business problems.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Rishvin Labs is a founder-led technology and engineering studio founded by Rishvin Reddy.
            We design, develop, and deliver custom software, digital products, secure web architectures,
            and intelligent connected systems. We operate with radical transparency, rigorous engineering hygiene,
            and zero vendor lock-in.
          </p>
        </div>

        {/* 7 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-zinc-950 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-sans font-bold text-base text-zinc-950">
              The Founder-Led Studio Advantage
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl">
              Clients work directly with practicing software architects and engineers—not account managers or junior delegates.
              Every repository is structured for long-term maintainability with comprehensive documentation and verified unit tests.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Direct Technical Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}

