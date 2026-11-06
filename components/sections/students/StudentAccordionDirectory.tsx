"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  Map, 
  BookOpen, 
  Code2, 
  Trophy, 
  Briefcase, 
  TerminalSquare, 
  Users,
  LayoutTemplate,
  Lightbulb,
  Rocket,
  ArrowRight,
  Maximize2,
  Minimize2
} from "lucide-react";

import { StudentDomainsSection } from "@/components/sections/students/StudentDomainsSection";
import { StudentPathwaysSection } from "@/components/sections/students/StudentPathwaysSection";
import { StudentResourcesSection } from "@/components/sections/students/StudentResourcesSection";
import { StudentCommunitySection } from "@/components/sections/students/StudentCommunitySection";
import { StudentResearchSection } from "@/components/sections/students/StudentResearchSection";
import { StudentToolsSection } from "@/components/sections/students/StudentToolsSection";
import { StudentWorkflowSection } from "@/components/sections/students/StudentWorkflowSection";
import { StudentGuidelinesSection } from "@/components/sections/students/StudentGuidelinesSection";

// Data for Bento Grid (Item 01)
const BENTO_ITEMS = [
  { title: "Learn", desc: "Access roadmaps & guides", colSpan: "col-span-1 sm:col-span-1", icon: BookOpen, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-blue-600" },
  { title: "Build", desc: "Boilerplates & templates", colSpan: "col-span-1 sm:col-span-2", icon: Code2, bg: "bg-zinc-950", text: "text-white", border: "border-zinc-800", iconColor: "text-zinc-300" },
  { title: "Get Unstuck", desc: "1:1 technical support", colSpan: "col-span-1 sm:col-span-1", rowSpan: "sm:row-span-2", icon: TerminalSquare, bg: "bg-blue-600", text: "text-white", border: "border-blue-500", iconColor: "text-blue-200" },
  { title: "Showcase", desc: "Portfolio reviews", colSpan: "col-span-1 sm:col-span-1", icon: LayoutTemplate, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-purple-600" },
  { title: "Compete", desc: "Hackathon mentoring", colSpan: "col-span-1 sm:col-span-2", icon: Trophy, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-amber-500" },
  { title: "Career Prep", desc: "Resume reviews & guidance", colSpan: "col-span-1 sm:col-span-2", icon: Users, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-blue-600" },
  { title: "Opportunities", desc: "Internships & talent network", colSpan: "col-span-1 sm:col-span-2", icon: Briefcase, bg: "bg-zinc-50", text: "text-zinc-900", border: "border-zinc-200", iconColor: "text-emerald-600" },
];

// Data for Journey Steps (Item 02)
const JOURNEY_STEPS = [
  { label: "Discover", icon: Lightbulb },
  { label: "Learn", icon: BookOpen },
  { label: "Build", icon: Code2 },
  { label: "Showcase", icon: LayoutTemplate },
  { label: "Compete", icon: Trophy },
  { label: "Get Hired", icon: Rocket, highlight: true }
];

interface AccordionDef {
  id: string;
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  anchorId: string;
  aliases?: string[];
  render: () => React.ReactNode;
}

// Static lookup for URL hash deep linking
const HASH_MAP: Record<string, string> = {
  "hub-use-cases": "hub-use-cases",
  "use-cases": "hub-use-cases",
  "hub-overview": "hub-use-cases",
  "student-journey": "student-journey",
  "journey": "student-journey",
  "learning-domains": "learning-domains",
  "domains": "learning-domains",
  "pathways": "pathways",
  "learning-pathways": "pathways",
  "resources-library": "resources-library",
  "library": "resources-library",
  "resources": "resources",
  "free-resources": "resources",
  "community": "community",
  "developer-community": "community",
  "research": "research",
  "research-lab": "research",
  "experimentation": "research",
  "dev-tools": "dev-tools",
  "tools": "dev-tools",
  "developer-tools": "dev-tools",
  "participation-workflow": "participation-workflow",
  "workflow": "participation-workflow",
  "how-to-participate": "participation-workflow",
  "quality-guidelines": "quality-guidelines",
  "guidelines": "quality-guidelines",
  "standards": "quality-guidelines",
};

export function StudentAccordionDirectory() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const ACCORDIONS: AccordionDef[] = useMemo(() => [
    // 01. Bento Grid
    {
      id: "hub-use-cases",
      num: "01",
      tag: "// 01_ECOSYSTEM_CAPABILITIES",
      title: "What can you use Student Hub for?",
      subtitle: "A complete ecosystem designed to take you from learning syntax to shipping production applications.",
      anchorId: "hub-use-cases",
      aliases: ["use-cases", "hub-overview"],
      render: () => (
        <div className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 auto-rows-[160px]">
            {BENTO_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group relative p-6 rounded-3xl border ${item.bg} ${item.border} ${item.text} ${item.colSpan} ${item.rowSpan || ""} flex flex-col justify-between overflow-hidden transition-all hover:scale-[1.01] hover:shadow-lg`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg === "bg-zinc-950" ? "bg-zinc-900" : item.bg === "bg-blue-600" ? "bg-blue-700" : "bg-white shadow-xs"} ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">{item.title}</h4>
                    <p className={`text-sm ${item.bg === "bg-zinc-950" ? "text-zinc-400" : item.bg === "bg-blue-600" ? "text-blue-100" : "text-zinc-500"}`}>
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Icon className="w-32 h-32" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )
    },

    // 02. The Journey
    {
      id: "student-journey",
      num: "02",
      tag: "// 02_PATH_TO_PRODUCTION",
      title: "THE JOURNEY",
      subtitle: "Sequential progression milestones from fundamental discovery to shipping verified production builds.",
      anchorId: "student-journey",
      aliases: ["journey"],
      render: () => (
        <div className="py-6">
          <div className="relative max-w-5xl mx-auto my-6">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-200 -translate-y-1/2 rounded-full hidden md:block"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10">
              {JOURNEY_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.label}
                    className="flex flex-col items-center gap-4 bg-white md:bg-transparent p-4 md:p-0 rounded-2xl w-full md:w-auto"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-colors ${step.highlight ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-white border-zinc-200 text-zinc-400"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${step.highlight ? "text-blue-600" : "text-zinc-500"}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-zinc-600">
            Need guidance at any stage? Explore{" "}
            <a href="#programs" className="text-blue-600 font-semibold hover:underline">Student Programs</a>
            {" "}or book a{" "}
            <a href="#support" className="text-blue-600 font-semibold hover:underline">Targeted Technical Session</a>.
          </div>
        </div>
      )
    },

    // 03. Core Engineering Domains
    {
      id: "learning-domains",
      num: "03",
      tag: "// 03_ENGINEERING_DISCIPLINES",
      title: "Explore Core Engineering Domains",
      subtitle: "6 specialized technical tracks: Full-Stack, Cybersecurity, Forensics, IoT, Blockchain, and Cloud Architecture.",
      anchorId: "learning-domains",
      aliases: ["domains"],
      render: () => (
        <div className="[&>section]:py-6 [&>section]:px-0 [&>section]:border-none [&>section]:bg-transparent">
          <StudentDomainsSection />
        </div>
      )
    },

    // 04. Technical Learning Pathways
    {
      id: "pathways",
      num: "04",
      tag: "// 04_PRACTICAL_ROADMAPS",
      title: "Technical Learning Pathways",
      subtitle: "Sequential, multi-stage roadmaps from language fundamentals to production engineering architectures.",
      anchorId: "pathways",
      aliases: ["learning-pathways"],
      render: () => (
        <div className="[&>section]:py-6 [&>section]:px-0 [&>section]:border-none [&>section]:bg-transparent">
          <StudentPathwaysSection />
        </div>
      )
    },

    // 05. Official Engineering Resource Library
    {
      id: "resources-library",
      num: "05",
      tag: "// 05_CURATED_LIBRARY",
      title: "Official Engineering Resource Library",
      subtitle: "Authoritative documentation, technical whitepapers, RFC specifications, and engineering references.",
      anchorId: "resources-library",
      aliases: ["library"],
      render: () => (
        <div className="[&>section]:py-6 [&>section]:px-0 [&>section]:border-none [&>section]:bg-transparent">
          <StudentResourcesSection />
        </div>
      )
    },

    // 06. Free Resources
    {
      id: "resources",
      num: "06",
      tag: "// 06_OPEN_SOURCE_ASSETS",
      title: "Free Resources",
      subtitle: "Open-source roadmaps, engineering templates, interview guides, and developer tooling curated for students.",
      anchorId: "resources",
      aliases: ["free-resources"],
      render: () => (
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Roadmaps */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-blue-600 mb-6 shadow-xs">
                <Map className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-zinc-950 mb-6">Roadmaps</h4>
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
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-purple-600 mb-6 shadow-xs">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-zinc-950 mb-6">Templates</h4>
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
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-emerald-600 mb-6 shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-zinc-950 mb-6">Guides</h4>
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
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-amber-500 mb-6 shadow-xs">
                <TerminalSquare className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl text-zinc-950 mb-6">Tools</h4>
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
      )
    },

    // 07. Developer Ecosystems & Community
    {
      id: "community",
      num: "07",
      tag: "// 07_DEVELOPER_COMMUNITY",
      title: "Developer Ecosystems & Community",
      subtitle: "Verified student developer networks, global open-source chapters, and collaborative engineering spaces.",
      anchorId: "community",
      aliases: ["developer-community"],
      render: () => (
        <div className="[&>section]:py-6 [&>section]:px-0 [&>section]:border-none [&>section]:bg-transparent">
          <StudentCommunitySection />
        </div>
      )
    },

    // 08. Research & Experimentation
    {
      id: "research",
      num: "08",
      tag: "// 08_TECHNICAL_RESEARCH",
      title: "Research & Experimentation",
      subtitle: "Rigorous paper reading methods, responsible vulnerability disclosure (ISO/IEC 29147), and empirical validation.",
      anchorId: "research",
      aliases: ["research-lab", "experimentation"],
      render: () => (
        <div className="[&>section]:py-6 [&>section]:px-0 [&>section]:border-none [&>section]:bg-transparent">
          <StudentResearchSection />
        </div>
      )
    },

    // 09. Essential Developer Tools & Environment
    {
      id: "dev-tools",
      num: "09",
      tag: "// 09_DEVELOPER_TOOLCHAIN",
      title: "Essential Developer Tools & Environment",
      subtitle: "Curated tooling across IDEs, CLI utilities, security scanners, debuggers, and student developer packs.",
      anchorId: "dev-tools",
      aliases: ["tools", "developer-tools"],
      render: () => (
        <div className="[&>section]:py-6 [&>section]:px-0 [&>section]:border-none [&>section]:bg-transparent">
          <StudentToolsSection />
        </div>
      )
    },

    // 10. How to Participate in the Hub
    {
      id: "participation-workflow",
      num: "10",
      tag: "// 10_PARTICIPATION_FRAMEWORK",
      title: "How to Participate in the Hub",
      subtitle: "A clear 6-step workflow for engaging with Rishvin Labs Student Engineering Hub from exploration to graduation.",
      anchorId: "participation-workflow",
      aliases: ["workflow", "how-to-participate"],
      render: () => (
        <div className="[&>section]:py-6 [&>section]:px-0 [&>section]:border-none [&>section]:bg-transparent">
          <StudentWorkflowSection />
        </div>
      )
    },

    // 11. Student Contribution & Quality Guidelines
    {
      id: "quality-guidelines",
      num: "11",
      tag: "// 11_QUALITY_STANDARDS",
      title: "Student Contribution & Quality Guidelines",
      subtitle: "Authentic authorship standards, zero credential leaks, team licensing consent, and technical hygiene.",
      anchorId: "quality-guidelines",
      aliases: ["guidelines", "standards"],
      render: () => (
        <div className="[&>section]:py-6 [&>section]:px-0 [&>section]:border-none [&>section]:bg-transparent">
          <StudentGuidelinesSection />
        </div>
      )
    }
  ], []);

  const expandAll = () => {
    setOpenIds(new Set(ACCORDIONS.map(a => a.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  // Deep-link anchor listener to auto-expand accordion and scroll to it
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const targetId = HASH_MAP[hash];
      if (targetId) {
        setOpenIds(prev => new Set([...Array.from(prev), targetId]));
        setTimeout(() => {
          const el = document.getElementById(targetId) || document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section id="curriculum-resources" className="py-24 px-6 bg-white border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Header with Title and Expand/Collapse Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              {"// KNOWLEDGE_DIRECTORY_V3"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4 leading-[1.1]">
              Engineering Knowledge Directory
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed font-sans">
              11 curated educational modules, roadmaps, toolchains, research guides, and standards. Collapsed by default for a focused, uncluttered experience.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            <button
              type="button"
              onClick={expandAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 text-xs font-mono font-medium transition-colors cursor-pointer"
              title="Expand all 11 supporting archives"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expand All</span>
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 text-xs font-mono font-medium transition-colors cursor-pointer"
              title="Collapse all archives"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Collapse All</span>
            </button>
          </div>
        </div>

        {/* 11 Collapsible Accordion Items */}
        <div className="space-y-4">
          {ACCORDIONS.map((item) => {
            const isOpen = openIds.has(item.id);
            return (
              <div
                key={item.id}
                id={item.id}
                className={`border rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-[#fafafa]/60 border-zinc-300 shadow-sm" 
                    : "bg-white border-zinc-200 hover:border-zinc-300"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  id={`accordion-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${item.id}`}
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-mono text-xs font-bold text-zinc-500 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 shrink-0 mt-0.5 sm:mt-0">
                      {item.num}
                    </span>
                    <div>
                      <span className="font-mono text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-zinc-950 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-sm mt-1 line-clamp-1 sm:line-clamp-none max-w-2xl font-sans">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div 
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen 
                        ? "bg-zinc-950 text-white border-zinc-950 rotate-180" 
                        : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`accordion-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`accordion-btn-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="border-t border-zinc-200/80 px-6 sm:px-8 pb-8 pt-4 bg-[#fafafa]/40"
                    >
                      {item.render()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
