"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Calculator,
  Layers,
  Terminal,
  ShieldCheck,
  BookOpen,
  Briefcase,
  Trophy,
  Code2,
  ExternalLink,
  User,
  Building2,
  FileText,
  HelpCircle,
  Clock,
  ArrowUpRight,
  Send,
  Zap,
} from "lucide-react";
import { SearchBar } from "@/components/search/SearchBar";
import { RishvinLogo } from "@/components/shared/RishvinLogo";
import { COMPANY } from "@/lib/business/company";

interface NavSubItem {
  label: string;
  href: string;
  desc?: string;
  badge?: string;
  icon?: React.ElementType;
  external?: boolean;
}

interface NavCategory {
  id: string;
  label: string;
  mainHref: string;
  columns: {
    heading: string;
    items: NavSubItem[];
  }[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "services",
    label: "Services",
    mainHref: "/services",
    columns: [
      {
        heading: "Commercial Catalogue & Tools",
        items: [
          {
            label: "Service Pricebook & Catalogue",
            href: "/services",
            desc: "Transparent pricebook starting from ₹300",
            badge: "From ₹300",
            icon: Layers,
          },
          {
            label: "Interactive Scope Estimator",
            href: "/services#estimate-builder",
            desc: "Instant live pricing & custom specification builder",
            badge: "Calculator",
            icon: Calculator,
          },
          {
            label: "Curated Fixed-Scope Packages",
            href: "/services#packages",
            desc: "14 defined starter and advanced bundles",
            icon: Sparkles,
          },
          {
            label: "36 Specialized Service Groups",
            href: "/services#catalogue-directory",
            desc: "Searchable directory across 6 technical divisions",
            icon: Terminal,
          },
          {
            label: "Continuous Care & Maintenance",
            href: "/services#maintenance-plans",
            desc: "Monthly engineering retainers from ₹1,500/mo",
            icon: Clock,
          },
          {
            label: "Pricing Policy & 14-Day Warranty",
            href: "/services#pricing-policy",
            desc: "Direct pass-through rules & milestone terms",
            icon: ShieldCheck,
          },
        ],
      },
      {
        heading: "Core Engineering Domains",
        items: [
          {
            label: "Software & Full-Stack Systems",
            href: "/services/software-development",
            desc: "Next.js, TypeScript, scalable microservices & APIs",
            icon: Terminal,
          },
          {
            label: "AI Development & Workflows",
            href: "/services/ai-development",
            desc: "Custom RAG assistants, Gemini/OpenAI API integrations",
            icon: Sparkles,
          },
          {
            label: "Intelligent Process Automation",
            href: "/services/automation",
            desc: "WhatsApp Cloud API, n8n & automated CRM pipelines",
            icon: Zap,
          },
          {
            label: "D2C E-Commerce & Storefronts",
            href: "/d2c",
            desc: "Headless commerce, payment gateways & order bots",
            icon: Layers,
          },
        ],
      },
    ],
  },
  {
    id: "students",
    label: "Student Hub",
    mainHref: "/students",
    columns: [
      {
        heading: "Learning & Real Projects",
        items: [
          {
            label: "Student Platform Overview",
            href: "/students",
            desc: "Ecosystem for emerging builders & engineers",
            icon: BookOpen,
          },
          {
            label: "6 Engineering Tracks",
            href: "/students#tracks",
            desc: "Full-Stack, Security, Forensics, IoT, Blockchain, AI",
            icon: Layers,
          },
          {
            label: "Practical Learning Pathways",
            href: "/students#pathways",
            desc: "Curated step-by-step technical roadmaps",
            icon: Code2,
          },
          {
            label: "Real Projects & Challenges",
            href: "/students#projects",
            desc: "Production-grade project briefs & specs",
            icon: Terminal,
          },
          {
            label: "Engineering Resource Library",
            href: "/students#library",
            desc: "Tested boilerplates, README templates & cheat sheets",
            badge: "Free",
            icon: BookOpen,
          },
        ],
      },
      {
        heading: "Mentorship & Career",
        items: [
          {
            label: "Hackathon Preparation Hub",
            href: "/students#hackathons",
            desc: "Architecture planning & pitch coaching for 24h builds",
            icon: Trophy,
          },
          {
            label: "Verified Opportunities & Grants",
            href: "/students#opportunities",
            desc: "Curated student internships and technical fellowships",
            icon: Briefcase,
          },
          {
            label: "Student Mentorship Programs",
            href: "/students#programs",
            desc: "Targeted project and portfolio review sprints",
            icon: Sparkles,
          },
          {
            label: "1:1 Engineering Office Hours",
            href: "/students#support",
            desc: "Debugging sessions and architecture guidance",
            icon: ShieldCheck,
          },
        ],
      },
    ],
  },
  {
    id: "work",
    label: "Work & Proof",
    mainHref: "/work",
    columns: [
      {
        heading: "Portfolio & Solutions",
        items: [
          {
            label: "Featured Case Studies",
            href: "/work",
            desc: "Production software builds, IoT networks & systems",
            icon: Code2,
          },
          {
            label: "Industry & Business Solutions",
            href: "/solutions",
            desc: "Tailored solutions for startups and enterprises",
            icon: Layers,
          },
          {
            label: "Cryptographic Evidence Log",
            href: "/results",
            desc: "Verifiable project outcomes and delivery telemetry",
            badge: "Verified",
            icon: ShieldCheck,
          },
        ],
      },
      {
        heading: "Research & Writing",
        items: [
          {
            label: "Engineering Journal",
            href: "/journal",
            desc: "Architectural insights, notes, and technical articles",
            icon: FileText,
          },
          {
            label: "Applied Technical Research",
            href: "/research",
            desc: "Explorations in security, embedded tech & networks",
            icon: BookOpen,
          },
          {
            label: "Engineering Whitepapers",
            href: "/whitepapers",
            desc: "In-depth technical whitepapers and specifications",
            icon: FileText,
          },
        ],
      },
    ],
  },
  {
    id: "studio",
    label: "Studio",
    mainHref: "/about",
    columns: [
      {
        heading: "Company & Leadership",
        items: [
          {
            label: "About Rishvin Labs",
            href: "/about",
            desc: "Studio mission, values, and engineering standards",
            icon: Building2,
          },
          {
            label: "Founder Profile",
            href: "/about/rishvin-reddy",
            desc: "Erolla Rishvin Reddy — Lead Architect & Founder",
            icon: User,
          },
          {
            label: "LinkedIn Updates",
            href: "/linkedin",
            desc: "Public engineering updates & featured dispatches",
            badge: "New",
            icon: ArrowUpRight,
          },
        ],
      },
      {
        heading: "Trust & Inquiries",
        items: [
          {
            label: "Frequently Asked Questions",
            href: "/faq",
            desc: "75 answers covering pricing, tech stack, and scope",
            icon: HelpCircle,
          },
          {
            label: "Start a Technical Engagement",
            href: "/contact",
            desc: "Direct inquiry with founding engineer response in 24h",
            icon: Send,
          },
          {
            label: "Follow Company on LinkedIn",
            href: COMPANY.linkedinCompanyUrl,
            desc: "Official LinkedIn company profile",
            external: true,
            icon: ExternalLink,
          },
        ],
      },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close on route change ── */
  useEffect(() => {
    setTimeout(() => {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }, 0);
  }, [pathname]);

  /* ── outside click handler ── */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isCategoryActive = (category: NavCategory) => {
    if (pathname === category.mainHref) return true;
    for (const col of category.columns) {
      for (const item of col.items) {
        if (!item.external && (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("#")[0])))) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeDropdown
          ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-sm h-[64px]"
          : "bg-white/85 backdrop-blur-md border-b border-zinc-200/50 h-[72px]"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-6">
        {/* ── LOGO ── */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <RishvinLogo
            variant="mark"
            width={34}
            height={34}
            priority
            className="group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif font-black text-[18px] tracking-tight text-zinc-950">
              Rishvin{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent font-normal italic">
                Labs
              </span>
            </span>
            <span className="font-mono text-[8px] font-bold text-zinc-400 tracking-widest uppercase mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Technology Studio
            </span>
          </div>
        </Link>

        {/* ── DESKTOP NAV WITH DROPDOWNS ── */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center xl:justify-start xl:ml-10">
          {NAV_CATEGORIES.map((cat) => {
            const isOpen = activeDropdown === cat.id;
            const active = isCategoryActive(cat);

            return (
              <div
                key={cat.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                  className={`px-3 py-2 rounded-lg font-mono text-[11px] font-bold tracking-widest uppercase transition-all inline-flex items-center gap-1.5 ${
                    active || isOpen
                      ? "text-blue-600 bg-blue-50/80 border border-blue-200/70"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 border border-transparent"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{cat.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : "text-zinc-400"
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-[580px] rounded-2xl bg-white border border-zinc-200 shadow-2xl p-6 z-50 overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {cat.columns.map((col, cIdx) => (
                          <div key={cIdx} className="space-y-3">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 block pb-1 border-b border-zinc-100">
                              {col.heading}
                            </span>
                            <div className="space-y-1">
                              {col.items.map((item, iIdx) => {
                                const Icon = item.icon || Terminal;
                                const isItemActive =
                                  !item.external && pathname === item.href.split("#")[0];

                                const content = (
                                  <div
                                    className={`p-2 rounded-xl transition-all flex items-start gap-3 group text-left ${
                                      isItemActive
                                        ? "bg-blue-50/70 text-blue-950"
                                        : "hover:bg-zinc-50 text-zinc-900"
                                    }`}
                                  >
                                    <div
                                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                                        isItemActive
                                          ? "bg-blue-600 text-white"
                                          : "bg-zinc-100 text-zinc-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                                      } transition-colors`}
                                    >
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-1.5">
                                        <span className="font-sans font-bold text-xs leading-snug group-hover:text-blue-600 transition-colors truncate">
                                          {item.label}
                                        </span>
                                        {item.badge && (
                                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-700 uppercase shrink-0">
                                            {item.badge}
                                          </span>
                                        )}
                                        {item.external && (
                                          <ExternalLink className="w-3 h-3 text-zinc-400 shrink-0" />
                                        )}
                                      </div>
                                      {item.desc && (
                                        <p className="text-[11px] text-zinc-500 leading-tight mt-0.5 line-clamp-1">
                                          {item.desc}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                );

                                return item.external ? (
                                  <a
                                    key={iIdx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setActiveDropdown(null)}
                                    className="block"
                                  >
                                    {content}
                                  </a>
                                ) : (
                                  <Link
                                    key={iIdx}
                                    href={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block"
                                  >
                                    {content}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Dropdown Bottom Banner */}
                      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                        <Link
                          href={cat.mainHref}
                          onClick={() => setActiveDropdown(null)}
                          className="text-blue-600 font-bold hover:underline flex items-center gap-1 text-[11px]"
                        >
                          <span>Explore all in {cat.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-zinc-400 text-[10px]">
                          Founder-Led Engineering
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Direct Contact Nav link */}
          <Link
            href="/contact"
            className={`px-3 py-2 rounded-lg font-mono text-[11px] font-bold tracking-widest uppercase transition-all ${
              pathname === "/contact"
                ? "text-blue-600 bg-blue-50 border border-blue-200/70"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* ── RIGHT: Status + CTA ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="w-px h-4 bg-zinc-200" />
          <SearchBar />

          {/* Live dot */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full font-mono text-[9px] font-bold text-emerald-600 uppercase tracking-widest opacity-80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Online
          </div>

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 ml-1 px-6 py-2.5 rounded-xl bg-zinc-950 text-white font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10 group/btn"
          >
            Start a Project
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="lg:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── MOBILE ACCORDION DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-zinc-200 bg-white/98 backdrop-blur-2xl px-6 py-6 overflow-y-auto max-h-[85vh] shadow-xl"
          >
            <div className="flex flex-col gap-3 font-mono">
              <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2">
                Navigation Directory
              </h4>

              {/* Accordion Categories */}
              <div className="space-y-1.5">
                {NAV_CATEGORIES.map((cat) => {
                  const isExpanded = mobileExpandedCat === cat.id;
                  const active = isCategoryActive(cat);

                  return (
                    <div
                      key={cat.id}
                      className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpandedCat(isExpanded ? null : cat.id)
                        }
                        className={`w-full py-3 px-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-left transition-colors ${
                          active
                            ? "text-blue-600 bg-blue-50/50"
                            : "text-zinc-800 hover:bg-zinc-100"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 transition-transform ${
                            isExpanded ? "rotate-180 text-blue-600" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-3 bg-white border-t border-zinc-200/80 space-y-4">
                          <Link
                            href={cat.mainHref}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs font-bold text-blue-600 hover:underline block px-2 pb-1 border-b border-zinc-100"
                          >
                            → View {cat.label} Overview
                          </Link>

                          {cat.columns.map((col, cIdx) => (
                            <div key={cIdx} className="space-y-1.5">
                              <span className="text-[10px] uppercase text-zinc-400 font-bold px-2 block">
                                {col.heading}
                              </span>
                              {col.items.map((item, iIdx) =>
                                item.external ? (
                                  <a
                                    key={iIdx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg flex items-center justify-between text-xs text-zinc-700 hover:bg-zinc-50 hover:text-blue-600"
                                  >
                                    <span>{item.label}</span>
                                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                                  </a>
                                ) : (
                                  <Link
                                    key={iIdx}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg flex items-center justify-between text-xs text-zinc-700 hover:bg-zinc-50 hover:text-blue-600"
                                  >
                                    <span>{item.label}</span>
                                    {item.badge && (
                                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200">
                                        {item.badge}
                                      </span>
                                    )}
                                  </Link>
                                )
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Direct Contact in Mobile */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border border-zinc-200/80 ${
                    pathname === "/contact"
                      ? "bg-blue-50 text-blue-600 border-blue-200"
                      : "bg-zinc-50 text-zinc-800"
                  }`}
                >
                  Contact & Inquiries
                </Link>
              </div>

              {/* Mobile Utilities */}
              <div className="pt-4 mt-2 border-t border-zinc-200">
                <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 px-2">
                  Search & Tools
                </h4>
                <div className="px-2 pb-2">
                  <SearchBar />
                </div>
              </div>

              {/* Mobile CTAs */}
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-zinc-950 text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
