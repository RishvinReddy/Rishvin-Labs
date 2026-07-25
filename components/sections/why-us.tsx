"use client";

import React from "react";
import { Code, ShieldCheck, Cpu, Layout, Rocket, Headphones } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      title: "Engineering-Driven",
      desc: "Custom software architectures built from first principles without bloated, generic templates.",
      icon: Code,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      num: "01"
    },
    {
      title: "Secure by Design",
      desc: "Zero-trust authentication, OWASP Top 10 auditing, and immutable encrypted telemetry arrays.",
      icon: ShieldCheck,
      iconBg: "bg-violet-50 text-violet-600 border-violet-200",
      num: "02"
    },
    {
      title: "Scalable Systems",
      desc: "High-concurrency database backends and edge APIs designed to handle massive data loads effortlessly.",
      icon: Cpu,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      num: "03"
    },
    {
      title: "Modern UI/UX",
      desc: "Stunning editorial web interfaces engineered with responsive precision and dynamic micro-animations.",
      icon: Layout,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
      num: "04"
    },
    {
      title: "Fast Delivery",
      desc: "Agile development sprints with rapid staging check-ins and zero-downtime automated deployments.",
      icon: Rocket,
      iconBg: "bg-rose-50 text-rose-600 border-rose-200",
      num: "05"
    },
    {
      title: "Ongoing Support",
      desc: "Continuous system monitoring, infrastructure scaling adjustments, and dedicated long-term technical support.",
      icon: Headphones,
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
      num: "06"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="tech-badge mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            <span>[ WHY RISHVIN LABS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            The Engineering Advantage.
          </h2>
          <p className="text-zinc-600 font-sans text-base sm:text-lg leading-relaxed">
            We reject shortcuts in favor of robust system architecture, clean codebases, and uncompromising security standards.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-50/80 rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Giant Background Watermark Number */}
                <div className="absolute -top-3 -right-2 text-6xl font-serif font-black text-zinc-200/50 group-hover:text-zinc-300/60 transition-colors pointer-events-none select-none">
                  {item.num}
                </div>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 shadow-sm ${item.iconBg} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-xl text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200/80 flex items-center justify-between font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 transition-colors relative z-10">
                  <span>SYSTEM_STANDARD()</span>
                  <span>[ VERIFIED ]</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
