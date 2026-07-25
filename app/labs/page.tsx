import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight, Beaker, Cpu, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Experimental Division (Labs) | Rishvin Labs",
  description: "Unfiltered access to our ongoing research, technical concepts, and architectural experiments.",
};

export default function LabsPage() {
  const experiments = [
    {
      id: "exp-01",
      code: "EXPERIMENT-01",
      status: "ACTIVE",
      title: "AI Financial Analysis Engine",
      desc: "Testing the integration of LLMs with real-time Plaid banking data to dynamically generate cash flow predictions and localized fiscal insights without manual modeling.",
      stack: "Python, LangChain, Plaid API, PostgreSQL",
      btnText: "DATA GATHERING...",
      btnLink: "#",
      disabled: true,
      icon: Beaker
    },
    {
      id: "exp-02",
      code: "EXPERIMENT-02",
      status: "ACTIVE",
      title: "Mesh-Networked IoT Nodes",
      desc: "Replacing single-point-of-failure MQTT brokers with decentralized ESP-NOW mesh networking for agricultural telemetry across massive acreage.",
      stack: "C++, ESP-NOW, FreeRTOS, Solar Topologies",
      btnText: "PROTOCOL TESTING...",
      btnLink: "#",
      disabled: true,
      icon: Cpu
    },
    {
      id: "exp-03",
      code: "EXPERIMENT-03",
      status: "ARCHIVED",
      title: "Zero-Trust Vault Prototype",
      desc: "Initial architecture proving the feasibility of lateral-movement protection in password managers via strict token scopes. (Graduated to Production).",
      stack: "Python, Docker, Cryptography",
      btnText: "VIEW DEPLOYED SYSTEM",
      btnLink: "/projects/project-vault",
      disabled: false,
      icon: ShieldCheck
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 bg-white border-b border-zinc-200 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            Experimental Division
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-6 max-w-3xl mx-auto leading-tight">
            Rishvin Labs / <span className="text-blue-600 font-normal italic">Labs.</span>
          </h1>
          <p className="font-mono text-xs sm:text-sm text-zinc-500 uppercase tracking-wider mb-4 font-bold">
            &gt; INITIATING R&amp;D PROTOCOLS
          </p>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Unfiltered access to our ongoing research, technical concepts, and architectural experiments.
          </p>
        </div>
      </section>

      {/* 2. LABS GRID */}
      <section className="py-24 px-6 bg-[#fafafa] flex-1">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((exp) => {
            const IconComp = exp.icon;
            const isActive = exp.status === "ACTIVE";
            return (
              <div
                key={exp.id}
                className="bg-white border border-zinc-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-blue-600 transition-all group"
              >
                <div>
                  <div className="px-8 py-5 bg-[#fafafa] border-b border-zinc-200 flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      [ {exp.code} ]
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isActive
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-zinc-100 text-zinc-600 border border-zinc-300"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                      {exp.desc}
                    </p>

                    <div className="pt-6 border-t border-zinc-100 mb-8">
                      <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        CORE STACK
                      </div>
                      <div className="font-mono text-xs font-semibold text-zinc-800">
                        {exp.stack}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  {exp.disabled ? (
                    <div className="w-full py-3.5 rounded-xl bg-zinc-100 text-zinc-400 font-mono text-xs font-bold uppercase tracking-wider text-center border border-zinc-200 cursor-not-allowed select-none">
                      {exp.btnText}
                    </div>
                  ) : (
                    <Link
                      href={exp.btnLink}
                      className="w-full py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-blue-600 transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>{exp.btnText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-20 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
            Want to integrate these concepts?
          </h2>
          <p className="text-zinc-600 text-base mb-8">
            Our experimental R&amp;D systems frequently evolve into enterprise client architectures.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
          >
            <span>Initialize Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
