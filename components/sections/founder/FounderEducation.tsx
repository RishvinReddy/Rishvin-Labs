"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function FounderEducation() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            Section 06 • Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-3">
            Education &amp; Academic Credentials
          </h2>
          <p className="text-base text-zinc-600 font-sans leading-relaxed">
            Rigorous undergraduate studies establishing formal theoretical foundations in computer systems,
            cryptographic algorithms, and networked software.
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-zinc-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
                Woxsen University
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 font-sans mt-1">
                Bachelor of Technology (B.Tech) in Computer Science and Engineering
              </p>
              <span className="font-mono text-xs sm:text-sm text-zinc-500 mt-1 block">
                Specialization: <strong>Blockchain, IoT &amp; Cybersecurity</strong>
              </span>
            </div>

            <div className="flex flex-col md:items-end gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>2024 – 2028 (Class of 2028)</span>
              </span>
              <div className="p-3 rounded-2xl bg-white border border-zinc-200 shadow-2xs text-left md:text-right">
                <span className="font-mono text-[10px] uppercase text-zinc-400 block tracking-wider">
                  Academic Standing
                </span>
                <span className="font-sans font-black text-2xl text-zinc-950">
                  9.01 <span className="text-xs font-mono text-zinc-400 font-normal">/ 10.0 CGPA</span>
                </span>
              </div>
            </div>
          </div>

          {/* Academic Highlights & Coursework */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-400 block mb-3">
                Key Academic Coursework
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-sans">
                {[
                  "Data Structures & Algorithm Design (C++)",
                  "Computer Organization & Architecture",
                  "Database Management Systems & Relational Modeling",
                  "Computer Networks & Transmission Protocols",
                  "Cryptography & Network Security Principles",
                  "Operating Systems & Process Concurrency",
                ].map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-zinc-200/80">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-400 block mb-3">
                Theory-to-Practice Philosophy
              </span>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans mb-3">
                Maintaining academic distinction while simultaneously leading an independent technology studio requires ruthless prioritization. Course projects are purposefully structured as production-viable software architectures, ensuring classroom insights directly inform real-world engineering decisions.
              </p>
              <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                ✓ Continuous academic standing within top percentile of department cohort.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
