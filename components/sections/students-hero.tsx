"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Terminal,
  Users,
  Play,
  RotateCcw,
  Trophy,
  Sparkles,
  Activity,
  Rocket
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
  // Interactive Tablet View Tabs: 3 Clean, Uncrowded Tabs
  const [activeTab, setActiveTab] = useState<"workspace" | "roadmap" | "sandbox">("workspace");

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
    { id: "1", sender: "Lead Mentor", role: "lead", time: "10:15", text: "Reviewed Next.js auth edge middleware PR" },
    { id: "2", sender: "Student", role: "student", time: "10:18", text: "Fixed cookie decoding, all tests green" }
  ]);
  const [chatInput, setChatInput] = useState("");

  // Interactive Sandbox Runner in Tablet
  const [sandboxOutput, setSandboxOutput] = useState<string[]>([
    "✓ src/security/tamper-proof.test.ts (0.9s)",
    "✓ src/edge/routing-cache.test.ts (0.6s)",
    "● 4 test suites passed, 100% assertions green"
  ]);
  const [isRunningTests, setIsRunningTests] = useState(false);

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
      ...prev.slice(-1),
      { id: Date.now().toString(), sender: "You", role: "student", time: nowTime, text: chatInput.trim() }
    ]);
    setChatInput("");
  };

  const runSandboxTests = () => {
    setIsRunningTests(true);
    setSandboxOutput(["Running test suites in memory..."]);
    setTimeout(() => {
      setSandboxOutput([
        "✓ src/security/tamper-proof.test.ts (0.8s)",
        "✓ src/edge/routing-cache.test.ts (0.5s)",
        "✓ src/api/rate-limiter.test.ts (0.4s)",
        "● All 6 test suites passed, 100% assertions green"
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

          {/* ════════════════ RIGHT COLUMN: LUXURY LANDSCAPE IPAD PRO + FLOATING SATELLITES ════════════════ */}
          <div className="lg:col-span-7 flex items-center justify-center relative py-12 lg:py-16 select-none">

            {/* Central Anchor Container for Landscape iPad + Spaced Floating Cards */}
            <div className="relative w-full max-w-[560px] lg:max-w-[590px] xl:max-w-[620px] mx-auto">

              {/* ════════════════ MAGNETIC APPLE PENCIL 2 (Top Edge) ════════════════ */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-44 sm:w-52 h-2.5 bg-gradient-to-r from-zinc-200 via-white to-zinc-200 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.18)] border border-zinc-300/80 flex items-center justify-between px-3 z-30 pointer-events-none"
              >
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-l-full" />
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[7px] font-bold text-zinc-500 uppercase tracking-widest">
                    Apple Pencil 2 • 100%
                  </span>
                </div>
                <div className="w-2 h-1 bg-zinc-300 rounded-r-xs" />
              </motion.div>


              {/* ════════════════ IPAD PRO HARDWARE CHASSIS ════════════════ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full"
              >
                {/* 1. Space-Grey Anodized Aluminum Enclosure with Precision Bevel */}
                <div className="p-1 sm:p-1.5 bg-gradient-to-b from-[#32343e] via-[#242630] to-[#181920] rounded-[34px] sm:rounded-[40px] shadow-[0_35px_90px_-15px_rgba(0,0,0,0.35),0_15px_40px_-5px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.14)_inset] border border-zinc-700/80">

                  {/* 2. Authentic iPad Pro Black Glass Bezel */}
                  <div className="p-2.5 sm:p-3.5 bg-[#08080a] rounded-[30px] sm:rounded-[36px] flex flex-col relative overflow-hidden shadow-inner">

                    {/* Centered Landscape Camera Sensor + Ambient Dot */}
                    <div className="flex items-center justify-center gap-2 mb-1.5 shrink-0 z-40">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700/80 flex items-center justify-center">
                        <div className="w-0.5 h-0.5 rounded-full bg-blue-500/40" />
                      </div>
                      <div className="w-1 h-1 rounded-full bg-zinc-800/80" />
                    </div>

                    {/* 3. Liquid Retina Display Surface */}
                    <div className="w-full bg-[#fbfbfe] rounded-[20px] sm:rounded-[24px] border border-zinc-200/90 overflow-hidden flex flex-col text-zinc-900 text-left relative z-20 shadow-xs">

                      {/* Subtle Diagonal Glass Screen Glare */}
                      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/35 via-white/5 to-transparent pointer-events-none z-40 rounded-full blur-2xl" />

                      {/* ── UNCLUTTERED iPadOS Header Bar ── */}
                      <div className="px-3.5 sm:px-4 py-2 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 flex items-center justify-between shrink-0">
                        {/* Student Hub Identity */}
                        <div className="flex items-center gap-2 shrink-0">
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

                        {/* Streamlined 3-Tab View Navigation */}
                        <div role="tablist" aria-label="Student Hub Views" className="flex items-center bg-zinc-100/90 border border-zinc-200/80 rounded-lg p-0.5">
                          <button
                            type="button"
                            role="tab"
                            id="tab-workspace"
                            aria-selected={activeTab === "workspace"}
                            aria-controls="panel-workspace"
                            onClick={() => setActiveTab("workspace")}
                            className={`px-2.5 py-1 rounded-md font-mono text-[8px] sm:text-[9px] font-semibold transition-all cursor-pointer ${
                              activeTab === "workspace" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                            }`}
                          >
                            Workspace
                          </button>
                          <button
                            type="button"
                            role="tab"
                            id="tab-roadmap"
                            aria-selected={activeTab === "roadmap"}
                            aria-controls="panel-roadmap"
                            onClick={() => setActiveTab("roadmap")}
                            className={`px-2.5 py-1 rounded-md font-mono text-[8px] sm:text-[9px] font-semibold transition-all cursor-pointer ${
                              activeTab === "roadmap" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                            }`}
                          >
                            Roadmap
                          </button>
                          <button
                            type="button"
                            role="tab"
                            id="tab-sandbox"
                            aria-selected={activeTab === "sandbox"}
                            aria-controls="panel-sandbox"
                            onClick={() => setActiveTab("sandbox")}
                            className={`px-2.5 py-1 rounded-md font-mono text-[8px] sm:text-[9px] font-semibold transition-all cursor-pointer ${
                              activeTab === "sandbox" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                            }`}
                          >
                            Sandbox
                          </button>
                        </div>

                        {/* Restrained Live Indicator */}
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[8px] font-bold shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>ACTIVE SPRINT</span>
                        </div>
                      </div>

                      {/* ── iPad Screen Workspace Body ── */}
                      <div className="p-3 sm:p-3.5 space-y-2.5">

                        {/* ════════ TAB 1: WORKSPACE (Rich Image 2 Synthesis) ════════ */}
                        {activeTab === "workspace" && (
                          <div id="panel-workspace" role="tabpanel" aria-labelledby="tab-workspace" className="space-y-2.5">

                            {/* 1. Descriptive Category Cards (Data Integrity - Verified Descriptive Labels) */}
                            <div className="grid grid-cols-3 gap-2">
                              <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-100 flex flex-col justify-between">
                                <div className="flex items-center justify-between">
                                  <Trophy className="w-3.5 h-3.5 text-blue-600" />
                                  <span className="font-mono text-[7px] font-bold text-blue-700 bg-blue-100/70 px-1 py-0.2 rounded">Sprint</span>
                                </div>
                                <div className="mt-1">
                                  <div className="font-serif font-bold text-[11px] sm:text-xs text-blue-950 leading-tight">Hackathon Tracks</div>
                                  <div className="font-mono text-[7px] text-blue-700/80 mt-0.5 truncate">Guided Submissions</div>
                                </div>
                              </div>

                              <div className="p-2 rounded-xl bg-violet-50/70 border border-violet-100 flex flex-col justify-between">
                                <div className="flex items-center justify-between">
                                  <BookOpen className="w-3.5 h-3.5 text-violet-600" />
                                  <span className="font-mono text-[7px] font-bold text-violet-700 bg-violet-100/70 px-1 py-0.2 rounded">Library</span>
                                </div>
                                <div className="mt-1">
                                  <div className="font-serif font-bold text-[11px] sm:text-xs text-violet-950 leading-tight">Learning Assets</div>
                                  <div className="font-mono text-[7px] text-violet-700/80 mt-0.5 truncate">MDN &amp; OWASP Standards</div>
                                </div>
                              </div>

                              <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-100 flex flex-col justify-between">
                                <div className="flex items-center justify-between">
                                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                                  <span className="font-mono text-[7px] font-bold text-emerald-700 bg-emerald-100/70 px-1 py-0.2 rounded">1:1 Lead</span>
                                </div>
                                <div className="mt-1">
                                  <div className="font-serif font-bold text-[11px] sm:text-xs text-emerald-950 leading-tight">Peer Community</div>
                                  <div className="font-mono text-[7px] text-emerald-700/80 mt-0.5 truncate">Direct Mentorship</div>
                                </div>
                              </div>
                            </div>

                            {/* 2. Centerpiece: Smooth SVG Learning Progress Curve (From Image 2) */}
                            <div className="p-2.5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs space-y-1.5">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <Activity className="w-3 h-3 text-blue-600" />
                                  <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-zinc-400">
                                    Learning Trajectory &amp; Velocity
                                  </span>
                                </div>
                                <span className="font-mono text-[8px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-100">
                                  Phase: Production Ship
                                </span>
                              </div>

                              {/* Interactive Smooth Curve Visualization */}
                              <div className="relative h-16 w-full overflow-hidden rounded-lg bg-gradient-to-b from-blue-50/30 via-transparent to-transparent border border-blue-50/80 p-1 flex items-end">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 80" preserveAspectRatio="none">
                                  <defs>
                                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.28" />
                                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                                    </linearGradient>
                                  </defs>
                                  {/* Area Fill */}
                                  <path
                                    d="M 0,65 Q 80,55 160,40 T 280,24 T 400,10 L 400,80 L 0,80 Z"
                                    fill="url(#curveGradient)"
                                  />
                                  {/* Trajectory Stroke */}
                                  <path
                                    d="M 0,65 Q 80,55 160,40 T 280,24 T 400,10"
                                    fill="none"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                  />
                                  {/* Node Pulse Points */}
                                  <circle cx="80" cy="55" r="3.5" fill="#3b82f6" />
                                  <circle cx="180" cy="38" r="3.5" fill="#4f46e5" />
                                  <circle cx="280" cy="24" r="3.5" fill="#7c3aed" />
                                  <circle cx="390" cy="11" r="4.5" fill="#2563eb" className="animate-pulse" />
                                </svg>

                                {/* Trajectory Labels */}
                                <div className="absolute inset-x-2 bottom-1 flex justify-between font-mono text-[7px] text-zinc-400">
                                  <span>Foundations</span>
                                  <span>Full-Stack</span>
                                  <span>AppSec</span>
                                  <span className="text-blue-600 font-bold">Deploy Live</span>
                                </div>
                              </div>
                            </div>

                            {/* 3. Two-Column Split: Achievement Badges & Interactive Practice Checklist */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">

                              {/* Left: 3 Project Milestones (Image 2 style) */}
                              <div className="sm:col-span-6 p-2 rounded-xl bg-white border border-zinc-200/90 shadow-2xs space-y-1">
                                <div className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                                  <span>Project Milestones</span>
                                  <Sparkles className="w-3 h-3 text-amber-500" />
                                </div>
                                <div className="p-1 rounded-lg bg-amber-50/70 border border-amber-100 flex items-center justify-between text-[8px]">
                                  <span className="font-semibold text-amber-950 truncate">🏆 Hackathon Architecture</span>
                                  <span className="font-mono text-[7px] text-amber-700 shrink-0">Review Ready</span>
                                </div>
                                <div className="p-1 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-between text-[8px]">
                                  <span className="font-semibold text-blue-950 truncate">🗺️ Edge CDN &amp; Routing</span>
                                  <span className="font-mono text-[7px] text-blue-700 shrink-0">Verified</span>
                                </div>
                                <div className="p-1 rounded-lg bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-[8px]">
                                  <span className="font-semibold text-emerald-950 truncate">💼 Engineering Proof</span>
                                  <span className="font-mono text-[7px] text-emerald-700 shrink-0">Portfolio Live</span>
                                </div>
                              </div>

                              {/* Right: Interactive Practice Tracker Checklist */}
                              <div className="sm:col-span-6 p-2 rounded-xl bg-white border border-zinc-200/90 shadow-2xs flex flex-col justify-between">
                                <div>
                                  <div className="flex items-center justify-between font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                                    <span>Practice Tracker</span>
                                    <span className="text-blue-600 font-bold">
                                      {practiceTasks.filter(t => t.completed).length}/4 DONE
                                    </span>
                                  </div>

                                  <div className="space-y-1" role="group" aria-label="Engineering Practice Checklist">
                                    {practiceTasks.map(task => (
                                      <div
                                        key={task.id}
                                        role="checkbox"
                                        aria-checked={task.completed}
                                        tabIndex={0}
                                        onClick={() => toggleTask(task.id)}
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            toggleTask(task.id);
                                          }
                                        }}
                                        className="flex items-center gap-1.5 cursor-pointer group/item py-0.5 outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded"
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

                        {/* ════════ TAB 2: ROADMAP VIEW ════════ */}
                        {activeTab === "roadmap" && (
                          <div id="panel-roadmap" role="tabpanel" aria-labelledby="tab-roadmap" className="p-2.5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs space-y-2 text-left">
                            <div className="flex items-center justify-between font-mono text-[9px] font-bold text-blue-600 uppercase">
                              <span>Core Engineering Disciplines</span>
                              <span className="text-zinc-400 font-normal">Structured Pathways</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[8px] font-sans">
                              <div className="p-2 rounded-lg bg-blue-50/60 border border-blue-100">
                                <div className="font-bold text-blue-950">Frontend Engineering</div>
                                <div className="text-zinc-500 mt-0.5">Next.js App Router, Core Web Vitals, Responsive Layouts.</div>
                              </div>
                              <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-100">
                                <div className="font-bold text-emerald-950">Cybersecurity Defense</div>
                                <div className="text-zinc-500 mt-0.5">Zero-Trust architecture, OWASP ASVS, Auth Hardening.</div>
                              </div>
                              <div className="p-2 rounded-lg bg-purple-50/60 border border-purple-100">
                                <div className="font-bold text-purple-950">Full-Stack Systems</div>
                                <div className="text-zinc-500 mt-0.5">REST APIs, database indexing, edge caching and CI/CD.</div>
                              </div>
                              <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-100">
                                <div className="font-bold text-amber-950">IoT &amp; Embedded</div>
                                <div className="text-zinc-500 mt-0.5">ESP32 microcontrollers, telemetry sensor mesh and OTA.</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ════════ TAB 3: SANDBOX & TEST RUNNER ════════ */}
                        {activeTab === "sandbox" && (
                          <div id="panel-sandbox" role="tabpanel" aria-labelledby="tab-sandbox" className="p-2.5 rounded-xl bg-[#0e1017] border border-zinc-800 text-zinc-300 font-mono text-[8px] space-y-1.5 text-left">
                            <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800/80 pb-1">
                              <div className="flex items-center gap-1.5">
                                <Terminal className="w-3 h-3 text-emerald-400" />
                                <span>student-test-sandbox</span>
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
                            <span>Mentorship &amp; Engineering Guidance — Not Completing Graded Academic Work</span>
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
                  6 FLOATING SATELLITE CARDS (NATURAL DEPTH & GENEROUS SPACING)
              ════════════════════════════════════════════════════════════════ */}

              {/* ── CARD 1: Student Flagship Programs (Top-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10, scale: 0.94 }}
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
                  y: { duration: 5.0, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.2 } }}
                className="hidden sm:block absolute -top-12 -left-12 lg:-left-24 xl:-left-32 z-30 w-[215px] sm:w-[230px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-2xl p-3 text-left"
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
                <div className="grid grid-cols-2 gap-1 mb-1.5">
                  <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-900 font-mono text-[8px] font-semibold truncate">
                    Frontend UI
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 font-mono text-[8px] font-semibold truncate">
                    AppSec
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


              {/* ── CARD 2: Mentor Dispatch Chat (Mid-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.94 }}
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
                  y: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="hidden md:block absolute top-[145px] -left-14 lg:-left-28 xl:-left-36 z-25 w-[220px] sm:w-[235px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Mentor Dispatch</h3>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[8px] font-bold">
                    <Users className="w-2.5 h-2.5 text-zinc-500" />
                    <span>3 Leads</span>
                  </div>
                </div>

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


              {/* ── CARD 3: Free Resource Library (Bottom-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -18, y: 15, scale: 0.94 }}
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
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="hidden sm:block absolute -bottom-10 -left-10 lg:-left-22 xl:-left-30 z-30 w-[215px] sm:w-[230px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3 text-left"
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


              {/* ── CARD 4: Code Task Performance Equalizer (Top-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10, scale: 0.94 }}
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
                  y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                }}
                whileHover={{ scale: 1.03, y: -9, transition: { duration: 0.2 } }}
                role="button"
                tabIndex={0}
                aria-label="Click to test simulated live code task efficiency benchmark"
                onClick={randomizeBenchmark}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    randomizeBenchmark();
                  }
                }}
                title="Click to test simulated live code task efficiency benchmark"
                className="hidden sm:block absolute -top-12 -right-12 lg:-right-24 xl:-right-32 z-30 w-[210px] sm:w-[225px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_22px_55px_rgba(0,0,0,0.12)] rounded-2xl p-3 cursor-pointer group text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-400">
                      BENCHMARK
                    </span>
                    <span className="font-mono text-[7px] text-zinc-400 uppercase bg-zinc-100 px-1 py-0.2 rounded font-semibold">
                      Simulated
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                </div>

                <div className="flex items-end gap-1 h-7 mb-1.5">
                  {chartBars.map((val, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-full bg-gradient-to-t from-zinc-950 to-zinc-700 transition-all duration-500 group-hover:from-blue-600 group-hover:to-violet-500"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>

                <div className="font-mono text-[7px] font-bold tracking-widest text-zinc-500 uppercase leading-tight">
                  SIMULATED CODE EFFICIENCY:
                </div>
                <div className="font-serif font-black text-lg text-zinc-950 flex items-center justify-between mt-0.5 group-hover:text-blue-600 transition-colors">
                  <span>{efficiencyScore}%</span>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center">
                    ▲ <span className="text-[7px] text-zinc-400 ml-1 font-sans">Click to test</span>
                  </span>
                </div>
              </motion.div>


              {/* ── CARD 5: Deployment Build Feedback (Mid-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.94 }}
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
                  y: { duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="hidden md:block absolute top-[145px] -right-14 lg:-right-28 xl:-right-36 z-25 w-[215px] sm:w-[230px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3 text-left"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5 text-blue-600" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Deploy Pipeline</h3>
                  </div>
                  <span className="font-mono text-[7px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Build #47 ✓
                  </span>
                </div>
                <div className="font-sans text-[10px] font-semibold text-zinc-800 truncate">
                  Next.js Edge Deployment Live
                </div>
                <div className="mt-1 p-1 rounded-md bg-zinc-50 border border-zinc-200/80 font-mono text-[7px] text-zinc-500 truncate flex items-center justify-between">
                  <span>Edge Cache Invalidation</span>
                  <span className="text-emerald-600 font-bold">2m ago</span>
                </div>
              </motion.div>


              {/* ── CARD 6: Security & Ethics Posture (Bottom-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 18, y: 15, scale: 0.94 }}
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
                  y: { duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="hidden sm:block absolute -bottom-10 -right-10 lg:-right-22 xl:-right-30 z-30 w-[215px] sm:w-[230px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3 text-left"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Security &amp; Ethics</h3>
                  </div>
                  <span className="font-mono text-[7px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    All Clear
                  </span>
                </div>
                <div className="font-mono text-[8px] text-zinc-700 truncate">
                  OWASP ASVS Standard Checked
                </div>
                <div className="font-mono text-[7px] text-zinc-400 mt-1 pt-0.5 border-t border-zinc-100 flex items-center justify-between">
                  <span>Academic Ethics</span>
                  <span className="font-bold text-blue-600">Verified</span>
                </div>
              </motion.div>

            </div>{/* end iPad anchor container */}
          </div>

        </div>
      </div>
    </section>
  );
}
