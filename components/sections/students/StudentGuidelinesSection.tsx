import React from "react";
import { 
  ShieldCheck, 
  FileCheck, 
  KeyRound, 
  Scale, 
  AlertTriangle 
} from "lucide-react";

export function StudentGuidelinesSection() {
  const guidelines = [
    {
      title: "Authentic Original Authorship",
      desc: "All submitted projects must represent original engineering work authored by you or your team. Any third-party libraries, frameworks, or code snippets must be explicitly cited in the repository README.",
      icon: FileCheck
    },
    {
      title: "Absolute Zero Credential Exposure",
      desc: "Repositories containing exposed API keys, private keys, database passwords, or .env files containing secrets will be rejected immediately. Practice environment variable segregation using .env.example templates.",
      icon: KeyRound
    },
    {
      title: "Explicit Team Consent & Licensing",
      desc: "If your project was built as part of a hackathon team or capstone group, confirm that all co-authors have consented to public showcasing. Include an open-source license file (MIT, Apache 2.0, BSD).",
      icon: Scale
    },
    {
      title: "Reproducible Verification Instructions",
      desc: "Provide step-by-step instructions for running the application locally, including package manager commands (npm, cargo, pip), required dependencies, and Docker setup commands if applicable.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="guidelines" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 12_QUALITY_STANDARDS"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Student Contribution &amp; Quality Guidelines
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            To ensure the integrity, security, and educational value of projects featured in our hub, all student submissions must meet these technical standards.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guidelines.map((g, idx) => {
            const Icon = g.icon;
            return (
              <div
                key={idx}
                className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-400 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-zinc-950 mb-2">
                    {g.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                    {g.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex items-start gap-4 text-xs text-zinc-600 font-sans">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Editorial &amp; Review Policy:</strong> Submission of an engineering project does not guarantee publication, endorsement, or commercial backing by Rishvin Labs. All submissions undergo objective technical review for code quality, architectural clarity, and adherence to safety guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
