"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Terminal, 
  LayoutTemplate, 
  Cpu, 
  Shield, 
  Radio, 
  Blocks, 
  MessageSquare, 
  GraduationCap, 
  Code2, 
  Award, 
  Briefcase, 
  BookOpen,
  Search,
  Clock,
  Video,
  FileCheck,
  ShieldAlert,
  Sparkles,
  X
} from "lucide-react";
import { STUDENT_CATEGORIES, STUDENT_PRICING_POLICY } from "@/data/catalog";
import { toUSD, formatINR } from "@/lib/currency";

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Code2,
  Globe,
  Terminal,
  LayoutTemplate,
  Cpu,
  Shield,
  Radio,
  Blocks,
  MessageSquare,
  Award,
  Briefcase,
  BookOpen
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Submit Issue & Logs",
    desc: "Share your repository link, error stack trace, or architecture dilemma via our contact portal.",
    icon: Terminal
  },
  {
    step: "02",
    title: "Pre-Call Diagnostic",
    desc: "Our engineers review your codebase and reproduction steps before the call to maximize session efficiency.",
    icon: FileCheck
  },
  {
    step: "03",
    title: "Live Pair-Debugging",
    desc: "45–60 minute interactive screen-share session. We inspect network logs, trace bugs, and refactor together.",
    icon: Video
  },
  {
    step: "04",
    title: "Notes & Resolution",
    desc: "Receive actionable architecture notes, recommended commits, and preventive guidelines post-session.",
    icon: Check
  }
];

