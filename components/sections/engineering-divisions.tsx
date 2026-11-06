import React from "react";
import { COMPANY } from "@/lib/business/company";
import { Terminal, ShieldCheck, Cpu, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function EngineeringDivisions() {
  const iconMap = {
    "software-engineering": Terminal,
    "cybersecurity": ShieldCheck,
    "iot-intelligent-systems": Cpu,
    "ai-automation": Sparkles,
  };

  return (
    <section id="divisions" className="py-24 px-6 bg-[#fafafa] border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            {"// CORE_ENGINEERING_DIVISIONS"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4 leading-tight">
            Specialized engineering for complex technical requirements.
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            We deliver end-to-end digital solutions across three primary engineering pillars, with automated workflows and AI integration as cross-cutting capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {COMPANY.divisions.slice(0, 3).map((division) => {
            const Icon = iconMap[division.id as keyof typeof iconMap] || Terminal;
            return (
              <div
                key={division.id}
                className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {division.title}
                  </h3>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-sans">
                    {division.description}
                  </p>

                  <div className="space-y-2 pt-6 border-t border-zinc-100">
                    <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      KEY CAPABILITIES:
                    </div>
                    {division.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-sans text-zinc-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-zinc-100">
                  <Link
                    href={`/services#${division.id}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Service Catalog</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI & Automation as Cross-Cutting Capability */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cross-Cutting Capability</span>
            </div>
            <h3 className="font-serif font-bold text-2xl text-zinc-950 mb-2">
              AI &amp; Business Process Automation
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans">
              We integrate practical machine intelligence and reliable webhook pipelines across all software systems—connecting disconnected CRMs, automating lead routing, and extracting structured data without brittle manual work.
            </p>
          </div>

          <Link
            href="/services#ai-automation"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shrink-0 shadow-sm"
          >
            <span>Explore Automation Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

