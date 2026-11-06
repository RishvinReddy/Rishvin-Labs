import React from "react";
import { ExternalLink } from "lucide-react";

export function StudentCommunitySection() {
  const communities = [
    {
      name: "WeMakeDevs Community",
      type: "Global Developer Community",
      focus: "Open-source education, DevOps learning, and developer events.",
      url: "https://wemakedevs.org/",
      relationship: "Verified Developer Platform"
    },
    {
      name: "HackIndia Hackathon Ecosystem",
      type: "Hackathon Community",
      focus: "Student hackathons, Web3 tracks, and technology innovation.",
      url: "https://hackindia.xyz/",
      relationship: "Verified Hackathon Partner"
    },
    {
      name: "GitHub Developer Community",
      type: "Global Open Source Hub",
      focus: "Technical discussions, open-source best practices, and code collaboration.",
      url: "https://github.community/",
      relationship: "Official Ecosystem"
    },
    {
      name: "OWASP Global Chapters",
      type: "Application Security Community",
      focus: "Local cybersecurity meetups, student chapters, and security research.",
      url: "https://owasp.org/chapters/",
      relationship: "International Non-Profit"
    }
  ];

  return (
    <section id="community" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 08_DEVELOPER_COMMUNITY"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Developer Ecosystems &amp; Community
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Connect with verified developer ecosystems, global student chapters, and open-source groups. We prioritize public, legitimate developer communities over closed groups.
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communities.map((comm) => (
            <div
              key={comm.name}
              className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-600 hover:shadow-lg transition-all group"
            >
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full inline-block mb-4">
                  {comm.relationship}
                </span>

                <h3 className="font-serif font-bold text-xl text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors">
                  {comm.name}
                </h3>
                <p className="font-mono text-xs text-zinc-500 mb-3">
                  {comm.type}
                </p>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans mb-6">
                  {comm.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <a
                  href={comm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-mono font-bold text-zinc-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore Community</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclosure on Community Platforms */}
        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 text-xs text-zinc-500 font-mono">
          <p className="mb-2 font-bold text-zinc-700">
            {"// COMMUNITY_TRANSPARENCY_NOTE:"}
          </p>
          <p>
            Rishvin Labs encourages active participation in established public technical forums. We do not host speculative private channels or charge membership fees. Official company announcements and founder research are published openly on our website and verified social profiles.
          </p>
        </div>
      </div>
    </section>
  );
}
