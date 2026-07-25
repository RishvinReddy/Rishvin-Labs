import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Engineering Manifesto | Rishvin Labs",
  description: "These are the principles that govern every architectural decision, every line of production code, and every system we deploy under the Rishvin Labs name.",
};

export default function ManifestoPage() {
  const principles = [
    {
      num: "01.",
      title: "Systems over features.",
      desc: "Features are temporary. Systems persist. Before writing a single line of code, we define the boundaries, the failure modes, and the operational envelope of the system. If we cannot explain the architecture in a whiteboard session, it is not ready to be built."
    },
    {
      num: "02.",
      title: "Reliability is designed, not tested in.",
      desc: "Testing discovers bugs. Architecture prevents them. We build fault-tolerant systems from the ground up — not as an afterthought. Redundancy, graceful degradation, and clear recovery paths are first-class engineering constraints, not optional additions."
    },
    {
      num: "03.",
      title: "Security is not a layer. It is a property.",
      desc: "Security added on top of an insecure design is theater. We apply zero-trust principles, minimal privilege, and cryptographic rigor from the data model outward. Every system we build should be resistant to a breach even if an attacker gains partial access."
    },
    {
      num: "04.",
      title: "Simplicity at scale is the hardest problem.",
      desc: "Complex problems deserve elegant solutions, not complicated ones. We resist the pull of unnecessary abstraction. Every component must justify its existence. An engineer joining the project on day one should understand the entire system by day three."
    },
    {
      num: "05.",
      title: "Data integrity above all else.",
      desc: "Software can be redeployed. Data cannot be undeleted. We treat data as the most precious asset in every system — designing with atomic transactions, audit trails, immutable records, and explicit consistency guarantees at every persistence boundary."
    },
    {
      num: "06.",
      title: "Observability is not optional.",
      desc: "A system you cannot observe is a system you cannot trust. Every production deployment ships with structured logging, distributed tracing, and alert thresholds set before the first user touches it. If an anomaly exists, we must know before the user does."
    },
    {
      num: "07.",
      title: "We write code for the engineer who comes next.",
      desc: "Code is read far more often than it is written. Clarity is a professional obligation. We document architectural intent, not implementation detail. The test of good code is whether a senior engineer can understand its purpose in three minutes without context."
    },
    {
      num: "08.",
      title: "Ship working systems. Improve them continuously.",
      desc: "Perfect systems are never deployed. We practice incremental delivery of production-quality increments — each slice functional, tested, and observable. We do not ship prototypes as products. We ship systems that are ready for the load they will receive."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO STATEMENT */}
      <section className="pt-40 pb-20 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            Engineering Manifesto
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-8 leading-tight">
            We don&apos;t build software.<br />
            <span className="text-blue-600 font-normal italic">We engineer systems.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed font-sans">
            These are the principles that govern every architectural decision, every line of production code, and every system we deploy under the Rishvin Labs name.
          </p>
        </div>
      </section>

      {/* 2. PRINCIPLES LIST */}
      <section className="py-24 px-6 bg-[#fafafa] flex-1">
        <div className="max-w-4xl mx-auto space-y-16">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 pb-16 border-b border-zinc-200 last:border-none last:pb-0"
            >
              <div className="sm:col-span-2 font-mono text-sm sm:text-base font-bold text-blue-600 sm:pt-1">
                {p.num}
              </div>
              <div className="sm:col-span-10 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 leading-snug">
                  {p.title}
                </h3>
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CLOSING STATEMENT / THE STANDARD */}
      <section className="py-20 bg-white border-t border-zinc-200 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-6 space-y-4">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
              [ THE STANDARD ]
            </span>
            <p className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 leading-snug italic">
              &ldquo;The architecture should survive the departure of any single engineer.&rdquo;
            </p>
          </div>

          <div className="md:col-span-6 space-y-6">
            <p className="text-zinc-600 text-base leading-relaxed">
              These are not aspirational values printed on a wall. They are enforced constraints on every system we build &mdash; measurable, auditable, and non-negotiable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
              >
                <span>See Our Systems</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/founder"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#fafafa] border border-zinc-200 text-zinc-800 font-semibold text-base hover:bg-zinc-100 transition-all"
              >
                <span>Founder Profile</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
