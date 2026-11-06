import React from "react";
import { 
  ExternalLink 
} from "lucide-react";
import { DEVELOPER_TOOLS } from "@/data/students-hub";

export function StudentToolsSection() {
  const pricingColors = {
    "Free & Open Source": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Free Tier Available": "bg-blue-50 text-blue-700 border-blue-200",
    "Free for Students": "bg-purple-50 text-purple-700 border-purple-200"
  };

  return (
    <section id="dev-tools" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 10_DEVELOPER_TOOLCHAIN"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Essential Developer Tools &amp; Environment
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            A developer is only as effective as their environment. We recommend lightweight, scriptable, and open tools that respect privacy and enable deep technical introspection.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DEVELOPER_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-600 hover:shadow-lg transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase font-bold text-zinc-400">
                    {tool.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border ${pricingColors[tool.pricing]}`}>
                    {tool.pricing}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans mb-6">
                  {tool.purpose}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <a
                  href={tool.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-mono font-bold text-zinc-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Official Download</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pro-Tip Box */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 text-xs text-zinc-600 font-sans leading-relaxed">
          <p className="font-mono font-bold text-zinc-950 uppercase mb-1">
            {"// WORKSTATION_HYGIENE_STANDARD"}
          </p>
          <p>
            Learn your tools through the command line before relying on automated IDE plugins. Mastering Git CLI, basic Linux shell pipelines (grep, awk, xargs), and packet analyzers builds an intuition that transcends changes in graphical user interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
