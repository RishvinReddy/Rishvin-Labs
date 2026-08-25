"use client";

import React from "react";
import { StudentsHero } from "@/components/sections/students-hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StudentServicesSection } from "@/components/sections/student-services-section";
import { StudentPackagesSection } from "@/components/sections/student-packages-section";
import Link from "next/link";
import { motion } from "motion/react";
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
  LayoutTemplate,
  Lightbulb,
  Rocket
} from "lucide-react";

const BENTO_ITEMS = [
  { title: "Learn", desc: "Access roadmaps & guides", colSpan: "col-span-1 sm:col-span-1", icon: BookOpen, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-blue-600" },
  { title: "Build", desc: "Boilerplates & templates", colSpan: "col-span-1 sm:col-span-2", icon: Code2, bg: "bg-zinc-950", text: "text-white", border: "border-zinc-800", iconColor: "text-zinc-300" },
  { title: "Get Unstuck", desc: "1:1 technical support", colSpan: "col-span-1 sm:col-span-1", rowSpan: "sm:row-span-2", icon: TerminalSquare, bg: "bg-blue-600", text: "text-white", border: "border-blue-500", iconColor: "text-blue-200" },
  { title: "Showcase", desc: "Portfolio reviews", colSpan: "col-span-1 sm:col-span-1", icon: LayoutTemplate, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-purple-600" },
  { title: "Compete", desc: "Hackathon mentoring", colSpan: "col-span-1 sm:col-span-2", icon: Trophy, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-amber-500" },
  { title: "Career Prep", desc: "Resume reviews & guidance", colSpan: "col-span-1 sm:col-span-2", icon: Users, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-blue-600" },
  { title: "Opportunities", desc: "Internships & talent network", colSpan: "col-span-1 sm:col-span-2", icon: Briefcase, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-emerald-600" },
];

const JOURNEY_STEPS = [
  { label: "Discover", icon: Lightbulb },
  { label: "Learn", icon: BookOpen },
  { label: "Build", icon: Code2 },
  { label: "Showcase", icon: LayoutTemplate },
  { label: "Compete", icon: Trophy },
  { label: "Get Hired", icon: Rocket, highlight: true }
];

export default function StudentsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <StudentsHero />


      {/* 3. WHAT YOU CAN DO HERE (BENTO GRID) */}
      <section className="py-24 bg-white border-b border-zinc-200 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
              What can you use Student Hub for?
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              A complete ecosystem designed to take you from learning syntax to shipping production applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 auto-rows-[160px]">
            {BENTO_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative p-6 rounded-3xl border ${item.bg} ${item.border} ${item.text} ${item.colSpan} ${item.rowSpan || ''} flex flex-col justify-between overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg === 'bg-zinc-950' ? 'bg-zinc-900' : item.bg === 'bg-blue-600' ? 'bg-blue-700' : 'bg-white shadow-sm'} ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">{item.title}</h3>
                    <p className={`text-sm ${item.bg === 'bg-zinc-950' ? 'text-zinc-400' : item.bg === 'bg-blue-600' ? 'text-blue-100' : 'text-zinc-500'}`}>
                      {item.desc}
                    </p>
                  </div>
                  {/* Subtle Background Icon Decoration */}
                  <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                     <Icon className="w-32 h-32" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. STUDENT JOURNEY (ANIMATED TIMELINE) */}
      <section className="py-24 bg-[#fafafa] border-b border-zinc-200 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-4">The Journey</h2>
            <h3 className="text-3xl font-serif font-bold text-zinc-950">Your Path to Production</h3>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Background) */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-200 -translate-y-1/2 rounded-full hidden md:block"></div>
            
            {/* Connecting Line (Animated foreground) */}
            <motion.div 
              className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 rounded-full hidden md:block origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10">
              {JOURNEY_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={step.label}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="flex flex-col items-center gap-4 bg-[#fafafa] md:bg-transparent p-4 md:p-0 rounded-2xl w-full md:w-auto"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-colors duration-500 ${step.highlight ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white border-zinc-200 text-zinc-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${step.highlight ? 'text-blue-600' : 'text-zinc-500'}`}>
                      {step.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-16 text-center text-lg text-zinc-600">
            Need help at any stage? <a href="#resources" className="text-blue-600 font-semibold hover:underline decoration-2 underline-offset-4">Resources</a>, <a href="#programs" className="text-blue-600 font-semibold hover:underline decoration-2 underline-offset-4">Student Programs</a>, or <a href="#support" className="text-blue-600 font-semibold hover:underline decoration-2 underline-offset-4">Technical Support</a>.
          </div>
        </div>
      </section>

      {/* 5. FREE RESOURCES (PREMIUM CARDS) */}
      <section id="resources" className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-4">Free Resources</h2>
              <p className="text-lg text-zinc-600">Open-source roadmaps, templates, and guides to accelerate your learning. Curated by engineers.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Roadmaps */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-950 mb-6">Roadmaps</h3>
              <ul className="space-y-4">
                {[
                  { label: "Web Development", val: "roadmap-web-dev" },
                  { label: "Cybersecurity", val: "roadmap-cybersecurity" },
                  { label: "IoT & Hardware", val: "roadmap-iot" },
                  { label: "Blockchain / Web3", val: "roadmap-web3" },
                  { label: "Full Stack Engineering", val: "roadmap-fullstack" }
                ].map(link => (
                  <li key={link.val}>
                    <Link href={`/contact?service=${link.val}&source=students`} className="group flex items-center justify-between text-sm text-zinc-600 hover:text-blue-600 font-medium">
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Templates */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-950 mb-6">Templates</h3>
              <ul className="space-y-4">
                {[
                  { label: "Technical Resume", val: "template-technical-resume" },
                  { label: "Project README", val: "template-project-readme" },
                  { label: "GitHub Profile", val: "template-github-profile" },
                  { label: "Portfolio Boilerplate", val: "template-portfolio" }
                ].map(link => (
                  <li key={link.val}>
                    <Link href={`/contact?service=${link.val}&source=students`} className="group flex items-center justify-between text-sm text-zinc-600 hover:text-blue-600 font-medium">
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-950 mb-6">Guides</h3>
              <ul className="space-y-4">
                {[
                  { label: "Internship Preparation", val: "guide-internship" },
                  { label: "Hackathon Playbook", val: "guide-hackathon" },
                  { label: "Project Documentation", val: "guide-documentation" },
                  { label: "Git & GitHub Basics", val: "guide-git" }
                ].map(link => (
                  <li key={link.val}>
                    <Link href={`/contact?service=${link.val}&source=students`} className="group flex items-center justify-between text-sm text-zinc-600 hover:text-blue-600 font-medium">
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
                <TerminalSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-950 mb-6">Tools</h3>
              <ul className="space-y-4">
                {[
                  { label: "Developer Tools List", val: "tool-developer-list" },
                  { label: "Useful APIs", val: "tool-apis" },
                  { label: "Learning Platforms", val: "tool-learning" }
                ].map(link => (
                  <li key={link.val}>
                    <Link href={`/contact?service=${link.val}&source=students`} className="group flex items-center justify-between text-sm text-zinc-600 hover:text-blue-600 font-medium">
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HACKATHON HUB (ENHANCED) */}
      <section id="hackathons" className="py-32 bg-[#fafafa] border-b border-zinc-200 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-zinc-200 text-blue-600 mb-8 shadow-sm">
              <Trophy className="w-7 h-7" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-6">Hackathon Hub</h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-lg">
              Winning a hackathon requires more than just writing code. It requires validating your idea, architecting a stable demo, and pitching your impact perfectly.
            </p>
            <ul className="space-y-5">
              {['Hackathon preparation & ideation', 'Architecture planning for 24h builds', 'Pitch & demo preparation', 'Technical mentoring during the event'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-800 font-medium bg-white px-5 py-3 rounded-xl border border-zinc-100 shadow-sm shadow-zinc-950/5 max-w-md">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
             {/* Floating Code Snippet Decorative */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-12 -right-6 lg:-right-12 bg-zinc-950 text-zinc-300 font-mono text-xs p-4 rounded-xl border border-zinc-800 shadow-xl z-20 hidden sm:block"
             >
               <div className="flex gap-1.5 mb-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
               </div>
               <p><span className="text-blue-400">const</span> <span className="text-amber-200">demo</span> = <span className="text-blue-400">await</span> <span className="text-emerald-300">build</span>();</p>
               <p><span className="text-blue-400">if</span> (demo.isStable) {'{'}</p>
               <p className="pl-4"><span className="text-purple-400">winHackathon</span>();</p>
               <p>{'}'}</p>
             </motion.div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-2xl shadow-zinc-950/5 relative z-10">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 mb-6 border-b border-zinc-100 pb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Mentor Session
              </h3>
              <p className="text-zinc-600 mb-8 text-lg">Need technical guidance or a pitch review before your next hackathon? Get on a call with our engineers to bulletproof your build.</p>
              <Link href="/contact?service=hackathon-support&source=students" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all group">
                <span>Book a Mentor Session</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
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

      {/* 10. INTERNSHIPS & OPPORTUNITIES (ENHANCED) */}
      <section id="opportunities" className="py-32 bg-white border-t border-zinc-200 overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#fafafa] border border-zinc-200 text-blue-600 mb-8 shadow-sm">
            <Briefcase className="w-10 h-10" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-6">Internships & Opportunities</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-16">
            Find active internships, technical fellowships, and research opportunities tailored for students building beyond the classroom.
          </p>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Glowing background behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl opacity-10 rounded-[3rem]"></div>
            
            <div className="bg-zinc-950 border border-zinc-800 rounded-[2.5rem] p-12 sm:p-16 relative shadow-2xl overflow-hidden group">
              {/* Subtle Grid pattern in dark card */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">Join the Talent Network</h3>
                <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto">
                  We occasionally hire directly from our student ecosystem for internal projects, client work, and specialized fellowships.
                </p>
                <Link href="/contact?source=students" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-mono text-sm font-bold uppercase tracking-wider hover:bg-zinc-100 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <span>Submit your GitHub</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
      <section className="py-24 bg-white border-t border-zinc-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-zinc-950 mb-6">
            Ready to accelerate your engineering career?
          </h2>
          <p className="text-zinc-600 text-lg mb-10">
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
