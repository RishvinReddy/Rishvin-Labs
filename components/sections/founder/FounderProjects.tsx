"use client";

import React from "react";
import Link from "next/link";
import { Code2, ArrowUpRight, GitBranch } from "lucide-react";

interface ShowcaseProject {
  id: string;
  name: string;
  category: string;
  status: "Verified Live" | "Working Tool" | "Working Prototype" | "Research & PoC" | "In Development" | "Concept & Spec";
  statusColor: string;
  problem: string;
  approach: string;
  stack: string[];
  contribution: string;
  caseStudyUrl?: string;
  repoUrl?: string;
}

const PROJECTS: ShowcaseProject[] = [
  {
    id: "forensix",
    name: "ForensiX",
    category: "Digital Forensics & Incident Response",
    status: "Working Tool",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    problem:
      "Incident response teams frequently waste hours coordinating disparate command-line tools for volatile memory analysis, disk imaging, and log parsing.",
    approach:
      "Architected an extensible web-based triage workbench with modular collectors that parse system artefacts and generate tamper-evident timeline reports.",
    stack: ["TypeScript", "Next.js", "Python", "Volatility", "Sleuth Kit", "JSON-LD"],
    contribution: "Full system design, collector architecture, UI dashboard, and timeline generation engine.",
    caseStudyUrl: "/work/forensix",
  },
  {
    id: "chainforensics",
    name: "ChainForensics",
    category: "Blockchain & Forensic State Integrity",
    status: "Research & PoC",
    statusColor: "bg-purple-50 text-purple-700 border-purple-200",
    problem:
      "IoT sensor logs presented in legal investigations are vulnerable to post-incident tampering, repudiation, and timestamp spoofing.",
    approach:
      "Engineered an automated hashing bridge that batches edge telemetry frames, calculates Merkle root digests, and anchors notarized proofs on Ethereum testnets.",
    stack: ["Solidity", "Hardhat", "ESP32", "MQTT", "Ethers.js", "SHA-256"],
    contribution: "Solidity smart contract authoring, edge telemetry verification scripts, and gas-efficient batching.",
    caseStudyUrl: "/work/chainforensics",
  },
  {
    id: "prismtransfer",
    name: "PrismTransfer",
    category: "Air-Gapped Optical Communications",
    status: "Working Prototype",
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
    problem:
      "Transferring sensitive files into completely isolated, air-gapped forensic environments without USB drives or network interfaces.",
    approach:
      "Developed a camera-to-screen optical transmission pipeline encoding binary files into animated high-density multi-color QR frame streams.",
    stack: ["TypeScript", "Canvas API", "OpenCV.js", "Reed-Solomon FEC", "Web Workers"],
    contribution: "Encoding chunking algorithms, forward error correction (FEC) logic, and optical frame synchronizer.",
    caseStudyUrl: "/work/prismtransfer",
  },
  {
    id: "netinspect",
    name: "NetInspect",
    category: "Network Protocol Security",
    status: "Working Tool",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    problem:
      "Security analysts need lightweight, zero-install network PCAP file inspection without opening full desktop Wireshark environments.",
    approach:
      "Created a client-side packet dissection tool parsing PCAP headers directly in browser memory with protocol breakdowns and exportable security alerts.",
    stack: ["JavaScript", "HTML5 FileReader", "Tailwind CSS", "ArrayBuffer", "PCAP Spec"],
    contribution: "Binary packet parser, HTTP/DNS stream reconstruction, and interactive packet inspector UI.",
    caseStudyUrl: "/work/netinspect",
  },
  {
    id: "smartbin",
    name: "Smart Bin / EcoBin",
    category: "IoT Municipal Telemetry & Hardware",
    status: "Working Prototype",
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
    problem:
      "Urban waste collection routes operate on static schedules, leading to overflowing municipal bins and inefficient fuel consumption.",
    approach:
      "Built an ultrasonic sensor node on ESP32 microcontrollers that transmits real-time fill level telemetry to a centralized dispatch dashboard via MQTT.",
    stack: ["ESP32", "C++ / Arduino", "HC-SR04", "MQTT", "Node.js", "Leaflet Maps"],
    contribution: "Hardware schematic design, microcontroller C++ firmware, threshold alerts, and cloud telemetry map.",
    caseStudyUrl: "/work/smartbin",
  },
  {
    id: "clientflow",
    name: "ClientFlow",
    category: "Full-Stack SaaS & Operations",
    status: "Verified Live",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    problem:
      "Independent service businesses struggle with fragmented client onboarding, unorganized file delivery, and disconnected billing.",
    approach:
      "Engineered a multi-tenant client management portal featuring role-based access, milestone payment tracking, and secure document vaults.",
    stack: ["Next.js", "React", "PostgreSQL", "Supabase", "Stripe API", "Zod"],
    contribution: "Database schema modeling, authentication middleware, client portal frontend, and payment webhook handlers.",
    caseStudyUrl: "/work/clientflow",
  },
  {
    id: "wbos",
    name: "WBOS (WhatsApp Business OS)",
    category: "Intelligent Process Automation",
    status: "In Development",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    problem:
      "Small businesses lose qualified inbound leads due to delayed manual replies and disorganized customer communication threads.",
    approach:
      "Connecting the official Meta WhatsApp Cloud API to automated n8n workflows, CRM pipelines, and intelligent auto-responders.",
    stack: ["Meta Cloud API", "n8n", "Node.js", "Express", "PostgreSQL", "Webhooks"],
    contribution: "Webhook listener endpoints, interactive button template authoring, and stateful conversational routing.",
  },
  {
    id: "pipelineshield",
    name: "PipelineShield",
    category: "DevSecOps & Software Supply Chain",
    status: "Concept & Spec",
    statusColor: "bg-zinc-100 text-zinc-700 border-zinc-200",
    problem:
      "Development teams inadvertently commit unencrypted secrets and vulnerable dependencies into deployment branches.",
    approach:
      "Designing automated pre-commit and GitHub Action security scanners enforcing SAST and dependency audits before code enters staging.",
    stack: ["GitHub Actions", "Shell Scripting", "Trivy", "Gitleaks", "Node.js"],
    contribution: "Security gate specification, action workflow definitions, and alert triage formatting.",
  },
];

