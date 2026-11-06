import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { projects, getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  GitBranch,
  Layers,
  ShieldCheck,
  Cpu,
  BarChart2,
  Terminal,
  FileCheck2,
} from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, CaseStudySchema } from "@/components/seo/schema";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.slug);
  if (!project) return { title: "Project Not Found | Rishvin Labs" };
  return constructMetadata({
    title: `${project.title} Case Study | Rishvin Labs`,
    description: `${project.subtitle} - ${project.problem}`,
    canonicalUrl: `https://rishvin-labs.vercel.app/work/${project.id}`,
    keywords: [
      project.title,
      project.category,
      ...project.technologies,
      "Engineering Case Study",
      "Rishvin Labs",
    ],
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const isLive = project.status === "Production Ready" || project.status === "Working Tool";

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Systems Portfolio", url: "/work" },
          { name: project.title, url: `/work/${project.id}` },
        ]}
      />
      <CaseStudySchema
        title={project.title}
        subtitle={project.subtitle}
        description={`${project.subtitle} - ${project.problem}`}
        url={`https://rishvin-labs.vercel.app/work/${project.id}`}
        category={project.category}
        technologies={project.technologies}
      />

      {/* 1. HERO HEADER */}
      <section className="pt-40 pb-16 px-6 bg-white border-b border-zinc-200 text-left relative">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest hover:text-zinc-950 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Systems Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold text-zinc-600 uppercase tracking-widest bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
              {project.category}
            </span>
            <span
              className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                isLive
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl text-blue-600 font-serif italic mb-6">
            {project.subtitle}
          </p>
          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed font-sans mb-8">
            {project.solution}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm"
              >
                <GitBranch className="w-4 h-4" />
                <span>View Engineering Source</span>
              </a>
            )}
            <Link
              href={`/contact?source=project-${project.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-950 font-semibold text-xs uppercase tracking-wider hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
            >
              <span>Inquire About Similar Architecture</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION OVERVIEW GRID */}
      <section className="py-10 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">DEVELOPMENT STATUS</div>
            <div className="font-sans font-bold text-sm sm:text-base text-zinc-950">{project.status}</div>
          </div>
          <div>
            <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">DELIVERY TIMELINE</div>
            <div className="font-sans font-bold text-sm sm:text-base text-zinc-950">{project.timeline}</div>
          </div>
          <div>
            <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">ENGINEERING DOMAIN</div>
            <div className="font-sans font-bold text-sm sm:text-base text-zinc-950">{project.category}</div>
          </div>
          <div>
            <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">EVIDENCE AUDIT</div>
            <div className="font-sans font-bold text-xs text-emerald-700 flex items-center gap-1 mt-1">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Verified Repository</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY BODY */}
      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* 3.1 Problem Statement & Objectives */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              {"// 01_PROBLEM_AND_OBJECTIVES"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-6">
              The Engineering Challenge
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-8">
              {project.problem}
            </p>

            <h3 className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">
              Core Engineering Objectives:
            </h3>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-zinc-700 text-sm sm:text-base leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3.2 System Architecture & Component Design */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              {"// 02_SYSTEM_ARCHITECTURE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-6">
              Component-Level Architecture
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed mb-10">
              {project.architectureSummary}
            </p>

            <div className="space-y-6">
              {project.architectureLayers.map((layer, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-blue-600 shadow-xs">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-zinc-950 text-base sm:text-lg">
                      {layer.name}
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                    {layer.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layer.components.map((comp, ci) => (
                      <span
                        key={ci}
                        className="font-mono text-[11px] bg-white border border-zinc-200 px-3 py-1 rounded-md text-zinc-700 font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3.3 Technology Stack Breakdown */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              {"// 03_TECHNOLOGY_STACK"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-6">
              Technology Choices &amp; Dependencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.technologyStack.frontend && (
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-600" />
                    Frontend &amp; UI
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-zinc-800">
                    {project.technologyStack.frontend.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologyStack.backend && (
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-600" />
                    Backend &amp; Services
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-zinc-800">
                    {project.technologyStack.backend.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologyStack.embedded && (
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-600" />
                    Hardware / Embedded
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-zinc-800">
                    {project.technologyStack.embedded.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologyStack.storage && (
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-600" />
                    Storage &amp; Persistence
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-zinc-800">
                    {project.technologyStack.storage.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologyStack.security && (
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600" />
                    Security Controls
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-zinc-800">
                    {project.technologyStack.security.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologyStack.tools && (
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-zinc-600" />
                    Tooling &amp; Testing
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-zinc-800">
                    {project.technologyStack.tools.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 3.4 Security Decisions & Implementation Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
                {"// 04_SECURITY_DECISIONS"}
              </span>
              <h3 className="text-xl font-serif font-bold text-zinc-950 mb-6">
                Security Architecture
              </h3>
              <ul className="space-y-4">
                {project.securityDecisions.map((sec, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
                {"// 05_IMPLEMENTATION_DETAILS"}
              </span>
              <h3 className="text-xl font-serif font-bold text-zinc-950 mb-6">
                Engineering Highlights
              </h3>
              <ul className="space-y-4">
                {project.implementationDetails.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 leading-relaxed">
                    <Terminal className="w-4 h-4 text-zinc-950 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3.5 Measured Performance Results & Benchmarks */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              {"// 06_VERIFIED_BENCHMARKS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-4">
              Performance &amp; Test Results
            </h2>
            <p className="text-sm text-zinc-500 mb-8">
              Documented benchmarks measured under specific operational testbeds. Zero generic or fabricated figures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {project.performanceResults.map((bench, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-blue-600 mb-1">
                    {bench.value}
                  </div>
                  <div className="font-sans font-bold text-zinc-900 text-sm mb-2">
                    {bench.metric}
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                    {bench.context}
                  </p>
                  <span className="inline-block font-mono text-[9px] uppercase tracking-wider bg-white border border-zinc-200 px-2 py-0.5 rounded text-zinc-600">
                    Status: {bench.verification.replace("_", " ")}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-600">
              <span className="font-bold text-zinc-900">EVIDENCE BASE: </span>
              {project.evidenceNotes}
            </div>
          </div>

          {/* 3.6 Lessons Learned */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              {"// 07_ENGINEERING_RETROSPECTIVE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-6">
              Lessons Learned
            </h2>
            <ul className="space-y-4">
              {project.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-zinc-600 leading-relaxed">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION CTA */}
      <section className="py-20 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
            Need a similar system engineered?
          </h2>
          <p className="text-zinc-600 text-base mb-8 leading-relaxed">
            We architect and build tailored software and hardware solutions with verifiable performance and rock-solid code quality.
          </p>
          <Link
            href={`/contact?source=project-${project.id}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
          >
            <span>Discuss Your Project Requirements</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
