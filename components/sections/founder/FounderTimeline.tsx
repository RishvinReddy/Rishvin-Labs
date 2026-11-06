"use client";

import React from "react";
import { Milestone } from "lucide-react";

interface TimelineMilestone {
  period: string;
  phase: string;
  title: string;
  description: string;
  technologies: string[];
}

const MILESTONES: TimelineMilestone[] = [
  {
    period: "2024",
    phase: "Academic Scaffolding",
    title: "Computer Science & Engineering Foundation",
    description:
      "Commenced B.Tech in CSE at Woxsen University (Class of 2028) with specialization in Blockchain, IoT, and Cybersecurity. Maintained academic rigor achieving a 9.01/10 cumulative grade point average.",
    technologies: ["C++", "Data Structures", "Algorithms", "Computer Organization", "Linux"],
  },
  {
    period: "2024",
    phase: "Hardware-Software Bridges",
    title: "Exploring Connected Systems & IoT Telemetry",
    description:
      "Began designing embedded sensor networks utilizing ESP32 microcontrollers. Prototyped real-time telemetry streaming over MQTT and engineered automated municipal waste monitoring (SmartBin).",
    technologies: ["ESP32", "C++ / Arduino", "MQTT", "Sensor Calibration", "Serial Protocols"],
  },
  {
    period: "2024 – 2025",
    phase: "Production Systems",
    title: "Expanding into Modern Full-Stack Software",
    description:
      "Transitioned from hardware-focused scripts to production web platforms. Adopted Next.js App Router, typed TypeScript, PostgreSQL, and designed resilient REST microservices with zero-drift schemas.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
  },
  {
    period: "2025",
    phase: "Security Engineering",
    title: "Application Hardening & Digital Forensics (DFIR)",
    description:
      "Deepened practical focus on defensive cybersecurity. Built browser-based network protocol inspection tools (NetInspect) and modular forensic incident triage environments (ForensiX).",
    technologies: ["OWASP Top 10", "Network PCAP", "Auth / RBAC", "Log Analysis", "Evidence Integrity"],
  },
  {
    period: "2025",
    phase: "Decentralized Protocols",
    title: "Blockchain State & Cryptographic Verification",
    description:
      "Engineered Solidity smart contracts on EVM testbeds to guarantee tamper-proof IoT sensor logs and audit trails, leading to the ChainForensics proof-of-concept.",
    technologies: ["Solidity", "EVM", "Hardhat", "Cryptographic Hashing", "Smart Contracts"],
  },
  {
    period: "2025 – 2026",
    phase: "Product R&D",
    title: "Building Air-Gapped & Workflow Solutions",
    description:
      "Architected PrismTransfer (optical air-gapped animated QR file transfer) and WBOS (WhatsApp Business automation pipelines), proving technical viability through functioning prototypes.",
    technologies: ["Computer Vision", "QR Streaming", "Meta Cloud API", "n8n", "Zod"],
  },
  {
    period: "2026",
    phase: "Commercial Launch",
    title: "Founding Rishvin Labs",
    description:
      "Established Rishvin Labs as a founder-led engineering studio offering transparent fixed-scope software development, cybersecurity hardening, and automation services to commercial clients and startups.",
    technologies: ["Studio Direction", "Architecture Oversight", "Client Sprints", "Production QA"],
  },
];

export function FounderTimeline() {
  return (
    <section id="journey" className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Milestone className="w-3.5 h-3.5" />
            Section 03 • Chronological Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            The Engineering Journey
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            A chronological timeline documenting the evolution from foundational computer science theory
            to connected hardware, defensive cybersecurity, and founding an independent engineering venture.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 space-y-12">
          {MILESTONES.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform" />

              <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs hover:border-zinc-300 transition-all">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {item.period} • {item.phase}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400">
                    Milestone 0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-zinc-100">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider mr-1">
                    Stack:
                  </span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
