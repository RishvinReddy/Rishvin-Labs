"use client";

import React, { useState, useEffect } from "react";
import { 
  GraduationCap,
  TerminalSquare,
  Library,
  BookOpen,
  Milestone,
  Users, 
  HelpCircle 
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Programs", href: "#programs", icon: GraduationCap },
  { label: "Technical Sessions", href: "#support", icon: TerminalSquare },
  { label: "Directory & Roadmaps", href: "#curriculum-resources", icon: Library },
  { label: "Domains", href: "#learning-domains", icon: BookOpen },
  { label: "Pathways", href: "#pathways", icon: Milestone },
  { label: "Community", href: "#community", icon: Users },
  { label: "FAQ", href: "#student-faq", icon: HelpCircle },
];

export function StudentHubNav() {
  const [activeHash, setActiveHash] = useState("#programs");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.querySelector(item.href);
        if (el && (el as HTMLElement).offsetHeight > 0) {
          const top = (el as HTMLElement).offsetTop - 140;
          if (scrollY >= top) {
            setActiveHash(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      aria-label="Student Hub navigation" 
      className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200 py-2.5 transition-all hidden md:block"
    >
      <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all shrink-0 ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-400" : "text-zinc-400"}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <a
          href="/contact?source=students-nav"
          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-mono font-bold transition-colors shrink-0 ml-4 border border-blue-200"
        >
          <span>Ask Mentorship</span>
        </a>
      </div>
    </nav>
  );
}
