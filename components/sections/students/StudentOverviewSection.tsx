import React from "react";
import Link from "next/link";
import { 
  Compass, 
  BookOpen, 
  Hammer, 
  Sparkles, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Terminal 
} from "lucide-react";

const PILLARS = [
  {
    num: "01",
    title: "Discover",
    tagline: "Explore the Engineering Landscape",
    description: "Understand the broader technology ecosystem across full-stack architecture, cybersecurity, hardware telemetry, and decentralized computing before specializing.",
    icon: Compass,
    href: "#learning-domains",
    highlights: ["6 Core Disciplines", "Prerequisite Audits", "Industry Context"],
    accent: "border-blue-200 bg-blue-50/40 text-blue-700"
  },
  {
    num: "02",
    title: "Learn",
    tagline: "Master Structured Roadmaps",
    description: "Follow sequential, verified learning stages from basic language semantics to production edge deployments without skipping core foundations.",
    icon: BookOpen,
    href: "#pathways",
    highlights: ["Beginner to Advanced", "Official Standards", "No Fluff"],
    accent: "border-emerald-200 bg-emerald-50/40 text-emerald-700"
  },
  {
    num: "03",
    title: "Build",
    tagline: "Ship Practical Challenges",
    description: "Tackle realistic, architectural engineering problems modelled directly after production software and open-source systems.",
    icon: Hammer,
    href: "#project-challenges",
    highlights: ["Concrete Deliverables", "Reference Code", "Portfolio Proof"],
    accent: "border-purple-200 bg-purple-50/40 text-purple-700"
  },
  {
    num: "04",
    title: "Showcase",
    tagline: "Demonstrate Peer Engineering",
    description: "Submit original technical projects and open-source contributions for technical review, feedback, and peer recognition.",
    icon: Sparkles,
    href: "#student-showcase",
    highlights: ["Quality Criteria", "Public Repositories", "Code Integrity"],
    accent: "border-amber-200 bg-amber-50/40 text-amber-700"
  },
  {
    num: "05",
    title: "Connect",
    tagline: "Engage with the Community",
    description: "Participate in verified developer communities, international hackathons, open-source programs, and collaborative technical initiatives.",
    icon: Users,
    href: "#community",
    highlights: ["Verified Ecosystems", "GSoC & LFX", "Ethical Collaboration"],
    accent: "border-indigo-200 bg-indigo-50/40 text-indigo-700"
  }
];

export function StudentOverviewSection() {
  return (
    <section id="hub-overview" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// PLATFORM_OVERVIEW"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Your space to learn, build and contribute.
          </h2>
          <p className="text-zinc-600 text-lg sm:text-xl leading-relaxed font-sans">
            An engineering-focused space for students who want to move beyond theory, develop practical skills, build useful technology and participate in the wider developer ecosystem.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-400 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-blue-600 transition-colors">
                      {pillar.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${pillar.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-zinc-950 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-3">
                    {pillar.tagline}
                  </p>
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-zinc-200/80 mb-6">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={pillar.href}
                  className="inline-flex items-center justify-between text-xs font-mono font-bold text-zinc-900 group-hover:text-blue-600 transition-colors pt-2 border-t border-zinc-200"
                >
                  <span>Explore {pillar.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="bg-zinc-950 rounded-3xl p-8 sm:p-10 border border-zinc-800 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-blue-400 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>Core Principle: Verifiable Proof of Work</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              We value working software and deep fundamentals over passive certifications.
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every section of this platform is designed to help you construct real engineering artifacts: documented GitHub repositories, measured performance benchmarks, reproducible tests, and secure implementations.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="#learning-domains"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              Start Exploring
            </a>
            <Link
              href="/research"
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider border border-zinc-800 transition-all"
            >
              Read Lab Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
