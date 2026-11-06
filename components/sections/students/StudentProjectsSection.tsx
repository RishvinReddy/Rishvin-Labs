"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Boxes 
} from "lucide-react";
import { PROJECT_CHALLENGES } from "@/data/students-hub";

export function StudentProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Software Engineering", "Cybersecurity", "Digital Forensics", "Internet of Things", "Blockchain Engineering", "Cloud & DevOps"];

  const filteredChallenges = activeFilter === "All"
    ? PROJECT_CHALLENGES
    : PROJECT_CHALLENGES.filter(c => c.domain.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(c.domain.toLowerCase()));

  const difficultyColors = {
    Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Intermediate: "bg-blue-50 text-blue-700 border-blue-200",
    Advanced: "bg-purple-50 text-purple-700 border-purple-200"
  };

  return (
    <section id="project-challenges" className="py-24 px-6 bg-[#fafafa] border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 03_HANDS_ON_CHALLENGES"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Build Real Engineering Projects
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Move past toy tutorials. Build verifiable engineering projects modeled after production systems, complete with problem statements, architectural constraints, and testable deliverables.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all shrink-0 cursor-pointer ${
                activeFilter === cat
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-zinc-400 hover:shadow-xl transition-all"
            >
              <div>
                {/* Top Badge & Difficulty */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {challenge.domain}
                  </span>
                  <span className={`px-3 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase border ${difficultyColors[challenge.difficulty]}`}>
                    {challenge.difficulty}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-zinc-950 mb-4">
                  {challenge.title}
                </h3>

                {/* Problem Statement */}
                <div className="mb-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                  <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                    Problem Statement
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {challenge.problemStatement}
                  </p>
                </div>

                {/* Technical Objectives */}
                <div className="mb-6">
                  <h4 className="font-mono text-xs font-bold text-zinc-950 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-blue-600" />
                    <span>Technical Objectives</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {challenge.technicalObjectives.map((obj, i) => (
                      <li key={i} className="text-xs text-zinc-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suggested Stack */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2 flex items-center gap-1">
                    <Boxes className="w-3 h-3 text-purple-600" />
                    <span>Suggested Stack</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {challenge.suggestedStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 font-mono text-[11px] border border-zinc-200/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expected Deliverables */}
                <div className="mb-6 bg-blue-50/40 rounded-2xl p-4 border border-blue-100">
                  <span className="font-mono text-[10px] font-bold text-blue-800 uppercase tracking-wider block mb-2">
                    Expected Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {challenge.expectedDeliverables.map((deliv, i) => (
                      <li key={i} className="text-xs text-zinc-700 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reference Project if applicable */}
                {challenge.referenceProjectId && (
                  <div className="mb-6 p-3.5 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase block">
                        Rishvin Labs Reference System
                      </span>
                      <span className="font-semibold text-zinc-900">
                        {challenge.referenceProjectName}
                      </span>
                    </div>
                    <Link
                      href={`/work/${challenge.referenceProjectId}`}
                      className="text-blue-600 hover:text-blue-800 font-mono font-bold flex items-center gap-1"
                    >
                      <span>Inspect Architecture</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                <Link
                  href={`/contact?service=challenge-${challenge.id}&source=students-challenges`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                >
                  <span>Submit for Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono text-[11px] text-zinc-400">
                  Self-guided Open Challenge
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Distinction Banner */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 text-xs text-zinc-600 font-sans leading-relaxed">
          <p className="font-mono font-bold text-zinc-950 uppercase mb-1">
            {"// CLASSIFICATION STANDARD"}
          </p>
          <p>
            We strictly differentiate between <strong>Student Challenges</strong> (educational implementations), <strong>Research Prototypes</strong> (experimental proof-of-concepts), and <strong>Production Software</strong> (commercially deployed client systems). Students are encouraged to document their projects with transparent architectural tradeoffs and measured benchmark data.
          </p>
        </div>
      </div>
    </section>
  );
}
