"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Check, 
  Activity, 
  MessageSquare,
  Users,
  Layout,
  Wifi,
  Monitor,
  TrendingUp,
  Bell,
  Zap,
  ShieldCheck
} from "lucide-react";

interface TodoItem {
  id: string;
  label: string;
  completed: boolean;
  pillWidths: [string, string];
}

export function Hero() {
  const [currentTime, setCurrentTime] = useState<string>("--:--");
  
  const [chatMessages, setChatMessages] = useState([
    { time: "9:00",  text: "Staging cluster verified" },
    { time: "10:00", text: "OWASP audit passed 100%" },
    { time: "11:00", text: "Production build live..." }
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [activeUsers, setActiveUsers] = useState(42);

  const [todos, setTodos] = useState<TodoItem[]>([
    { id: "1", label: "API schema & load testing",   completed: true,  pillWidths: ["w-4",  "w-10"] },
    { id: "2", label: "ESP32 telemetry sensor mesh", completed: false, pillWidths: ["w-12", "w-6"]  },
    { id: "3", label: "Zero-trust security audit",   completed: false, pillWidths: ["w-8",  "w-14"] }
  ]);

  const [chartBars,       setChartBars]       = useState<number[]>([45, 75, 100, 60, 80]);
  const [efficiencyScore, setEfficiencyScore] = useState<number>(85.3);
  const [activeDockTab,   setActiveDockTab]   = useState<string>("chat");
  // Animated micro-sparkline for in-screen widget
  const [sparkline] = useState([30, 55, 40, 70, 50, 85, 65, 90, 75, 95]);

  useEffect(() => {
    const tick = () => {
      setCurrentTime(new Intl.DateTimeFormat([], {
        timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false
      }).format(new Date()));
    };
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setChatMessages(prev => [
      ...prev.slice(-2),
      { time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }), text: inputMsg.trim() }
    ]);
    setInputMsg("");
    setActiveUsers(p => p + 1);
  };

  const toggleTodo = (id: string) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const randomizeChart = () => {
    const bars = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 40);
    setChartBars(bars);
    setEfficiencyScore(Number(((bars.reduce((a, b) => a + b, 0) / bars.length) * 1.05).toFixed(1)));
  };

  const dockItems = [
    { id: "activity", icon: Activity },
    { id: "chat",     icon: MessageSquare },
    { id: "layout",   icon: Layout },
    { id: "wifi",     icon: Wifi },
    { id: "monitor",  icon: Monitor }
  ];

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-white via-[#fcfbfd] to-[#faf8fc]">
      {/* Subtle violet grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8a3ffc08_1px,transparent_1px),linear-gradient(to_bottom,#8a3ffc08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      {/* Ambient glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/10 via-purple-500/10 to-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200/80 font-mono text-[11px] font-bold text-violet-900 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
              <span>FOUNDER-LED TECHNOLOGY STUDIO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-950 leading-[1.05] mb-6">
              Engineering <br />
              Scalable Digital <br />
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent italic font-normal">
                Business Systems.
              </span>
            </h1>

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-8 font-sans max-w-lg">
              We design and build robust software platforms, automation workflows, and specialized applications for ambitious businesses that need technology to work flawlessly.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <Link
                href="/contact?source=homepage"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-blue-600 transition-all shadow-lg shadow-zinc-950/20 w-full sm:w-auto group"
              >
                <span>[ START_PROJECT ]</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-200/80 transition-all shadow-xs w-full sm:w-auto"
              >
                <span>VIEW_WORK()</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-200/80 w-full">
              <div>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-zinc-950">10+</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-1">PROJECTS DELIVERED</div>
              </div>
              <div>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-blue-600">15+</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-1">CORE TECHNOLOGIES</div>
              </div>
              <div>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-violet-600">100%</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-1">ZERO-TRUST SECURED</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Phone + widgets all anchored to the phone ── */}
          <div className="lg:col-span-7 flex items-center justify-center py-16">

            {/* Single relative anchor sized to phone — all widgets absolute from here */}
            <div className="relative w-[280px] sm:w-[300px] select-none" style={{ height: "600px" }}>

              {/* ════════════════ PHONE FRAME ════════════════ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/50 border-[3px] border-white/90 rounded-[52px] shadow-[0_30px_80px_-10px_rgba(138,63,252,0.22),0_0_0_1px_rgba(138,63,252,0.06)] backdrop-blur-md flex flex-col z-10 overflow-hidden"
              >
                {/* ── Status Bar ── */}
                <div className="flex items-center justify-between w-full px-5 pt-4 pb-2 shrink-0">
                  <span className="font-mono font-bold text-xs text-zinc-800">{currentTime}</span>
                  <div className="w-14 h-4 bg-zinc-200/80 rounded-full flex items-center justify-end px-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-400/80" />
                  </div>
                  <div className="flex items-center gap-1 text-zinc-600">
                    <Wifi className="w-3 h-3" />
                    <div className="w-3.5 h-1.5 rounded-sm bg-zinc-800" />
                  </div>
                </div>

                {/* ── IN-SCREEN APP CONTENT ── */}
                <div className="flex-1 px-3 pb-2 flex flex-col gap-2.5 overflow-hidden">

                  {/* App Header greeting */}
                  <div className="flex items-center justify-between px-1 pt-1">
                    <div>
                      <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">Good afternoon</div>
                      <div className="font-serif text-sm font-bold text-zinc-900 leading-tight">Rishvin Labs ⚡</div>
                    </div>
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white font-mono text-xs font-bold shadow-md">R</div>
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                    </div>
                  </div>

                  {/* ── Stat Cards Row ── */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Card 1: Active Projects */}
                    <div className="bg-white/90 border border-zinc-100 rounded-2xl p-3 shadow-sm">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center">
                          <Zap className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="font-mono text-[8px] text-emerald-500 font-bold">+3 ↑</span>
                      </div>
                      <div className="font-serif font-black text-base text-zinc-950">12</div>
                      <div className="font-mono text-[8px] text-zinc-400 uppercase tracking-wider mt-0.5">Projects</div>
                    </div>
                    {/* Card 2: Security Score */}
                    <div className="bg-white/90 border border-zinc-100 rounded-2xl p-3 shadow-sm">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="font-mono text-[8px] text-emerald-500 font-bold">A+</span>
                      </div>
                      <div className="font-serif font-black text-base text-zinc-950">98%</div>
                      <div className="font-mono text-[8px] text-zinc-400 uppercase tracking-wider mt-0.5">Security</div>
                    </div>
                  </div>

                  {/* ── Sparkline Analytics Card ── */}
                  <div className="bg-white/90 border border-zinc-100 rounded-2xl p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9px] font-bold text-zinc-700 uppercase tracking-wider">System Load</span>
                      <div className="flex items-center gap-1 text-emerald-500 font-mono text-[9px] font-bold">
                        <TrendingUp className="w-3 h-3" />
                        <span>+14.2%</span>
                      </div>
                    </div>
                    {/* SVG Sparkline area chart */}
                    <div className="h-10 relative">
                      <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.02" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                          d={`M0,${40 - sparkline[0] * 0.4} ${sparkline.map((v, i) => `L${i * 22},${40 - v * 0.4}`).join(" ")} L198,40 L0,40 Z`}
                          fill="url(#sparkGrad)"
                        />
                        {/* Line */}
                        <path
                          d={`M0,${40 - sparkline[0] * 0.4} ${sparkline.map((v, i) => `L${i * 22},${40 - v * 0.4}`).join(" ")}`}
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Last point dot */}
                        <circle cx="198" cy={40 - sparkline[sparkline.length - 1] * 0.4} r="2.5" fill="#8b5cf6" />
                      </svg>
                    </div>
                  </div>

                  {/* ── Notifications List ── */}
                  <div className="bg-white/90 border border-zinc-100 rounded-2xl p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9px] font-bold text-zinc-700 uppercase tracking-wider">Notifications</span>
                      <div className="w-4 h-4 rounded-full bg-violet-500 text-white font-mono text-[8px] font-bold flex items-center justify-center">3</div>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { icon: "🚀", label: "Deploy complete", sub: "prod-v2.4.1", color: "bg-blue-50 border-blue-100" },
                        { icon: "🛡", label: "OWASP scan done", sub: "0 critical", color: "bg-emerald-50 border-emerald-100" },
                        { icon: "⚡", label: "ESP32 mesh online", sub: "18 sensors", color: "bg-amber-50 border-amber-100" }
                      ].map((n, i) => (
                        <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-xl border ${n.color}`}>
                          <span className="text-sm leading-none">{n.icon}</span>
                          <div className="min-w-0 flex-1">
                            <div className="font-sans text-[10px] font-semibold text-zinc-800 truncate">{n.label}</div>
                            <div className="font-mono text-[8px] text-zinc-500">{n.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Progress Ring Row ── */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "CPU", value: 68, color: "#3b82f6" },
                      { label: "RAM", value: 44, color: "#8b5cf6" },
                      { label: "SSD", value: 82, color: "#10b981" }
                    ].map(({ label, value, color }) => {
                      const r = 14;
                      const circ = 2 * Math.PI * r;
                      const dash = (value / 100) * circ;
                      return (
                        <div key={label} className="bg-white/90 border border-zinc-100 rounded-2xl p-2 flex flex-col items-center shadow-sm gap-1">
                          <svg width="36" height="36" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r={r} fill="none" stroke="#f4f4f5" strokeWidth="3" />
                            <circle
                              cx="18" cy="18" r={r} fill="none"
                              stroke={color} strokeWidth="3"
                              strokeDasharray={`${dash} ${circ - dash}`}
                              strokeLinecap="round"
                              transform="rotate(-90 18 18)"
                            />
                            <text x="18" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#09090b" fontFamily="monospace">
                              {value}%
                            </text>
                          </svg>
                          <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider">{label}</span>
                        </div>
                      );
                    })}
                  </div>

                </div>{/* end in-screen content */}

                {/* ── Bottom Dock ── */}
                <div className="px-4 pb-4 pt-2 shrink-0">
                  <div className="bg-white/95 border border-zinc-100 shadow-[0_8px_24px_rgba(0,0,0,0.07)] rounded-3xl p-1.5 flex items-center gap-0.5">
                    {dockItems.map(({ id, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setActiveDockTab(id)}
                        className={`flex-1 py-2 rounded-2xl transition-all cursor-pointer flex items-center justify-center ${
                          activeDockTab === id
                            ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/20"
                            : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 1: Oslo Chat — top-left ════════════ */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: -20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="absolute -top-12 -left-36 sm:-left-48 z-30 w-[230px] sm:w-[265px] bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_16px_48px_rgba(0,0,0,0.13)] rounded-[24px] p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-base font-bold text-zinc-950">Oslo Chat</h3>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200/60 text-zinc-700 font-sans text-xs font-semibold">
                    <Users className="w-3 h-3 text-zinc-500" />
                    <span>{activeUsers}</span>
                  </div>
                </div>
                <div className="space-y-1.5 mb-3">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-zinc-400 w-8 shrink-0 text-right">{msg.time}</span>
                      <div className="flex-1 bg-zinc-100/90 border border-zinc-200/40 rounded-xl px-2.5 py-1.5 text-[11px] font-sans text-zinc-700 truncate">{msg.text}</div>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute -top-3 left-2 z-40 bg-zinc-950 text-white font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-lg shadow-md uppercase tracking-wider">TUE, 12</div>
                  <form onSubmit={handleSend} className="pt-1.5">
                    <input
                      type="text"
                      value={inputMsg}
                      onChange={e => setInputMsg(e.target.value)}
                      placeholder="Message..."
                      className="w-full bg-zinc-50 border border-zinc-200/70 rounded-2xl px-3 py-2 text-[11px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-violet-400 font-sans shadow-inner transition-colors"
                    />
                  </form>
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 2: Performance — right upper ════════════ */}
              <motion.div
                initial={{ opacity: 0, x: 28, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={randomizeChart}
                title="Click to randomize"
                className="absolute top-16 -right-36 sm:-right-48 z-30 w-[195px] sm:w-[220px] bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_16px_48px_rgba(0,0,0,0.13)] rounded-[24px] p-4 cursor-pointer group"
              >
                <div className="flex items-end gap-1 h-12 mb-2.5">
                  {chartBars.map((val, idx) => (
                    <div key={idx} className="flex-1 rounded-full bg-zinc-900 transition-all duration-500 group-hover:bg-violet-600" style={{ height: `${val}%` }} />
                  ))}
                </div>
                <div className="text-right">
                  <div className="font-mono text-[9px] font-bold tracking-widest text-zinc-400 uppercase leading-tight">OVERALL TASKS <br />PERFORMANCE:</div>
                  <div className="font-serif font-black text-xl text-zinc-950 flex items-center justify-end gap-1 mt-1 group-hover:text-violet-600 transition-colors">
                    {efficiencyScore}% <span className="text-sm">▲</span>
                  </div>
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 3: To-do List — bottom-left ════════════ */}
              <motion.div
                initial={{ opacity: 0, y: 28, x: -20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="absolute -bottom-12 -left-28 sm:-left-40 z-30 w-[200px] sm:w-[230px] bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_16px_48px_rgba(0,0,0,0.13)] rounded-[24px] p-4"
              >
                <h3 className="font-serif text-base font-bold text-zinc-950 mb-3">To-do list</h3>
                <div className="space-y-2.5">
                  {todos.map(todo => (
                    <div key={todo.id} onClick={() => toggleTodo(todo.id)} className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-zinc-50 cursor-pointer transition-colors group">
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-all border-2 ${
                        todo.completed ? "bg-emerald-400/20 border-emerald-400 text-emerald-600 group-hover:scale-110" : "border-zinc-200 bg-white text-transparent group-hover:border-zinc-300"
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className={`h-2 rounded-full transition-all ${todo.completed ? "bg-zinc-800 " + todo.pillWidths[0] : "bg-zinc-200 " + todo.pillWidths[0]}`} />
                        <div className={`h-2 rounded-full transition-all ${todo.completed ? "bg-zinc-950 " + todo.pillWidths[1] : "bg-zinc-200 " + todo.pillWidths[1]}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 4: Security — top-right ════════════ */}
              <motion.div
                initial={{ opacity: 0, y: -16, x: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute -top-8 -right-28 sm:-right-40 z-30 bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.11)] rounded-2xl px-3 py-2.5 flex items-center gap-2.5 w-[165px] sm:w-[185px]"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500">Security</div>
                  <div className="font-sans text-sm font-bold text-emerald-600 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    All Clear
                  </div>
                </div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 5: Uptime — bottom-right ════════════ */}
              <motion.div
                initial={{ opacity: 0, y: 16, x: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute -bottom-8 -right-28 sm:-right-40 z-30 bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.11)] rounded-2xl px-3.5 py-2.5 w-[165px] sm:w-[185px]"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500">Uptime</span>
                  <span className="font-mono text-[9px] text-blue-600 font-bold">99.98%</span>
                </div>
                <div className="flex items-end gap-0.5 h-6">
                  {[70,85,60,90,75,100,65,88,72,95,80,100,68,92,78].map((h, i) => (
                    <div key={i} className="flex-1 rounded-full bg-blue-500/70" style={{ height: `${h}%`, opacity: 0.45 + (i * 0.038) }} />
                  ))}
                </div>
                <div className="mt-1 font-sans text-[9px] text-zinc-400">15 intervals · Live</div>
              </motion.div>

              {/* ════════════ FLOATING WIDGET 6: Deploy Toast — right-center ════════════ */}
              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute top-[52%] -translate-y-1/2 -right-28 sm:-right-40 z-30 bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.11)] rounded-2xl px-3 py-2.5 w-[165px] sm:w-[185px] flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-violet-50 border border-violet-200/80 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500">Deploy</div>
                  <div className="font-sans text-xs font-bold text-zinc-950 truncate">Build #47 ✓</div>
                  <div className="font-mono text-[9px] text-zinc-400 mt-0.5">2s ago</div>
                </div>
              </motion.div>

            </div>{/* end phone anchor */}
          </div>
        </div>
      </div>
    </section>
  );
}
