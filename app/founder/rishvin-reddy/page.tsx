import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ArrowRight, Code, ShieldCheck, Cpu, Terminal, GitBranch, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Rishvin Reddy - Founder & Lead Systems Architect | Rishvin Labs",
  description: "Rishvin Reddy is a Software Engineer, Cybersecurity Builder, IoT Developer, and the Founder of Rishvin Labs. Explore his technical profile, engineering projects, and systems architecture.",
  keywords: [
    "Rishvin Reddy",
    "Rishvin Reddy developer",
    "Rishvin Reddy software engineer",
    "Rishvin Reddy founder",
    "Founder of Rishvin Labs",
    "Rishvin Reddy cybersecurity",
    "Rishvin Reddy IoT",
    "Rishvin Reddy blockchain",
    "Rishvin Reddy web developer",
    "Rishvin Reddy projects",
    "Rishvin Reddy Woxsen University",
    "Rishvin Reddy BTech CSE",
    "Rishvin Reddy Hyderabad",
  ],
  alternates: {
    canonical: "https://rishvinreddy.vercel.app/rishvin-labs/founder/rishvin-reddy",
  }
};

export default function FounderPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 border-b border-zinc-200 bg-[#fafafa]">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* Avatar / Portrait */}
          <div className="w-full md:w-1/3">
            <div className="aspect-square relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl">
              <Image 
                src="/rishvin-reddy-founder-rishvin-labs.png"
                alt="Rishvin Reddy - Founder of Rishvin Labs"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="mt-8 space-y-4">
              <a href="https://rishvinreddy.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-xl hover:border-blue-600 hover:shadow-md transition-all group">
                <Globe className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <div className="font-bold text-zinc-900 text-sm">Personal Portfolio</div>
                  <div className="text-xs text-zinc-500">rishvinreddy.vercel.app</div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
              
              <a href="https://github.com/rishvin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-xl hover:border-blue-600 hover:shadow-md transition-all group">
                <GitBranch className="w-5 h-5 text-zinc-900" />
                <div className="flex-1">
                  <div className="font-bold text-zinc-900 text-sm">GitHub Profile</div>
                  <div className="text-xs text-zinc-500">github.com/rishvin</div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>

              <a href="https://www.linkedin.com/in/rishvinreddy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-xl hover:border-blue-600 hover:shadow-md transition-all group">
                <Globe className="w-5 h-5 text-blue-700" />
                <div className="flex-1">
                  <div className="font-bold text-zinc-900 text-sm">LinkedIn</div>
                  <div className="text-xs text-zinc-500">linkedin.com/in/rishvinreddy</div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Bio & Details */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-2">
                Rishvin Reddy
              </h1>
              <h2 className="text-xl md:text-2xl text-zinc-600 font-sans">
                Founder & Lead Systems Architect, Rishvin Labs
              </h2>
            </div>
            
            <div className="prose prose-zinc prose-lg text-zinc-600 max-w-none font-sans">
              <p>
                Rishvin Reddy is a Computer Science Engineering (B.Tech CSE) student at Woxsen University, Hyderabad, India, and the founder of Rishvin Labs. As a technology builder, his engineering expertise spans across multiple demanding domains, including full-stack software development, cybersecurity, Internet of Things (IoT), embedded systems, and intelligent AI automation.
              </p>
              <p>
                Operating with a core philosophy of "First Principles Design," Rishvin builds robust, zero-trust technology solutions. His work prioritizes security, high-performance architecture, and native resilience rather than relying on bloated dependencies or outsourced templates. 
              </p>
              <p>
                At Rishvin Labs, he serves as the Lead Systems Architect, directly overseeing the engineering of scalable web platforms, IoT sensor networks, cybersecurity vaults, and automation workflows for startups, businesses, and enterprise clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                <Code className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">Software Engineering</h3>
                <p className="text-sm text-zinc-600">Full-stack web development, API architecture, Next.js, Node.js, and complex database scaling.</p>
              </div>
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">Cybersecurity</h3>
                <p className="text-sm text-zinc-600">Zero-trust architecture, automated vulnerability scanning, immutable audit logs, and secure authentication.</p>
              </div>
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                <Cpu className="w-6 h-6 text-violet-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">IoT & Embedded</h3>
                <p className="text-sm text-zinc-600">Smart sensor arrays, decentralized mesh networks, C++/ESP32 development, and MQTT telemetry.</p>
              </div>
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                <Terminal className="w-6 h-6 text-orange-500 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">AI Automation</h3>
                <p className="text-sm text-zinc-600">Intelligent workflow automation, AI pipeline integration, and smart system processing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Heavy CTA to personal portfolio */}
      <section className="py-24 bg-zinc-950 text-white px-6 text-center border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-6">
            Explore Rishvin Reddy's Engineering Work
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            View 20+ engineering projects, technical experiments, academic research, and complete skills breakdown on his dedicated engineering portfolio.
          </p>
          <a 
            href="https://rishvinreddy.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 hover:scale-105"
          >
            <span>Explore Rishvin Reddy's Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
