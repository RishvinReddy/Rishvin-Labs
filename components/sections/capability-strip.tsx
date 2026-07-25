"use client";

import React from "react";
import { motion } from "motion/react";
import { Globe, Terminal, Cpu, Shield, Radio, Blocks, LayoutTemplate } from "lucide-react";

export function CapabilityStrip() {
  const capabilities = [
    { name: "Web Systems", icon: Globe, color: "text-blue-400" },
    { name: "Custom Software", icon: Terminal, color: "text-violet-400" },
    { name: "AI & Automation", icon: Cpu, color: "text-emerald-400" },
    { name: "Cybersecurity", icon: Shield, color: "text-rose-400" },
    { name: "IoT Telemetry", icon: Radio, color: "text-amber-400" },
    { name: "Blockchain", icon: Blocks, color: "text-cyan-400" },
    { name: "Product Engineering", icon: LayoutTemplate, color: "text-indigo-400" },
  ];

  return (
    <section className="py-10 border-y border-white/10 bg-[#0d0f17]/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider whitespace-nowrap shrink-0">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>STUDIO CAPABILITIES</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-y-3 gap-x-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div key={cap.name} className="flex items-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 cursor-default group"
                  >
                    <IconComponent className={`w-4 h-4 ${cap.color} transition-transform group-hover:scale-110`} />
                    <span className="font-sans text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                      {cap.name}
                    </span>
                  </motion.div>

                  {/* Dot separator between items */}
                  {idx < capabilities.length - 1 && (
                    <span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-700" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
