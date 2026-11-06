import React from "react";
import { 
  ExternalLink, 
  AlertCircle 
} from "lucide-react";
import { VERIFIED_OPPORTUNITIES } from "@/data/students-hub";

export function StudentOpportunitiesSection() {
  const statusStyles = {
    "Active Platform": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Annual Program": "bg-blue-50 text-blue-700 border-blue-200",
    "Verified Directory": "bg-purple-50 text-purple-700 border-purple-200"
  };

  return (
    <section id="verified-opportunities" className="py-24 px-6 bg-[#fafafa] border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 05_VERIFIED_OPPORTUNITIES"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Hackathons, Fellowships &amp; Open-Source Programs
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Curated, legitimate global student opportunities with verified application destinations. We do not maintain speculative job boards or invent unverified deadlines.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {VERIFIED_OPPORTUNITIES.map((opp) => (
            <div
              key={opp.id}
              className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-400 hover:shadow-lg transition-all"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    {opp.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold border ${statusStyles[opp.status]}`}>
                    {opp.status}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-zinc-950 mb-2">
                  {opp.title}
                </h3>
                <p className="font-mono text-xs font-semibold text-blue-600 mb-6">
                  {opp.organization}
                </p>

                {/* Details list */}
                <div className="space-y-3 mb-6 bg-zinc-50 rounded-2xl p-4 border border-zinc-100 text-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">
                      Eligibility
                    </span>
                    <span className="text-zinc-700">{opp.eligibility}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-200/60">
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-400">
                      Participation Mode
                    </span>
                    <span className="font-medium text-zinc-800">{opp.mode}</span>
                  </div>

                  <div className="pt-2 border-t border-zinc-200/60">
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">
                      Cycle / Timeline
                    </span>
                    <span className="font-medium text-zinc-800">{opp.cycleOrDeadline}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed mb-6 font-sans">
                  {opp.verificationNotes}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <a
                  href={opp.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Apply on Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Policy Box */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 text-xs text-amber-900 leading-relaxed font-sans">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-mono font-bold uppercase tracking-wider block mb-1">
              Verification Policy &amp; Anti-Scam Standard
            </span>
            <span>
              All listed programs are verified through primary organizational portals (Google Open Source, The Linux Foundation, MLH, GitHub Education). We never charge application fees, promise guaranteed placement, or endorse third-party intermediaries. Always confirm specific deadlines and guidelines on the official host websites.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
