import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { 
  ArrowRight, 
  BarChart2, 
  Cpu, 
  GitBranch, 
  Layers, 
  Terminal as TerminalIcon 
} from "lucide-react";

export const metadata = {
  title: "Founder Profile & Engineering Arsenal | Rishvin Reddy",
  description: "Lead Systems Architect & Software Engineer. Bridging the gap between zero-trust security, IoT hardware, and scalable web infrastructure.",
};

export default function FounderPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* HEADER PROFILE */}
      <section className="pt-40 pb-16 px-6 text-center relative border-b border-zinc-200 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-serif font-black text-4xl shadow-xl shadow-blue-500/20">
              R
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-zinc-200 px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-zinc-700 uppercase tracking-wider">Available</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Rishvin Reddy
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed mb-8 font-sans">
            Lead Systems Architect &amp; Software Engineer. Bridging the gap between zero-trust security, IoT hardware, and scalable web infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
            >
              <span>Hire for Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/RishvinReddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-zinc-300 text-zinc-950 font-semibold text-base hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
            >
              <GitBranch className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="py-20 px-6 bg-[#fafafa] flex-1">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Metrics (Wide - 8 cols) */}
          <div className="md:col-span-8 bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-100">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-zinc-950 font-serif">Execution Metrics</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono tracking-tight mb-1">5+</div>
                <div className="font-mono text-xs font-semibold text-zinc-500 uppercase">Production Systems</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-mono tracking-tight mb-1">3</div>
                <div className="font-mono text-xs font-semibold text-zinc-500 uppercase">Core Domains</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-mono tracking-tight mb-1">2+</div>
                <div className="font-mono text-xs font-semibold text-zinc-500 uppercase">Years Shipping</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-violet-600 font-mono tracking-tight mb-1">&infin;</div>
                <div className="font-mono text-xs font-semibold text-zinc-500 uppercase">Systems to Build</div>
              </div>
            </div>
          </div>

          {/* Card 2: Expertise (4 cols) */}
          <div className="md:col-span-4 bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
              <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-zinc-950 font-serif">Expertise</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-blue-600">01</span>
                <span className="font-semibold text-sm sm:text-base text-zinc-950">Software Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-violet-600">02</span>
                <span className="font-semibold text-sm sm:text-base text-zinc-950">IoT &amp; Embedded</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-600">03</span>
                <span className="font-semibold text-sm sm:text-base text-zinc-950">Zero-Trust Security</span>
              </div>
            </div>
          </div>

          {/* Card 3: Technology Arsenal (Wide - 7 cols) */}
          <div className="md:col-span-7 bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-zinc-950 font-serif">Technology Arsenal</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-lg font-mono text-xs font-semibold text-zinc-800">Python</span>
                  <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-lg font-mono text-xs font-semibold text-zinc-800">TypeScript</span>
                  <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-lg font-mono text-xs font-semibold text-zinc-800">C++</span>
                  <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-lg font-mono text-xs font-semibold text-zinc-800">SQL</span>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                  Infrastructure &amp; APIs
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-lg font-mono text-xs font-semibold text-zinc-800">Node.js</span>
                  <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-lg font-mono text-xs font-semibold text-zinc-800">PostgreSQL</span>
                  <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-lg font-mono text-xs font-semibold text-zinc-800">Docker</span>
                  <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-lg font-mono text-xs font-semibold text-zinc-800">FastAPI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Philosophy (5 cols) */}
          <div className="md:col-span-5 bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <TerminalIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-zinc-950 font-serif">Philosophy</h2>
              </div>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 italic">
                &ldquo;Systems over features. Architecture survives; implementations change. Security is a property of the design, not a feature added on top.&rdquo;
              </p>
            </div>

            <Link
              href="/manifesto"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-wider hover:text-blue-700 transition-colors pt-4 border-t border-zinc-100"
            >
              <span>Read Full Manifesto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
