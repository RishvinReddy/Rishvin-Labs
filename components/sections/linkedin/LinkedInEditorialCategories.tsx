"use client";

import React from "react";
import {
  Code2,
  Rocket,
  Shield,
  Layers,
  FlaskConical,
  Users2,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: Code2,
    name: "Engineering Updates",
    description: "Deep dives into production codebases, architecture trade-offs, refactoring notes, and system optimizations.",
    tag: "#Engineering",
  },
  {
    icon: Rocket,
    name: "Product Development",
    description: "Milestones and progress logs from concept validation to live MVP deployment and user onboarding.",
    tag: "#ProductDev",
  },
  {
    icon: Shield,
    name: "Cybersecurity & Hardening",
    description: "Vulnerability analysis, threat mitigation techniques, secure auth patterns, and digital forensics methodologies.",
    tag: "#CyberSecurity",
  },
  {
    icon: Layers,
    name: "Software Engineering",
    description: "Next.js conventions, typed TypeScript schemas, cloud containerization, and automated CI/CD workflows.",
    tag: "#SoftwareEngineering",
  },
  {
    icon: FlaskConical,
    name: "Research & Experimentation",
    description: "Evaluating emerging technologies: intelligent AI agents, IoT sensor meshes, and cryptographic state machines.",
    tag: "#TechResearch",
  },
  {
    icon: Users2,
    name: "Community & Events",
    description: "Hackathon mentorships, engineering workshops, student discussions, and developer ecosystem participation.",
    tag: "#DeveloperCommunity",
  },
];

export function LinkedInEditorialCategories() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
            Editorial Taxonomy
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            What We Share on LinkedIn
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Our published commentary is strictly rooted in real engineering challenges and practical software delivery.
            Here are the primary topics covered across our updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-sans font-bold text-zinc-950 mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
