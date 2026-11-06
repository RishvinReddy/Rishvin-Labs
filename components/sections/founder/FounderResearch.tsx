"use client";

import React from "react";
import { FlaskConical, Search, ShieldCheck, Cpu, Boxes, Terminal, Zap } from "lucide-react";

interface ResearchTopic {
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  practicalApplication: string;
}

const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    title: "Digital Forensics & Evidence Integrity",
    category: "DFIR Investigation",
    icon: Search,
    description:
      "Investigating cryptographic timestamping mechanisms and verifiable hash chains to prevent post-incident evidence tampering across complex multi-host breaches.",
    practicalApplication: "Integrated into ForensiX incident timeline generation and artefact verification.",
  },
  {
    title: "IoT Edge Telemetry & Hardware Security",
    category: "Connected Systems",
    icon: Cpu,
    description:
      "Exploring low-overhead cryptographic signing of sensor data directly on resource-constrained microcontrollers (ESP32) before transmission across public networks.",
    practicalApplication: "Applied to EcoBin / SmartBin municipal sensor nodes and environmental monitors.",
  },
  {
    title: "Blockchain Proof-of-State Notarization",
    category: "Decentralized Trust",
    icon: Boxes,
    description:
      "Evaluating gas-efficient Merkle tree aggregation techniques that enable thousands of edge log entries to be batched and anchored within a single EVM transaction.",
    practicalApplication: "Demonstrated through ChainForensics proof-of-concept smart contracts on Ethereum testbeds.",
  },
  {
    title: "Defensive DevSecOps & Supply Chain Hardening",
    category: "Application Security",
    icon: ShieldCheck,
    description:
      "Designing automated CI/CD security gates that proactively scan pull requests for leaked API tokens, vulnerable dependencies, and misconfigured permissions.",
    practicalApplication: "Enforced across all Rishvin Labs production deployments and open-source boilerplates.",
  },
  {
    title: "Air-Gapped Optical Communications",
    category: "Physical Security",
    icon: Terminal,
    description:
      "Researching high-frequency animated 2D barcode multiplexing to stream arbitrary binary files across physically isolated, network-disabled environments.",
    practicalApplication: "Implemented in PrismTransfer camera-to-screen optical file transfer prototype.",
  },
  {
    title: "Local LLM Tooling & Structured JSON Workflows",
    category: "Applied Intelligence",
    icon: Zap,
    description:
      "Benchmarking small, locally hosted language models with strictly enforced JSON schemas for reliable automated document extraction and lead qualification.",
    practicalApplication: "Utilized in Rishvin Labs customer onboarding and WhatsApp automated bot dispatchers.",
  },
];

export function FounderResearch() {
  return (
    <section id="research" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <FlaskConical className="w-3.5 h-3.5" />
            Section 10 • Technical Exploration
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Research &amp; Current Technical Exploration
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Active areas of experimentation and technical inquiry. We distinguish ongoing engineering research
            and practical spikes from formal peer-reviewed academic publications.
          </p>
        </div>

        {/* Research Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_TOPICS.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-50 rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                      {topic.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200/80 flex items-center justify-center text-zinc-600">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-zinc-950 mb-2">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200/80 text-xs font-mono text-zinc-700">
                  <span className="text-zinc-400 block text-[10px] uppercase tracking-wider mb-0.5">
                    Applied In:
                  </span>
                  <span>{topic.practicalApplication}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
