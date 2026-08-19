"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Bell,
  Check,
  Users,
  BookOpen,
  Trophy,
  Wifi
} from "lucide-react";

export function StudentsHero() {
  const [chartBars, setChartBars] = useState<number[]>([55, 75, 50, 90, 65, 80, 70]);
  const [score, setScore]         = useState<number>(87.4);
  const [sparkline]               = useState([35, 55, 45, 72, 58, 88, 68, 92, 78, 96]);
  const [todos, setTodos]         = useState([
    { id: 1, label: "System architecture diagram", done: true },
    { id: 2, label: "Deploy Next.js edge frontend", done: true },
    { id: 3, label: "Prepare 2-min live demo",     done: false },
  ]);

  const toggleTodo = (id: number) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));

  const randomizeChart = () => {
    const bars = Array.from({ length: 7 }, () => Math.floor(Math.random() * 55) + 40);
    setChartBars(bars);
    setScore(Number(((bars.reduce((a, b) => a + b, 0) / bars.length) * 1.1).toFixed(1)));
  };

  return (
    <section className="relative pt-40 pb-12 px-10 overflow-visible bg-white border-b border-zinc-200">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/8 via-violet-500/6 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── LEFT COPY ── */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-5 inline-block">
              RISHVIN LABS FOR STUDENTS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-950 leading-[1.05] mb-6">
              Build the skills, projects and proof that move your{" "}
              <span className="text-blue-600 font-normal italic">career</span> forward.
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-xl font-sans mb-8">
              Resources, engineering support, project guidance and career-focused tools for students who want to build beyond the classroom.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#resources"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-blue-600 transition-all shadow-md group"
              >
                Explore Resources
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/contact?source=students"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-zinc-200 text-zinc-800 font-mono text-xs font-bold tracking-wider uppercase hover:bg-zinc-50 transition-all"
              >
                Get Technical Support
              </Link>
            </div>

            {/* Capability Strip */}
            <div className="pt-8 mt-8 border-t border-zinc-200 w-full flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-[11px] font-bold tracking-widest text-zinc-800 uppercase">PROJECTS</span>
              <span className="text-blue-600 hidden sm:inline">·</span>
              <span className="font-mono text-[11px] font-bold tracking-widest text-zinc-800 uppercase">RESOURCES</span>
              <span className="text-blue-600 hidden sm:inline">·</span>
              <span className="font-mono text-[11px] font-bold tracking-widest text-zinc-800 uppercase">HACKATHONS</span>
              <span className="text-blue-600 hidden sm:inline">·</span>
              <span className="font-mono text-[11px] font-bold tracking-widest text-zinc-800 uppercase">OPPORTUNITIES</span>
              <span className="text-blue-600 hidden sm:inline">·</span>
              <span className="font-mono text-[11px] font-bold tracking-widest text-zinc-800 uppercase">CAREER</span>
            </div>
          </div>

          {/* ── RIGHT: iPad + floating widgets ── */}
          <div className="lg:col-span-7 flex items-center justify-center py-16">

            {/*
              iPad frame anchor — landscape iPad Pro (1024×768 proportions, scaled down).
              Width 520px → Height ≈ 390px
            */}
            <div className="relative select-none" style={{ width: "520px", height: "400px" }}>

              {/* ══════ iPAD FRAME ══════ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-10"
              >
                {/* Outer silver bezel */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#e6e6ec] to-[#d4d4da] rounded-[28px] border border-[#c4c4ca] shadow-[0_24px_64px_-8px_rgba(0,0,0,0.20),0_0_0_1px_rgba(0,0,0,0.04)]" />

                {/* Home button — right side (landscape) */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-gradient-to-b from-[#d0d0d6] to-[#c0c0c6] rounded-full border border-[#b8b8be]" />

                {/* Camera dot — left side (landscape) */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#a0a0a6] border border-[#909096]" />

                {/* Volume buttons — top edge */}
                <div className="absolute top-2 left-16 flex gap-2">
                  <div className="w-6 h-1.5 bg-[#c8c8ce] rounded-full" />
                  <div className="w-6 h-1.5 bg-[#c8c8ce] rounded-full" />
                </div>

                {/* Power button — bottom edge */}
                <div className="absolute bottom-2 right-20 w-8 h-1.5 bg-[#c8c8ce] rounded-full" />

                {/* ── Screen ── */}
                <div className="absolute inset-[10px] right-[18px] left-[18px] rounded-[20px] overflow-hidden bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-md border border-white/80 flex flex-col">

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 pt-3 pb-2 bg-white/60 border-b border-zinc-100/80 shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/80 border border-zinc-200/60 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[9px] text-zinc-600 font-bold">Student Hub · Rishvin Labs</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500">
                      <Wifi className="w-3 h-3" />
                      <span>100%</span>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 overflow-hidden">

                    {/* App header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">Student Dashboard</div>
                        <div className="font-serif text-sm font-bold text-zinc-900">Rishvin Labs Hub 🎓</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Bell className="w-4 h-4 text-zinc-500" />
                          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-white" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-mono text-[9px] font-bold shadow">S</div>
                      </div>
                    </div>

                    {/* 3-col stat cards */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Hackathons",  val: "12", sub: "+3 won", col: "text-blue-600",   bg: "bg-blue-50 border-blue-100",   icon: <Trophy className="w-3 h-3 text-blue-600" /> },
                        { label: "Resources",   val: "48", sub: "Free",   col: "text-violet-600", bg: "bg-violet-50 border-violet-100", icon: <BookOpen className="w-3 h-3 text-violet-600" /> },
                        { label: "Community",   val: "500+", sub: "Active", col: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100", icon: <Users className="w-3 h-3 text-emerald-600" /> }
                      ].map(({ label, val, sub, col, bg, icon }) => (
                        <div key={label} className={`${bg} border rounded-xl p-2.5 flex flex-col gap-1`}>
                          <div className="flex items-center justify-between">
                            {icon}
                            <span className={`font-mono text-[8px] ${col} font-bold`}>{sub}</span>
                          </div>
                          <div className={`font-serif font-black text-sm ${col}`}>{val}</div>
                          <div className="font-mono text-[8px] text-zinc-400 uppercase tracking-wider">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Progress chart */}
                    <div className="bg-white/90 border border-zinc-100 rounded-xl p-2.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[8px] font-bold text-zinc-600 uppercase tracking-wider">Learning Progress</span>
                        <div className="flex items-center gap-1 text-blue-500 font-mono text-[8px] font-bold">
                          <TrendingUp className="w-2.5 h-2.5" />
                          +22%
                        </div>
                      </div>
                      <div className="h-10 relative">
                        <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="studSparkGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                            </linearGradient>
                          </defs>
                          <path
                            d={`M0,${40 - sparkline[0] * 0.41} ${sparkline.map((v, i) => `L${i * 22},${40 - v * 0.41}`).join(" ")} L198,40 L0,40 Z`}
                            fill="url(#studSparkGrad)"
                          />
                          <path
                            d={`M0,${40 - sparkline[0] * 0.41} ${sparkline.map((v, i) => `L${i * 22},${40 - v * 0.41}`).join(" ")}`}
                            fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <circle cx="198" cy={40 - sparkline[sparkline.length - 1] * 0.41} r="2.5" fill="#3b82f6" />
                        </svg>
                      </div>
                    </div>

                    {/* Notifications */}
                    <div className="flex gap-2 flex-1 min-h-0">
                      {[
                        { emoji: "🏆", label: "Hackathon result!", color: "bg-blue-50 border-blue-100" },
                        { emoji: "📚", label: "New roadmap live", color: "bg-violet-50 border-violet-100" },
                        { emoji: "💼", label: "Internship posted", color: "bg-amber-50 border-amber-100" },
                        { emoji: "🚀", label: "Project reviewed", color: "bg-emerald-50 border-emerald-100" },
                      ].map((n, i) => (
                        <div key={i} className={`${n.color} border rounded-xl px-2 py-1.5 flex items-center gap-1 flex-1 min-w-0`}>
                          <span className="text-[10px]">{n.emoji}</span>
                          <span className="font-sans text-[8px] font-semibold text-zinc-700 truncate leading-tight">{n.label}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>

              {/* ════ FLOATING WIDGET 1: Hackathon Chat — top-left ════ */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: -20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="absolute -top-12 -left-52 z-30 w-[220px] bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_16px_48px_rgba(0,0,0,0.12)] rounded-[22px] p-4"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="font-serif text-sm font-bold text-zinc-950">Team Chat</h3>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200/60 text-zinc-700 font-sans text-[10px] font-semibold">
                    <Users className="w-3 h-3 text-zinc-500" />
                    <span>42</span>
                  </div>
                </div>
                <div className="space-y-1.5 mb-3">
                  {[
                    { t: "9:00",  m: "Hackathon pitch ready!" },
                    { t: "10:00", m: "Architecture done ✓" },
                    { t: "11:00", m: "Deploy live in 5min..." }
                  ].map((msg, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-zinc-400 w-9 shrink-0 text-right">{msg.t}</span>
                      <div className="flex-1 bg-zinc-100/90 border border-zinc-200/40 rounded-lg px-2 py-1 text-[10px] font-sans text-zinc-700 truncate">{msg.m}</div>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-zinc-50 border border-zinc-200/70 rounded-xl px-2.5 py-2 text-[10px] text-zinc-400 font-sans">Ask mentors...</div>
              </motion.div>

              {/* ════ FLOATING WIDGET 2: Performance — top-right ════ */}
              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={randomizeChart}
                title="Click to randomize"
                className="absolute -top-12 -right-52 z-30 w-[190px] bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_16px_48px_rgba(0,0,0,0.12)] rounded-[22px] p-4 cursor-pointer group"
              >
                <div className="flex items-end gap-1 h-10 mb-2">
                  {chartBars.map((val, idx) => (
                    <div key={idx} className="flex-1 rounded-full bg-zinc-900 group-hover:bg-blue-600 transition-all duration-500" style={{ height: `${val}%` }} />
                  ))}
                </div>
                <div className="font-mono text-[8px] font-bold tracking-widest text-zinc-400 uppercase leading-tight">OVERALL TASKS<br />PERFORMANCE:</div>
                <div className="font-serif font-black text-lg text-zinc-950 flex items-center gap-1 mt-1 group-hover:text-blue-600 transition-colors">
                  {score}% <span className="text-sm">▲</span>
                </div>
              </motion.div>

              {/* ════ FLOATING WIDGET 3: To-do List — bottom-left ════ */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="absolute -bottom-12 -left-44 z-30 w-[210px] bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_16px_48px_rgba(0,0,0,0.12)] rounded-[22px] p-4"
              >
                <h3 className="font-serif text-sm font-bold text-zinc-950 mb-3">Project Checklist</h3>
                <div className="space-y-2">
                  {todos.map(todo => (
                    <div
                      key={todo.id}
                      onClick={() => toggleTodo(todo.id)}
                      className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-zinc-50 cursor-pointer transition-colors group"
                    >
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 border-2 transition-all ${
                        todo.done ? "bg-emerald-400/20 border-emerald-400 text-emerald-600" : "border-zinc-200 bg-white text-transparent"
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={`font-sans text-[10px] font-semibold truncate ${todo.done ? "text-zinc-400 line-through" : "text-zinc-700"}`}>
                        {todo.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ════ FLOATING WIDGET 4: Security — bottom-right ════ */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute -bottom-12 -right-44 z-30 bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.10)] rounded-2xl px-3.5 py-3 flex items-center gap-2.5 w-[175px]"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500">Security</div>
                  <div className="font-sans text-sm font-bold text-emerald-600 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    All Clear
                  </div>
                </div>
              </motion.div>

              {/* ════ FLOATING WIDGET 5: Deploy toast — right-center ════ */}
              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute top-1/2 -translate-y-1/2 -right-44 z-30 bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.10)] rounded-2xl px-3.5 py-3 flex items-center gap-2.5 w-[175px]"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500">Deploy</div>
                  <div className="font-sans text-xs font-bold text-zinc-950 truncate">Build #47 ✓</div>
                  <div className="font-mono text-[9px] text-zinc-400 mt-0.5">2s ago</div>
                </div>
              </motion.div>

              {/* ════ FLOATING WIDGET 6: Uptime — left-center ════ */}
              <motion.div
                initial={{ opacity: 0, x: -24, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute top-1/2 -translate-y-1/2 -left-44 z-30 bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.10)] rounded-2xl px-3.5 py-3 w-[175px]"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500">Progress</span>
                  <span className="font-mono text-[9px] text-blue-600 font-bold">87%</span>
                </div>
                <div className="flex items-end gap-0.5 h-6">
                  {[65, 80, 55, 90, 72, 95, 68, 88, 75, 100, 70, 92, 62, 85, 78].map((h, i) => (
                    <div key={i} className="flex-1 rounded-full bg-blue-500/70" style={{ height: `${h}%`, opacity: 0.4 + i * 0.04 }} />
                  ))}
                </div>
                <div className="mt-1 font-sans text-[9px] text-zinc-400">Course completion</div>
              </motion.div>

            </div>{/* end anchor */}
          </div>
        </div>
      </div>
    </section>
  );
}
