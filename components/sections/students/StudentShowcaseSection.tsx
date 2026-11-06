import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export function StudentShowcaseSection() {
  const criteria = [
    {
      title: "Public GitHub Repository",
      description: "Code must be publicly accessible under an open-source license (MIT, Apache 2.0, or GPL)."
    },
    {
      title: "Comprehensive Documentation",
      description: "README detailing architectural decisions, setup instructions, prerequisites, and live demo links."
    },
    {
      title: "Zero Credential Exposure",
      description: "Strict audit ensuring zero exposed API keys, private tokens, passwords, or sensitive environment variables."
    },
    {
      title: "Original Engineering Work",
      description: "Genuine projects built by students or teams, with attribution for third-party libraries and frameworks."
    }
  ];

  return (
    <section id="student-showcase" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 06_ENGINEERING_SHOWCASE"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Student Engineering Showcase
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            A dedicated platform highlighting exceptional student engineering projects, open-source utilities, and technical research prototypes.
          </p>
        </div>

        {/* Showcase Intake & Empty State Card */}
        <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 sm:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xs">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              SHOWCASE SUBMISSIONS OPEN
            </span>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-zinc-950 mb-4">
              Have you built an exceptional engineering project?
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed mb-8">
              We review and feature outstanding student projects across full-stack applications, cybersecurity tools, digital forensics parsers, embedded IoT systems, and blockchain protocols.
            </p>

            <Link
              href="/contact?service=student-showcase-submission&source=students-showcase"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
            >
              <span>Submit Your Project for Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quality Standards Grid */}
          <div className="pt-10 border-t border-zinc-200">
            <h4 className="text-center font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-8">
              Technical Review Criteria &amp; Standards
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {criteria.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-950 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{c.title}</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notice on Authenticity */}
        <div className="text-center">
          <p className="font-mono text-xs text-zinc-400">
            {"// EDITORIAL_POLICY: We only showcase verified student submissions with explicit consent. No simulated profiles or fabricated testimonials."}
          </p>
        </div>
      </div>
    </section>
  );
}
