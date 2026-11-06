"use client";

import React from "react";
import {
  Terminal,
  ShieldCheck,
  Search,
  Cpu,
  Boxes,
  Zap,
  Check,
  Layers,
} from "lucide-react";

interface DomainCard {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  focusAreas: string[];
  keyTools: string[];
}

const DOMAINS: DomainCard[] = [
  {
    number: "01",
    title: "Software Engineering",
    subtitle: "Architecture, Full-Stack & Systems",
    icon: Terminal,
    description:
      "Designing robust web and desktop systems with modern TypeScript, modular Next.js App Router patterns, resilient REST microservices, and strongly typed relational schemas.",
    focusAreas: [
      "Full-stack web architecture (Next.js, React, Node.js)",
      "Type-safe REST & microservice API design",
      "Relational schema modeling (PostgreSQL, Supabase)",
      "Component-driven design systems & state management",
      "Production deployment & CI/CD pipeline automation",
    ],
    keyTools: ["Next.js", "TypeScript", "React", "PostgreSQL", "Node.js", "Tailwind CSS", "Docker"],
  },
  {
    number: "02",
    title: "Cybersecurity",
    subtitle: "Defense, Hardening & Application Security",
    icon: ShieldCheck,
    description:
      "Engineering defensible software environments from ground zero. Proactive identification of OWASP vulnerabilities, strict multi-tenant access boundaries, and protocol-level hardening.",
    focusAreas: [
      "OWASP Top 10 vulnerability mitigation (SQLi, XSS, CSRF)",
      "Secure authentication & RBAC authorization models",
      "Brute-force mitigation & rate-limiting middleware",
      "Network protocol packet inspection (PCAP / Wireshark)",
      "Security header enforcement (CSP, HSTS, Permissions-Policy)",
    ],
    keyTools: ["Linux Hardening", "Wireshark", "Burp Suite", "OWASP ZAP", "OpenSSL", "WAF"],
  },
  {
    number: "03",
    title: "Digital Forensics & DFIR",
    subtitle: "Incident Response & Evidence Integrity",
    icon: Search,
    description:
      "Investigating security compromises, reconstructing digital timelines, analyzing file-system artefacts, and preserving evidentiary chains of custody with cryptographic integrity.",
    focusAreas: [
      "Digital artefact extraction & file-system metadata triage",
      "Incident response log analysis & timeline reconstruction",
      "Cryptographic hash chaining (SHA-256) for proof-of-state",
      "Volatile memory inspection & triage workflows",
      "Forensic investigation reporting & audit readiness",
    ],
    keyTools: ["Autopsy", "FTK Imager", "Volatility", "Sleuth Kit", "Log Analysis", "Python Forensics"],
  },
  {
    number: "04",
    title: "IoT & Embedded Systems",
    subtitle: "Hardware-Software Telemetry & Edge Nodes",
    icon: Cpu,
    description:
      "Bridging the physical and digital worlds. Prototyping microcontroller firmware, calibrating hardware sensors, and transmitting lightweight telemetry over MQTT to cloud dashboards.",
    focusAreas: [
      "ESP32 & Arduino C++ microcontroller firmware",
      "Low-overhead MQTT & WebSockets telemetry pipelines",
      "Analog & digital sensor integration (Ultrasonic, Temp, Motion)",
      "Hardware-software bridge & serial data acquisition",
      "Power-efficient edge computing & sleep cycle tuning",
    ],
    keyTools: ["ESP32", "C++ / Arduino", "MQTT / Mosquitto", "PlatformIO", "I2C / SPI", "Sensors"],
  },
  {
    number: "05",
    title: "Blockchain Engineering",
    subtitle: "Smart Contracts & Decentralized Integrity",
    icon: Boxes,
    description:
      "Leveraging immutable ledgers for decentralized verification. Writing secure Solidity smart contracts to notarize forensic timestamps and IoT sensor state transitions on EVM networks.",
    focusAreas: [
      "Solidity smart contract authoring & unit testing",
      "EVM development & local network simulation (Hardhat)",
      "Decentralized evidence notarization & proof-of-existence",
      "Gas optimization & re-entrancy attack defense",
      "Web3 frontend integration with Ethers.js & Wagmi",
    ],
    keyTools: ["Solidity", "Hardhat", "Ethers.js", "Foundry", "OpenZeppelin", "IPFS"],
  },
  {
    number: "06",
    title: "Automation & Applied AI",
    subtitle: "Workflows, Bot Systems & Integration",
    icon: Zap,
    description:
      "Connecting disparate tools and eliminating manual friction. Orchestrating multi-step webhook pipelines, Meta WhatsApp Cloud API bots, and structured local LLM inference.",
    focusAreas: [
      "Multi-system workflow automation with n8n & custom webhooks",
      "WhatsApp Business Cloud API conversational dispatchers",
      "Structured JSON extraction via Gemini & OpenAI APIs",
      "Automated operational data ETL & CRM synchronization",
      "Developer productivity tooling & headless scraping",
    ],
    keyTools: ["n8n", "WhatsApp Cloud API", "Python Scripts", "Gemini API", "Playwright", "Webhooks"],
  },
];

export function FounderDomains() {
  return (
    <section id="domains" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            Section 04 • Technical Specializations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Primary Engineering Domains
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Practical competencies developed through hands-on development, rigorous experimentation,
            and continuous delivery across six interconnected disciplines.
          </p>
        </div>

        {/* 6 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.number}
                className="bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-zinc-300 p-6 flex flex-col justify-between transition-all shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-blue-600 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-400">
                      Domain {domain.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-zinc-950 mb-1">
                    {domain.title}
                  </h3>
                  <span className="font-mono text-[11px] text-blue-600 font-semibold block mb-3">
                    {domain.subtitle}
                  </span>

                  <p className="text-xs text-zinc-600 font-sans leading-relaxed mb-5">
                    {domain.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="space-y-2 mb-6">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">
                      Core Focus:
                    </span>
                    <ul className="space-y-1.5">
                      {domain.focusAreas.map((focus, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-700 leading-snug">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Tools Badges */}
                <div className="pt-4 border-t border-zinc-200/80">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-400 block mb-2">
                    Toolchain:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {domain.keyTools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-zinc-700 border border-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

