"use client";

import React from "react";
import { Terminal, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CapabilitiesSection() {
  const capabilities = [
    {
      id: "01",
      title: "Build",
      tagline: "Custom Business Systems",
      desc: "We engineer high-performance web applications, specialized internal tools, and robust client portals designed to scale with your operations.",
      icon: Terminal,
      color: "blue"
    },
    {
      id: "02",
      title: "Automate",
      tagline: "Operational Workflows",
      desc: "We connect fragmented APIs, eliminate manual data entry, and orchestrate intelligent automations that save hundreds of hours per month.",
      icon: Cpu,
      color: "violet"
    },
    {
      id: "03",
      title: "Secure",
      tagline: "Zero-Trust Architecture",
      desc: "We fortify your digital infrastructure, audit existing systems for vulnerabilities, and implement modern identity management.",
      icon: ShieldCheck,
      color: "emerald"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="tech-badge mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>CORE EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Three Pillars of Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.id} className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 font-serif font-black text-6xl pointer-events-none group-hover:scale-110 transition-transform">
                  {cap.id}
                </div>
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110
                  ${cap.color === "blue" ? "bg-blue-50 text-blue-600 border border-blue-200/60" : 
                    cap.color === "violet" ? "bg-violet-50 text-violet-600 border border-violet-200/60" : 
                    "bg-emerald-50 text-emerald-600 border border-emerald-200/60"}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif font-bold text-2xl text-zinc-950 mb-1">{cap.title}</h3>
                <div className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-4
                  ${cap.color === "blue" ? "text-blue-600" : cap.color === "violet" ? "text-violet-600" : "text-emerald-600"}`}
                >
                  {cap.tagline}
                </div>
                
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
