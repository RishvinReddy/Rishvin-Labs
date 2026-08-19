"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FAQ_CATEGORIES, FAQ_HOMEPAGE, FaqCategory, FaqItem } from "@/data/faq";

/* ─────────────────────────────────────────────────────────────────
   Accordion row
───────────────────────────────────────────────────────────────── */
function FaqAccordion({
  items,
  openKey,
  setOpenKey,
  keyPrefix,
}: {
  items: FaqItem[];
  openKey: string | null;
  setOpenKey: (k: string | null) => void;
  keyPrefix: string;
}) {
  return (
    <div className="space-y-1.5">
      {items.map((faq, i) => {
        const key = `${keyPrefix}-${i}`;
        const open = openKey === key;
        return (
          <div
            key={key}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              open ? "border-blue-200 shadow-sm shadow-blue-50" : "border-zinc-100"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenKey(open ? null : key)}
              className="w-full flex items-center justify-between px-5 py-4 text-left group"
            >
              <span className={`font-sans text-sm font-semibold leading-snug transition-colors ${open ? "text-blue-700" : "text-zinc-800 group-hover:text-zinc-950"}`}>
                {faq.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 ml-4 transition-all duration-200 ${
                  open ? "rotate-180 text-blue-500" : "text-zinc-400"
                }`}
              />
            </button>
            {open && (
              <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-blue-100 bg-blue-50/20">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   COMPACT — for contact page (tabbed, 3-col grid on desktop)
───────────────────────────────────────────────────────────────── */
export function FaqSectionCompact() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].id);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const category = FAQ_CATEGORIES.find(c => c.id === activeCategory)!;

  return (
    <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-8 sm:px-10 pt-8 pb-6 border-b border-zinc-100 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">FAQ</div>
          <h2 className="text-xl font-serif font-bold text-zinc-950">Frequently Asked Questions</h2>
        </div>
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors shrink-0"
        >
          View all <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Category tabs — horizontal scroll on mobile */}
      <div className="px-8 sm:px-10 pt-5 pb-0 overflow-x-auto">
        <div className="flex gap-1.5 min-w-max pb-5 border-b border-zinc-100">
          {FAQ_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => { setActiveCategory(cat.id); setOpenKey(null); }}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="px-8 sm:px-10 py-6">
        <FaqAccordion
          items={category.questions}
          openKey={openKey}
          setOpenKey={setOpenKey}
          keyPrefix={category.id}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FULL — for /faq dedicated page (all categories, grouped)
───────────────────────────────────────────────────────────────── */
export function FaqSectionFull() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories =
    activeFilter === "all"
      ? FAQ_CATEGORIES
      : FAQ_CATEGORIES.filter(c => c.id === activeFilter);

  return (
    <div className="space-y-8">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest transition-all ${
            activeFilter === "all"
              ? "bg-zinc-950 text-white shadow-sm"
              : "bg-white border border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"
          }`}
        >
          All ({FAQ_CATEGORIES.reduce((n, c) => n + c.questions.length, 0)})
        </button>
        {FAQ_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest transition-all ${
              activeFilter === cat.id
                ? "bg-zinc-950 text-white shadow-sm"
                : "bg-white border border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"
            }`}
          >
            {cat.label} ({cat.questions.length})
          </button>
        ))}
      </div>

      {/* Categories */}
      {categories.map(cat => (
        <div key={cat.id} className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="px-8 sm:px-10 pt-7 pb-5 border-b border-zinc-100">
            <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
              {cat.label}
            </div>
            <div className="text-base font-serif font-bold text-zinc-950">
              {cat.questions.length} question{cat.questions.length > 1 ? "s" : ""}
            </div>
          </div>
          <div className="px-8 sm:px-10 py-6">
            <FaqAccordion
              items={cat.questions}
              openKey={openKey}
              setOpenKey={setOpenKey}
              keyPrefix={cat.id}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   HOMEPAGE — compact flat accordion, top 10 questions only
───────────────────────────────────────────────────────────────── */
export function FaqSectionHomepage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
        <div>
          <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">FAQ</div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950">Common Questions</h2>
        </div>
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors"
        >
          Full FAQ <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {FAQ_HOMEPAGE.map((faq, i) => {
          const key = `hp-${i}`;
          const open = openKey === key;
          return (
            <div
              key={key}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                open ? "border-blue-200 shadow-sm col-span-full" : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenKey(open ? null : key)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
              >
                <span className={`font-sans text-sm font-semibold leading-snug transition-colors ${open ? "text-blue-700" : "text-zinc-800 group-hover:text-zinc-950"}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 shrink-0 ml-4 transition-all duration-200 ${open ? "rotate-180 text-blue-500" : "text-zinc-400"}`} />
              </button>
              {open && (
                <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-blue-100 bg-blue-50/20">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
