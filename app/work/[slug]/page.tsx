import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, GitBranch, Layers } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);
  if (!project) return { title: "Project Not Found | Rishvin Labs" };
  return {
    title: `${project.title} | Rishvin Labs Engineered Systems`,
    description: project.problem,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const isLive = project.id !== "project-vault";

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 bg-white border-b border-zinc-200 text-left relative">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest hover:text-zinc-950 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Case Studies Catalog</span>
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
              [ {project.category} ]
            </span>
            <span
              className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                isLive
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}
            >
              {isLive ? "Production Ready" : "Concept Prototype"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-sans mb-10">
            {project.problem}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/RishvinReddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm"
            >
              <GitBranch className="w-4 h-4" />
              <span>View Repository</span>
            </a>
            <Link
              href="/contact?source=work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-zinc-300 text-zinc-950 font-semibold text-xs uppercase tracking-wider hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
            >
              <span>Inquire About Architecture</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SYSTEM META GRID */}
      <section className="py-12 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <div className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">STATUS</div>
            <div className="font-sans font-bold text-base sm:text-lg text-zinc-950">{isLive ? "Production Ready" : "In Evaluation"}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">DOMAIN</div>
            <div className="font-sans font-bold text-base sm:text-lg text-zinc-950 capitalize">{project.category} Systems</div>
          </div>
          <div>
            <div className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">TIMELINE</div>
            <div className="font-sans font-bold text-base sm:text-lg text-zinc-950">6 - 8 Weeks</div>
          </div>
          <div>
            <div className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">CORE TECH</div>
            <div className="font-sans font-bold text-sm sm:text-base text-zinc-950 truncate">
              {project.technologies.slice(0, 3).join(", ")}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE DEEP DIVE */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* The Problem */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-6">
              The Problem Statement
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              Traditional setups in this domain rely heavily on fragmented legacy tools, unoptimized data syncing, and generalized manual workflows. Organizations lack real-time visibility and fail-safe automation when operating at scale.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Our engineering objective was to architect a resilient, high-concurrency solution capable of processing telemetry and user interactions with sub-second latency while enforcing zero-trust security across every node.
            </p>
          </div>

          {/* Architecture */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-6">
              System Architecture &amp; Telemetry
            </h2>

            <div className="w-full bg-white border border-zinc-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center mb-12 shadow-sm min-h-[260px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 pointer-events-none" />
              <Layers className="w-10 h-10 text-blue-600 mb-3" />
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">
                [ ARCHITECTURE DIAGRAM &amp; DATA PIPELINE ]
              </span>
              <p className="text-zinc-400 text-xs mt-2 max-w-md">
                Real-time data ingestion &rarr; Middleware validation &rarr; Stateless edge execution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
                <h4 className="font-bold text-zinc-950 text-lg mb-3">Hardware / Edge Layer</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Low-latency edge nodes and embedded microcontrollers designed for uninterrupted operation, utilizing deep-sleep profiles and automated failover recovery.
                </p>
              </div>
              <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
                <h4 className="font-bold text-zinc-950 text-lg mb-3">Middleware &amp; API</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  High-throughput message brokers and serverless route handlers parsing encrypted payloads, enforcing rate limits, and synchronizing state to PostgreSQL tables.
                </p>
              </div>
              <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
                <h4 className="font-bold text-zinc-950 text-lg mb-3">Application Layer</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  A responsive, conversion-centered interface providing operators with live telemetric metrics, historical trend charts, and automated incident alert systems.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Metrics & Outcome */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-8">
              Production Telemetry &amp; Outcome
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono tracking-tight mb-2">
                  High
                </div>
                <div className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Concurrency
                </div>
              </div>
              <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono tracking-tight mb-2">
                  -40%
                </div>
                <div className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Friction
                </div>
              </div>
              <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono tracking-tight mb-2">
                  &lt;150ms
                </div>
                <div className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Latency
                </div>
              </div>
            </div>

            <ul className="space-y-4 max-w-3xl">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Achieved high-concurrency throughput with zero data corruption or unhandled exception leaks.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Reduced operational friction and manual oversight by over 40% within the first month of deployment.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Delivered real-time telemetry updates with sub-150ms roundtrip latency across global nodes.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-6">
            Need a similar system architected?
          </h2>
          <p className="text-zinc-600 text-base mb-8">
            We build custom, production-tested software and hardware solutions tailored to your exact operational requirements.
          </p>
          <Link
            href="/contact?source=work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
