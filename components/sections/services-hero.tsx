"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Zap, Bell } from "lucide-react";

export function ServicesHero() {
  const [chartBars, setChartBars] = useState<number[]>([45, 75, 100, 60, 80, 55, 90]);
  const [efficiencyScore, setEfficiencyScore] = useState<number>(85.3);
  const [sparkline] = useState([30, 55, 40, 70, 50, 85, 65, 90, 75, 95]);

  const randomizeChart = () => {
    const bars = Array.from({ length: 7 }, () => Math.floor(Math.random() * 60) + 40);
    setChartBars(bars);
    setEfficiencyScore(Number(((bars.reduce((a, b) => a + b, 0) / bars.length) * 1.05).toFixed(1)));
  };

  return (
    <section className="relative pt-40 pb-8 px-10 overflow-visible">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8a3ffc06_1px,transparent_1px),linear-gradient(to_bottom,#8a3ffc06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/8 via-blue-500/6 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── LEFT: Copy ── */}
          <div className="lg:col-span-5 flex flex-col items-start pt-4">
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-block">
              Studio Capabilities Catalog
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-tight">
              Discover <span className="text-blue-600 font-normal italic">Solutions.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-xl leading-relaxed font-sans mb-8">
              Every service we offer is executed with a zero-debt engineering philosophy&mdash;built for sub-second speed, zero-trust security, and infinite scalability.
            </p>

            {/* Quick stat strip */}
            <div className="flex items-center gap-6 pt-6 border-t border-zinc-200/80">
              <div>
                <div className="font-serif font-black text-2xl text-zinc-950">10+</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-0.5">Service Types</div>
              </div>
              <div className="w-px h-8 bg-zinc-200" />
              <div>
                <div className="font-serif font-black text-2xl text-blue-600">48h</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-0.5">Avg Delivery</div>
              </div>
              <div className="w-px h-8 bg-zinc-200" />
              <div>
                <div className="font-serif font-black text-2xl text-violet-600">A+</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-0.5">Security Grade</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Monitor + Keyboard + Mouse ── */}
          <div className="lg:col-span-7 flex flex-col items-center justify-start select-none">

            {/*
              Anchor wrapper — monitor is the reference origin for all floating widgets.
              Extra padding on sides to give floating cards room.
            */}
            <div className="relative" style={{ width: "420px", paddingTop: "20px", paddingBottom: "0px" }}>

              {/* ══════════ MONITOR FRAME ══════════ */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                {/* Monitor outer bezel */}
                <div className="w-full bg-gradient-to-b from-[#e8e8ec] to-[#d8d8de] rounded-2xl p-2.5 shadow-[0_24px_60px_-8px_rgba(0,0,0,0.22),0_0_0_1px_rgba(0,0,0,0.06)] border border-[#c8c8ce]">
                  {/* Screen inner border + glow */}
                  <div className="rounded-xl overflow-hidden bg-gradient-to-b from-white/70 to-white/50 backdrop-blur-md border border-white/80 shadow-inner" style={{ height: "280px" }}>

                    {/* ── Screen status bar ── */}
                    <div className="flex items-center justify-between px-4 py-2 bg-white/60 border-b border-zinc-100/80">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-white/80 border border-zinc-200/60 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-[9px] text-zinc-600 font-bold">rishvinlabs.studio</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-500">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>LIVE</span>
                      </div>
                    </div>

                    {/* ── Screen app content ── */}
                    <div className="px-4 py-3 flex flex-col gap-3 h-full overflow-hidden">

                      {/* App header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">Dashboard</div>
                          <div className="font-serif text-sm font-bold text-zinc-900">Rishvin Labs Studio ⚡</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <Bell className="w-4 h-4 text-zinc-500" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-violet-500 rounded-full border border-white" />
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white font-mono text-[9px] font-bold shadow">R</div>
                        </div>
                      </div>

                      {/* 2-col stat cards */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: "Projects", val: "12", sub: "+3 ↑", col: "text-blue-600", bg: "bg-blue-50 border-blue-100", icon: <Zap className="w-3 h-3 text-blue-600" /> },
                          { label: "Security",  val: "A+",  sub: "OWASP", col: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100", icon: <ShieldCheck className="w-3 h-3 text-emerald-600" /> },
                          { label: "Uptime",   val: "99%", sub: "30 days", col: "text-violet-600", bg: "bg-violet-50 border-violet-100", icon: <TrendingUp className="w-3 h-3 text-violet-600" /> }
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

                      {/* Sparkline chart */}
                      <div className="bg-white/80 border border-zinc-100 rounded-xl p-2.5 flex-1 min-h-0">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-[8px] font-bold text-zinc-600 uppercase tracking-wider">System Load</span>
                          <div className="flex items-center gap-1 text-emerald-500 font-mono text-[8px] font-bold">
                            <TrendingUp className="w-2.5 h-2.5" />
                            <span>+14.2%</span>
                          </div>
                        </div>
                        <div className="h-12 relative">
                          <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="monSparkGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.02" />
                              </linearGradient>
                            </defs>
                            <path
                              d={`M0,${50 - sparkline[0] * 0.5} ${sparkline.map((v, i) => `L${i * 22},${50 - v * 0.5}`).join(" ")} L198,50 L0,50 Z`}
                              fill="url(#monSparkGrad)"
                            />
                            <path
                              d={`M0,${50 - sparkline[0] * 0.5} ${sparkline.map((v, i) => `L${i * 22},${50 - v * 0.5}`).join(" ")}`}
                              fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                            <circle cx="198" cy={50 - sparkline[sparkline.length - 1] * 0.5} r="2.5" fill="#8b5cf6" />
                          </svg>
                        </div>
                      </div>

                      {/* Notification row */}
                      <div className="flex gap-2">
                        {[
                          { emoji: "🚀", label: "Deploy #47 live", color: "bg-blue-50 border-blue-100" },
                          { emoji: "🛡", label: "OWASP A+ passed", color: "bg-emerald-50 border-emerald-100" },
                          { emoji: "⚡", label: "ESP32 18 online", color: "bg-amber-50 border-amber-100" }
                        ].map((n, i) => (
                          <div key={i} className={`${n.color} border rounded-xl px-2 py-1.5 flex items-center gap-1.5 flex-1 min-w-0`}>
                            <span className="text-xs">{n.emoji}</span>
                            <span className="font-sans text-[8px] font-semibold text-zinc-700 truncate">{n.label}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>

                {/* Monitor neck / stand */}
                <div className="flex justify-center">
                  <div className="w-12 h-8 bg-gradient-to-b from-[#d0d0d6] to-[#c0c0c6] border-x border-b border-[#b8b8be] shadow-sm" />
                </div>
                {/* Monitor base */}
                <div className="flex justify-center">
                  <div className="w-32 h-3.5 bg-gradient-to-b from-[#d0d0d6] to-[#c4c4ca] rounded-b-xl border border-t-0 border-[#b8b8be] shadow-md" />
                </div>
              </motion.div>

              {/* ══════════ KEYBOARD ══════════ */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 mt-3 flex justify-center"
              >
                <div className="bg-gradient-to-b from-[#e2e2e8] to-[#d4d4da] rounded-xl border border-[#c4c4ca] shadow-[0_6px_20px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] px-4 py-3" style={{ width: "340px" }}>
                  {/* Key rows */}
                  {[
                    /* row 1: function row (smaller) */
                    { keys: ["esc","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"], small: true },
                    /* row 2: number row */
                    { keys: ["`","1","2","3","4","5","6","7","8","9","0","-","=","del"], small: false },
                    /* row 3: QWERTY */
                    { keys: ["tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\"], small: false },
                    /* row 4: ASDF */
                    { keys: ["caps","A","S","D","F","G","H","J","K","L",";","'","return"], small: false },
                    /* row 5: ZXCV */
                    { keys: ["shift","Z","X","C","V","B","N","M",",",".","/","shift↑"], small: false },
                  ].map((row, ri) => (
                    <div key={ri} className={`flex gap-0.5 justify-center ${ri === 0 ? "mb-1.5" : "mb-0.5"}`}>
                      {row.keys.map((k, ki) => (
                        <div
                          key={ki}
                          className={`
                            ${row.small ? "h-3 text-[5px]" : "h-4 text-[6px]"}
                            ${k === "space" ? "flex-[6]" : k.length > 2 ? "flex-[2]" : "flex-1"}
                            bg-gradient-to-b from-[#f0f0f4] to-[#e4e4ea]
                            border border-[#c8c8ce] border-b-[#b4b4ba]
                            rounded-[3px] shadow-[0_1px_0_rgba(0,0,0,0.15)]
                            flex items-center justify-center
                            font-mono font-bold text-zinc-500
                            min-w-0 truncate px-0.5
                          `}
                        >
                          {k.length <= 3 ? k : ""}
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* Space bar row */}
                  <div className="flex gap-0.5 justify-center mt-0.5">
                    {["fn","ctrl","alt","⌘"].map(k => (
                      <div key={k} className="flex-1 h-3.5 bg-gradient-to-b from-[#f0f0f4] to-[#e4e4ea] border border-[#c8c8ce] border-b-[#b4b4ba] rounded-[3px] shadow-[0_1px_0_rgba(0,0,0,0.15)] flex items-center justify-center font-mono text-[5px] font-bold text-zinc-500">
                        {k}
                      </div>
                    ))}
                    {/* Spacebar */}
                    <div className="flex-[7] h-3.5 bg-gradient-to-b from-[#f0f0f4] to-[#e4e4ea] border border-[#c8c8ce] border-b-[#b4b4ba] rounded-[3px] shadow-[0_1px_0_rgba(0,0,0,0.15)]" />
                    {["⌘","alt","←","↑↓","→"].map(k => (
                      <div key={k} className="flex-1 h-3.5 bg-gradient-to-b from-[#f0f0f4] to-[#e4e4ea] border border-[#c8c8ce] border-b-[#b4b4ba] rounded-[3px] shadow-[0_1px_0_rgba(0,0,0,0.15)] flex items-center justify-center font-mono text-[5px] font-bold text-zinc-500">
                        {k}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ══════════ MOUSE (right of keyboard) ══════════ */}
              <motion.div
                initial={{ opacity: 0, x: 16, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 -right-16 z-20"
                style={{ bottom: "4px" }}
              >
                {/* Mouse body */}
                <div className="relative" style={{ width: "38px", height: "60px" }}>
                  {/* Main body */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#e8e8ee] to-[#d2d2d8] rounded-t-[20px] rounded-b-[14px] border border-[#c4c4ca] shadow-[0_6px_16px_rgba(0,0,0,0.14),0_1px_3px_rgba(0,0,0,0.08)]" />
                  {/* Center divider line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[28px] bg-[#c0c0c6] rounded-full" />
                  {/* Left click zone */}
                  <div className="absolute top-1 left-1 right-[50%] h-[26px] bg-gradient-to-b from-[#ececf0] to-[#e2e2e8] rounded-tl-[18px] rounded-br-sm border-r border-[#d0d0d6]" />
                  {/* Right click zone */}
                  <div className="absolute top-1 left-[50%] right-1 h-[26px] bg-gradient-to-b from-[#ececf0] to-[#e2e2e8] rounded-tr-[18px] rounded-bl-sm" />
                  {/* Scroll wheel */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-2 h-5 bg-gradient-to-b from-[#d0d0d6] to-[#b8b8c0] rounded-full border border-[#c0c0c6] shadow-inner" />
                  {/* Bottom cable dot */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-1 bg-[#c4c4ca] rounded-full" />
                </div>
              </motion.div>

              {/* ════════ FLOATING WIDGET 1: Oslo Chat — top-left ════════ */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: -20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="absolute top-4 -left-56 z-30 w-[210px] bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_16px_48px_rgba(0,0,0,0.13)] rounded-[22px] p-4"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="font-serif text-sm font-bold text-zinc-950">Oslo Chat</h3>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200/60 text-zinc-700 font-sans text-[10px] font-semibold">
                    <span>👥 42</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {[
                    { t: "9:00", m: "Staging verified" },
                    { t: "10:00", m: "OWASP A+ passed" },
                    { t: "11:00", m: "Prod build live..." }
                  ].map((msg, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-zinc-400 w-9 shrink-0 text-right">{msg.t}</span>
                      <div className="flex-1 bg-zinc-100/90 border border-zinc-200/40 rounded-lg px-2 py-1 text-[10px] font-sans text-zinc-700 truncate">{msg.m}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-2.5 relative">
                  <div className="absolute -top-2.5 left-2 z-40 bg-zinc-950 text-white font-mono text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">TUE, 12</div>
                  <div className="pt-1.5 w-full bg-zinc-50 border border-zinc-200/70 rounded-xl px-2.5 py-2 text-[10px] text-zinc-400 font-sans">Message...</div>
                </div>
              </motion.div>

              {/* ════════ FLOATING WIDGET 2: Performance — right upper ════════ */}
              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={randomizeChart}
                title="Click to randomize"
                className="absolute top-4 -right-56 z-30 w-[190px] bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_16px_48px_rgba(0,0,0,0.13)] rounded-[22px] p-4 cursor-pointer group"
              >
                <div className="flex items-end gap-1 h-10 mb-2">
                  {chartBars.map((val, idx) => (
                    <div key={idx} className="flex-1 rounded-full bg-zinc-900 transition-all duration-500 group-hover:bg-violet-600" style={{ height: `${val}%` }} />
                  ))}
                </div>
                <div className="font-mono text-[8px] font-bold tracking-widest text-zinc-400 uppercase leading-tight">OVERALL TASKS <br />PERFORMANCE:</div>
                <div className="font-serif font-black text-lg text-zinc-950 flex items-center gap-1 mt-1 group-hover:text-violet-600 transition-colors">
                  {efficiencyScore}% <span className="text-sm">▲</span>
                </div>
              </motion.div>

              {/* ════════ FLOATING WIDGET 3: Security — bottom-left ════════ */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute bottom-24 -left-48 z-30 bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.11)] rounded-2xl px-3.5 py-3 flex items-center gap-2.5 w-[170px]"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
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

              {/* ════════ FLOATING WIDGET 4: Deploy Toast — bottom-right ════════ */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute bottom-24 -right-48 z-30 bg-white/97 backdrop-blur-2xl border border-zinc-100/80 shadow-[0_12px_36px_rgba(0,0,0,0.11)] rounded-2xl px-3.5 py-3 flex items-center gap-2.5 w-[170px]"
              >
                <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-200/80 flex items-center justify-center shrink-0">
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

            </div>{/* end anchor */}
          </div>

        </div>
      </div>
    </section>
  );
}
