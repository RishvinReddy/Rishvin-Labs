"use client";

import React from "react";
import {
  Globe,
  GitBranch,
  ExternalLink,
  Mail,
  Video,
  BookOpen,
  MessageSquare,
  Building2,
  Share2,
} from "lucide-react";
import { COMPANY } from "@/lib/business/company";

interface PresenceLink {
  title: string;
  category: string;
  url: string;
  handle: string;
  icon: React.ElementType;
  description: string;
}

const PRESENCE_LINKS: PresenceLink[] = [
  {
    title: "Personal Portfolio",
    category: "Primary Web",
    url: COMPANY.founder.portfolioUrl,
    handle: "rishvinreddy.vercel.app",
    icon: Globe,
    description: "Independent portfolio showcasing early personal projects, engineering prototypes, and live demos.",
  },
  {
    title: "GitHub Profile",
    category: "Code Repositories",
    url: COMPANY.founder.githubUrl,
    handle: "@RishvinReddy",
    icon: GitBranch,
    description: "Open-source repositories, forensic scripts, IoT firmware prototypes, and active commit records.",
  },
  {
    title: "LinkedIn Profile",
    category: "Professional Network",
    url: COMPANY.founder.linkedinUrl,
    handle: "in/rishvinreddy",
    icon: ExternalLink,
    description: "Professional updates, architectural notes, project milestones, and peer technical connections.",
  },
  {
    title: "Rishvin Labs Studio",
    category: "Technology Venture",
    url: COMPANY.canonicalUrl,
    handle: "rishvin-labs.vercel.app",
    icon: Building2,
    description: "Official technology and engineering studio website delivering software, security, and automation.",
  },
  {
    title: "Direct Founder Email",
    category: "Direct Inquiries",
    url: `mailto:${COMPANY.founder.email}`,
    handle: COMPANY.founder.email,
    icon: Mail,
    description: "Direct correspondence for technical consultations, speaking opportunities, and research inquiries.",
  },
  {
    title: "ORCID Researcher ID",
    category: "Academic Identifier",
    url: COMPANY.founder.orcidUrl,
    handle: "0009-0003-3112-2182",
    icon: BookOpen,
    description: "Persistent digital identifier distinguishing author contributions across technical and academic domains.",
  },
  {
    title: "YouTube Channel",
    category: "Technical Media",
    url: COMPANY.founder.youtubeUrl,
    handle: "@rishvinreddy",
    icon: Video,
    description: "Walkthrough demonstrations, project presentations, and technical architecture explanations.",
  },
  {
    title: "WhatsApp Direct Channel",
    category: "Instant Messaging",
    url: COMPANY.founder.whatsappUrl,
    handle: "Direct Chat",
    icon: MessageSquare,
    description: "Rapid mobile communication channel for swift technical coordination and project scheduling.",
  },
];

export function FounderPresence() {
  return (
    <section id="presence" className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Share2 className="w-3.5 h-3.5" />
            Section 13 • Verified Channels
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Professional Presence &amp; Verified Links
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            All authenticated digital profiles and communication channels for Erolla Rishvin Reddy.
            Each destination is individually verified and directly maintained.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRESENCE_LINKS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-zinc-200 p-5 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[9px] uppercase font-bold text-zinc-400">
                      {item.category}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-zinc-50 text-zinc-600 group-hover:bg-blue-50 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-base text-zinc-950 group-hover:text-blue-600 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-blue-600 font-semibold block mb-2 truncate">
                    {item.handle}
                  </span>
                  <p className="text-[11px] text-zinc-500 leading-snug">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono font-bold text-zinc-700 group-hover:text-blue-600">
                  <span>Visit Link</span>
                  <span>↗</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

