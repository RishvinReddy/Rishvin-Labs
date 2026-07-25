"use client";

import React, { useState } from "react";
import { StudentsHero } from "@/components/sections/students-hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { 
  ArrowRight, 
  Award, 
  Map, 
  FolderGit2, 
  Briefcase, 
  Users, 
  Check, 
  Send, 
  MessageSquare, 
  CheckSquare, 
  BarChart3, 
  Sparkles 
} from "lucide-react";

export default function StudentsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [chatInput, setChatInput] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([
    "How do we structure our hackathon pitch?",
    "Keep it to 3 core slides: Problem, Architecture Demo, Impact."
  ]);
  const [todos, setTodos] = useState<{ text: string; done: boolean }[]>([
    { text: "Finish system architecture diagram", done: true },
    { text: "Deploy Next.js edge frontend", done: true },
    { text: "Prepare 2-minute live demo", done: false }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages([...messages, chatInput]);
    setChatInput("");
  };

  const toggleTodo = (index: number) => {
    setTodos(prev => prev.map((t, i) => i === index ? { ...t, done: !t.done } : t));
  };

  const tracks = [
    {
      id: "hackathons",
      num: "01",
      title: "Hackathons",
      subtitle: "Code & Innovate & Pitch",
      desc: "Build & Compete. Compete in global hackathons with confidence, battle-tested system architecture, and winning presentation decks.",
      icon: Award,
      color: "bg-blue-600",
      category: "compete"
    },
    {
      id: "roadmaps",
      num: "02",
      title: "Roadmaps",
      subtitle: "Guides & Paths & Skills",
      desc: "Learn Faster. Follow battle-tested engineering roadmaps to mastering full-stack web, embedded IoT, and zero-trust security.",
      icon: Map,
      color: "bg-violet-600",
      category: "learn"
    },
    {
      id: "cyber",
      num: "03",
      title: "Cybersecurity Engineering",
      subtitle: "Deploy & Showcase & Shine",
      desc: "Portfolio Ready. Build real-world security tools, password vaults, and encryption audits that recruiters and hiring managers love.",
      icon: FolderGit2,
      color: "bg-emerald-600",
      category: "build"
    },
    {
      id: "opportunities",
      num: "04",
      title: "Opportunities",
      subtitle: "Apply & Interview & Secure",
      desc: "Internships & Jobs. Discover and apply to exclusive tier-1 roles and research grants tailored specifically for ambitious student engineers.",
      icon: Briefcase,
      color: "bg-blue-600",
      category: "compete"
    },
    {
      id: "mentorship",
      num: "05",
      title: "Career Mentorship",
      subtitle: "Audit & Refine & Grow",
      desc: "1-on-1 GitHub hygiene reviews, portfolio audits, and mock technical architectural interviews with principal studio engineers.",
      icon: Users,
      color: "bg-violet-600",
      category: "learn"
    }
  ];

  const filteredTracks = activeTab === "all" ? tracks : tracks.filter(t => t.category === activeTab);

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO — iPad with floating widgets */}
      <StudentsHero />

      {/* 2. REVENUE / STRIP MODEL */}

      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-zinc-200 font-mono text-center">
          {[
            { num: "01", title: "Hackathons", desc: "Compete" },
            { num: "02", title: "Roadmaps", desc: "Pathways" },
            { num: "03", title: "Projects", desc: "Portfolios" },
            { num: "04", title: "Internships", desc: "Opportunities" },
            { num: "05", title: "Career Growth", desc: "Mentorship" }
          ].map((item, idx) => (
            <div key={idx} className="p-6">
              <div className="text-[10px] font-bold text-blue-600 mb-1">{item.num}</div>
              <div className="text-sm font-bold text-zinc-900 font-sans">{item.title}</div>
              <div className="text-xs text-zinc-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DISCOVER SOLUTIONS & THE 5 ACADEMIC TRACKS */}
      <section id="tracks" className="py-24 px-6 bg-[#fafafa] flex-1">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 font-mono text-xs text-zinc-600 uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Service Catalogue</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950">
              Discover Solutions.
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Select a domain below to explore tailored academic tracks, engineering resources, and career acceleration.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: "all", label: "All Tracks (5)" },
                { id: "compete", label: "Compete & Win" },
                { id: "learn", label: "Learn & Guide" },
                { id: "build", label: "Build & Deploy" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab.id
                      ? "bg-zinc-950 text-white shadow-sm"
                      : "bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TRACKS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTracks.map((tr) => {
              const IconComp = tr.icon;
              return (
                <div
                  key={tr.id}
                  className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-blue-600 transition-all group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-mono text-xs font-bold text-zinc-400">
                        [ {tr.num} ]
                      </span>
                      <div className={`w-12 h-12 rounded-2xl ${tr.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
                      {tr.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                      {tr.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-zinc-100 flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-zinc-800">{tr.subtitle}</span>
                    <Link
                      href="/contact"
                      className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
            Ready to accelerate your engineering career?
          </h2>
          <p className="text-zinc-600 text-base mb-8">
            Connect with our engineering leads for mentorship, project reviews, or hackathon sponsorships.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
          >
            <span>Initialize Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
