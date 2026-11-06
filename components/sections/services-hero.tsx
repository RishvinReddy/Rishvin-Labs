"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  Zap,
  ShieldCheck,
  Server,
  Workflow,
  Terminal,
  Activity,
  RotateCcw,
  Globe
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

  // ════════════════ 6 FULLY FUNCTIONAL WIDGET STATES ════════════════
  // Widget 1: Project Delivery & Sprints
  const [currentSprint, setCurrentSprint] = useState<number>(42);
  const [deliveryStatus, setDeliveryStatus] = useState<"Staged" | "Deployed" | "Verified">("Staged");

  // Widget 2: Studio Command CLI
  const [cliLogs, setCliLogs] = useState<string[]>([
    "$ rl-deploy --target=edge",
    "✓ 18 nodes live (0.3s)"
  ]);

  // Widget 3: Cloud Infrastructure Region
  const [activeRegion, setActiveRegion] = useState<{ name: string; latency: string }>({
    name: "Global CDN",
    latency: "~14ms"
  });

  // Widget 4: Security Posture & Compliance
  const [strictSecurity, setStrictSecurity] = useState<boolean>(false);
  const [isScanningSec, setIsScanningSec] = useState<boolean>(false);
  const [secScanText, setSecScanText] = useState<string>("0 CVEs • ASVS Pass");

  // Widget 5: Telemetry Throughput Benchmark (uses chartBars & efficiencyScore)

  // Widget 6: Business Automation Event Stream
  const [eventCount, setEventCount] = useState<number>(1420);
  const [lastEmitted, setLastEmitted] = useState<string>("Synced");

  // Interactive Build Pipeline State
  const [buildId, setBuildId] = useState<number>(152);
  const [isBuilding, setIsBuilding] = useState<boolean>(false);

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

  // Functional Widget Actions
  const toggleDelivery = () => {
    setDeliveryStatus(prev => prev === "Staged" ? "Deployed" : prev === "Deployed" ? "Verified" : "Staged");
  };

  const cycleSprint = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSprint(prev => prev >= 45 ? 40 : prev + 1);
  };

  const executeCli = (cmd: "deploy" | "verify" | "bench") => {
    if (cmd === "deploy") {
      setCliLogs(["$ rl-deploy --target=edge", "✓ Rolling deploy complete (0.3s)"]);
    } else if (cmd === "verify") {
      setCliLogs(["$ rl-verify --strict", "✓ mTLS handshake verified • 0 leaks"]);
    } else {
      setCliLogs(["$ rl-bench --concurrency=5k", "✓ 18.2k req/s • P99: 13ms"]);
    }
  };

  const cycleRegion = (e: React.MouseEvent) => {
    e.stopPropagation();
    const regions = [
      { name: "Global CDN", latency: "~14ms" },
      { name: "AP-South (Mumbai)", latency: "~11ms" },
      { name: "EU-Central (Frankfurt)", latency: "~21ms" },
      { name: "US-East (N. Virginia)", latency: "~18ms" }
    ];
    const currentIndex = regions.findIndex(r => r.name === activeRegion.name);
    const nextIndex = (currentIndex + 1) % regions.length;
    setActiveRegion(regions[nextIndex]);
  };

  const toggleSecurityMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStrictSecurity(prev => !prev);
  };

  const runSecScan = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isScanningSec) return;
    setIsScanningSec(true);
    setSecScanText("Scanning...");
    setTimeout(() => {
      setSecScanText("Pass • 0 CVEs");
      setIsScanningSec(false);
    }, 700);
  };

  const emitAutomationEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEventCount(prev => prev + 128);
    setLastEmitted("+128 Sent");
    setTimeout(() => setLastEmitted("Synced"), 1200);
  };

  const triggerBuild = () => {
    if (isBuilding) return;
    setIsBuilding(true);
    setTimeout(() => {
      setBuildId(prev => prev + 1);
      setIsBuilding(false);
    }, 600);
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

          {/* ════════════════ RIGHT SECTION: DESKTOP ENTERPRISE WORKSTATION + DESK SETUP ════════════════ */}
          <div className="lg:col-span-7 flex items-center justify-center relative py-6 select-none">

            {/* Central Workstation Anchor Container with Proportional Clearance */}
            <div
              role="region"
              aria-label="Interactive Enterprise Engineering Workstation Preview: Illustrative dashboard demonstrating zero-trust telemetry, microservice pipeline metrics, and system throughput"
              className="relative w-full max-w-[490px] lg:max-w-[520px] xl:max-w-[550px] mx-auto"
            >

              {/* ════════════════ WIDESCREEN WORKSTATION MONITOR ════════════════ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
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
                    <div className="px-3 sm:px-3.5 py-2 bg-[#12141e] border-b border-zinc-800 flex items-center justify-between gap-2 shrink-0">
                      {/* Identity & Workspace */}
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-mono font-black text-[10px] text-white shadow-2xs">
                          RL
                        </div>
                        <div className="flex flex-col">
                          <span className="font-serif text-xs font-bold text-white tracking-tight leading-none">
                            Rishvin Labs
                          </span>
                          <span className="font-mono text-[7.5px] text-zinc-400 uppercase tracking-wider mt-0.5">
                            Enterprise Console • Production
                          </span>
                        </div>
                      </div>

                      {/* Interactive View Tabs */}
                      <div className="hidden sm:flex items-center bg-[#181b29] border border-zinc-800 rounded-lg p-0.5" role="tablist" aria-label="Console Views">
                        <button
                          type="button"
                          role="tab"
                          aria-selected={activeTab === "overview"}
                          onClick={() => setActiveTab("overview")}
                          className={`px-2 py-0.5 rounded-md font-mono text-[8.5px] font-semibold transition-all cursor-pointer ${
                            activeTab === "overview" ? "bg-zinc-800 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={activeTab === "pipelines"}
                          onClick={() => setActiveTab("pipelines")}
                          className={`px-2 py-0.5 rounded-md font-mono text-[8.5px] font-semibold transition-all cursor-pointer ${
                            activeTab === "pipelines" ? "bg-zinc-800 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          Pipelines
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={activeTab === "security"}
                          onClick={() => setActiveTab("security")}
                          className={`px-2 py-0.5 rounded-md font-mono text-[8.5px] font-semibold transition-all cursor-pointer ${
                            activeTab === "security" ? "bg-zinc-800 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          Security
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={activeTab === "cloud"}
                          onClick={() => setActiveTab("cloud")}
                          className={`px-2 py-0.5 rounded-md font-mono text-[8.5px] font-semibold transition-all cursor-pointer ${
                            activeTab === "cloud" ? "bg-zinc-800 text-white shadow-xs" : "text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          Cloud
                        </button>
                      </div>

                      {/* Latency & Live Clock Indicator */}
                      <div className="flex items-center gap-1.5">
                        <div className="hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[8px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>~14ms</span>
                        </div>
                        <span className="font-mono text-[9px] text-zinc-400 font-bold tracking-tight">
                          {currentTime} IST
                        </span>
                      </div>
                    </div>

                    {/* ── Console Body ── */}
                    <div className="p-2.5 sm:p-3 space-y-2">

                      {/* Metric Strip (4 Columns) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                        <div className="p-2 rounded-xl bg-[#141622] border border-zinc-800/80">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-mono text-[7.5px] uppercase tracking-wider text-zinc-400 font-bold">
                              Services
                            </span>
                            <Zap className="w-3 h-3 text-blue-400" />
                          </div>
                          <div className="font-serif font-black text-sm text-white">36+</div>
                          <div className="font-mono text-[7px] text-zinc-400">Published Groups</div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#141622] border border-zinc-800/80">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-mono text-[7.5px] uppercase tracking-wider text-zinc-400 font-bold">
                              Security
                            </span>
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          </div>
                          <div className="font-serif font-bold text-xs text-emerald-400 leading-snug">
                            Zero-Trust
                          </div>
                          <div className="font-mono text-[7px] text-zinc-400">OWASP ASVS Standard</div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#141622] border border-zinc-800/80">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-mono text-[7.5px] uppercase tracking-wider text-zinc-400 font-bold">
                              Pipeline
                            </span>
                            <Workflow className="w-3 h-3 text-violet-400" />
                          </div>
                          <div className="font-serif font-black text-sm text-white">CI/CD</div>
                          <div className="font-mono text-[7px] text-zinc-400">Automated Builds</div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#141622] border border-zinc-800/80">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-mono text-[7.5px] uppercase tracking-wider text-zinc-400 font-bold">
                              Edge Grid
                            </span>
                            <Server className="w-3 h-3 text-amber-400" />
                          </div>
                          <div className="font-serif font-black text-sm text-white">~14ms</div>
                          <div className="font-mono text-[7px] text-zinc-400">Global Routing</div>
                        </div>
                      </div>

                      {/* Main Center Console Split with Interactive Tab Switching */}
                      {activeTab === "overview" && (
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">

                          {/* Telemetry & Sparkline Panel */}
                          <div
                            onClick={randomizeBenchmark}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); randomizeBenchmark(); } }}
                            role="button"
                            tabIndex={0}
                            className="sm:col-span-7 p-2 rounded-xl bg-[#141622] border border-zinc-800/80 hover:border-zinc-700 transition-colors cursor-pointer group outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                            title="Click to simulate network throughput & latency"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-mono text-[7.5px] font-bold text-zinc-400 uppercase tracking-wider">
                                System Telemetry &amp; Throughput
                              </span>
                              <div className="flex items-center gap-1 font-mono text-[7.5px]">
                                <span className="text-blue-400 font-bold">{efficiencyScore}% opt</span>
                                <span className="text-zinc-600">|</span>
                                <span className="text-emerald-400">16.8k req/s</span>
                              </div>
                            </div>

                            {/* Dynamic Sparkline Visualizer */}
                            <div className="h-8 flex items-end gap-1 mb-1">
                              {sparkline.map((val, idx) => (
                                <div
                                  key={idx}
                                  className="flex-1 rounded-t-xs bg-gradient-to-t from-blue-600 via-indigo-500 to-cyan-400 opacity-80 group-hover:opacity-100 transition-all duration-300"
                                  style={{ height: `${val}%` }}
                                />
                              ))}
                            </div>

                            <div className="flex items-center justify-between text-[7px] font-mono text-zinc-500">
                              <span>Testbed Latency: ~14ms</span>
                              <span className="text-blue-400 font-semibold group-hover:underline">
                                Click to simulate
                              </span>
                            </div>
                          </div>

                          {/* Live Engineering Pipeline Matrix */}
                          <div className="sm:col-span-5 p-2 rounded-xl bg-[#141622] border border-zinc-800/80 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-mono text-[7.5px] font-bold text-zinc-400 uppercase tracking-wider">
                                  Delivery Matrix
                                </span>
                                <span className="font-mono text-[7.5px] text-blue-400 font-bold">
                                  {pipelineSteps.filter(s => s.completed).length}/4 DONE
                                </span>
                              </div>

                              <div className="space-y-0.5">
                                {pipelineSteps.map(step => (
                                  <div
                                    key={step.id}
                                    onClick={() => toggleStep(step.id)}
                                    className="flex items-center gap-1.5 cursor-pointer group/step py-0.2"
                                    title={`Click to toggle ${step.name}`}
                                  >
                                    <div className={`w-2.5 h-2.5 rounded flex items-center justify-center shrink-0 transition-colors ${
                                      step.completed ? "bg-emerald-500 text-zinc-950 font-bold" : "border border-zinc-700 group-hover/step:border-zinc-500"
                                    }`}>
                                      {step.completed && <Check className="w-2 h-2 stroke-[3]" />}
                                    </div>
                                    <span className={`text-[7px] font-mono truncate ${step.completed ? "text-zinc-400 line-through" : "text-zinc-200"}`}>
                                      {step.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="pt-1 border-t border-zinc-800/80 mt-1 flex items-center justify-between text-[6.5px] font-mono text-zinc-500">
                              <span>Automated Verification</span>
                              <span className="text-emerald-400 font-bold">Active</span>
                            </div>
                          </div>

                        </div>
                      )}

                      {/* Tab 2: Pipelines Detail */}
                      {activeTab === "pipelines" && (
                        <div className="p-2 rounded-xl bg-[#141622] border border-zinc-800/80 space-y-1 text-left font-mono text-[7.5px]">
                          <div className="flex items-center justify-between text-blue-400 font-bold">
                            <span>Continuous Delivery Stages</span>
                            <span className="text-zinc-500 font-normal">Next.js 15 Turbopack</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            <div className="p-1 rounded-lg bg-[#181b29] border border-zinc-800 flex justify-between">
                              <span className="text-zinc-400">01. Static Analysis</span>
                              <span className="text-emerald-400 font-bold">PASS</span>
                            </div>
                            <div className="p-1 rounded-lg bg-[#181b29] border border-zinc-800 flex justify-between">
                              <span className="text-zinc-400">02. Security Audit</span>
                              <span className="text-emerald-400 font-bold">0 CVEs</span>
                            </div>
                            <div className="p-1 rounded-lg bg-[#181b29] border border-zinc-800 flex justify-between">
                              <span className="text-zinc-400">03. Image Minify</span>
                              <span className="text-blue-400 font-bold">34MB</span>
                            </div>
                            <div className="p-1 rounded-lg bg-[#181b29] border border-zinc-800 flex justify-between">
                              <span className="text-zinc-400">04. Edge CDN Warm</span>
                              <span className="text-emerald-400 font-bold">SYNCED</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Security Detail */}
                      {activeTab === "security" && (
                        <div className="p-2 rounded-xl bg-[#141622] border border-zinc-800/80 space-y-1 text-left">
                          <div className="flex items-center justify-between font-mono text-[7.5px] font-bold text-emerald-400 uppercase">
                            <span>Zero-Trust Enterprise Architecture</span>
                            <span className="px-1 py-0.2 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-300">
                              OWASP ASVS LEVEL 2
                            </span>
                          </div>
                          <p className="text-[7.5px] font-sans text-zinc-300 leading-relaxed">
                            Cryptographic verification across distributed endpoints, mutual TLS encryption, and least-privilege role boundaries. Zero hardcoded secrets, automated secret rotation, and immutable audit logs.
                          </p>
                        </div>
                      )}

                      {/* Tab 4: Cloud Infrastructure Detail */}
                      {activeTab === "cloud" && (
                        <div className="p-2 rounded-xl bg-[#141622] border border-zinc-800/80 space-y-1 text-left">
                          <div className="flex items-center justify-between font-mono text-[7.5px] font-bold text-violet-400 uppercase">
                            <span>Multi-Region Edge Topology</span>
                            <span className="text-zinc-300 font-mono">18 Clusters Active</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1 text-center font-mono text-[7.5px]">
                            <div className="p-1 rounded-lg bg-[#181b29] border border-zinc-800">
                              <div className="text-zinc-400">Cache Hit</div>
                              <div className="text-xs font-bold text-white mt-0.5">99.4%</div>
                            </div>
                            <div className="p-1 rounded-lg bg-[#181b29] border border-zinc-800">
                              <div className="text-zinc-400">Avg Latency</div>
                              <div className="text-xs font-bold text-emerald-400 mt-0.5">14.2ms</div>
                            </div>
                            <div className="p-1 rounded-lg bg-[#181b29] border border-zinc-800">
                              <div className="text-zinc-400">Throughput</div>
                              <div className="text-xs font-bold text-blue-400 mt-0.5">18k pkt/s</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom Status Feed */}
                      <div className="px-2 py-1 rounded-lg bg-[#141622]/80 border border-zinc-800/60 flex items-center justify-between text-[7px] font-mono text-zinc-400">
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
                  <div className="w-14 h-5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-b-md shadow-md border-x border-b border-zinc-700/60" />
                  <div className="w-32 h-2 bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 rounded-full shadow-lg" />
                </div>

                {/* ════════════════ DESKTOP PERIPHERALS: KEYBOARD & PRECISION MOUSE ════════════════ */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-2 flex items-center justify-center gap-3 relative z-20"
                >
                  {/* Leather / Felt Engineering Desk Pad */}
                  <div className="px-3 py-1.5 bg-gradient-to-r from-[#0c0d13]/90 via-[#13151f]/95 to-[#0c0d13]/90 rounded-2xl border border-zinc-800/80 shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex items-center gap-3">

                    {/* Ultra-Slim Engineering Magic Keyboard */}
                    <div className="relative px-2.5 py-1.5 bg-gradient-to-b from-[#1e202a] via-[#141620] to-[#0d0e14] rounded-xl border border-zinc-700/80 shadow-[0_8px_18px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.1)_inset] flex flex-col gap-0.5 w-[210px] sm:w-[240px]">

                      {/* Top Metallic Rim with Status LED */}
                      <div className="flex items-center justify-between px-1 mb-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
                        <span className="font-mono text-[5.5px] text-zinc-500 uppercase tracking-widest">
                          RL Magic Keyboard • Wireless
                        </span>
                        <div className="w-3 h-0.5 rounded-full bg-zinc-700/80" />
                      </div>

                      {/* Row 1: Function row */}
                      <div className="flex justify-between gap-0.5">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <div key={i} className="flex-1 h-1 rounded-[1.5px] bg-[#262835] border-t border-white/10" />
                        ))}
                      </div>

                      {/* Row 2: Number row */}
                      <div className="flex justify-between gap-0.5">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <div key={i} className="flex-1 h-1.5 rounded-[1.5px] bg-[#222430] border-t border-white/5" />
                        ))}
                      </div>

                      {/* Row 3: QWERTY row */}
                      <div className="flex justify-between gap-0.5">
                        <div className="w-3 h-1.5 rounded-[1.5px] bg-[#1a1c24]" />
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="flex-1 h-1.5 rounded-[1.5px] bg-[#222430] border-t border-white/5" />
                        ))}
                        <div className="w-3 h-1.5 rounded-[1.5px] bg-[#1a1c24]" />
                      </div>

                      {/* Row 4: ASDF row */}
                      <div className="flex justify-between gap-0.5">
                        <div className="w-4 h-1.5 rounded-[1.5px] bg-[#1a1c24]" />
                        {Array.from({ length: 11 }).map((_, i) => (
                          <div key={i} className="flex-1 h-1.5 rounded-[1.5px] bg-[#222430] border-t border-white/5" />
                        ))}
                        <div className="w-4 h-1.5 rounded-[1.5px] bg-[#1a1c24]" />
                      </div>

                      {/* Row 5: Spacebar & modifier row */}
                      <div className="flex justify-between items-center gap-0.5">
                        <div className="w-3 h-2 rounded-[1.5px] bg-[#1a1c24]" />
                        <div className="w-3 h-2 rounded-[1.5px] bg-[#1a1c24]" />
                        <div className="w-3.5 h-2 rounded-[1.5px] bg-[#282a38] flex items-center justify-center font-mono text-[4px] text-zinc-400">cmd</div>
                        <div className="flex-1 h-2 rounded-[1.5px] bg-[#252735] border-t border-white/10 flex items-center justify-center">
                          <span className="w-6 h-0.5 bg-zinc-600/60 rounded-full" />
                        </div>
                        <div className="w-3.5 h-2 rounded-[1.5px] bg-[#282a38] flex items-center justify-center font-mono text-[4px] text-zinc-400">cmd</div>
                        <div className="w-3 h-2 rounded-[1.5px] bg-[#1a1c24]" />
                        <div className="w-4 h-2 rounded-[1.5px] bg-[#1a1c24] flex items-center justify-center gap-0.5">
                          <div className="w-1 h-1 bg-zinc-600 rounded-2xs" />
                          <div className="w-1 h-1 bg-zinc-600 rounded-2xs" />
                        </div>
                      </div>
                    </div>

                    {/* Precision Ergonomic Wireless Mouse */}
                    <div className="relative w-7 sm:w-8 h-12 sm:h-14 rounded-2xl bg-gradient-to-b from-[#242735] via-[#181a23] to-[#101118] border border-zinc-700/90 shadow-[0_8px_16px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.15)_inset] flex flex-col items-center pt-1 cursor-pointer hover:border-zinc-500 transition-colors">
                      {/* Click split seam */}
                      <div className="w-px h-4 bg-zinc-700/80" />
                      {/* Metal scroll wheel */}
                      <div className="absolute top-1.5 w-1 h-2.5 rounded-full bg-gradient-to-b from-zinc-400 to-zinc-600 shadow-xs border border-zinc-500/40" />
                      {/* Subtle status glow */}
                      <div className="mt-auto mb-1 w-1 h-1 rounded-full bg-blue-500/80 shadow-[0_0_4px_#3b82f6]" />
                    </div>

                  </div>
                </motion.div>

              </motion.div>


              {/* ════════════════════════════════════════════════════════════════
                  6 FULLY FUNCTIONAL ENTERPRISE SATELLITE WIDGETS
                  Proportionally framed with zero edge clipping and zero screen overlap
              ════════════════════════════════════════════════════════════════ */}

              {/* ── WIDGET 1: Project Delivery & Sprints (Top-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: [0, -5, 0] }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1], y: { duration: 5.0, repeat: Infinity, ease: "easeInOut" } }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="hidden lg:block absolute -top-8 -left-10 lg:-left-16 xl:-left-20 z-30 w-[185px] sm:w-[195px] xl:w-[205px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.12)] rounded-2xl p-2.5 text-left"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <h3 className="font-serif text-[11px] font-bold text-zinc-950">Project Delivery</h3>
                  </div>
                  <button
                    type="button"
                    onClick={cycleSprint}
                    className="font-mono text-[7px] font-bold px-1.5 py-0.2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors cursor-pointer"
                    title="Click to cycle sprint"
                  >
                    Sprint {currentSprint} ↺
                  </button>
                </div>
                <div
                  onClick={toggleDelivery}
                  className="font-sans text-[9px] font-bold text-zinc-900 truncate flex items-center justify-between cursor-pointer hover:text-blue-600 transition-colors"
                  title="Click to toggle deployment stage"
                >
                  <div className="flex items-center gap-1">
                    <Workflow className="w-2.5 h-2.5 text-blue-600 shrink-0" />
                    <span>Release v2.{currentSprint % 10}.1</span>
                  </div>
                  <span className="font-mono text-[6.5px] px-1 py-0.2 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {deliveryStatus}
                  </span>
                </div>
                <div className="font-mono text-[7px] text-zinc-400 mt-0.5 flex items-center justify-between">
                  <span>100% Cleared</span>
                  <span className="text-blue-600 font-bold">Edge CDN</span>
                </div>
              </motion.div>


              {/* ── WIDGET 2: Studio Command CLI & Build Engine (Mid-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -16, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: [0, -5, 0] }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1], y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 } }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="hidden lg:block absolute top-[115px] -left-12 lg:-left-18 xl:-left-22 z-25 w-[190px] sm:w-[200px] xl:w-[210px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-2.5 text-left"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-blue-600" />
                    <h3 className="font-serif text-[11px] font-bold text-zinc-950">Studio Command</h3>
                  </div>
                  <button
                    type="button"
                    onClick={triggerBuild}
                    disabled={isBuilding}
                    className="font-mono text-[6.5px] font-bold px-1.5 py-0.2 rounded-full bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-100 transition-colors flex items-center gap-0.5 cursor-pointer"
                    title="Click to trigger build pipeline"
                  >
                    {isBuilding ? <RotateCcw className="w-2 h-2 animate-spin" /> : <span>Build #{buildId}</span>}
                  </button>
                </div>

                <div className="p-1.5 rounded-lg bg-[#0e1017] border border-zinc-800 text-zinc-300 font-mono text-[7px] space-y-0.5">
                  <div className="text-zinc-400">{cliLogs[0]}</div>
                  <div className="text-emerald-400 font-bold">{cliLogs[1]}</div>
                </div>

                {/* 3 Quick CLI Triggers */}
                <div className="flex items-center gap-1 mt-1 pt-0.5 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => executeCli("deploy")}
                    className="flex-1 py-0.5 rounded bg-zinc-100 hover:bg-blue-50 hover:text-blue-700 font-mono text-[6.5px] font-bold text-zinc-700 transition-colors cursor-pointer text-center"
                  >
                    deploy
                  </button>
                  <button
                    type="button"
                    onClick={() => executeCli("verify")}
                    className="flex-1 py-0.5 rounded bg-zinc-100 hover:bg-emerald-50 hover:text-emerald-700 font-mono text-[6.5px] font-bold text-zinc-700 transition-colors cursor-pointer text-center"
                  >
                    verify
                  </button>
                  <button
                    type="button"
                    onClick={() => executeCli("bench")}
                    className="flex-1 py-0.5 rounded bg-zinc-100 hover:bg-zinc-200 font-mono text-[6.5px] font-bold text-zinc-700 transition-colors cursor-pointer text-center"
                  >
                    bench
                  </button>
                </div>
              </motion.div>


              {/* ── WIDGET 3: Cloud Infrastructure & Mesh (Bottom-Left) ── */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: [0, -5, 0] }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1], y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="hidden lg:block absolute bottom-2 -left-10 lg:-left-16 xl:-left-20 z-30 w-[185px] sm:w-[195px] xl:w-[205px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-2.5 text-left"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Server className="w-3 h-3 text-violet-600" />
                    <h3 className="font-serif text-[11px] font-bold text-zinc-950">Cloud Mesh</h3>
                  </div>
                  <button
                    type="button"
                    onClick={cycleRegion}
                    className="font-mono text-[6.5px] font-bold text-violet-700 bg-violet-50 hover:bg-violet-100 px-1 py-0.2 rounded border border-violet-200 transition-colors cursor-pointer"
                    title="Click to cycle active routing region"
                  >
                    Region ↺
                  </button>
                </div>
                <div className="font-sans text-[9px] font-bold text-zinc-900 truncate flex items-center gap-1">
                  <Globe className="w-2.5 h-2.5 text-zinc-400 shrink-0" />
                  <span className="truncate">{activeRegion.name}</span>
                </div>
                <div className="font-mono text-[7px] text-zinc-500 mt-0.5 flex items-center justify-between">
                  <span>Routing Latency</span>
                  <span className="font-bold text-emerald-600">{activeRegion.latency}</span>
                </div>
              </motion.div>


              {/* ── WIDGET 4: Security Posture & Compliance (Top-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 16, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: [0, -6, 0] }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1], y: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 } }}
                whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.2 } }}
                className="hidden lg:block absolute -top-8 -right-10 lg:-right-16 xl:-right-20 z-30 w-[185px] sm:w-[195px] xl:w-[205px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.12)] rounded-2xl p-2.5 text-left"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <h3 className="font-serif text-[11px] font-bold text-zinc-950">Security Posture</h3>
                  </div>
                  <button
                    type="button"
                    onClick={toggleSecurityMode}
                    className="font-mono text-[6.5px] font-bold px-1 py-0.2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
                    title="Click to toggle Strict Zero-Trust mode"
                  >
                    {strictSecurity ? "Strict" : "Zero-Trust"}
                  </button>
                </div>
                <div className="font-sans text-[8.5px] font-bold text-emerald-700 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="truncate">{strictSecurity ? "mTLS Enforced" : "OWASP ASVS Standard"}</span>
                  </div>
                  <button
                    type="button"
                    onClick={runSecScan}
                    disabled={isScanningSec}
                    className="font-mono text-[6px] text-zinc-500 hover:text-emerald-700 cursor-pointer"
                  >
                    [Scan]
                  </button>
                </div>
                <div className="font-mono text-[7px] text-zinc-400 mt-0.5 flex items-center justify-between">
                  <span>Tamper Defense</span>
                  <span className="font-bold text-blue-600">{secScanText}</span>
                </div>
              </motion.div>


              {/* ── WIDGET 5: Telemetry Throughput Benchmark (Mid-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 16, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: [0, -6, 0] }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1], y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 } }}
                whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.2 } }}
                onClick={randomizeBenchmark}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); randomizeBenchmark(); } }}
                role="button"
                tabIndex={0}
                aria-label="Click to randomize live telemetry benchmark simulation"
                title="Click to simulate live network throughput"
                className="hidden lg:block absolute top-[115px] -right-12 lg:-right-18 xl:-right-22 z-25 w-[190px] sm:w-[200px] xl:w-[210px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.12)] rounded-2xl p-2.5 cursor-pointer group text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-blue-600" />
                    <span className="font-mono text-[7px] font-bold uppercase tracking-widest text-zinc-400">
                      THROUGHPUT
                    </span>
                  </div>
                  <span className="font-mono text-[6px] text-zinc-400 uppercase bg-zinc-100 px-1 py-0.2 rounded font-semibold">
                    Simulated
                  </span>
                </div>

                <div className="flex items-end gap-1 h-5 mb-1">
                  {chartBars.map((val, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-full bg-gradient-to-t from-zinc-950 to-zinc-700 transition-all duration-500 group-hover:from-blue-600 group-hover:to-violet-500"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>

                <div className="font-mono text-[6.5px] font-bold tracking-widest text-zinc-500 uppercase leading-tight">
                  NODE TELEMETRY:
                </div>
                <div className="font-serif font-black text-sm text-zinc-950 flex items-center justify-between mt-0.5 group-hover:text-blue-600 transition-colors">
                  <span>{efficiencyScore}%</span>
                  <span className="text-[8px] text-emerald-600 font-mono font-bold flex items-center">
                    ▲ <span className="text-[6px] text-zinc-400 ml-1 font-sans">Click to test</span>
                  </span>
                </div>
              </motion.div>


              {/* ── WIDGET 6: Business Automation & Event Stream (Bottom-Right) ── */}
              <motion.div
                initial={{ opacity: 0, x: 16, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: [0, -5, 0] }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1], y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 } }}
                whileHover={{ scale: 1.02, y: -7, transition: { duration: 0.2 } }}
                className="hidden lg:block absolute bottom-2 -right-10 lg:-right-16 xl:-right-20 z-30 w-[185px] sm:w-[195px] xl:w-[205px] bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_18px_45px_rgba(0,0,0,0.1)] rounded-2xl p-2.5 text-left"
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-500" />
                    <h3 className="font-serif text-[11px] font-bold text-zinc-950">Automation ERP</h3>
                  </div>
                  <button
                    type="button"
                    onClick={emitAutomationEvent}
                    className="font-mono text-[6.5px] font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-1 py-0.2 rounded border border-amber-200 transition-colors cursor-pointer"
                    title="Click to emit test event stream"
                  >
                    Emit +
                  </button>
                </div>
                <div className="font-sans text-[8.5px] font-bold text-zinc-900 truncate">
                  {eventCount.toLocaleString()} Events Streamed
                </div>
                <div className="font-mono text-[7px] text-zinc-500 mt-0.5 flex items-center justify-between">
                  <span>Webhook Pipeline</span>
                  <span className="font-bold text-emerald-600">{lastEmitted}</span>
                </div>
              </motion.div>

            </div>{/* end workstation anchor */}
          </div>

        </div>
      </div>
    </section>
  );
}