export function StudentServicesSection() {
  const [activeCategory, setActiveCategory] = useState(STUDENT_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  // All services flattened for live search
  const allServices = useMemo(() => {
    return STUDENT_CATEGORIES.flatMap(cat => 
      cat.services.map(srv => ({
        ...srv,
        categoryTitle: cat.title,
        categoryId: cat.id,
        categoryIcon: cat.icon
      }))
    );
  }, []);

  // Filtered by search or active category
  const displayedServices = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return allServices.filter(s => 
        s.name.toLowerCase().includes(q) || 
        (s.description || "").toLowerCase().includes(q) ||
        s.features?.some(f => f.toLowerCase().includes(q)) ||
        s.categoryTitle.toLowerCase().includes(q)
      );
    }
    const currentCat = STUDENT_CATEGORIES.find(c => c.id === activeCategory);
    return currentCat ? currentCat.services.map(s => ({
      ...s,
      categoryTitle: currentCat.title,
      categoryId: currentCat.id,
      categoryIcon: currentCat.icon
    })) : [];
  }, [searchQuery, activeCategory, allServices]);

  return (
    <section id="support" className="py-24 px-6 bg-white border-t border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>1-on-1 Engineering Support</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4 leading-[1.1]">
              Targeted Technical Sessions. Solve Bugs, Unblock Builds.
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-sans">
              Connect directly with our engineering leads for live pair-debugging, cloud deployment triage, database query optimization, security reviews, and portfolio architecture.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bugs, Git, Docker, API..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="font-mono text-[11px] text-zinc-500 mt-2">
                Found {displayedServices.length} matching support {displayedServices.length === 1 ? "session" : "sessions"}:
              </p>
            )}
          </div>
        </div>

        {/* Value Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 pb-12 border-b border-zinc-200">
          <div className="p-4 rounded-2xl bg-[#fafafa] border border-zinc-200/80">
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase mb-1">
              <Clock className="w-4 h-4" />
              <span>45–60 Minutes</span>
            </div>
            <p className="text-xs text-zinc-600">Focused live screen-share session with zero wasted time.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#fafafa] border border-zinc-200/80">
            <div className="flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase mb-1">
              <Video className="w-4 h-4" />
              <span>Direct Engineer</span>
            </div>
            <p className="text-xs text-zinc-600">Conducted by practicing engineers who build production systems.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#fafafa] border border-zinc-200/80">
            <div className="flex items-center gap-2 text-purple-600 font-mono text-xs font-bold uppercase mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Real Codebases</span>
            </div>
            <p className="text-xs text-zinc-600">Debug your actual repository, API logs, and deploy pipelines.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#fafafa] border border-zinc-200/80">
            <div className="flex items-center gap-2 text-amber-600 font-mono text-xs font-bold uppercase mb-1">
              <ShieldAlert className="w-4 h-4" />
              <span>Strict Ethics</span>
            </div>
            <p className="text-xs text-zinc-600">Debugging &amp; architecture only. We do not do homework or exams.</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          
          {/* LEFT: Category Navigation (Hidden when searching) */}
          {!searchQuery && (
            <div className="w-full lg:w-1/3 shrink-0">
              <div className="lg:sticky lg:top-36 space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-wider block mb-3">
                  Select Focus Domain
                </span>

                <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
                  {STUDENT_CATEGORIES.map((cat) => {
                    const TabIcon = ICON_MAP[cat.icon] || Globe;
                    const isActive = activeCategory === cat.id;
                    const count = cat.services.length;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setSearchQuery("");
                        }}
                        className={`flex items-start gap-3.5 p-4 rounded-2xl text-left transition-all shrink-0 lg:w-full border cursor-pointer relative ${
                          isActive
                            ? "bg-[#fafafa] border-blue-600 shadow-md shadow-blue-600/5 text-zinc-950"
                            : "bg-white border-zinc-200/80 hover:bg-zinc-50 hover:border-zinc-300 text-zinc-600"
                        }`}
                      >
                        {isActive && (
                          <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r hidden lg:block" />
                        )}

                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive 
                            ? "bg-blue-600 text-white" 
                            : "bg-zinc-100 text-zinc-500"
                        }`}>
                          <TabIcon className="w-4 h-4" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <h3 className={`font-serif font-bold text-base truncate ${isActive ? "text-zinc-950" : "text-zinc-700"}`}>
                              {cat.title}
                            </h3>
                            <span className="font-mono text-[10px] text-zinc-400 shrink-0">
                              {count} {count === 1 ? "track" : "tracks"}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* RIGHT: Service Cards */}
          <div className={`w-full ${searchQuery ? "lg:w-full" : "lg:w-2/3"}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={searchQuery ? "search" : activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {displayedServices.map((service, idx) => (
                  <div 
                    key={service.id || idx}
                    className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-7 hover:shadow-xl hover:border-blue-600 hover:bg-white transition-all flex flex-col justify-between group relative overflow-hidden"
                  >
                    {service.popular && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[9px] uppercase tracking-widest px-3.5 py-1 rounded-bl-xl font-bold shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-blue-200" />
                        <span>Most Requested</span>
                      </div>
                    )}
                    
                    <div>
                      {/* Category Label */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-[10px] uppercase font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                          {service.categoryTitle}
                        </span>
                        <span className="text-zinc-400 font-mono text-[10px]">
                          1:1 Screen-Share
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                        {service.name}
                      </h3>
                      
                      <p className="text-xs text-zinc-500 mb-6 leading-relaxed min-h-[36px]">
                        {service.description}
                      </p>
                      
                      {/* Pricing Display */}
                      <div className="mb-6 p-4 rounded-2xl bg-white border border-zinc-200/80">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono uppercase font-bold text-zinc-400">
                            {service.pricing.startingPrice === 0 
                              ? "Open Educational Access" 
                              : service.pricing.type === "starting" 
                              ? "Starting at" 
                              : "Fixed Session Fee"}
                          </span>
                          <span className="font-mono text-[10px] text-zinc-400">
                            {service.pricing.startingPrice === 0 ? "free" : "per session"}
                          </span>
                        </div>

                        <div className="flex items-baseline gap-1.5">
                          {service.pricing.startingPrice === 0 ? (
                            <span className="text-2xl font-black font-serif text-emerald-600">
                              Free Open Resource
                            </span>
                          ) : (
                            <>
                              <span className="font-mono text-sm font-bold text-zinc-500">₹</span>
                              <span className="text-3xl font-black font-serif text-zinc-950 tracking-tight">
                                {formatINR(service.pricing.startingPrice)}
                              </span>
                              {service.pricing.advancedPrice && (
                                <>
                                  <span className="text-lg font-medium text-zinc-400 mx-1">–</span>
                                  <span className="text-xl font-bold font-serif text-zinc-950">
                                    {formatINR(service.pricing.advancedPrice)}
                                  </span>
                                </>
                              )}
                              <span className="text-xs font-mono text-zinc-400 ml-2 font-semibold">
                                ({toUSD(service.pricing.startingPrice)})
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Features / Deliverables List */}
                      <div className="mb-6">
                        <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-2.5">
                          Session Deliverables
                        </span>
                        <ul className="space-y-2">
                          {service.features?.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-snug">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/contact?service=${service.id}&source=students-support`}
                      className="w-full py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group/btn shadow-xs mt-2"
                    >
                      <span>Book Session</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {displayedServices.length === 0 && (
              <div className="p-12 rounded-3xl bg-[#fafafa] border border-zinc-200 text-center">
                <p className="font-serif font-bold text-lg text-zinc-950 mb-2">
                  No specific support tracks matched &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="text-xs text-zinc-500 mb-6">
                  Have a custom engineering challenge or uncommon tech stack? Reach out directly.
                </p>
                <Link
                  href="/contact?source=students-support-custom"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors"
                >
                  <span>Request Custom Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* How a Session Works Step-by-Step Interactive Workflow */}
        <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 sm:p-12 mb-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              HOW SESSIONS WORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950 mb-3">
              Predictable, Efficient Technical Triage
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We know your time is valuable. Our sessions follow a structured four-stage engineering protocol so you get unblocked immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((hw) => {
              const StepIcon = hw.icon;
              return (
                <div key={hw.step} className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-black text-blue-600">
                        {hw.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="font-serif font-bold text-base text-zinc-950 mb-2">
                      {hw.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                      {hw.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Policy Disclaimer */}
        <div className="mb-4 p-5 rounded-2xl bg-[#fafafa] border border-zinc-200/80 text-xs font-mono text-zinc-500 leading-relaxed">
          <p>
            <strong>Pricing &amp; Scope Policy:</strong> {STUDENT_PRICING_POLICY.disclaimer} {STUDENT_PRICING_POLICY.taxPolicy}
          </p>
        </div>

        {/* Diagnostic Resolution Guarantee & Ethical Boundary */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Diagnostic Guarantee:</strong> If our engineers cannot diagnose the root cause of your build error or issue, your session is 100% refunded or credited.
            </span>
          </div>

          <Link
            href="/contact?source=students-support-terms"
            className="text-blue-600 hover:text-blue-800 font-bold whitespace-nowrap"
          >
            Review Session Policies &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
