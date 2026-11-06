"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Check, 
  Activity, 
  MessageSquare, 
  Users, 
  Wifi, 
  TrendingUp, 
  Zap, 
  ShieldCheck,
  Radio
} from "lucide-react";

interface TodoItem {
  id: string;
  label: string;
  category: string;
  completed: boolean;
}

interface ChatMessage {
  id: string;
  sender: string;
  time: string;
  text: string;
  tag?: string;
}

export function Hero() {
  const [currentTime, setCurrentTime] = useState<string>("12:00");
  
  // Interactive Studio Command Chat (Simulated Pipeline Communication)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: "1", sender: "Infra", time: "09:15", text: "Staging container verification passed", tag: "CI" },
    { id: "2", sender: "AppSec", time: "10:30", text: "OWASP vulnerability scan completed (0 criticals)", tag: "SEC" },
    { id: "3", sender: "Founder", time: "11:00", text: "Release v2.4 staged for distribution", tag: "RELEASE" }
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [activeUsers, setActiveUsers] = useState(42);

  // Interactive Engineering Pipeline Tasks
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: "1", label: "Zero-knowledge proof verification", category: "Cryptography", completed: true },
    { id: "2", label: "ESP32 sensor telemetry mesh OTA", category: "Embedded", completed: true },
    { id: "3", label: "EVM contract storage packing audit", category: "Smart Contract", completed: false },
    { id: "4", label: "Multi-region Edge CDN cache warming", category: "Infrastructure", completed: false }
  ]);

  // Interactive Equalizer Chart (Simulated Benchmark Loop)
  const [chartBars, setChartBars] = useState<number[]>([55, 82, 100, 68, 92]);
  const [efficiencyScore, setEfficiencyScore] = useState<number>(94.8);
  
  // Phone In-Screen Active View Tab
  const [activeDockTab, setActiveDockTab] = useState<"telemetry" | "chat" | "security" | "hardware">("telemetry");

  // Telemetry Sparkline
  const [sparkline, setSparkline] = useState<number[]>([32, 58, 42, 75, 54, 88, 62, 94, 78, 96]);

  // Real-time Clock
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

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
    setChatMessages(prev => [
      ...prev.slice(-2),
      { id: Date.now().toString(), sender: "You", time: nowTime, text: inputMsg.trim(), tag: "INPUT" }
    ]);
    setInputMsg("");
    setActiveUsers(p => p + 1);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const randomizeChart = () => {
    const bars = Array.from({ length: 5 }, () => Math.floor(Math.random() * 45) + 55);
    setChartBars(bars);
    const avg = Number((bars.reduce((a, b) => a + b, 0) / bars.length).toFixed(1));
    setEfficiencyScore(Math.min(99.9, avg));
    setSparkline(prev => prev.map(() => Math.floor(Math.random() * 60) + 40));
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#fcfbfd] to-[#faf8fc]">
      {/* Subtle Engineering Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8a3ffc08_1px,transparent_1px),linear-gradient(to_bottom,#8a3ffc08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Ambient Multi-Layer Radial Glows */}
      <div className="absolute top-1/4 right-8 w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/12 via-blue-500/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-br from-blue-500/8 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ════════════════ LEFT COLUMN: EDITORIAL POSITIONING & CTAs ════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-20">
            {/* 1. Studio Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/80 font-mono text-[11px] font-bold text-violet-900 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
              <span>FOUNDER-LED TECHNOLOGY STUDIO</span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-serif font-black tracking-tight text-zinc-950 leading-[1.08] mb-6">
              Engineering digital <br className="hidden sm:inline" />
              systems that solve <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent italic font-normal">
                real problems.
              </span>
            </h1>

            {/* 3. Supporting Description */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6 font-sans max-w-xl">
              We design, build and secure software products, business systems and connected technologies for businesses, startups and teams turning ideas into practical solutions.
            </p>

            {/* 4. Technical Capability Indicators */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-zinc-600 mb-8 pb-1">
              <span className="text-zinc-800 font-semibold">Software Engineering</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Cybersecurity</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Automation</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Connected Systems</span>
            </div>

            {/* 5. Primary and Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="/contact?source=hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 active:scale-98 transition-all w-full sm:w-auto group cursor-pointer shadow-lg shadow-zinc-950/15"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-200/90 transition-all shadow-2xs hover:border-zinc-300 active:scale-98 w-full sm:w-auto cursor-pointer"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* 6. Business Proof Strip (Honest, Defensible Studio Records) */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-zinc-200/80 w-full max-w-lg">
              <div>
                <div className="font-serif font-black text-2xl sm:text-3xl text-zinc-950">15+</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                  Customers Served
                </div>
              </div>
              <div>
                <div className="font-serif font-black text-2xl sm:text-3xl text-blue-600">15+</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="font-serif font-bold text-xl sm:text-2xl text-violet-700 leading-tight">Founder-led</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                  Engineering &amp; Delivery
                </div>
              </div>
            </div>

            {/* 7. Udyam MSME Registration Credibility Indicator */}
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2.5 font-mono text-xs text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>
                <strong className="text-zinc-900 font-bold">Udyam Registered MSME</strong> · Govt. of India
              </span>
              <span className="text-zinc-300">·</span>
              <Link 
                href="/about#credentials" 
                className="text-blue-600 hover:text-blue-800 text-[11px] font-semibold underline underline-offset-2 transition-colors"
                title="View Rishvin Labs Udyam Registration Details"
              >
                Verify
              </Link>
            </div>
          </div>

          {/* ════════════════ RIGHT COLUMN: REFINED DASHBOARD ILLUSTRATION ════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center py-10 relative">

            {/* Central Anchor for Phone and Satellite Cards */}
            <div className="relative w-[285px] sm:w-[315px] select-none scale-[0.95] xl:scale-100 transition-transform" style={{ height: "620px" }}>

              {/* ════════════════ IPHONE HARDWARE CHASSIS ════════════════ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-[#09090b] p-[3px] rounded-[54px] shadow-[0_35px_90px_-15px_rgba(124,58,237,0.25),0_15px_40px_-5px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.7)_inset] z-10 flex flex-col overflow-hidden"
              >
                {/* Glossy Hardware Glass Inner Bezel */}
                <div className="w-full h-full bg-gradient-to-b from-[#faf8fc] to-[#f4f1f8] rounded-[50px] flex flex-col overflow-hidden border border-zinc-200/80 relative">
                  
                  {/* Screen Glare Highlight */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-white/70 via-white/10 to-transparent rounded-full pointer-events-none z-30" />

                  {/* ── Status Bar & Dynamic Island ── */}
                  <div className="relative flex items-center justify-between w-full px-6 pt-3.5 pb-2 shrink-0 z-40">
                    <span className="font-mono font-bold text-[11px] text-zinc-800 tracking-tight">{currentTime}</span>

                    {/* Apple-style Interactive Dynamic Island */}
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 top-2.5 h-[26px] px-3 bg-zinc-950 rounded-full flex items-center gap-2 shadow-md border border-zinc-800/80 transition-all hover:scale-105 cursor-pointer"
                      title="Studio Architecture Demo"
                    >
                      <div className="w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700/60" />
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-[8px] font-bold text-zinc-300 uppercase tracking-widest">TESTBED ACTIVE</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-zinc-700">
                      <span className="font-mono text-[9px] font-bold text-zinc-500">5G</span>
                      <Wifi className="w-3 h-3 text-zinc-700" />
                      <div className="w-4 h-2 rounded-xs border border-zinc-700 p-0.5 flex items-center">
                        <div className="w-full h-full bg-zinc-800 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* ── IN-SCREEN APP CONTENT ── */}
                  <div className="flex-1 px-3.5 pb-2 flex flex-col gap-2.5 overflow-hidden z-20">

                    {/* Studio Header Greeting */}
                    <div className="flex items-center justify-between px-1 pt-1.5">
                      <div>
                        <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">Studio Operations</div>
                        <div className="font-serif text-sm sm:text-base font-bold text-zinc-950 leading-tight flex items-center gap-1.5">
                          <span>Rishvin Labs</span>
                          <span className="text-violet-600 text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-violet-100/70 border border-violet-200">TESTBED</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 flex items-center justify-center text-white font-mono text-xs font-bold shadow-md shadow-violet-500/20">
                          R
                        </div>
                        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                      </div>
                    </div>

                    {/* Interactive Tab View Mode */}
                    <AnimatePresence mode="wait">
                      {activeDockTab === "telemetry" && (
                        <motion.div
                          key="telemetry"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col gap-2"
                        >
                          {/* ── Stat Cards Row ── */}
                          <div className="grid grid-cols-2 gap-2">
                            {/* Card 1: Catalogue Scope */}
                            <div className="bg-white/95 border border-zinc-200/80 rounded-2xl p-2.5 shadow-xs">
                              <div className="flex items-center justify-between mb-1">
                                <div className="w-5 h-5 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center">
                                  <Zap className="w-2.5 h-2.5 text-blue-600" />
                                </div>
                                <span className="font-mono text-[8px] text-blue-600 font-bold bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-100">
                                  CATALOGUE
                                </span>
                              </div>
                              <div className="font-serif font-black text-lg text-zinc-950">36+</div>
                              <div className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider font-semibold">Service Offerings</div>
                            </div>

                            {/* Card 2: Security Architecture */}
                            <div className="bg-white/95 border border-zinc-200/80 rounded-2xl p-2.5 shadow-xs">
                              <div className="flex items-center justify-between mb-1">
                                <div className="w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center">
                                  <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
                                </div>
                                <span className="font-mono text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100">
                                  HARDENED
                                </span>
                              </div>
                              <div className="font-serif font-bold text-base text-zinc-950">Zero-Trust</div>
                              <div className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider font-semibold">Architecture Model</div>
                            </div>
                          </div>

                          {/* ── High-Fidelity Telemetry Sparkline Card ── */}
                          <div className="bg-white/95 border border-zinc-200/80 rounded-2xl p-3 shadow-xs">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-mono text-[9px] font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                                <Activity className="w-3 h-3 text-violet-600" />
                                Simulated Node Telemetry
                              </span>
                              <div className="flex items-center gap-1 text-emerald-600 font-mono text-[9px] font-bold">
                                <TrendingUp className="w-3 h-3" />
                                <span>Benchmarked</span>
                              </div>
                            </div>

                            {/* SVG Sparkline area chart with gradient glow */}
                            <div className="h-10 relative">
                              <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="heroSparkGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
                                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.01" />
                                  </linearGradient>
                                </defs>
                                <path
                                  d={`M0,${40 - sparkline[0] * 0.38} ${sparkline.map((v, i) => `L${i * 22},${40 - v * 0.38}`).join(" ")} L198,40 L0,40 Z`}
                                  fill="url(#heroSparkGrad)"
                                />
                                <path
                                  d={`M0,${40 - sparkline[0] * 0.38} ${sparkline.map((v, i) => `L${i * 22},${40 - v * 0.38}`).join(" ")}`}
                                  fill="none"
                                  stroke="#7c3aed"
                                  strokeWidth="1.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <circle cx="198" cy={40 - sparkline[sparkline.length - 1] * 0.38} r="3" fill="#7c3aed" className="animate-ping opacity-75" />
                                <circle cx="198" cy={40 - sparkline[sparkline.length - 1] * 0.38} r="2.5" fill="#7c3aed" />
                              </svg>
                            </div>
                            <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400 mt-1 pt-1 border-t border-zinc-100">
                              <span>Throughput: Active Protocol</span>
                              <span className="text-violet-600 font-semibold">Latency: ~14ms</span>
                            </div>
                          </div>

                          {/* ── Operational Event Feed ── */}
                          <div className="bg-white/95 border border-zinc-200/80 rounded-2xl p-2.5 shadow-xs">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-mono text-[9px] font-bold text-zinc-800 uppercase tracking-wider">
                                Pipeline Automation
                              </span>
                              <span className="font-mono text-[8px] text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                                CI/CD
                              </span>
                            </div>
                            <div className="space-y-1.5">
                              {[
                                { icon: "🚀", title: "Continuous Delivery", meta: "Automated Edge CDN deployment", bg: "bg-blue-50/70 border-blue-200/60 text-blue-900" },
                                { icon: "🛡️", title: "OWASP ASVS Standard", meta: "Automated security rule scan", bg: "bg-emerald-50/70 border-emerald-200/60 text-emerald-900" },
                                { icon: "⚡", title: "Hardware Protocol Mesh", meta: "ESP32 telemetry data sync", bg: "bg-amber-50/70 border-amber-200/60 text-amber-900" }
                              ].map((item, idx) => (
                                <div key={idx} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border ${item.bg} transition-all`}>
                                  <span className="text-xs leading-none shrink-0">{item.icon}</span>
                                  <div className="min-w-0 flex-1">
                                    <div className="font-sans text-[10px] font-bold truncate leading-tight">{item.title}</div>
                                    <div className="font-mono text-[8px] opacity-75 truncate">{item.meta}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* ── Hardware Performance Gauges ── */}
                          <div className="grid grid-cols-3 gap-1.5">
                            {[
                              { label: "CPU", value: 28, color: "#3b82f6" },
                              { label: "MEM", value: 44, color: "#8b5cf6" },
                              { label: "NET", value: 89, color: "#10b981" }
                            ].map(({ label, value, color }) => {
                              const r = 13;
                              const circ = 2 * Math.PI * r;
                              const dash = (value / 100) * circ;
                              return (
                                <div key={label} className="bg-white/95 border border-zinc-200/80 rounded-2xl p-1.5 flex flex-col items-center shadow-2xs gap-0.5">
                                  <svg width="32" height="32" viewBox="0 0 32 32">
                                    <circle cx="16" cy="16" r={r} fill="none" stroke="#f4f4f5" strokeWidth="2.5" />
                                    <circle
                                      cx="16" cy="16" r={r} fill="none"
                                      stroke={color} strokeWidth="2.5"
                                      strokeDasharray={`${dash} ${circ - dash}`}
                                      strokeLinecap="round"
                                      transform="rotate(-90 16 16)"
                                    />
                                    <text x="16" y="19" textAnchor="middle" fontSize="7" fontWeight="700" fill="#09090b" fontFamily="monospace">
                                      {value}%
                                    </text>
                                  </svg>
                                  <span className="font-mono text-[7px] text-zinc-500 font-bold uppercase tracking-wider">{label}</span>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {activeDockTab === "chat" && (
                        <motion.div
                          key="chat"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white/95 border border-zinc-200/80 rounded-2xl p-3 flex flex-col gap-2 h-[410px] justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-100">
                              <span className="font-mono text-[9px] font-bold uppercase text-zinc-800">Command Thread Demo</span>
                              <span className="font-mono text-[8px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">SIMULATOR</span>
                            </div>
                            <div className="space-y-2 text-xs">
                              {chatMessages.map(m => (
                                <div key={m.id} className="p-2 rounded-xl bg-zinc-50 border border-zinc-100">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-[10px] text-zinc-900">{m.sender}</span>
                                    <span className="font-mono text-[8px] text-zinc-400">{m.time}</span>
                                  </div>
                                  <p className="text-[10px] text-zinc-600 font-sans leading-snug">{m.text}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-2 rounded-xl bg-zinc-100 text-[10px] text-zinc-500 font-mono text-center">
                            Interactive demo chat environment
                          </div>
                        </motion.div>
                      )}

                      {activeDockTab === "security" && (
                        <motion.div
                          key="security"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white/95 border border-zinc-200/80 rounded-2xl p-3 flex flex-col gap-2.5 h-[410px]"
                        >
                          <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span className="font-mono text-[10px] font-bold text-zinc-900 uppercase">Defense Methodology</span>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70">
                              <div className="font-bold text-[10px] text-emerald-950 mb-0.5">Zero-Trust Network Design</div>
                              <div className="text-[9px] text-emerald-800 font-mono">Mutual TLS 1.3 architecture pattern</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-200/70">
                              <div className="font-bold text-[10px] text-blue-950 mb-0.5">Formal Contract Verification</div>
                              <div className="text-[9px] text-blue-800 font-mono">Static analysis &amp; boundary condition audit</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-200/70">
                              <div className="font-bold text-[10px] text-purple-950 mb-0.5">Supply Chain Audit</div>
                              <div className="text-[9px] text-purple-800 font-mono">Continuous dependency integrity review</div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeDockTab === "hardware" && (
                        <motion.div
                          key="hardware"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white/95 border border-zinc-200/80 rounded-2xl p-3 flex flex-col gap-2.5 h-[410px]"
                        >
                          <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                            <Radio className="w-4 h-4 text-blue-600" />
                            <span className="font-mono text-[10px] font-bold text-zinc-900 uppercase">IoT Edge Architecture</span>
                          </div>
                          <div className="space-y-2">
                            <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                              <div className="flex justify-between font-mono text-[9px] font-bold">
                                <span>ESP32 Edge Microcontroller</span>
                                <span className="text-emerald-600">Dual-Core</span>
                              </div>
                              <div className="text-[8px] text-zinc-500 font-mono mt-0.5">On-chip hardware SHA-256 acceleration</div>
                            </div>
                            <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                              <div className="flex justify-between font-mono text-[9px] font-bold">
                                <span>Telemetry Protocol</span>
                                <span className="text-blue-600">MQTT / TLS</span>
                              </div>
                              <div className="text-[8px] text-zinc-500 font-mono mt-0.5">Encrypted edge-to-cloud telemetry sync</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>{/* end in-screen content */}

                  {/* ── Bottom Interactive Dock ── */}
                  <div className="px-4 pb-4 pt-1 shrink-0 z-30">
                    <div className="bg-white/95 border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-3xl p-1.5 flex items-center gap-1">
                      {[
                        { id: "telemetry", icon: Activity, label: "Fleet" },
                        { id: "chat", icon: MessageSquare, label: "Chat" },
                        { id: "security", icon: ShieldCheck, label: "Security" },
                        { id: "hardware", icon: Radio, label: "Hardware" }
                      ].map(({ id, icon: Icon, label }) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setActiveDockTab(id as typeof activeDockTab)}
                          className={`flex-1 py-2 rounded-2xl transition-all cursor-pointer flex items-center justify-center relative ${
                            activeDockTab === id
                              ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/20"
                              : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                          }`}
                          title={`Switch view to ${label}`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 1: Studio Command — top-left ════════════ */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: -20, scale: 0.92 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -6, 0] 
                }}
                transition={{ 
                  duration: 0.55, 
                  delay: 0.2, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.2 } }}
                className="absolute -top-12 -left-32 sm:-left-44 z-30 w-[235px] sm:w-[265px] bg-white/98 backdrop-blur-2xl border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-[26px] p-4 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="font-serif text-sm sm:text-base font-bold text-zinc-950">Studio Command</h3>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200/60 text-zinc-700 font-mono text-[9px] font-bold">
                    <Users className="w-2.5 h-2.5 text-zinc-500" />
                    <span>{activeUsers}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="flex items-start gap-1.5">
                      <span className="font-mono text-[9px] text-zinc-400 w-8 shrink-0 text-right pt-0.5">{msg.time}</span>
                      <div className="flex-1 bg-zinc-50 border border-zinc-200/60 rounded-xl px-2.5 py-1.5 text-[10px] font-sans text-zinc-800">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-bold text-[9px] text-zinc-900">{msg.sender}</span>
                          {msg.tag && (
                            <span className="font-mono text-[7px] font-bold px-1 py-0.2 rounded bg-zinc-200/60 text-zinc-600">
                              {msg.tag}
                            </span>
                          )}
                        </div>
                        <p className="leading-snug text-zinc-600">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative pt-1">
                  <div className="absolute -top-2 left-2 z-40 bg-zinc-950 text-white font-mono text-[8px] font-bold px-2 py-0.5 rounded-md shadow-sm uppercase tracking-wider">
                    INTERACTIVE
                  </div>
                  <form onSubmit={handleSend}>
                    <input
                      type="text"
                      value={inputMsg}
                      onChange={e => setInputMsg(e.target.value)}
                      placeholder="Type engineering message..."
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-[11px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-violet-500 font-sans shadow-inner transition-colors"
                    />
                  </form>
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 2: Benchmark Telemetry Equalizer — right upper ════════════ */}
              <motion.div
                initial={{ opacity: 0, x: 28, scale: 0.92 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -7, 0] 
                }}
                transition={{ 
                  duration: 0.55, 
                  delay: 0.3, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                }}
                whileHover={{ scale: 1.03, y: -9, transition: { duration: 0.2 } }}
                onClick={randomizeChart}
                title="Click to cycle benchmark simulation"
                className="absolute top-14 -right-32 sm:-right-44 z-30 w-[195px] sm:w-[215px] bg-white/98 backdrop-blur-2xl border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-[26px] p-4 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-500">SIMULATED BENCHMARK</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-ping" />
                </div>

                <div className="flex items-end gap-1.5 h-12 mb-3">
                  {chartBars.map((val, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 rounded-full bg-gradient-to-t from-zinc-950 to-zinc-700 transition-all duration-500 group-hover:from-violet-600 group-hover:to-blue-500" 
                      style={{ height: `${val}%` }} 
                    />
                  ))}
                </div>

                <div className="text-right">
                  <div className="font-mono text-[8px] font-bold tracking-widest text-zinc-400 uppercase leading-tight">
                    TELEMETRY LOOP <br />EFFICIENCY:
                  </div>
                  <div className="font-serif font-black text-2xl text-zinc-950 flex items-center justify-end gap-1 mt-0.5 group-hover:text-violet-600 transition-colors">
                    {efficiencyScore}% <span className="text-xs text-emerald-500 font-mono font-bold">▲</span>
                  </div>
                  <div className="font-mono text-[8px] text-zinc-400 mt-0.5">Click to benchmark</div>
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 3: Engineering Pipeline Checklist — bottom-left ════════════ */}
              <motion.div
                initial={{ opacity: 0, y: 28, x: -20, scale: 0.92 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -6, 0] 
                }}
                transition={{ 
                  duration: 0.55, 
                  delay: 0.4, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                }}
                whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.2 } }}
                className="absolute -bottom-10 -left-26 sm:-left-38 z-30 w-[215px] sm:w-[240px] bg-white/98 backdrop-blur-2xl border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-[26px] p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-sm font-bold text-zinc-950">Engineering Pipeline</h3>
                  <span className="font-mono text-[8px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 font-bold">
                    {todos.filter(t => t.completed).length}/{todos.length} DONE
                  </span>
                </div>

                <div className="space-y-2">
                  {todos.map(todo => (
                    <div 
                      key={todo.id} 
                      onClick={() => toggleTodo(todo.id)} 
                      className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-zinc-50 cursor-pointer transition-colors group"
                    >
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-all border-2 ${
                        todo.completed 
                          ? "bg-emerald-500 border-emerald-500 text-white shadow-xs shadow-emerald-500/20" 
                          : "border-zinc-300 bg-white text-transparent group-hover:border-zinc-400"
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`font-sans text-[10px] leading-tight transition-all truncate ${
                          todo.completed ? "line-through text-zinc-400" : "font-semibold text-zinc-800"
                        }`}>
                          {todo.label}
                        </div>
                        <div className="font-mono text-[7px] text-zinc-400 uppercase tracking-wider">{todo.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 4: Security Architecture Badge — top-right ════════════ */}
              <motion.div
                initial={{ opacity: 0, y: -16, x: 16, scale: 0.92 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 1.1 }
                }}
                whileHover={{ scale: 1.04, y: -7, transition: { duration: 0.2 } }}
                className="absolute -top-8 -right-26 sm:-right-36 z-30 bg-white/98 backdrop-blur-2xl border border-zinc-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.1)] rounded-2xl px-3.5 py-2.5 flex items-center gap-3 w-[170px] sm:w-[185px]"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-500">SECURITY POSTURE</div>
                  <div className="font-sans text-xs font-bold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Zero-Trust Model
                  </div>
                  <div className="font-mono text-[7px] text-zinc-400">OWASP ASVS Standard</div>
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 5: Global Fleet Topology — bottom-right ════════════ */}
              <motion.div
                initial={{ opacity: 0, y: 16, x: 16, scale: 0.92 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -6, 0] 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                }}
                whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.2 } }}
                className="absolute -bottom-8 -right-26 sm:-right-36 z-30 bg-white/98 backdrop-blur-2xl border border-zinc-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.1)] rounded-2xl px-3.5 py-2.5 w-[170px] sm:w-[190px]"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-500">CLUSTER TOPOLOGY</span>
                  <span className="font-mono text-[9px] text-blue-600 font-bold">Edge Grid</span>
                </div>
                <div className="flex items-end gap-0.5 h-6">
                  {[70, 85, 60, 90, 75, 100, 65, 88, 72, 95, 80, 100, 68, 92, 78].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 rounded-full bg-gradient-to-t from-blue-600 to-indigo-400" 
                      style={{ height: `${h}%`, opacity: 0.45 + (i * 0.038) }} 
                    />
                  ))}
                </div>
                <div className="mt-1 font-mono text-[8px] text-zinc-400 flex items-center justify-between">
                  <span>Multi-Region Nodes</span>
                  <span className="text-zinc-700 font-bold">~14ms</span>
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 6: Continuous Deploy Pipeline — right-center ════════════ */}
              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.92 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                }}
                whileHover={{ scale: 1.04, y: -7, transition: { duration: 0.2 } }}
                className="absolute top-[50%] -translate-y-1/2 -right-26 sm:-right-36 z-30 bg-white/98 backdrop-blur-2xl border border-zinc-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.1)] rounded-2xl px-3.5 py-2.5 w-[170px] sm:w-[190px] flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-violet-600" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-500">DEPLOY PIPELINE</div>
                  <div className="font-sans text-xs font-bold text-zinc-950 truncate flex items-center gap-1">
                    <span>CI/CD Workflow</span>
                    <span className="text-emerald-600 font-mono text-[10px]">✓</span>
                  </div>
                  <div className="font-mono text-[8px] text-zinc-400 mt-0.5">Automated release flow</div>
                </div>
              </motion.div>

            </div>{/* end central phone anchor */}
          </div>

        </div>
      </div>
    </section>
  );
}
