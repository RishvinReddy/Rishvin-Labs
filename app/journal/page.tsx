"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight, Check, Send, BookOpen } from "lucide-react";

interface JournalEntry {
  id: string;
  title: string;
  date: string;
  topic: "software" | "security" | "iot";
  category: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  href: string;
  published: boolean;
}

export default function JournalPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const entries: JournalEntry[] = [
    {
      id: "website-development-cost",
      title: "How Much Does Website & Software Development Cost in India? (2026 Guide)",
      date: "JUL 2026",
      topic: "software",
      category: "Software & Architecture",
      readTime: "8 MIN READ",
      excerpt: "A practical breakdown of web and software development costs in India, comparing basic templates, agency packages, and custom engineered business applications.",
      tags: ["Software", "Pricing", "Architecture"],
      href: "/blog/how-much-does-website-development-cost",
      published: true,
    },
    {
      id: "chainforensics-retrospective",
      title: "ChainForensics: Blockchain-Backed IoT Forensic Evidence Integrity",
      date: "MAY 2026",
      topic: "iot",
      category: "IoT & Cybersecurity",
      readTime: "10 MIN READ",
      excerpt: "An edge-to-ledger proof-of-concept anchoring cryptographic hashes of physical IoT sensor telemetry to an Ethereum smart contract registry.",
      tags: ["IoT", "Blockchain", "Security"],
      href: "/work/chainforensics",
      published: true,
    },
    {
      id: "netinspect-pcap-analysis",
      title: "In-Browser Packet Inspection: Parsing Binary PCAP Streams with Web Workers",
      date: "APR 2026",
      topic: "security",
      category: "Cybersecurity & Web APIs",
      readTime: "7 MIN READ",
      excerpt: "Why we engineered a zero-upload PCAP decoder running entirely inside client-side Web Workers to triage network traffic without privacy leaks.",
      tags: ["Security", "Web Workers", "TypeScript"],
      href: "/work/netinspect",
      published: true,
    },
    {
      id: "optical-airgap-data-transfers",
      title: "PrismTransfer: High-Density Optical Data Diodes for Air-Gapped Systems",
      date: "MAR 2026",
      topic: "security",
      category: "Security & Systems",
      readTime: "6 MIN READ",
      excerpt: "Designing a camera-to-camera optical transfer protocol using compressed animated QR matrices to move credentials across air gaps without USB keys.",
      tags: ["Cybersecurity", "Protocols"],
      href: "/work/prismtransfer",
      published: true,
    },
  ];

  const filteredEntries = useMemo(() => {
    return activeFilter === "all" ? entries : entries.filter((e) => e.topic === activeFilter);
  }, [activeFilter, entries]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const filters = [
    { id: "all", label: "ALL TOPICS" },
    { id: "software", label: "Software Systems" },
    { id: "security", label: "Cybersecurity" },
    { id: "iot", label: "IoT & Hardware" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-16 px-6 bg-white border-b border-zinc-200 text-left">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Engineering Journal &amp; Notes
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-tight">
            Field <span className="text-blue-600 font-normal italic">Notes.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans max-w-2xl">
            Practical essays, system retrospectives, and architectural breakdowns written directly from our studio builds.
          </p>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="bg-white border-b border-zinc-200 py-4 px-6 sticky top-20 z-40 shadow-xs">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === f.id
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "bg-[#fafafa] text-zinc-700 border border-zinc-200 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MAIN CONTENT (GRID) */}
      <section className="py-20 px-6 bg-[#fafafa] flex-1">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                [ JOURNAL MANIFESTO ]
              </div>
              <h3 className="font-serif font-bold text-lg text-zinc-950 mb-3">
                Evidence Over Hype
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                We write exclusively about systems we have designed, tested, or deployed. You will not find generic buzzword articles here.
              </p>
              <div className="font-mono text-xs text-zinc-400">
                Author: Rishvin Reddy, Lead Engineer
              </div>
            </div>

            {/* Subscribe Box */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                [ JOURNAL DISPATCHES ]
              </div>
              <h4 className="font-serif font-bold text-lg text-zinc-950 mb-2">
                Get technical updates.
              </h4>
              <p className="text-zinc-500 text-xs mb-6 leading-relaxed">
                Zero spam. High-signal engineering breakdowns delivered as they are published.
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
                    className="w-full py-3 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xs"
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
                <p className="font-mono text-sm text-zinc-500 uppercase">
                  {"// NO_ENTRIES_FOUND_FOR_THIS_TOPIC"}
                </p>
              </div>
            ) : (
              filteredEntries.map((entry) => (
                <Link
                  key={entry.id}
                  href={entry.href}
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
                      <span>READ ARTICLE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
