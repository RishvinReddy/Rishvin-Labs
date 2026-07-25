"use client";

import React, { useState } from "react";
import { StudentsHero } from "@/components/sections/students-hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StudentServicesSection } from "@/components/sections/student-services-section";
import { StudentPackagesSection } from "@/components/sections/student-packages-section";
import Link from "next/link";
import { 
  ArrowRight, 
  Briefcase, 
  Check, 
  Send, 
  MessageSquare, 
  CheckSquare, 
  BarChart3, 
  Sparkles 
} from "lucide-react";

export default function StudentsPage() {
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

      {/* 3. STUDENT PACKAGES */}
      <StudentPackagesSection />

      {/* 4. STUDENT SERVICES */}
      <StudentServicesSection />

      {/* 5. CTA */}
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
