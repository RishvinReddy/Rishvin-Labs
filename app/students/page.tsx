"use client";

import React from "react";
import { StudentsHero } from "@/components/sections/students-hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StudentServicesSection } from "@/components/sections/student-services-section";
import { StudentPackagesSection } from "@/components/sections/student-packages-section";
import Link from "next/link";
import { 
  ArrowRight, 
  Map, 
  BookOpen, 
  Code2, 
  Trophy, 
  Briefcase, 
  CheckCircle2, 
  TerminalSquare, 
  Users,
  LayoutTemplate
} from "lucide-react";

export default function StudentsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <StudentsHero />


      {/* 3. WHAT YOU CAN DO HERE */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-zinc-950 mb-12">
            What can you use Student Hub for?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-sm uppercase tracking-wider font-semibold text-zinc-700">
            <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors">Learn</div>
            <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors">Build</div>
            <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors">Get Unstuck</div>
            <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors">Showcase</div>
            <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors">Compete</div>
            <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors">Find Opportunities</div>
            <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors">Prepare for Careers</div>
            <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors">Get Technical Guidance</div>
          </div>
        </div>
      </section>

      {/* 4. STUDENT JOURNEY */}
      <section className="py-24 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-6">The Journey</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-serif font-bold text-xl sm:text-2xl text-zinc-400">
            <span className="text-zinc-950">Discover</span> <ArrowRight className="w-5 h-5 hidden sm:block" />
            <span className="text-zinc-950">Learn</span> <ArrowRight className="w-5 h-5 hidden sm:block" />
            <span className="text-zinc-950">Build</span> <ArrowRight className="w-5 h-5 hidden sm:block" />
            <span className="text-zinc-950">Showcase</span> <ArrowRight className="w-5 h-5 hidden sm:block" />
            <span className="text-zinc-950">Compete</span> <ArrowRight className="w-5 h-5 hidden sm:block" />
            <span className="text-zinc-950">Get Experience</span> <ArrowRight className="w-5 h-5 hidden sm:block" />
            <span className="text-blue-600">Get Hired</span>
          </div>
          <p className="mt-10 text-lg text-zinc-600">
            Need help at any stage? <a href="#resources" className="text-blue-600 font-semibold hover:underline">Resources</a>, <a href="#programs" className="text-blue-600 font-semibold hover:underline">Student Programs</a>, or <a href="#support" className="text-blue-600 font-semibold hover:underline">Technical Support</a>.
          </p>
        </div>
      </section>

      {/* 5. FREE RESOURCES */}
      <section id="resources" className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-4">Free Resources</h2>
            <p className="text-lg text-zinc-600">Open-source roadmaps, templates, and guides to accelerate your learning.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono font-bold text-sm tracking-wider uppercase text-zinc-950">
                <Map className="w-5 h-5 text-blue-600" /> Roadmaps
              </div>
              <ul className="space-y-3 text-sm text-zinc-600 flex flex-col">
                <Link href="/contact?service=roadmap-web-dev&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Web Development</Link>
                <Link href="/contact?service=roadmap-cybersecurity&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Cybersecurity</Link>
                <Link href="/contact?service=roadmap-iot&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">IoT & Hardware</Link>
                <Link href="/contact?service=roadmap-web3&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Blockchain / Web3</Link>
                <Link href="/contact?service=roadmap-fullstack&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Full Stack Engineering</Link>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono font-bold text-sm tracking-wider uppercase text-zinc-950">
                <LayoutTemplate className="w-5 h-5 text-blue-600" /> Templates
              </div>
              <ul className="space-y-3 text-sm text-zinc-600 flex flex-col">
                <Link href="/contact?service=template-technical-resume&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Technical Resume</Link>
                <Link href="/contact?service=template-project-readme&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Project README</Link>
                <Link href="/contact?service=template-github-profile&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">GitHub Profile</Link>
                <Link href="/contact?service=template-portfolio&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Portfolio Boilerplate</Link>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono font-bold text-sm tracking-wider uppercase text-zinc-950">
                <BookOpen className="w-5 h-5 text-blue-600" /> Guides
              </div>
              <ul className="space-y-3 text-sm text-zinc-600 flex flex-col">
                <Link href="/contact?service=guide-internship&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Internship Preparation</Link>
                <Link href="/contact?service=guide-hackathon&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Hackathon Playbook</Link>
                <Link href="/contact?service=guide-documentation&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Project Documentation</Link>
                <Link href="/contact?service=guide-git&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Git & GitHub Basics</Link>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono font-bold text-sm tracking-wider uppercase text-zinc-950">
                <TerminalSquare className="w-5 h-5 text-blue-600" /> Tools
              </div>
              <ul className="space-y-3 text-sm text-zinc-600 flex flex-col">
                <Link href="/contact?service=tool-developer-list&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Developer Tools List</Link>
                <Link href="/contact?service=tool-apis&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Useful APIs</Link>
                <Link href="/contact?service=tool-learning&source=students" className="hover:text-blue-600 cursor-pointer transition-colors block">Learning Platforms</Link>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HACKATHON HUB */}
      <section id="hackathons" className="py-24 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-6">
              <Trophy className="w-6 h-6" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-6">Hackathon Hub</h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Winning a hackathon requires more than just writing code. It requires validating your idea, architecting a stable demo, and pitching your impact perfectly.
            </p>
            <ul className="space-y-4">
              {['Hackathon preparation & ideation', 'Architecture planning for 24h builds', 'Pitch & demo preparation', 'Technical mentoring during the event'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-lg shadow-zinc-950/5">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-zinc-100 pb-4">Hackathon Support Session</h3>
            <p className="text-sm text-zinc-600 mb-6">Need technical guidance or a pitch review before your next hackathon? Get on a call with our engineers.</p>
            <Link href="/contact?service=hackathon-support&source=students" className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors">
              Book a Mentor Session
            </Link>
          </div>
        </div>
      </section>



      {/* 8. STUDENT PROGRAMS (Formerly Packages) */}
      <div id="programs">
        <StudentPackagesSection />
      </div>

      {/* 9. TECHNICAL SUPPORT (Formerly Services) */}
      <div id="support">
        <StudentServicesSection />
      </div>

      {/* 10. INTERNSHIPS & OPPORTUNITIES */}
      <section id="opportunities" className="py-24 bg-[#fafafa] border-t border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
            <Briefcase className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-6">Internships & Opportunities</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-12">
            Find active internships, technical fellowships, and research opportunities tailored for students building beyond the classroom.
          </p>
          <div className="bg-white border border-zinc-200 rounded-2xl p-12 max-w-2xl mx-auto shadow-sm">
            <Users className="w-8 h-8 text-zinc-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-zinc-950 mb-2">Join the Talent Network</h3>
            <p className="text-sm text-zinc-500 mb-6">We occasionally hire directly from our student ecosystem for internal projects and client work.</p>
            <Link href="/contact?source=students" className="inline-flex px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
              Submit your GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* 11. ETHICAL SUPPORT NOTICE */}
      <section className="py-8 bg-zinc-50 border-t border-zinc-200 text-center">
        <div className="max-w-screen-md mx-auto px-6">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            Mentoring, engineering guidance and debugging — not completing graded academic work on behalf of students.
          </p>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-20 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
            Ready to accelerate your engineering career?
          </h2>
          <p className="text-zinc-600 text-base mb-8">
            Connect with our engineering leads for mentorship, project reviews, or technical support.
          </p>
          <Link
            href="/contact?source=students"
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
