"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  ChevronUp, 
  ArrowRight 
} from "lucide-react";
import { STUDENT_FAQS } from "@/data/students-hub";

export function StudentFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="student-faq" className="py-24 px-6 bg-[#fafafa] border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 13_STUDENT_FAQ"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Transparent answers regarding platform resources, project submissions, open-source opportunities, and engineering ethics.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {STUDENT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-zinc-950">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-100 text-zinc-600 text-sm leading-relaxed font-sans">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif font-bold text-xl text-zinc-950 mb-1">
              Have a technical question not answered here?
            </h4>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Reach out to our engineering leads for project review inquiries or general student guidance.
            </p>
          </div>

          <Link
            href="/contact?source=students-faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
