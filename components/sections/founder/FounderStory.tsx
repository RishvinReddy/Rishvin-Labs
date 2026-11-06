"use client";

import React from "react";
import { Compass } from "lucide-react";

export function FounderStory() {
  return (
    <section id="my-story" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6">
          <Compass className="w-3.5 h-3.5" />
          Section 02 • Editorial Introduction
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-8 leading-tight">
          Engineering as an applied craft: learning by building, breaking, and refining.
        </h2>

        {/* Narrative Prose */}
        <div className="space-y-6 text-base sm:text-lg text-zinc-700 font-sans leading-relaxed">
          <p>
            My journey into computer science began with a fundamental curiosity: understanding how software behaves when pushed beyond standard textbook assumptions. Currently pursuing my <strong>B.Tech in Computer Science and Engineering (Specialization in Blockchain, IoT, and Cybersecurity) at Woxsen University (Class of 2028)</strong>, I have always treated theoretical coursework as a launchpad for practical systems engineering rather than an endpoint.
          </p>

          <p>
            Early on, I recognized that writing syntax is only a tiny fraction of what constitutes genuine engineering. The real challenge lies in designing reliable architectures, safeguarding digital state, anticipating edge-case failures, and making disparate software systems communicate securely. This led me to explore low-level embedded hardware, digital forensics (DFIR), application security, and blockchain proof-of-state systems simultaneously.
          </p>

          <p>
            I founded <strong>Rishvin Labs</strong> with a clear mandate: to bridge the gap between abstract technical ideas and production-grade software delivery. Rather than operating as an opaque agency with bloated hierarchies, Rishvin Labs is structured as a founder-led engineering studio where practicing architects design, write, test, and ship solutions directly.
          </p>

          <p>
            Whether I am implementing air-gapped optical file transfer protocols in <em>PrismTransfer</em>, auditing smart contract state integrity in <em>ChainForensics</em>, or building high-throughput web platforms for commercial clients, my philosophy remains constant: <strong>software should solve real problems, stand on verifiable technical evidence, and be architected for long-term maintainability.</strong>
          </p>
        </div>

        {/* Key Tenet Callout Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-100">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <span className="font-mono text-xs font-bold text-blue-600 block mb-1">01 / DISCIPLINE</span>
            <h4 className="font-sans font-bold text-sm text-zinc-950 mb-1">Applied Systems</h4>
            <p className="text-xs text-zinc-500 leading-snug">
              Moving beyond demo scripts to build resilient, deployable systems that withstand real-world conditions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <span className="font-mono text-xs font-bold text-blue-600 block mb-1">02 / RIGOR</span>
            <h4 className="font-sans font-bold text-sm text-zinc-950 mb-1">Security by Design</h4>
            <p className="text-xs text-zinc-500 leading-snug">
              Integrating authentication, input validation, and cryptographic integrity from the first commit.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <span className="font-mono text-xs font-bold text-blue-600 block mb-1">03 / HONESTY</span>
            <h4 className="font-sans font-bold text-sm text-zinc-950 mb-1">Verifiable Evidence</h4>
            <p className="text-xs text-zinc-500 leading-snug">
              Prioritizing benchmarked telemetry, open repositories, and clear documentation over marketing hype.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
