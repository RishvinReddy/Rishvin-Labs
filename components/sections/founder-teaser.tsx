"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe } from "lucide-react";

export function FounderTeaser() {
  return (
    <section id="about" className="bg-[#000000] text-white border-t border-b border-zinc-800 relative overflow-hidden my-12">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b border-zinc-800 px-6 py-3 font-mono text-xs text-zinc-400 tracking-widest uppercase bg-[#050505]">
        <span>// SYS.ARCHITECT.01</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
          <span>STATUS: ACTIVE _</span>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT COLUMN: Founder Image & Core Stats (flex 1) */}
        <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col bg-[#0a0a0a]">
          
          {/* Avatar Area with Crosshairs */}
          <div className="p-8 border-b border-zinc-800 relative flex items-center justify-center min-h-[320px] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_11px)]">
            {/* Crosshair Accents */}
            <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-zinc-500" />
            <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-zinc-500" />
            
            <div className="w-4/5 aspect-square overflow-hidden border border-zinc-800 relative group grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500">
              <Image
                src="/rishvin-reddy-founder-rishvin-labs.png"
                alt="Erolla Rishvin Reddy - Lead Systems Architect"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Title Area */}
          <div className="p-8 border-b border-zinc-800">
            <h3 className="text-4xl font-serif font-black tracking-tight text-white leading-none mb-1">
              RISHVIN
            </h3>
            <h3 className="text-4xl font-serif font-black tracking-tight text-zinc-500 leading-none mb-6">
              REDDY
            </h3>
            <div className="font-mono text-xs text-white uppercase tracking-widest px-3 py-2 border border-zinc-800 bg-[#111111] inline-block">
              Lead Systems Architect
            </div>
          </div>

          {/* Terminal output */}
          <div className="p-8 bg-[#000000] flex-grow font-mono text-xs text-zinc-400 leading-relaxed">
            <div>&gt; INITIATING ARCHITECTURE OVERVIEW...</div>
            <div>&gt; NO OUTSOURCING. NO TEMPLATES.</div>
            <div>&gt; ENGINEERING FROM FIRST PRINCIPLES.</div>
            <div className="text-white mt-2">
              &gt; READY.<span className="animate-pulse font-bold text-emerald-400">_</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Gapless Bento Grid of Domains (flex 2) */}
        <div className="lg:w-2/3 flex flex-col justify-between">
          
          {/* Massive Header / Bio */}
          <div className="p-10 lg:p-14 border-b border-zinc-800 bg-[#050505] flex flex-col gap-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-black leading-tight tracking-tight text-white">
              Built by <span className="text-zinc-500">Rishvin Reddy.</span>
            </h2>
            <div className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl space-y-4">
              <p>
                Rishvin Labs is founded and led by Rishvin Reddy, a Computer Science Engineering student and technology builder working across software engineering, cybersecurity, Internet of Things, embedded systems, blockchain and intelligent automation.
              </p>
              <p>
                Rishvin's work focuses on building practical technology systems—from secure software and web applications to IoT monitoring platforms, automation systems and experimental engineering products.
              </p>
              <p>
                Alongside Rishvin Labs, he maintains a dedicated engineering portfolio documenting projects, technical work, experiments, skills and ongoing development.
              </p>
            </div>
            <div>
              <a
                href="https://rishvinreddy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-blue-400 font-bold hover:text-blue-300 transition-colors group"
              >
                <span>Explore Rishvin Reddy's Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Grid of 3 Domains */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-zinc-800 flex-grow">
            
            {/* Domain 01 */}
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-zinc-800 flex flex-col bg-[#000000]">
              <div className="font-mono text-xl font-bold text-white mb-6">[01]</div>
              <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-tight">
                Platform <br />Engineering
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-8 flex-grow font-sans">
                Advanced web architectures, low-latency edge APIs, metrics ingestion, and heavy database scaling.
              </p>
              <div className="flex flex-col gap-1.5 font-mono text-[10px] text-zinc-500 uppercase">
                <span className="border-t border-dashed border-zinc-800 pt-1.5">Node.js / TS</span>
                <span className="border-t border-dashed border-zinc-800 pt-1.5">PostgreSQL</span>
                <span className="border-t border-dashed border-zinc-800 pt-1.5">FastAPI</span>
              </div>
            </div>

            {/* Domain 02 */}
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-zinc-800 flex flex-col bg-[#050505]">
              <div className="font-mono text-xl font-bold text-white mb-6">[02]</div>
              <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-tight">
                IoT &amp; <br />Embedded
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-8 flex-grow font-sans">
                Decentralized mesh networks, solar charging management, and deep sleep telemetry arrays.
              </p>
              <div className="flex flex-col gap-1.5 font-mono text-[10px] text-zinc-500 uppercase">
                <span className="border-t border-dashed border-zinc-800 pt-1.5">C++ / ESP32</span>
                <span className="border-t border-dashed border-zinc-800 pt-1.5">FreeRTOS</span>
                <span className="border-t border-dashed border-zinc-800 pt-1.5">MQTT Broker</span>
              </div>
            </div>

            {/* Domain 03 */}
            <div className="p-8 flex flex-col bg-[#0a0a0a]">
              <div className="font-mono text-xl font-bold text-white mb-6">[03]</div>
              <h4 className="text-xl font-serif font-bold text-white mb-4 tracking-tight">
                Cybersec <br />Vaults
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-8 flex-grow font-sans">
                Zero-knowledge auth, immutable logs, zero-trust backend isolation and strict auditing.
              </p>
              <div className="flex flex-col gap-1.5 font-mono text-[10px] text-zinc-500 uppercase">
                <span className="border-t border-dashed border-zinc-800 pt-1.5">AES-256</span>
                <span className="border-t border-dashed border-zinc-800 pt-1.5">Zero-Trust</span>
                <span className="border-t border-dashed border-zinc-800 pt-1.5">JWT / OAuth</span>
              </div>
            </div>

          </div>

          {/* Footer Action Area */}
          <div className="flex flex-col sm:flex-row items-stretch bg-[#000000]">
            <Link
              href="/founder"
              className="flex-1 p-8 flex justify-between items-center border-b sm:border-b-0 sm:border-r border-zinc-800 text-decoration-none text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span className="font-serif font-black text-xl sm:text-2xl tracking-tight">
                VIEW TECHNICAL PROFILE
              </span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <a
              href="https://rishvinreddy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 flex items-center justify-center gap-2 text-zinc-400 font-mono text-xs uppercase hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>[ Personal Portfolio ]</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
