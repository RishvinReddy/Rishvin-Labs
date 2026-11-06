import React from "react";
import Link from "next/link";
import { 
  FlaskConical 
} from "lucide-react";

export function StudentResearchSection() {
  const researchPillars = [
    {
      title: "Reading Security & Systems Papers",
      desc: "Learn to parse academic IEEE, ACM, and USENIX papers by focusing on the threat model, experimental testbeds, and reproducibility metrics before reading related work.",
      tag: "Methodology"
    },
    {
      title: "Responsible Vulnerability Disclosure",
      desc: "Understand ethical boundaries (ISO/IEC 29147). Never test against systems without explicit written authorization. Use local sandboxes and Dockerized targets.",
      tag: "Ethics & Law"
    },
    {
      title: "Benchmarking & Empirical Validation",
      desc: "Measure throughput, latency, memory consumption, and packet loss using statistical samples rather than single-run benchmarks.",
      tag: "Engineering Rigor"
    }
  ];

  return (
    <section id="research-lab" className="py-24 px-6 bg-[#fafafa] border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 09_TECHNICAL_RESEARCH"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Research &amp; Experimentation
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Bridge academic research with working code. Explore technical whitepapers, architectural case studies, and engineering journal entries authored at Rishvin Labs.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {researchPillars.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-400 transition-all"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-3">
                  {p.tag}
                </span>
                <h3 className="font-serif font-bold text-xl text-zinc-950 mb-3">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Internal Research Links Box */}
        <div className="bg-zinc-950 rounded-3xl p-8 sm:p-12 border border-zinc-800 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-blue-400 font-mono text-[11px] font-bold uppercase mb-4">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Rishvin Labs Research Directory</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Explore Our Published Engineering Research
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Read in-depth case studies on cryptographic forensic hash verification, real-time ESP32 telemetry, and zero-knowledge transfer architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/research"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              Research Index
            </Link>
            <Link
              href="/whitepapers"
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider border border-zinc-800 transition-all"
            >
              Whitepapers
            </Link>
            <Link
              href="/journal"
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider border border-zinc-800 transition-all"
            >
              Engineering Journal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
