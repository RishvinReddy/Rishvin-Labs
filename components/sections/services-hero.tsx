"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  ArrowDown, 
  Check, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Server, 
  Workflow 
} from "lucide-react";

interface PipelineStep {
  id: string;
  name: string;
  category: string;
  status: "LIVE" | "PASS" | "ACTIVE";
  completed: boolean;
}

export function ServicesHero() {
  const [currentTime, setCurrentTime] = useState<string>("12:00");
  
  // Interactive Monitor Dashboard Tabs
  const [activeTab, setActiveTab] = useState<"overview" | "pipelines" | "security" | "cloud">("overview");

  // Interactive Pipeline Tasks
  const [pipelineSteps, setPipelineSteps] = useState<PipelineStep[]>([
    { id: "1", name: "Zero-Knowledge Cryptographic Layer", category: "Security", status: "PASS", completed: true },
    { id: "2", name: "Distributed Microservices Architecture", category: "Backend", status: "LIVE", completed: true },
    { id: "3", name: "ESP32 Sensor Telemetry Mesh OTA", category: "IoT", status: "ACTIVE", completed: false },
    { id: "4", name: "Multi-Region Edge CDN Cache Warming", category: "Infrastructure", status: "ACTIVE", completed: false }
  ]);

  // Interactive Equalizer Chart (Simulated Benchmark Loop)
  const [chartBars, setChartBars] = useState<number[]>([65, 88, 100, 72, 94, 80, 96]);
  const [efficiencyScore, setEfficiencyScore] = useState<number>(94.8);

  // Sparkline data points for system throughput
  const [sparkline, setSparkline] = useState<number[]>([38, 62, 45, 82, 58, 92, 68, 95, 84, 98]);

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

  const toggleStep = (id: string) => {
    setPipelineSteps(prev => prev.map(s => s.id === id ? { ...s, completed: !s.completed } : s));
  };

  const randomizeBenchmark = () => {
    const bars = Array.from({ length: 7 }, () => Math.floor(Math.random() * 40) + 60);
    setChartBars(bars);
    const avg = Number((bars.reduce((a, b) => a + b, 0) / bars.length).toFixed(1));
    setEfficiencyScore(avg);
    setSparkline(prev => [...prev.slice(1), Math.floor(Math.random() * 45) + 55]);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 130;
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
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white text-zinc-950">
      {/* ── Background Subtle Grid & Precision Radial Lighting ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8a3ffc08_1px,transparent_1px),linear-gradient(to_bottom,#8a3ffc08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 right-8 w-[600px] h-[600px] bg-gradient-to-tr from-violet-500/10 via-blue-500/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/6 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ════════════════ LEFT SECTION: B2B SERVICE POSITIONING ════════════════ */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
            {/* 1. Studio Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 font-mono text-[11px] font-bold text-blue-900 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>STUDIO CAPABILITIES CATALOG</span>
            </div>

            {/* 2. Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-serif font-black tracking-tight text-zinc-950 leading-[1.08] mb-6">
              Technology engineered <br className="hidden sm:inline" />
              around your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent italic font-normal">
                business.
              </span>
            </h1>

            {/* 3. Supporting Description */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6 font-sans max-w-xl">
              From custom software and business applications to cybersecurity, automation and connected systems, we help businesses turn operational challenges into reliable digital solutions.
            </p>

            {/* 4. Audience Indicator Line */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-xs text-zinc-600 mb-8 pb-1">
              <span className="text-zinc-400 uppercase tracking-wider text-[10px] font-bold">For:</span>
              <span className="text-zinc-800 font-semibold">Startups</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Small Businesses</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Growing Companies</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-800 font-semibold">Enterprises</span>
            </div>

            {/* 5. Primary and Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-4 w-full sm:w-auto">
              <a
                href="#catalogue-directory"
                onClick={(e) => scrollToSection(e, "catalogue-directory")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 active:scale-98 transition-all w-full sm:w-auto group cursor-pointer shadow-lg shadow-zinc-950/15"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/contact?source=services-hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-200/90 transition-all shadow-2xs hover:border-zinc-300 active:scale-98 w-full sm:w-auto cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </Link>
            </div>

            {/* Optional Tertiary Link */}
            <div className="mb-10 pl-1">
              <a
                href="#packages"
                onClick={(e) => scrollToSection(e, "packages")}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View Curated Packages (Fixed-scope delivery)</span>
                <span className="font-bold">→</span>
              </a>
            </div>

            {/* 6. Business Information Strip */}
            <div className="w-full max-w-lg pt-6 border-t border-zinc-200/80">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="font-serif font-black text-2xl sm:text-3xl text-zinc-950">36+</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                    Service Groups
                  </div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl sm:text-3xl text-blue-600">₹300</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                    Starting at ₹300*
                  </div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl sm:text-2xl text-violet-700 leading-tight">Founder-led</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold leading-tight">
                    Engineering
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 font-sans mt-3">
                *Indicative starting prices. Final project costs depend on scope, complexity and integrations.
              </p>
            </div>
          </div>

          {/* ════════════════ RIGHT SECTION: DESKTOP ENTERPRISE WORKSTATION ════════════════ */}
          <div className="lg:col-span-7 flex items-center justify-center relative py-6 select-none">

            {/* Central Workstation Anchor Container */}
            <div className="relative w-full max-w-[560px] xl:max-w-[620px] mx-auto">

              {/* ════════════════ WIDESCREEN WORKSTATION MONITOR ════════════════ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full"
              >
                {/* Monitor Frame: Sleek Aluminum Chassis with Precision Corner Radii */}
                <div className="bg-[#090a0f] p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl shadow-[0_30px_90px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.12)_inset] border border-zinc-800 flex flex-col relative overflow-hidden">
                  
                  {/* Subtle Screen Bezel Reflection Overlay */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none z-40 rounded-full blur-2xl" />

                  {/* Monitor Webcam Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700 mx-auto mb-2 shrink-0 z-30" />

                  {/* ── MONITOR DISPLAY SURFACE: Rishvin Labs Enterprise Console ── */}
                  <div className="w-full bg-[#0d0e15] rounded-xl sm:rounded-2xl border border-zinc-800/90 overflow-hidden flex flex-col text-zinc-200 text-left relative z-20">
                    
                    {/* ── Console Header Bar ── */}
                    <div className="px-3 sm:px-4 py-2.5 bg-[#12141e] border-b border-zinc-800 flex items-center justify-between gap-2 shrink-0">
                      {/* Identity & Workspace */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-mono font-black text-xs text-white shadow-2xs">
                          RL
                        </div>
                        <div className="flex flex-col">
                          <span className="font-serif text-xs font-bold text-white tracking-tight leading-none">
                            Rishvin Labs
                          </span>
                          <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-wider mt-0.5">
                            Enterprise Console • Production
                          </span>
                        </div>
                      </div>

                      {/* Interactive View Tabs */}
                      <div className="hidden sm:flex items-center bg-[#181b29] border border-zinc-800 rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => setActiveTab("overview")}
                          className={`px-2 py-1 rounded-md font-mono text-[9px] font-semibold transition-all cursor-pointer ${
                            activeTab === "overview" ? "bg-zinc-800 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("pipelines")}
                          className={`px-2 py-1 rounded-md font-mono text-[9px] font-semibold transition-all cursor-pointer ${
                            activeTab === "pipelines" ? "bg-zinc-800 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          Pipelines
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("security")}
                          className={`px-2 py-1 rounded-md font-mono text-[9px] font-semibold transition-all cursor-pointer ${
                            activeTab === "security" ? "bg-zinc-800 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          Security
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("cloud")}
                          className={`px-2 py-1 rounded-md font-mono text-[9px] font-semibold transition-all cursor-pointer ${
                            activeTab === "cloud" ? "bg-zinc-800 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          Cloud
                        </button>
                      </div>

                      {/* Latency & Live Clock Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[9px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>~14ms Edge</span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400 font-bold tracking-tight">
                          {currentTime} IST
                        </span>
                      </div>
                    </div>

                    {/* ── Console Body ── */}
                    <div className="p-3 sm:p-4 space-y-3">
                      
                      {/* Metric Strip (4 Columns) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#141622] border border-zinc-800/80">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400 font-bold">
                              Services
                            </span>
                            <Zap className="w-3 h-3 text-blue-400" />
                          </div>
                          <div className="font-serif font-black text-base sm:text-lg text-white">36+</div>
                          <div className="font-mono text-[8px] text-zinc-400">Published Groups</div>
                        </div>

                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#141622] border border-zinc-800/80">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400 font-bold">
                              Security
                            </span>
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          </div>
                          <div className="font-serif font-bold text-xs sm:text-sm text-emerald-400 leading-snug">
                            Zero-Trust
                          </div>
                          <div className="font-mono text-[8px] text-zinc-400">OWASP ASVS Standard</div>
                        </div>

                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#141622] border border-zinc-800/80">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400 font-bold">
                              Pipeline
                            </span>
                            <Workflow className="w-3 h-3 text-violet-400" />
                          </div>
                          <div className="font-serif font-black text-base sm:text-lg text-white">CI/CD</div>
                          <div className="font-mono text-[8px] text-zinc-400">Automated Builds</div>
                        </div>

                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#141622] border border-zinc-800/80">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400 font-bold">
                              Edge Grid
                            </span>
                            <Server className="w-3 h-3 text-amber-400" />
                          </div>
                          <div className="font-serif font-black text-base sm:text-lg text-white">~14ms</div>
                          <div className="font-mono text-[8px] text-zinc-400">Global Routing</div>
                        </div>
                      </div>

                      {/* Main Center Console Split with Interactive Tab Switching */}
                      {activeTab === "overview" && (
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                          
                          {/* Telemetry & Sparkline Panel */}
                          <div 
                            onClick={randomizeBenchmark}
                            className="sm:col-span-7 p-3 rounded-xl bg-[#141622] border border-zinc-800/80 hover:border-zinc-700 transition-colors cursor-pointer group"
                            title="Click to simulate network throughput & latency"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-300">
                                System Telemetry &amp; Throughput
                              </span>
                              <div className="flex items-center gap-2 font-mono text-[8px]">
                                <span className="text-blue-400 font-bold">{efficiencyScore}% opt</span>
                                <span className="text-emerald-400 font-bold flex items-center gap-1">
                                  <TrendingUp className="w-2.5 h-2.5" />
                                  16.8k req/s
                                </span>
                              </div>
                            </div>

                            {/* SVG Wave + Mini Equalizer Bars */}
                            <div className="h-9 w-full relative pt-1">
                              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 36" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="monitorWaveGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                                  </linearGradient>
                                </defs>
                                <path
                                  d={`M0,${36 - (sparkline[0] / 100) * 30} ${sparkline.map((v, i) => `L${i * 22},${36 - (v / 100) * 30}`).join(" ")}`}
                                  fill="none"
                                  stroke="#3b82f6"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>

                            {/* Mini Equalizer Pulse Strip */}
                            <div className="flex items-end gap-1 h-2.5 my-1">
                              {chartBars.map((val, idx) => (
                                <div
                                  key={idx}
                                  className="flex-1 rounded-xs bg-gradient-to-t from-blue-600 to-violet-500 transition-all duration-300"
                                  style={{ height: `${val}%` }}
                                />
                              ))}
                            </div>

                            <div className="flex justify-between items-center font-mono text-[8px] text-zinc-400 mt-2 pt-1.5 border-t border-zinc-800/60">
                              <span>Testbed Latency: ~14ms</span>
                              <span className="group-hover:text-blue-400 transition-colors">Click to simulate</span>
                            </div>
                          </div>

                          {/* Enterprise Delivery Checklist */}
                          <div className="sm:col-span-5 p-3 rounded-xl bg-[#141622] border border-zinc-800/80 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-300">
                                Delivery Matrix
                              </span>
                              <span className="font-mono text-[8px] text-blue-400 font-bold">
                                {pipelineSteps.filter(s => s.completed).length}/4 DONE
                              </span>
                            </div>

                            <div className="space-y-1.5">
                              {pipelineSteps.map(step => (
                                <div 
                                  key={step.id}
                                  onClick={() => toggleStep(step.id)}
                                  className="flex items-center gap-2 cursor-pointer group/step py-0.5"
                                >
                                  <div className={`w-3 h-3 rounded flex items-center justify-center shrink-0 transition-colors ${step.completed ? "bg-emerald-600 text-white" : "border border-zinc-600 group-hover/step:border-zinc-400"}`}>
                                    {step.completed && <Check className="w-2 h-2 stroke-[3]" />}
                                  </div>
                                  <span className={`text-[8px] font-sans truncate ${step.completed ? "line-through text-zinc-400" : "text-zinc-300"}`}>
                                    {step.name}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="font-mono text-[7px] text-zinc-400 uppercase tracking-widest mt-2 pt-1 border-t border-zinc-800/60">
                              Automated Verification
                            </div>
                          </div>

                        </div>
                      )}

                      {/* Tab 2: Pipelines Detail */}
                      {activeTab === "pipelines" && (
                        <div className="p-3 rounded-xl bg-[#141622] border border-zinc-800/80 space-y-2">
                          <div className="flex items-center justify-between font-mono text-[9px] font-bold text-zinc-300 uppercase">
                            <span>Active CI/CD Build Matrix (Edge CDN)</span>
                            <span className="text-emerald-400">Release v2.4.1 LIVE</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[8px] font-mono">
                            <div className="p-2 rounded-lg bg-[#181b29] border border-zinc-800 flex justify-between">
                              <span className="text-zinc-400">01. TypeScript Compilation</span>
                              <span className="text-emerald-400 font-bold">PASS (4.2s)</span>
                            </div>
                            <div className="p-2 rounded-lg bg-[#181b29] border border-zinc-800 flex justify-between">
                              <span className="text-zinc-400">02. SAST Security Audit</span>
                              <span className="text-emerald-400 font-bold">0 CVEs</span>
                            </div>
                            <div className="p-2 rounded-lg bg-[#181b29] border border-zinc-800 flex justify-between">
                              <span className="text-zinc-400">03. Container Image Minify</span>
                              <span className="text-blue-400 font-bold">34MB</span>
                            </div>
                            <div className="p-2 rounded-lg bg-[#181b29] border border-zinc-800 flex justify-between">
                              <span className="text-zinc-400">04. Edge Global Invalidation</span>
                              <span className="text-emerald-400 font-bold">SYNCED</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Security Detail */}
                      {activeTab === "security" && (
                        <div className="p-3 rounded-xl bg-[#141622] border border-zinc-800/80 space-y-2 text-left">
                          <div className="flex items-center justify-between font-mono text-[9px] font-bold text-emerald-400 uppercase">
                            <span>Zero-Trust Enterprise Architecture</span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-300">
                              OWASP ASVS LEVEL 2
                            </span>
                          </div>
                          <p className="text-[9px] font-sans text-zinc-300 leading-relaxed">
                            Cryptographic verification across distributed endpoints, mutual TLS encryption, and least-privilege role boundaries. Zero hardcoded secrets, automated secret rotation, and immutable audit logs.
                          </p>
                        </div>
                      )}

                      {/* Tab 4: Cloud Infrastructure Detail */}
                      {activeTab === "cloud" && (
                        <div className="p-3 rounded-xl bg-[#141622] border border-zinc-800/80 space-y-2 text-left">
                          <div className="flex items-center justify-between font-mono text-[9px] font-bold text-violet-400 uppercase">
                            <span>Multi-Region Edge Topology</span>
                            <span className="text-zinc-300 font-mono">18 Clusters Active</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center font-mono text-[8px]">
                            <div className="p-2 rounded-lg bg-[#181b29] border border-zinc-800">
                              <div className="text-zinc-400">Cache Hit</div>
                              <div className="text-sm font-bold text-white mt-0.5">99.4%</div>
                            </div>
                            <div className="p-2 rounded-lg bg-[#181b29] border border-zinc-800">
                              <div className="text-zinc-400">Avg Latency</div>
                              <div className="text-sm font-bold text-emerald-400 mt-0.5">14.2ms</div>
                            </div>
                            <div className="p-2 rounded-lg bg-[#181b29] border border-zinc-800">
                              <div className="text-zinc-400">Throughput</div>
                              <div className="text-sm font-bold text-blue-400 mt-0.5">18k pkt/s</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom Status Feed */}
                      <div className="px-3 py-1.5 rounded-lg bg-[#141622]/80 border border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>mTLS Mutual Handshake Verified</span>
                          <span className="text-zinc-600">|</span>
                          <span>Zero-Debt Architectural Pattern</span>
                        </div>
                        <span className="shrink-0 text-blue-400 font-semibold">Edge Mesh Warmed</span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Minimalist Aluminum Workstation Stand Base */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-7 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-b-md shadow-md border-x border-b border-zinc-700/60" />
                  <div className="w-36 h-2 bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 rounded-full shadow-lg" />
                </div>
              </motion.div>


              {/* ════════ FLOATING ENTERPRISE PANELS (Surrounding Workstation) ════════ */}

              {/* Panel 1: Project Delivery & CI/CD (Top-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -15, scale: 0.94 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -6, 0] 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.0, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.2 } }}
                className="absolute -top-6 -left-12 sm:-left-24 z-30 w-[220px] sm:w-[235px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-2xl p-3.5 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Project Delivery</h3>
                  </div>
                  <span className="font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Sprint 42
                  </span>
                </div>
                <div className="font-sans text-[10px] font-bold text-zinc-900 truncate flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Release v2.4.1 Staged</span>
                </div>
                <div className="font-mono text-[8px] text-zinc-500 mt-1">
                  100% Deliverables Cleared • Edge CDN
                </div>
              </motion.div>


              {/* Panel 2: Security & Quality Posture (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -15, scale: 0.94 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -7, 0] 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                }}
                whileHover={{ scale: 1.02, y: -9, transition: { duration: 0.2 } }}
                className="absolute -top-6 -right-10 sm:-right-20 z-30 w-[210px] sm:w-[225px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-2xl p-3.5 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Security Posture</h3>
                  </div>
                  <span className="font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Zero-Trust
                  </span>
                </div>
                <div className="font-sans text-[10px] font-bold text-emerald-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>OWASP ASVS Standard</span>
                </div>
                <div className="font-mono text-[8px] text-zinc-500 mt-1">
                  Cryptographic Tamper Resistance
                </div>
              </motion.div>


              {/* Panel 3: Cloud & Infrastructure (Bottom-Left) */}
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
                  delay: 0.4, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="absolute bottom-12 -left-10 sm:-left-20 z-30 w-[215px] sm:w-[230px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3.5 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-violet-600" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Cloud Infrastructure</h3>
                  </div>
                </div>
                <div className="font-sans text-[10px] font-bold text-zinc-900 truncate">
                  Vercel Edge + Multi-Cloud
                </div>
                <div className="font-mono text-[8px] text-zinc-500 mt-1 flex items-center justify-between">
                  <span>Routing: Global CDN</span>
                  <span className="font-bold text-violet-700">~14ms</span>
                </div>
              </motion.div>


              {/* Panel 4: Business Automation & Systems (Bottom-Right) */}
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
                  delay: 0.5, 
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.0 }
                }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="absolute bottom-12 -right-10 sm:-right-20 z-30 w-[215px] sm:w-[230px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-3.5 text-left"
              >
                <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <h3 className="font-serif text-xs font-bold text-zinc-950">Business Automation</h3>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="font-sans text-[10px] font-bold text-zinc-900 truncate">
                  ERP &amp; API Integration Active
                </div>
                <div className="font-mono text-[8px] text-zinc-500 mt-1">
                  Zero-delay event streaming
                </div>
              </motion.div>

            </div>{/* end workstation anchor */}
          </div>

        </div>
      </div>
    </section>
  );
}
