import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FaqSectionFull } from "@/components/sections/faq-section";
import { FAQ_CATEGORIES } from "@/data/faq";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export const metadata = {
  title: "FAQ — Rishvin Labs",
  description:
    "Answers to common questions about Rishvin Labs services, process, pricing, technology, security, and how to start a project.",
};

const totalQuestions = FAQ_CATEGORIES.reduce((n, c) => n + c.questions.length, 0);

export default function FaqPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* ── HEADER ── */}
      <section className="relative pt-36 pb-14 px-6 text-center overflow-hidden border-b border-zinc-200">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-4 py-1.5 rounded-full shadow-sm mb-6 font-mono text-xs text-zinc-500 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
            {FAQ_CATEGORIES.length} categories · {totalQuestions} questions
          </div>
          <h1 className="text-5xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about working with Rishvin Labs — from scoping a project to ownership, pricing, and support.
          </p>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section className="py-12 px-6 sm:px-10 pb-28 flex-1">
        <div className="max-w-screen-xl mx-auto">
          <FaqSectionFull />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 border-t border-zinc-200 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Still have questions?</div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950">
            Describe your problem. We'll handle the rest.
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            You don't need to know which service you need or what technology to use. Just tell us what you're trying to solve.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10 group"
          >
            Start a Project
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
