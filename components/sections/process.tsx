"use client";

import React from "react";
import { Compass, Map, Code2, ShieldCheck, Rocket, Headphones, ArrowRight } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Deep dive into your business objectives, technical constraints, and target user requirements.",
      icon: Compass,
      color: "border-blue-500/30 text-blue-600 bg-blue-50"
    },
    {
      num: "02",
      title: "Plan",
      desc: "Comprehensive system architecture design, database schema modeling, and sprint planning.",
      icon: Map,
      color: "border-violet-500/30 text-violet-600 bg-violet-50"
    },
    {
      num: "03",
      title: "Build",
      desc: "Agile engineering sprints with weekly code reviews and live staging environment check-ins.",
      icon: Code2,
      color: "border-teal-500/30 text-teal-600 bg-teal-50"
    },
    {
      num: "04",
      title: "Test",
      desc: "Rigorous QA testing, OWASP security auditing, and high-load concurrency optimization.",
      icon: ShieldCheck,
      color: "border-amber-500/30 text-amber-600 bg-amber-50"
    },
    {
      num: "05",
      title: "Deploy",
      desc: "Smooth launch to production with zero-downtime automated deployment pipelines.",
      icon: Rocket,
      color: "border-emerald-500/30 text-emerald-600 bg-emerald-50"
    },
    {
      num: "06",
      title: "Support",
      desc: "Ongoing maintenance, infrastructure scaling adjustments, and continuous enhancements.",
      icon: Headphones,
      color: "border-indigo-500/30 text-indigo-600 bg-indigo-50"
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="tech-badge mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>[ HOW WE WORK ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Workflow Timeline.
          </h2>
          <p className="text-zinc-600 font-sans text-base sm:text-lg leading-relaxed">
            A transparent, first-principles engineering methodology designed to eliminate risk and guarantee delivery.
          </p>
        </div>

        {/* 6-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-50/90 rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Giant Background Watermark Number */}
                <div className="absolute -top-4 -right-2 text-7xl font-serif font-black text-zinc-200/60 group-hover:text-zinc-300/80 transition-colors pointer-events-none select-none">
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center font-mono text-xs font-bold text-zinc-700">
                        {step.num}
                      </div>
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-sm ${step.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200/80 flex items-center justify-between font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 transition-colors relative z-10">
                  <span>PHASE_{step.num}</span>
                  <span>[ GUARANTEED ]</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
