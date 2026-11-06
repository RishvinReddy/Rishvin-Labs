"use client";

import React, { useState } from "react";
import { 
  Milestone, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Wrench, 
  Sparkles, 
  Layers 
} from "lucide-react";
import { LEARNING_PATHWAYS } from "@/data/students-hub";

export function StudentPathwaysSection() {
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>(LEARNING_PATHWAYS[0].id);

  const activePathway = LEARNING_PATHWAYS.find((p) => p.id === selectedPathwayId) || LEARNING_PATHWAYS[0];

  return (
    <section id="pathways" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 02_PRACTICAL_ROADMAPS"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Technical Learning Pathways
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Structured, step-by-step curriculums moving from foundational prerequisites to production capstones. Grounded in official documentation and practical exercises.
          </p>
        </div>

        {/* Pathway Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-12 border-b border-zinc-200">
          {LEARNING_PATHWAYS.map((pathway) => {
            const isSelected = pathway.id === selectedPathwayId;
            return (
              <button
                key={pathway.id}
                onClick={() => setSelectedPathwayId(pathway.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/20"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950"
                }`}
              >
                <span>{pathway.domain}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pathway Details Card */}
        <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 sm:p-12 mb-12">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold uppercase mb-4">
              <Milestone className="w-3.5 h-3.5" />
              <span>{activePathway.domain} Roadmap</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 mb-3">
              {activePathway.title}
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed mb-4">
              {activePathway.overview}
            </p>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span className="font-bold text-zinc-700">Target Audience:</span> {activePathway.targetAudience}
            </p>
          </div>

          {/* 3 Stages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activePathway.stages.map((stage) => {
              const badgeColors = {
                Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
                Intermediate: "bg-blue-50 text-blue-700 border-blue-200",
                Advanced: "bg-purple-50 text-purple-700 border-purple-200"
              };

              return (
                <div
                  key={stage.level}
                  className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-zinc-400 transition-all"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase border ${badgeColors[stage.level]}`}>
                        {stage.level}
                      </span>
                      <div className="flex items-center gap-1 text-zinc-400 font-mono text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{stage.duration}</span>
                      </div>
                    </div>

                    <h4 className="font-serif font-bold text-xl text-zinc-950 mb-4">
                      {stage.title}
                    </h4>

                    {/* Prerequisites */}
                    <div className="mb-6 pb-4 border-b border-zinc-100">
                      <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                        Prerequisites
                      </span>
                      <ul className="space-y-1">
                        {stage.prerequisites.map((p, i) => (
                          <li key={i} className="text-xs text-zinc-600">
                            • {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Concepts */}
                    <div className="mb-6">
                      <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-blue-600" />
                        <span>Core Theoretical & Architectural Concepts</span>
                      </span>
                      <ul className="space-y-1.5">
                        {stage.coreConcepts.map((concept, i) => (
                          <li key={i} className="text-xs text-zinc-700 leading-snug flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            <span>{concept}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Exercises */}
                    <div className="mb-6 bg-zinc-50 rounded-xl p-4 border border-zinc-200/60">
                      <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">
                        Hands-on Exercises
                      </span>
                      <ul className="space-y-2">
                        {stage.practicalExercises.map((ex, i) => (
                          <li key={i} className="text-xs text-zinc-700 leading-snug flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div className="mb-6 flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                        <Wrench className="w-3 h-3" />
                        <span>Tools:</span>
                      </span>
                      {stage.suggestedTools.map((tool, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-mono text-[10px]">
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Capstone Challenge Box */}
                    <div className="mb-6 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                      <div className="flex items-center gap-1.5 text-amber-800 font-mono text-[10px] font-bold uppercase mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Stage Capstone Challenge</span>
                      </div>
                      <p className="text-xs text-zinc-800 font-medium leading-snug">
                        {stage.capstoneChallenge}
                      </p>
                    </div>
                  </div>

                  {/* Documentation Link */}
                  <div className="pt-4 border-t border-zinc-100">
                    <a
                      href={stage.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span className="truncate mr-2">{stage.documentationLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pathway Note */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-zinc-500 font-mono">
            Want individualized feedback on your implementation? Submit your GitHub repository for technical code review through our mentorship advisory channels.
          </p>
        </div>
      </div>
    </section>
  );
}
