"use client";

import React, { useEffect, useState } from "react";
import { TocEntry } from "@/lib/content-model";

export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll progress
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      setProgress((scrolled / documentHeight) * 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Active heading intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    toc.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <div className="sticky top-32 space-y-6 hidden lg:block">
      {/* Scroll Progress Bar */}
      <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden mb-8">
        <div 
          className="h-full bg-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>

      <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
        On this page
      </h4>
      <nav className="flex flex-col space-y-2">
        {toc.map((entry) => (
          <a
            key={entry.id}
            href={`#${entry.id}`}
            className={`text-sm transition-colors block ${
              entry.level === 3 ? "pl-4" : ""
            } ${
              activeId === entry.id
                ? "text-blue-600 font-bold"
                : "text-zinc-500 hover:text-zinc-950"
            }`}
          >
            {entry.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
