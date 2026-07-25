"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  CheckCircle, 
  MessageCircle, 
  Sparkles, 
  Loader2 
} from "lucide-react";

export default function RecommendationPage() {
  const [role, setRole] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  
  const [status, setStatus] = useState<"form" | "loading" | "result">("form");
  const [loadingStepText, setLoadingStepText] = useState<string>("Analyzing constraints...");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlRole = params.get("role");
      if (urlRole) setRole(urlRole);
    }
  }, []);

  const roles = [
    { id: "student", title: "Student" },
    { id: "startup", title: "Startup" },
    { id: "business", title: "Small Business" },
    { id: "creator", title: "Creator" },
    { id: "developer", title: "Developer" },
    { id: "professional", title: "Professional" },
    { id: "academic", title: "Academic" },
    { id: "custom", title: "Enterprise / Custom" }
  ];

  const recommendationLogic: Record<string, {
    services: { name: string; price: string }[];
    bundle: { name: string; price: string };
  }> = {
    student: {
      services: [
        { name: "ATS Resume Optimization", price: "₹399" },
        { name: "LinkedIn Profile Audit", price: "₹399" },
        { name: "GitHub Portfolio Cleanup", price: "₹399" }
      ],
      bundle: { name: "Placement Readiness Package", price: "₹999" }
    },
    startup: {
      services: [
        { name: "High-Conversion Landing Page", price: "₹999" },
        { name: "Technical Architecture Consultation", price: "₹499" },
        { name: "WhatsApp Automation Flow", price: "₹199" }
      ],
      bundle: { name: "Startup Launchpad Package", price: "₹1,499" }
    },
    business: {
      services: [
        { name: "Modern Business Website", price: "₹999" },
        { name: "Google Business Profile Setup", price: "₹199" },
        { name: "Direct WhatsApp Booking Flow", price: "₹299" }
      ],
      bundle: { name: "Local Business Starter", price: "₹999" }
    },
    creator: {
      services: [
        { name: "Bespoke Creator Portfolio", price: "₹999" },
        { name: "Bio & Link-in-Bio Optimization", price: "₹199" },
        { name: "Social Media Brand Audit", price: "₹299" }
      ],
      bundle: { name: "Creator Elevation Starter", price: "₹799" }
    },
    developer: {
      services: [
        { name: "GitHub Hygiene Setup", price: "₹299" },
        { name: "Engineering README Creation", price: "₹199" },
        { name: "Next.js Portfolio Deployment", price: "₹299" }
      ],
      bundle: { name: "Developer Showcase Package", price: "₹499" }
    },
    professional: {
      services: [
        { name: "Senior Engineering Resume Review", price: "₹199" },
        { name: "LinkedIn Authority Optimization", price: "₹499" },
        { name: "Mock Architectural Interview", price: "₹299" }
      ],
      bundle: { name: "Executive Job Ready Package", price: "₹999" }
    },
    academic: {
      services: [
        { name: "IoT Capstone Guidance", price: "₹299" },
        { name: "System Architecture Documentation", price: "₹499" },
        { name: "Production UML Diagrams", price: "₹499" }
      ],
      bundle: { name: "Academic Capstone Package", price: "₹799" }
    },
    custom: {
      services: [
        { name: "Custom Full-Stack Web App", price: "Starts ₹4,999" },
        { name: "Custom LLM & AI Integration", price: "Starts ₹4,999" },
        { name: "Enterprise Automation Pipeline", price: "Starts ₹4,999" }
      ],
      bundle: { name: "Enterprise Bespoke Architecture", price: "₹999" }
    }
  };

  const handleCompute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !goal || !budget || !timeline) return;

    setStatus("loading");
    const steps = [
      "Mapping architectural dependencies...",
      "Calculating optimal bundle tokens...",
      "Finalizing engineering parameters..."
    ];
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < steps.length) {
        setLoadingStepText(steps[idx]);
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    setTimeout(() => {
      clearInterval(interval);
      setStatus("result");
    }, 2400);
  };

  const currentRec = recommendationLogic[role] || recommendationLogic.custom;
  const whatsappMsg = `Hi Rishvin Labs! 👋\nI'd like to get started with a project.\nHere are my details:\n*Role:* ${role}\n*Goal:* ${goal}\n*Budget:* ${budget}\n*Timeline:* ${timeline}\n\n*I'm interested in:* ${currentRec.bundle.name}\nCan we discuss this?`;
  const whatsappUrl = `https://wa.me/919848723235?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-36 pb-24 px-6 flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* FORM STATE */}
          {status === "form" && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fafafa] border border-zinc-200 font-mono text-xs text-zinc-600 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <span>System Initialization</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 tracking-tight">
                  Project Parameters
                </h1>
                <p className="text-sm sm:text-base text-zinc-600 max-w-md mx-auto">
                  Configure your requirements below to engineer a bespoke technical architecture.
                </p>
              </div>

              <form onSubmit={handleCompute} className="space-y-5">
                <div>
                  <label className="block font-semibold text-xs text-zinc-700 uppercase tracking-wider mb-2 font-mono">
                    1. Role Identifier
                  </label>
                  <select
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#fafafa] border border-zinc-200 text-sm font-semibold text-zinc-900 outline-none focus:bg-white focus:border-blue-600 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select your role...</option>
                    {roles.map((r) => (
                      <option key={r.id} value={r.id}>{r.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-xs text-zinc-700 uppercase tracking-wider mb-2 font-mono">
                    2. Primary Objective
                  </label>
                  <select
                    required
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#fafafa] border border-zinc-200 text-sm font-semibold text-zinc-900 outline-none focus:bg-white focus:border-blue-600 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select an objective...</option>
                    <option value="Get placement">Secure placement / tier-1 engineering role</option>
                    <option value="Build online presence">Establish authoritative online presence</option>
                    <option value="Launch startup">Launch high-conversion startup MVP</option>
                    <option value="Improve branding">Enhance executive personal branding</option>
                    <option value="Build a website">Develop bespoke full-stack website</option>
                    <option value="Project help">Academic capstone / IoT system design</option>
                    <option value="Automate workflow">Automate operations / AI pipeline</option>
                    <option value="Other">Other technical objective</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-xs text-zinc-700 uppercase tracking-wider mb-2 font-mono">
                    3. Budget Allocation
                  </label>
                  <select
                    required
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#fafafa] border border-zinc-200 text-sm font-semibold text-zinc-900 outline-none focus:bg-white focus:border-blue-600 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select budget range...</option>
                    <option value="₹399–₹999">₹399 – ₹999</option>
                    <option value="₹1,000–₹5,000">₹1,000 – ₹5,000</option>
                    <option value="₹5,000–₹25,000">₹5,000 – ₹25,000</option>
                    <option value="₹25,000–₹1,00,000">₹25,000 – ₹1,00,000</option>
                    <option value="Custom Enterprise">Custom Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-xs text-zinc-700 uppercase tracking-wider mb-2 font-mono">
                    4. Delivery Timeline
                  </label>
                  <select
                    required
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#fafafa] border border-zinc-200 text-sm font-semibold text-zinc-900 outline-none focus:bg-white focus:border-blue-600 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select timeline...</option>
                    <option value="Urgent (ASAP)">Urgent (ASAP)</option>
                    <option value="1 Week">1 Week</option>
                    <option value="2-4 Weeks">2-4 Weeks</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-md shadow-zinc-950/10"
                  >
                    <span>Compute Recommendation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* LOADING STATE */}
          {status === "loading" && (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center text-blue-600 shadow-inner">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
              <div className="space-y-2">
                <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Computing System Architecture...
                </div>
                <div className="text-xl font-serif font-bold text-zinc-950">
                  {loadingStepText}
                </div>
              </div>
            </div>
          )}

          {/* RESULT STATE */}
          {status === "result" && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-zinc-950">
                  System Recommendation
                </h2>
                <p className="text-sm text-zinc-600">
                  Based on your parameters, we suggest the following architecture and bundle.
                </p>
              </div>

              {/* Recommended Components */}
              <div className="bg-[#fafafa] border border-zinc-200 rounded-2xl p-6 space-y-4">
                <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Recommended Components
                </div>
                <div className="divide-y divide-zinc-200">
                  {currentRec.services.map((srv, idx) => (
                    <div key={idx} className="py-3 flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2.5 font-semibold text-zinc-800">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{srv.name}</span>
                      </div>
                      <span className="font-mono font-bold text-zinc-900">{srv.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimal Bundle Banner */}
              <div className="bg-zinc-950 text-white rounded-2xl p-8 text-center space-y-3 shadow-md">
                <div className="font-mono text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  [ OPTIMAL BUNDLE ]
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {currentRec.bundle.name}
                </h3>
                <div className="font-mono text-3xl font-extrabold text-white pb-3">
                  {currentRec.bundle.price}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Initialize on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setStatus("form")}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-zinc-500 hover:text-zinc-950 transition-colors uppercase tracking-wider"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Reconfigure Parameters</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
