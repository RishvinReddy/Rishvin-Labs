"use client";

import React from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  organization: string;
  type: "Founder" | "Internship" | "Freelance" | "Community";
  typeBadgeColor: string;
  period: string;
  location: string;
  description: string;
  keyContributions: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Founder & Lead Engineer",
    organization: "Rishvin Labs",
    type: "Founder",
    typeBadgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    period: "2024 – Present",
    location: "Hyderabad, India",
    description:
      "Spearheading technical architecture, client product delivery, and engineering research across digital platforms, cybersecurity audits, and intelligent automation systems.",
    keyContributions: [
      "Designed and authored 36 specialized service groups with transparent, value-based pricing.",
      "Delivered production-ready full-stack applications using Next.js, TypeScript, and Supabase.",
      "Established the Rishvin Labs Student Hub providing open roadmaps and engineering mentorship.",
      "Maintained zero-drift codebases with verified test suites and documented system architectures.",
    ],
  },
  {
    role: "Enterprise Systems Trainee",
    organization: "Pegasystems National Internship Program",
    type: "Internship",
    typeBadgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    period: "Verified Program",
    location: "India",
    description:
      "Engaged in technical training covering enterprise application design, business process automation (BPM), and scalable system workflow orchestration.",
    keyContributions: [
      "Studied enterprise rule resolution, case management lifecycle, and integration architectures.",
      "Applied structured workflow patterns to automate repetitive business logic.",
      "Completed hands-on system modeling exercises evaluating multi-tier application scalability.",
    ],
  },
  {
    role: "Software Engineering Intern",
    organization: "Data Lake Solutions",
    type: "Internship",
    typeBadgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    period: "Technical Internship",
    location: "India",
    description:
      "Assisted in backend software development, database query optimization, and REST API endpoint implementations for data-intensive client requirements.",
    keyContributions: [
      "Constructed RESTful API routes handling structured JSON payload serialization.",
      "Wrote relational database queries and assisted in schema migration testing.",
      "Contributed clean code documentation and participated in sprint code reviews.",
    ],
  },
  {
    role: "Independent Software Contractor",
    organization: "Freelance & Technical Consulting",
    type: "Freelance",
    typeBadgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    period: "2023 – Present",
    location: "Remote / Hybrid",
    description:
      "Contracted by startup founders and small businesses to deliver custom landing pages, e-commerce storefronts, and automated workflow scripts.",
    keyContributions: [
      "Built responsive, accessible web portals achieving 90+ Lighthouse performance scores.",
      "Integrated third-party payment gateways (Razorpay, Stripe) with webhook verification.",
      "Resolved legacy CSS/JS bugs and optimized Core Web Vitals for production websites.",
    ],
  },
];

export function FounderExperience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Section 07 • Professional Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Experience &amp; Professional Development
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            A structured record of entrepreneurial leadership, corporate technical internships,
            and independent client software contracting.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-xs hover:border-zinc-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-zinc-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${exp.typeBadgeColor}`}
                    >
                      {exp.type}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950">
                    {exp.role}
                  </h3>
                  <span className="font-sans font-semibold text-sm text-blue-600">
                    {exp.organization}
                  </span>
                </div>

                <div className="font-mono text-xs font-bold text-zinc-500 bg-zinc-50 px-3 py-1.5 rounded-xl border border-zinc-200/60 self-start sm:self-auto">
                  {exp.period}
                </div>
              </div>

              <p className="text-sm text-zinc-600 font-sans leading-relaxed mb-4">
                {exp.description}
              </p>

              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-400 block mb-2">
                  Key Responsibilities &amp; Outcomes:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
                  {exp.keyContributions.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
