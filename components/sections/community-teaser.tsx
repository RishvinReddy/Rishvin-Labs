"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Microscope, BookOpen } from "lucide-react";

export function CommunityTeaser() {
  const cards = [
    {
      title: "Student Mentorship & Hackathons",
      desc: "Empowering university engineers with hands-on hardware grants, hackathon mentorship, and career-accelerating system design workshops.",
      link: "/students",
      cta: "[ EXPLORE_STUDENT_HUB ]",
      icon: GraduationCap,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Experimental R&D & IoT Labs",
      desc: "Our open innovation sandbox where we build embedded ESP32 sensor networks, autonomous telemetry protocols, and AI logic workflows.",
      link: "/labs",
      cta: "[ VIEW_RESEARCH_LABS ]",
      icon: Microscope,
      color: "text-violet-600 bg-violet-50 border-violet-200",
      border: "hover:border-violet-500/50"
    },
    {
      title: "Engineering Insights & Journal",
      desc: "Deep technical breakdowns, architectural retrospectives, and zero-trust security tutorials authored directly by our engineering team.",
      link: "/journal",
      cta: "[ READ_JOURNAL ]",
      icon: BookOpen,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      border: "hover:border-emerald-500/50"
    }
  ];

  return (
    <section className="py-24 border-t border-zinc-200 bg-zinc-50/60 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="tech-badge mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>OPEN ENGINEERING COMMUNITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Research, Mentorship &amp; Open Knowledge.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-sans leading-relaxed">
            We believe in elevating the next generation of engineers and sharing our architectural blueprints with the broader tech community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group transition-all duration-300`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-sm ${card.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-sans mb-8">
                    {card.desc}
                  </p>
                </div>

                <Link
                  href={card.link}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-zinc-900 group-hover:text-blue-600 transition-colors pt-4 border-t border-zinc-100"
                >
                  <span>{card.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
