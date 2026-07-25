"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight, Check, Send } from "lucide-react";

export default function JournalPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const entries = [
    {
      id: "building-soil-sensor-network",
      title: "Building a Soil Sensor Network Across 120 Acres: The Engineering Reality",
      date: "APR 2026",
      topic: "iot",
      category: "IoT & Hardware",
      readTime: "11 MIN READ",
      excerpt: "Academic IoT projects use 3 sensors and a breadboard. We built one with 40 nodes, solar charging, WiFi mesh, and a real-time dashboard. This is what they do not teach you.",
      tags: ["IoT", "Hardware"]
    },
    {
      id: "zero-knowledge-password-management",
      title: 'Zero-Knowledge Password Management: Why Most "Secure" Vaults Are Not',
      date: "MAR 2026",
      topic: "security",
      category: "Cybersecurity",
      readTime: "7 MIN READ",
      excerpt: "Most enterprise password managers encrypt data at rest. That is not enough. A true zero-knowledge architecture means the server never sees your plaintext — even during authentication. Here is how we designed CyberVault from that constraint.",
      tags: ["Cybersecurity", "Architecture"]
    },
    {
      id: "api-design-mistake-refactoring",
      title: "The API Design Mistake That Cost Us Three Weeks of Refactoring",
      date: "FEB 2026",
      topic: "software",
      category: "Software Systems",
      readTime: "6 MIN READ",
      excerpt: "We designed a beautiful REST API without thinking about versioning. Six months later, three clients were on breaking changes and we had no clean path forward. This is the refactoring that fixed it — and the rule we now enforce from day zero.",
      tags: ["Software", "API Design"]
    }
  ];

  const filteredEntries = useMemo(() => {
    return activeFilter === "all" ? entries : entries.filter(e => e.topic === activeFilter);
  }, [activeFilter]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const filters = [
    { id: "all", label: "ALL TOPICS" },
    { id: "iot", label: "IoT & Hardware" },
    { id: "security", label: "Cybersecurity" },
    { id: "software", label: "Software Systems" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-16 px-6 bg-white border-b border-zinc-200 text-left">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            Engineering Logs &amp; Notes
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-tight">
            Field <span className="text-blue-600 font-normal italic">Notes.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed font-sans">
            Architectural post-mortems, hardware telemetry breakdowns, and technical essays from our engineering leads.
          </p>
        </div>
      </section>

      {/* 2. FEATURED ENTRY */}
      <section className="py-16 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-screen-2xl mx-auto">
          <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
            [ FEATURED ARCHITECTURAL POST-MORTEM ]
          </div>

          <Link
            href="/contact"
            className="block bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 sm:p-12 hover:shadow-xl hover:border-blue-600 transition-all group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-md">IoT</span>
                  <span className="font-mono text-xs font-bold bg-zinc-200 text-zinc-800 px-3 py-1 rounded-md">Architecture</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-zinc-950 group-hover:text-blue-600 transition-colors leading-tight">
                  Why MQTT Broker Architecture Fails at Scale &mdash; and What We Did Instead
                </h2>

                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                  Single-broker MQTT felt fine at 20 nodes. At 200 nodes spread across 40 acres of farmland, it became the single point of failure that took our entire monitoring network offline. Here is the architectural post-mortem and how we replaced it with a peer-to-peer ESP-NOW mesh.
                </p>

                <div className="flex items-center gap-4 pt-2 font-mono text-xs text-zinc-500 font-semibold">
                  <span className="text-zinc-950 font-bold">8 MIN READ</span>
                  <span>&bull;</span>
                  <span>MAY 2026</span>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-zinc-200 lg:pl-8 space-y-3 font-mono text-xs text-zinc-600">
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-400">PROTOCOL:</span>
                  <span className="font-bold text-zinc-900">ESP-NOW Mesh</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-400">NODES SCALED:</span>
                  <span className="font-bold text-zinc-900">200+ Active</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-400">UPTIME GAIN:</span>
                  <span className="font-bold text-emerald-600">99.7%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-200">
                  <span className="text-zinc-400">LATENCY DROP:</span>
                  <span className="font-bold text-blue-600">340ms &rarr; 12ms</span>
                </div>

                <div className="pt-4 font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>READ FULL ENTRY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. ALL ENTRIES & SIDEBAR */}
      <section className="py-20 px-6 bg-[#fafafa] flex-1">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SIDEBAR (4 cols) */}
          <div className="lg:col-span-4 space-y-10 sticky top-24">
            {/* Topic Filter */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
              <div className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                [ FILTER BY TOPIC ]
              </div>
              <div className="flex flex-col gap-2">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                      activeFilter === f.id
                        ? "bg-zinc-950 text-white shadow-sm"
                        : "bg-[#fafafa] text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Subscribe Box */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
              <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                [ SUBSCRIBE ]
              </div>
              <h4 className="font-serif font-bold text-lg text-zinc-950 mb-2">
                Get new entries delivered when they drop.
              </h4>
              <p className="text-zinc-500 text-xs mb-6 leading-relaxed">
                Zero spam. Only high-signal engineering essays and architectural retrospectives.
              </p>

              {subscribed ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs font-mono font-semibold">
                  <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Subscribed successfully.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    className="w-full p-3 rounded-xl bg-[#fafafa] border border-zinc-200 text-xs font-mono text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-blue-600 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>SUBSCRIBE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ENTRIES LIST (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {filteredEntries.length === 0 ? (
              <div className="bg-white border border-zinc-200 rounded-3xl p-12 text-center">
                <p className="font-mono text-sm text-zinc-500 uppercase">// NO_ENTRIES_FOUND_FOR_THIS_TOPIC</p>
              </div>
            ) : (
              filteredEntries.map((entry) => (
                <Link
                  key={entry.id}
                  href="/contact"
                  className="block bg-white border border-zinc-200 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-zinc-100">
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] font-bold uppercase bg-[#fafafa] border border-zinc-200 px-2.5 py-1 rounded-md text-zinc-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-400 uppercase">{entry.date}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950 group-hover:text-blue-600 transition-colors mb-3">
                    {entry.title}
                  </h3>

                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
                    {entry.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100 font-mono text-xs">
                    <span className="font-bold text-zinc-900">{entry.readTime}</span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>READ ENTRY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
            Have a technical challenge?
          </h2>
          <p className="text-zinc-600 text-base mb-8">
            If these architectural post-mortems and engineering standards resonate, we should work together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-base hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10"
          >
            <span>Initialize Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
