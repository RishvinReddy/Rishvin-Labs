"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { StudentsHero } from "@/components/sections/students-hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StudentPackagesSection } from "@/components/sections/student-packages-section";
import { StudentServicesSection } from "@/components/sections/student-services-section";
import { StudentHubNav } from "@/components/sections/students/StudentHubNav";
import { StudentAccordionDirectory } from "@/components/sections/students/StudentAccordionDirectory";
import { StudentFaqSection } from "@/components/sections/students/StudentFaqSection";

export default function StudentsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO (LOCKED - UNMODIFIED) */}
      <StudentsHero />

      {/* 2. IN-PAGE HUB NAVIGATION */}
      <StudentHubNav />

      {/* 3. PRIMARY SERVICE: STUDENT PROGRAMS (ALWAYS EXPANDED) */}
      <div id="programs" className="scroll-mt-20">
        <StudentPackagesSection />
      </div>

      {/* 4. PRIMARY SERVICE: TARGETED TECHNICAL SESSIONS (ALWAYS EXPANDED) */}
      <div id="support" className="scroll-mt-20">
        <StudentServicesSection />
      </div>

      {/* 5. SUPPORTING ACCORDION DIRECTORY (11 COLLAPSED-BY-DEFAULT ARCHIVES) */}
      <StudentAccordionDirectory />

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <StudentFaqSection />

      {/* 7. ACADEMIC ETHICS NOTICE */}
      <section className="py-8 bg-zinc-50 border-t border-zinc-200 text-center">
        <div className="max-w-screen-md mx-auto px-6 flex items-center justify-center gap-3">
          <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0" />
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            Mentoring, engineering guidance, and debugging — not completing graded academic work on behalf of students.
          </p>
        </div>
      </section>

      {/* 8. FINAL CONSULTATION CTA */}
      <section className="py-24 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-6">
            Ready to accelerate your engineering career?
          </h2>
          <p className="text-zinc-600 text-lg mb-10 font-sans">
            Connect with our engineering leads for mentorship, project reviews, or technical support.
          </p>
          <Link
            href="/contact?source=students"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold text-lg hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1 transition-all"
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
