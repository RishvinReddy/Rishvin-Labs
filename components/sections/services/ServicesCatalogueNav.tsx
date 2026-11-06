"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  isSpecial?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "packages", label: "Curated Packages" },
  { id: "estimate-builder", label: "Interactive Estimator", isSpecial: true },
  { id: "catalogue-directory", label: "36 Service Groups" },
  { id: "addons", label: "Add-ons & Scope" },
  { id: "maintenance-plans", label: "Monthly Retainers" },
  { id: "pricing-policy", label: "Commercial Terms" },
];

export function ServicesCatalogueNav() {
  const [activeId, setActiveId] = useState<string>("packages");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header + nav bar
      
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 130; // height of navbar + sticky catalogue rail
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Service Catalogue Navigation"
      className="sticky top-[64px] md:top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-2xs transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Navigation Rail with Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 w-full md:w-auto scroll-smooth">
          <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest hidden lg:inline mr-2 shrink-0">
            Catalogue Index:
          </span>

          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;

            if (item.isSpecial) {
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-blue-50/80 text-blue-700 hover:bg-blue-100 hover:text-blue-900 border border-blue-200/80"
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            }

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-950 text-white font-semibold shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Direct Inquiry CTA button */}
        <div className="hidden md:flex items-center shrink-0 pl-2">
          <Link
            href="/contact?source=services-nav"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-zinc-950 hover:bg-blue-600 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-xs group"
          >
            <span>Direct Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