export function FounderProjects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Code2 className="w-3.5 h-3.5" />
            Section 05 • Verifiable Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Selected Engineering Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Concrete software systems, security tools, and IoT prototypes built to solve practical technical challenges.
            Every project lists its honest developmental status, core approach, and my specific architectural contribution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-zinc-200 hover:border-zinc-300 p-7 sm:p-8 flex flex-col justify-between transition-all shadow-xs hover:shadow-md"
            >
              <div>
                {/* Top Status & Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-semibold text-blue-600 uppercase">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${project.statusColor}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-3">
                  {project.name}
                </h3>

                {/* Problem & Approach */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <div>
                    <strong className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-0.5">
                      The Problem:
                    </strong>
                    <p className="text-zinc-600 leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <strong className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-0.5">
                      Engineering Approach:
                    </strong>
                    <p className="text-zinc-700 leading-relaxed">{project.approach}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                    <strong className="font-mono text-[10px] uppercase tracking-wider text-blue-600 block mb-0.5">
                      My Contribution:
                    </strong>
                    <p className="text-zinc-600 text-xs leading-relaxed">{project.contribution}</p>
                  </div>
                </div>
              </div>

              {/* Stack & Links Footer */}
              <div className="pt-5 border-t border-zinc-100">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  {project.caseStudyUrl ? (
                    <Link
                      href={project.caseStudyUrl}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-950 hover:text-blue-600 transition-colors"
                    >
                      <span>Read Full Technical Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="font-mono text-xs text-zinc-400">
                      Technical Spec Documentation
                    </span>
                  )}

                  <a
                    href="https://github.com/RishvinReddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-950 transition-colors"
                    title="View GitHub Repositories"
                  >
                    <GitBranch className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
