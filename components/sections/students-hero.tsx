"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  GraduationCap,
  TerminalSquare,
  BookOpen,
  Milestone,
  ShieldCheck,
  Terminal,
  Users,
  Play,
  RotateCcw,
} from "lucide-react";

interface ChecklistItem {
  id: string;
  label: string;
  category: string;
  completed: boolean;
}

interface ChatMessage {
  id: string;
  sender: string;
  role: "lead" | "student";
  time: string;
  text: string;
}

export function StudentsHero() {
  const [currentTime, setCurrentTime] = useState<string>("12:00");
  
  // Interactive Tablet View Tabs
  const [activeTab, setActiveTab] = useState<"overview" | "programs" | "sessions" | "terminal">("overview");

  // Interactive Student Practice Checklist
  const [practiceTasks, setPracticeTasks] = useState<ChecklistItem[]>([
    { id: "1", label: "Zero-knowledge authentication proof", category: "Security", completed: true },
    { id: "2", label: "Next.js App Router edge profiling", category: "Full-Stack", completed: true },
    { id: "3", label: "Distributed API throughput benchmark", category: "Backend", completed: false },
    { id: "4", label: "ESP32 firmware telemetry sensor mesh", category: "Embedded", completed: false },
  ]);

  // Interactive Equalizer Chart for Efficiency Benchmark Popup
  const [chartBars, setChartBars] = useState<number[]>([60, 85, 100, 70, 92, 78, 95]);
  const [efficiencyScore, setEfficiencyScore] = useState<number>(92.4);

  // Interactive Mentor Dispatch Chat Messages
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: "1", sender: "Lead Mentor", role: "lead", time: "10:15", text: "Reviewing your Next.js auth middleware PR" },
    { id: "2", sender: "Student", role: "student", time: "10:18", text: "Fixed edge cookie decoding, build passes" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [mentorCount] = useState(3);

  // Interactive Sandbox Runner in Tablet
  const [sandboxOutput, setSandboxOutput] = useState<string[]>([
    "✓ src/security/tamper-proof.test.ts (1.2s)",
    "✓ src/edge/routing-cache.test.ts (0.8s)",
    "● 4 tests passed, 0 failures"
  ]);
  const [isRunningTests, setIsRunningTests] = useState(false);

  // Interactive Roadmap Step Switcher
  const [roadmapStep, setRoadmapStep] = useState<"learn" | "practice" | "build" | "ship">("build");

  // Real-time Clock (IST)
  useEffect(() => {
    const tick = () => {
      setCurrentTime(
        new Intl.DateTimeFormat([], {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }).format(new Date())
      );
    };
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);

  const toggleTask = (id: string) => {
    setPracticeTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const randomizeBenchmark = () => {
    const bars = Array.from({ length: 7 }, () => Math.floor(Math.random() * 45) + 55);
    setChartBars(bars);
    const avg = Number((bars.reduce((a, b) => a + b, 0) / bars.length).toFixed(1));
    setEfficiencyScore(avg);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
    setChatMessages(prev => [
      ...prev.slice(-2),
      { id: Date.now().toString(), sender: "You", role: "student", time: nowTime, text: chatInput.trim() }
    ]);
    setChatInput("");
  };

  const runSandboxTests = () => {
    setIsRunningTests(true);
    setSandboxOutput(["Running test suites in memory..."]);
    setTimeout(() => {
      setSandboxOutput([
        "✓ src/security/tamper-proof.test.ts (0.9s)",
        "✓ src/edge/routing-cache.test.ts (0.6s)",
        "✓ src/api/rate-limiter.test.ts (0.4s)",
        "● All 6 tests passed, 100% assertions green"
      ]);
      setIsRunningTests(false);
    }, 900);
  };

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white text-zinc-950 border-b border-zinc-200">
      {/* ── Background Subtle Grid & Precision Ambient Lighting ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/8 via-violet-500/6 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-violet-500/6 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ════════════════ LEFT COLUMN: STUDENT VALUE PROPOSITION ════════════════ */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
            {/* 1. Student Identity Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 font-mono text-[11px] font-bold text-blue-900 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>RISHVIN LABS FOR STUDENTS</span>
            </div>

            {/* 2. Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-serif font-black tracking-tight text-zinc-950 leading-[1.08] mb-6">
              Build the skills, projects <br className="hidden sm:inline" />
              and proof that move your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent italic font-normal">
                career forward.
              </span>
            </h1>

            {/* 3. Supporting Description */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6 font-sans max-w-xl">
              Learn practical engineering, access technical resources, get expert guidance and develop the skills to build beyond the classroom.
            </p>

            {/* 4. Supporting Capability Line */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-xs text-zinc-600 mb-8 pb-1">
              <span className="text-zinc-800 font-semibold">Technical Learning</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Engineering Support</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Practical Resources</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Career Development</span>
            </div>

            {/* 5. Primary and Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#programs"
                onClick={(e) => scrollToAnchor(e, "programs")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 active:scale-98 transition-all w-full sm:w-auto group cursor-pointer shadow-lg shadow-zinc-950/15"
              >
                <span>Explore Student Programs</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#support"
                onClick={(e) => scrollToAnchor(e, "support")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-200/90 transition-all shadow-2xs hover:border-zinc-300 active:scale-98 w-full sm:w-auto cursor-pointer"
              >
                <span>Get Technical Support</span>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </a>
            </div>

            {/* 6. Grounded Trust & Value Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-zinc-200/80 w-full max-w-lg mb-6">
              <div>
                <div className="font-serif font-bold text-base sm:text-lg text-zinc-950 leading-tight">Practical</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                  Project-Grounded
                </div>
              </div>
              <div>
                <div className="font-serif font-bold text-base sm:text-lg text-blue-600 leading-tight">Structured</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                  Official Resources
                </div>
              </div>
              <div>
                <div className="font-serif font-bold text-base sm:text-lg text-violet-700 leading-tight">1-on-1</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                  Engineering Support
                </div>
              </div>
            </div>

            {/* 7. Updated Hero Secondary Navigation */}
            <div className="pt-4 border-t border-zinc-200/60 w-full flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-zinc-600">
              <span className="text-zinc-400 uppercase tracking-widest text-[10px] font-bold">Quick Jump:</span>
              <a href="#programs" onClick={(e) => scrollToAnchor(e, "programs")} className="text-zinc-800 hover:text-blue-600 transition-colors font-semibold">
                Programs
              </a>
              <span className="text-zinc-300">·</span>
              <a href="#support" onClick={(e) => scrollToAnchor(e, "support")} className="text-zinc-800 hover:text-blue-600 transition-colors font-semibold">
                Technical Support
              </a>
              <span className="text-zinc-300">·</span>
              <a href="#resources" onClick={(e) => scrollToAnchor(e, "resources")} className="text-zinc-800 hover:text-blue-600 transition-colors font-semibold">
                Learning Resources
              </a>
              <span className="text-zinc-300">·</span>
              <a href="#learning-domains" onClick={(e) => scrollToAnchor(e, "learning-domains")} className="text-zinc-800 hover:text-blue-600 transition-colors font-semibold">
                Engineering Domains
              </a>
              <span className="text-zinc-300">·</span>
              <a href="#pathways" onClick={(e) => scrollToAnchor(e, "pathways")} className="text-zinc-800 hover:text-blue-600 transition-colors font-semibold">
                Career Preparation
              </a>
            </div>
          </div>

          {/* ════════════════ RIGHT COLUMN: LUXURY LANDSCAPE IPAD PRO + 6 POPUPS ════════════════ */}
          <div className="lg:col-span-7 flex items-center justify-center relative py-14 select-none">

            {/* Central Anchor Container for Landscape iPad + 6 Satellites */}
            <div className="relative w-full max-w-[530px] xl:max-w-[560px] mx-auto">

              {/* ════════════════ MAGNETIC APPLE PENCIL 2 ════════════════ */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-2.5 bg-gradient-to-r from-zinc-200 via-white to-zinc-200 rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.15)] border border-zinc-300/80 flex items-center justify-between px-3 z-30"
              >
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-l-full" />
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[7px] font-bold text-zinc-400 uppercase tracking-widest">
                    Pencil 2 • 100%
                  </span>
                </div>
                <div className="w-2 h-1 bg-zinc-300 rounded-r-xs" />
              </motion.div>


              {/* ════════════════ IPAD PRO HARDWARE CHASSIS ════════════════ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full"
              >
                {/* 1. Space-Gray / Silver Precision Aluminum Enclosure */}
                <div className="p-1 sm:p-1.5 bg-gradient-to-b from-[#e3e3ea] via-[#d4d4dc] to-[#c2c2cc] rounded-[36px] sm:rounded-[40px] shadow-[0_35px_90px_-15px_rgba(0,0,0,0.28),0_15px_40px_-5px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.85)_inset] border border-zinc-300/90">
                  
                  {/* 2. Authentic iPad Pro Black Glass Bezel */}
                  <div className="p-2.5 sm:p-3.5 bg-[#0a0a0d] rounded-[32px] sm:rounded-[36px] flex flex-col relative overflow-hidden shadow-inner">
                    
                    {/* Top Landscape Camera Sensor */}
                    <div className="flex items-center justify-center gap-2 mb-1.5 shrink-0 z-40">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700/80 flex items-center justify-center">
                        <div className="w-0.5 h-0.5 rounded-full bg-blue-500/40" />
                      </div>
                      <div className="w-1 h-1 rounded-full bg-zinc-800/80" />
                    </div>

                    {/* 3. Liquid Retina Display Surface */}
                    <div className="w-full bg-[#fafafd] rounded-[22px] sm:rounded-[26px] border border-zinc-200/90 overflow-hidden flex flex-col text-zinc-900 text-left relative z-20 shadow-xs">
                      
                      {/* Subtle Diagonal Glass Screen Glare */}
                      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/40 via-white/5 to-transparent pointer-events-none z-40 rounded-full blur-2xl" />

                      {/* ── iPadOS Status Header ── */}
                      <div className="px-3.5 py-2 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 flex items-center justify-between shrink-0">
                        {/* Brand & Workspace ID */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center font-mono font-bold text-xs text-white shadow-2xs">
                            RL
                          </div>
                          <div>
                            <div className="font-serif font-bold text-xs text-zinc-950 flex items-center gap-1 leading-none">
                              <span>Student Hub</span>
                              <span className="text-[10px]">🎓</span>
                            </div>
                            <span className="font-mono text-[7px] text-zinc-400 uppercase tracking-widest mt-0.5 block">
                              Engineering Workspace
                            </span>
                          </div>
                        </div>

                        {/* Interactive In-App Navigation Tabs */}
                        <div className="flex items-center bg-zinc-100/90 border border-zinc-200/80 rounded-lg p-0.5">
                          <button
                            type="button"
                            onClick={() => setActiveTab("overview")}
                            className={`px-2 py-1 rounded-md font-mono text-[8px] sm:text-[9px] font-semibold transition-all cursor-pointer ${
                              activeTab === "overview" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                            }`}
                          >
                            Overview
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTab("programs")}
                            className={`px-2 py-1 rounded-md font-mono text-[8px] sm:text-[9px] font-semibold transition-all cursor-pointer ${
                              activeTab === "programs" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                            }`}
                          >
                            Programs
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTab("sessions")}
                            className={`px-2 py-1 rounded-md font-mono text-[8px] sm:text-[9px] font-semibold transition-all cursor-pointer ${
                              activeTab === "sessions" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                            }`}
                          >
                            Sessions
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTab("terminal")}
                            className={`px-2 py-1 rounded-md font-mono text-[8px] sm:text-[9px] font-semibold transition-all cursor-pointer ${
                              activeTab === "terminal" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                            }`}
                          >
                            Sandbox
                          </button>
                        </div>

                        {/* Status Pill & Real-time Clock */}
                        <div className="flex items-center gap-2">
                          <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[8px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>TESTBED</span>
                          </div>
                          <span className="font-mono text-[9px] text-zinc-500 font-bold">
                            {currentTime} IST
                          </span>
                        </div>
                      </div>

                      {/* ── iPad Screen Workspace Content ── */}
                      <div className="p-3 sm:p-3.5 space-y-2.5">
                        
                        {/* Tab 1: Overview View */}
                        {activeTab === "overview" && (
                          <div className="space-y-2.5">
                            {/* Platform Announcement Banner */}
                            <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-white border border-blue-100 flex items-center justify-between">
                              <div>
                                <div className="font-mono text-[8px] font-bold text-blue-600 uppercase tracking-widest">
                                  Student Engineering Platform
                                </div>
                                <div className="font-serif font-black text-xs sm:text-sm text-zinc-950 mt-0.5">
                                  Build Beyond The Classroom
                                </div>
                              </div>
                              <span className="font-mono text-[8px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-2xs shrink-0">
                                Cohort 2026-Q4
                              </span>
                            </div>

                            {/* 2-Column Core Split: Disciplines & Practice Tracker */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                              
                              {/* Left: 4 Core Disciplines */}
                              <div className="sm:col-span-6 p-2.5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs space-y-1.5">
                                <div className="flex items-center justify-between font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-wider">
                                  <span>Core Disciplines</span>
                                  <GraduationCap className="w-3 h-3 text-blue-600" />
                                </div>
                                <div className="space-y-1 text-[8px] font-sans">
                                  <div className="p-1 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                                    <span className="font-semibold text-blue-950">Frontend Engineering</span>
                                    <span className="font-mono text-[7px] text-blue-700">Next.js &amp; Vitals</span>
                                  </div>
                                  <div className="p-1 rounded-lg bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                                    <span className="font-semibold text-emerald-950">Cybersecurity Defense</span>
                                    <span className="font-mono text-[7px] text-emerald-700">OWASP ASVS</span>
                                  </div>
                                  <div className="p-1 rounded-lg bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                                    <span className="font-semibold text-purple-950">Full-Stack Systems</span>
                                    <span className="font-mono text-[7px] text-purple-700">REST &amp; SQL</span>
                                  </div>
                                  <div className="p-1 rounded-lg bg-amber-50/70 border border-amber-100 flex items-center justify-between">
                                    <span className="font-semibold text-amber-950">IoT &amp; Embedded</span>
                                    <span className="font-mono text-[7px] text-amber-700">ESP32 Firmware</span>
                                  </div>
                                </div>
                              </div>

                              {/* Right: Interactive Practice Tracker */}
                              <div className="sm:col-span-6 p-2.5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs flex flex-col justify-between">
                                <div>
                                  <div className="flex items-center justify-between font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                                    <span>Practice Tracker</span>
                                    <span className="text-blue-600 font-bold">
                                      {practiceTasks.filter(t => t.completed).length}/4 DONE
                                    </span>
                                  </div>

                                  <div className="space-y-1">
                                    {practiceTasks.map(task => (
                                      <div
                                        key={task.id}
                                        onClick={() => toggleTask(task.id)}
                                        className="flex items-center gap-1.5 cursor-pointer group/item py-0.5"
                                      >
                                        <div className={`w-3 h-3 rounded flex items-center justify-center shrink-0 transition-colors ${task.completed ? "bg-emerald-600 text-white" : "border border-zinc-300 group-hover/item:border-zinc-500"}`}>
                                          {task.completed && <Check className="w-2 h-2 stroke-[3]" />}
                                        </div>
                                        <span className={`text-[8px] font-sans truncate ${task.completed ? "line-through text-zinc-400" : "text-zinc-800"}`}>
                                          {task.label}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="font-mono text-[7px] text-zinc-400 uppercase tracking-widest pt-1 border-t border-zinc-100 mt-1">
                                  Click task to toggle state
                                </div>
                              </div>

                            </div>
                          </div>
                        )}

                        {/* Tab 2: Programs Detail */}
                        {activeTab === "programs" && (
                          <div className="p-2.5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs space-y-2 text-left">
                            <div className="flex items-center justify-between font-mono text-[9px] font-bold text-blue-600 uppercase">
                              <span>Flagship Student Programs</span>
                              <span className="text-zinc-400 font-normal">Structured Cohorts</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[8px] font-sans">
                              <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200">
                                <div className="font-bold text-zinc-950">Frontend Architecture</div>
                                <div className="text-zinc-500 mt-0.5">Component hierarchy, responsive layouts, web vitals.</div>
                              </div>
                              <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200">
                                <div className="font-bold text-zinc-950">AppSec Defense</div>
                                <div className="text-zinc-500 mt-0.5">Zero-trust principles, cryptographic checks &amp; ASVS.</div>
                              </div>
                              <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200">
                                <div className="font-bold text-zinc-950">Full-Stack Cloud</div>
                                <div className="text-zinc-500 mt-0.5">REST APIs, database indexing &amp; edge deployment.</div>
                              </div>
                              <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200">
                                <div className="font-bold text-zinc-950">Connected IoT</div>
                                <div className="text-zinc-500 mt-0.5">ESP32 microcontrollers &amp; telemetry mesh OTA.</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Tab 3: Sessions Detail */}
                        {activeTab === "sessions" && (
                          <div className="p-2.5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs space-y-1.5 text-left">
                            <div className="flex items-center justify-between font-mono text-[9px] font-bold text-violet-700 uppercase">
                              <span>Targeted Technical Sessions</span>
                              <span className="text-emerald-600 font-bold">1:1 Lead Pairing</span>
                            </div>
                            <div className="space-y-1 text-[8px] font-sans">
                              <div className="p-1.5 rounded-lg bg-violet-50/70 border border-violet-100 flex items-center justify-between">
                                <span className="font-semibold text-violet-950">Live Code Debugging &amp; Build Unblocking</span>
                                <span className="font-mono text-[7px] text-violet-700 font-bold">Direct Pairing</span>
                              </div>
                              <div className="p-1.5 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                                <span className="font-semibold text-blue-950">Docker / Package Dependency Conflict Resolution</span>
                                <span className="font-mono text-[7px] text-blue-700 font-bold">CI/CD Runbooks</span>
                              </div>
                              <div className="p-1.5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                                <span className="font-semibold text-zinc-950">System Architecture &amp; Database Schema Review</span>
                                <span className="font-mono text-[7px] text-zinc-600 font-bold">Blueprint Audit</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Tab 4: Sandbox & Live Terminal (Interactive!) */}
                        {activeTab === "terminal" && (
                          <div className="p-2.5 rounded-xl bg-[#0e1017] border border-zinc-800 text-zinc-300 font-mono text-[8px] space-y-1.5 text-left">
                            <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800/80 pb-1">
                              <div className="flex items-center gap-1.5">
                                <Terminal className="w-3 h-3 text-emerald-400" />
                                <span>student-sandbox-v4</span>
                              </div>
                              <button
                                type="button"
                                onClick={runSandboxTests}
                                disabled={isRunningTests}
                                className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-emerald-400 transition-colors cursor-pointer"
                              >
                                {isRunningTests ? <RotateCcw className="w-2.5 h-2.5 animate-spin" /> : <Play className="w-2.5 h-2.5" />}
                                <span>{isRunningTests ? "Running..." : "Run Test Suite"}</span>
                              </button>
                            </div>
                            <div className="space-y-0.5 text-zinc-400">
                              <div><span className="text-blue-400">$</span> pnpm test:architecture --runInBand</div>
                              {sandboxOutput.map((line, idx) => (
                                <div key={idx} className={line.startsWith("✓") ? "text-emerald-400" : line.startsWith("●") ? "text-blue-400 font-bold" : "text-zinc-500"}>
                                  {line}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Bottom Ethics Disclaimer Strip */}
                        <div className="px-2.5 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between text-[8px] font-mono text-zinc-500">
                          <div className="flex items-center gap-1.5 truncate">
                            <ShieldCheck className="w-3 h-3 text-zinc-400 shrink-0" />
                            <span>Mentorship &amp; Guidance — Not Completing Graded Academic Work</span>
                          </div>
                          <span className="text-blue-600 font-bold shrink-0">Ethics Verified</span>
                        </div>

                      </div>

                      {/* Tablet Landscape Home Indicator Bar */}
                      <div className="w-24 h-1 bg-zinc-300 rounded-full mx-auto my-1.5 shrink-0" />

                    </div>
                  </div>
                </div>
              </motion.div>


              {/* ════════════════════════════════════════════════════════════════
                  6 FLOATING ENTERPRISE SATELLITE POPUPS (HIGHLY FUNCTIONAL)
              ════════════════════════════════════════════════════════════════ */}

              {/* ── POPUP 1: Peer & Mentor Dispatch Chat (Upper-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -24, y: -15, scale: 0.94 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -6, 0] 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.15, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.2 } }}
                className="absolute -top-12 -left-14 sm:-left-36 xl:-left-44 z-30 w-[240px] sm:w-[255px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-2xl p-3 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Mentor Dispatch</h3>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[8px] font-bold">
                    <Users className="w-2.5 h-2.5 text-zinc-500" />
                    <span>{mentorCount} Leads</span>
                  </div>
                </div>

                {/* Message Log */}
                <div className="space-y-1 mb-2">
                  {chatMessages.map(m => (
                    <div key={m.id} className="text-[8px] font-sans">
                      <div className="flex justify-between text-zinc-400 font-mono text-[7px] mb-0.5">
                        <span className={m.role === "lead" ? "text-blue-600 font-bold" : "text-zinc-600 font-bold"}>{m.sender}</span>
                        <span>{m.time}</span>
                      </div>
                      <div className="p-1 rounded-md bg-zinc-50 border border-zinc-200/60 text-zinc-700 truncate">
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Message Dispatch Form */}
                <form onSubmit={handleSendChat} className="flex gap-1">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask lead mentor..."
                    className="flex-1 bg-zinc-100 rounded-lg px-2 py-1 text-[8px] font-mono border border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-zinc-400"
                  />
                  <button
                    type="submit"
                    className="px-2 py-1 rounded-lg bg-zinc-950 hover:bg-blue-600 text-white font-mono text-[8px] font-bold uppercase transition-colors cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </motion.div>


              {/* ── POPUP 2: Student Flagship Programs (Mid-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -24, scale: 0.94 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.25, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="absolute top-[125px] -left-16 sm:-left-40 xl:-left-48 z-25 w-[220px] sm:w-[235px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Student Programs</h3>
                  </div>
                  <span className="font-mono text-[7px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Cohorts
                  </span>
                </div>
                {/* 4 Interactive Program Tags */}
                <div className="grid grid-cols-2 gap-1 mb-1.5">
                  <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-900 font-mono text-[8px] font-semibold truncate">
                    Frontend UI
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 font-mono text-[8px] font-semibold truncate">
                    Cybersecurity
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-purple-50 text-purple-900 font-mono text-[8px] font-semibold truncate">
                    Full-Stack
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-900 font-mono text-[8px] font-semibold truncate">
                    IoT Systems
                  </span>
                </div>
                <div className="font-mono text-[7px] text-zinc-400">
                  Cohort &amp; Self-Paced Modules
                </div>
              </motion.div>


              {/* ── POPUP 3: Free Resource Library (Bottom-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 15, scale: 0.94 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.35, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="absolute -bottom-10 -left-14 sm:-left-34 xl:-left-42 z-30 w-[225px] sm:w-[240px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Resource Library</h3>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-0.5 font-mono text-[8px] text-zinc-700">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-emerald-600">✓</span>
                    <span>MDN Web Platform References</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-emerald-600">✓</span>
                    <span>OWASP Application Security</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-emerald-600">✓</span>
                    <span>System Architecture Blueprints</span>
                  </div>
                </div>
                <div className="font-mono text-[7px] text-zinc-400 mt-1.5 pt-1 border-t border-zinc-100">
                  100% Free Student Assets
                </div>
              </motion.div>


              {/* ── POPUP 4: Code Efficiency Benchmark Equalizer (Upper-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: -15, scale: 0.94 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -7, 0] 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                }}
                whileHover={{ scale: 1.03, y: -9, transition: { duration: 0.2 } }}
                onClick={randomizeBenchmark}
                title="Click to randomize live efficiency benchmark"
                className="absolute -top-12 -right-14 sm:-right-36 xl:-right-44 z-30 w-[215px] sm:w-[230px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_22px_55px_rgba(0,0,0,0.12)] rounded-2xl p-3 cursor-pointer group text-left"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-400">
                    BENCHMARK
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                </div>

                {/* Animated Equalizer Bars */}
                <div className="flex items-end gap-1 h-8 mb-1.5">
                  {chartBars.map((val, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 rounded-full bg-gradient-to-t from-zinc-950 to-zinc-700 transition-all duration-500 group-hover:from-blue-600 group-hover:to-violet-500" 
                      style={{ height: `${val}%` }} 
                    />
                  ))}
                </div>

                <div className="font-mono text-[7px] font-bold tracking-widest text-zinc-500 uppercase leading-tight">
                  CODE TASK EFFICIENCY:
                </div>
                <div className="font-serif font-black text-lg text-zinc-950 flex items-center justify-between mt-0.5 group-hover:text-blue-600 transition-colors">
                  <span>{efficiencyScore}%</span>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center">
                    ▲ <span className="text-[7px] text-zinc-400 ml-1 font-sans">Click to test</span>
                  </span>
                </div>
              </motion.div>


              {/* ── POPUP 5: Targeted Technical Sessions (Mid-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.94 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="absolute top-[125px] -right-16 sm:-right-40 xl:-right-48 z-25 w-[225px] sm:w-[240px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <TerminalSquare className="w-3.5 h-3.5 text-violet-600" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Technical Sessions</h3>
                  </div>
                  <span className="font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                    1:1 Lead
                  </span>
                </div>
                <div className="font-sans text-[10px] font-bold text-violet-700 truncate">
                  Solve Bugs · Unblock Builds
                </div>
                {/* Mini Debugging Log Badge */}
                <div className="mt-1 p-1 rounded-md bg-zinc-100 border border-zinc-200/80 font-mono text-[7px] text-zinc-600 truncate flex items-center justify-between">
                  <span>✓ Bug resolved in 14m</span>
                  <span className="text-emerald-600 font-bold">1:1 Pairing</span>
                </div>
              </motion.div>


              {/* ── POPUP 6: Interactive Learning Roadmap (Bottom-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 15, scale: 0.94 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.45, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="absolute -bottom-10 -right-14 sm:-right-34 xl:-right-42 z-30 w-[230px] sm:w-[245px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3 text-left"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Milestone className="w-3.5 h-3.5 text-amber-500" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Learning Roadmap</h3>
                  </div>
                  <span className="font-mono text-[7px] font-bold text-blue-600 bg-blue-50 px-1 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>

                {/* 4 Clickable Phase Nodes */}
                <div className="flex items-center justify-between font-mono text-[8px] font-bold text-zinc-800 tracking-tight my-1.5">
                  <button
                    type="button"
                    onClick={() => setRoadmapStep("learn")}
                    className={`px-1 py-0.5 rounded transition-colors cursor-pointer ${roadmapStep === "learn" ? "bg-blue-600 text-white" : "text-zinc-500 hover:text-zinc-900"}`}
                  >
                    Learn
                  </button>
                  <span className="text-zinc-300">→</span>
                  <button
                    type="button"
                    onClick={() => setRoadmapStep("practice")}
                    className={`px-1 py-0.5 rounded transition-colors cursor-pointer ${roadmapStep === "practice" ? "bg-blue-600 text-white" : "text-zinc-500 hover:text-zinc-900"}`}
                  >
                    Practice
                  </button>
                  <span className="text-zinc-300">→</span>
                  <button
                    type="button"
                    onClick={() => setRoadmapStep("build")}
                    className={`px-1 py-0.5 rounded transition-colors cursor-pointer ${roadmapStep === "build" ? "bg-blue-600 text-white" : "text-zinc-500 hover:text-zinc-900"}`}
                  >
                    Build
                  </button>
                  <span className="text-zinc-300">→</span>
                  <button
                    type="button"
                    onClick={() => setRoadmapStep("ship")}
                    className={`px-1 py-0.5 rounded transition-colors cursor-pointer ${roadmapStep === "ship" ? "bg-blue-600 text-white" : "text-zinc-500 hover:text-zinc-900"}`}
                  >
                    Ship
                  </button>
                </div>

                <div className="font-mono text-[7px] text-zinc-500 flex items-center justify-between">
                  <span>Current: {roadmapStep.toUpperCase()} Phase</span>
                  <span className="font-bold text-emerald-600">Milestone Green</span>
                </div>
              </motion.div>

            </div>{/* end iPad anchor container */}
          </div>

        </div>
      </div>
    </section>
  );
}
