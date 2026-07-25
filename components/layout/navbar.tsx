"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Building2,
  UserCircle2,
  FileText,
  FlaskConical,
  BookOpen,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  FolderGit2
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studioOpen, setStudioOpen]       = useState(false);

  const pathname = usePathname();
  const navRef   = useRef<HTMLDivElement>(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── outside click → close studio dropdown ── */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setStudioOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setStudioOpen(false); setMobileMenuOpen(false); }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  /* ── close on route change ── */
  useEffect(() => { setMobileMenuOpen(false); setStudioOpen(false); }, [pathname]);

  /* ── Studio dropdown data ── */
  const studioMenu = [
    { title: "About the Studio",     desc: "Mission, history & principles",        href: "/about",          icon: Building2,    color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
    { title: "Founder Profile",       desc: "Lead Architect Rishvin Reddy",         href: "/founder",        icon: UserCircle2,  color: "bg-blue-50 text-blue-600 border-blue-200/60" },
    { title: "Projects",              desc: "Case studies & engineered systems",    href: "/projects",       icon: FolderGit2,   color: "bg-indigo-50 text-indigo-600 border-indigo-200/60" },
    { title: "Engineering Manifesto", desc: "The 8 immutable laws of systems design", href: "/manifesto",    icon: FileText,     color: "bg-violet-50 text-violet-600 border-violet-200/60" },
    { title: "R&D Labs",              desc: "Experimental prototypes & testbeds",   href: "/labs",           icon: FlaskConical, color: "bg-emerald-50 text-emerald-600 border-emerald-200/60" },
    { title: "Engineering Journal",   desc: "Technical post-mortems & insights",    href: "/journal",        icon: BookOpen,     color: "bg-amber-50 text-amber-600 border-amber-200/60" },
  ];

  const isStudioActive = ["/about", "/founder", "/manifesto", "/labs", "/journal", "/recommendation", "/projects"].includes(pathname) || pathname.startsWith("/projects/");
  const isProjectsActive = pathname === "/projects" || pathname.startsWith("/projects/");

  /* ── shared link class helper ── */
  const linkCls = (active: boolean) =>
    `px-3.5 py-2 rounded-lg font-mono text-[11px] font-bold tracking-widest uppercase transition-all ${
      active
        ? "text-blue-600 bg-blue-50 border border-blue-200/70"
        : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100/80"
    }`;

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-sm h-[64px]"
          : "bg-white/85 backdrop-blur-md border-b border-zinc-200/50 h-[72px]"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-8 h-full flex items-center justify-between gap-6">

        {/* ── LOGO ── */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/icon.png"
            alt="Rishvin Labs"
            className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
            onError={e => { e.currentTarget.style.display = "none"; }}
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
              Studio Architecture
            </span>
          </div>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">

          <Link href="/" className={linkCls(pathname === "/")}>Home</Link>

          <Link href="/services" className={linkCls(pathname === "/services")}>Services</Link>

          {/* Studio dropdown */}
          <div className="relative">
            <button
              onClick={() => setStudioOpen(v => !v)}
              onMouseEnter={() => setStudioOpen(true)}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-lg font-mono text-[11px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
                isStudioActive || studioOpen
                  ? "text-blue-600 bg-blue-50 border border-blue-200/70"
                  : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100/80"
              }`}
            >
              Studio
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${studioOpen ? "rotate-180 text-blue-500" : "text-zinc-400"}`} />
            </button>

            <AnimatePresence>
              {studioOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onMouseLeave={() => setStudioOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white/98 backdrop-blur-2xl border border-zinc-200/80 rounded-3xl p-3 shadow-2xl shadow-zinc-950/12 grid grid-cols-2 gap-2 z-50"
                >
                  {/* caret */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-zinc-200/80 rotate-45" />

                  {studioMenu.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setStudioOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200/60 transition-all group/item"
                      >
                        <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-sans text-[13px] font-bold text-zinc-900 group-hover/item:text-blue-600 transition-colors truncate">{item.title}</span>
                          <span className="font-sans text-[11px] text-zinc-500 leading-snug mt-0.5 line-clamp-1">{item.desc}</span>
                        </div>
                      </Link>
                    );
                  })}

                  {/* AI Configurator Banner */}
                  <div className="col-span-2 pt-2 mt-1 border-t border-zinc-100">
                    <Link
                      href="/recommendation"
                      onClick={() => setStudioOpen(false)}
                      className="flex items-center justify-between p-3 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-900 transition-all group/rec border border-zinc-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-400">AI Architecture Configurator</div>
                          <div className="font-sans text-[11px] text-zinc-400">Custom stack recommendation engine</div>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-zinc-400 bg-zinc-800 px-2 py-1 rounded-lg group-hover/rec:text-white transition-colors">
                        [ RUN ]
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className={linkCls(pathname === "/contact")}>Contact</Link>

          {/* Student Hub — featured pill */}
          <Link
            href="/students"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-widest transition-all ${
              pathname === "/students"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                : "bg-blue-50 text-blue-700 border border-blue-200/80 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            }`}
          >
            <span>Student Hub</span>
            <span className="text-amber-400 text-[10px]">✦</span>
          </Link>

          {/* Portfolio — external */}
          <a
            href="https://rishvinreddy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3.5 py-2 rounded-lg font-mono text-[11px] font-bold tracking-widest uppercase text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100/80 transition-all"
          >
            Portfolio
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

        </nav>

        {/* ── RIGHT: Status + CTA ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Live dot */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 font-mono text-[10px] font-bold text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Online
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-blue-600 transition-all shadow-md shadow-zinc-950/10 group/btn"
          >
            Start Project
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          onClick={() => setMobileMenuOpen(v => !v)}
          className="lg:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-zinc-200 bg-white/98 backdrop-blur-2xl px-6 py-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-2 font-mono">

              {[
                { label: "Home",     href: "/",         active: pathname === "/" },
                { label: "Services", href: "/services", active: pathname === "/services" },
                { label: "Contact",  href: "/contact",  active: pathname === "/contact" },
              ].map(({ label, href, active }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider ${
                    active ? "bg-blue-50 text-blue-600 border border-blue-200/70" : "text-zinc-800 hover:bg-zinc-50"
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Studio accordion */}
              <div className="border border-zinc-200/80 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setStudioOpen(v => !v)}
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold uppercase tracking-wider text-zinc-800 hover:bg-zinc-50 transition-colors"
                >
                  Studio
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${studioOpen ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                <AnimatePresence>
                  {studioOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-zinc-50/80 px-4 py-2 divide-y divide-zinc-200/60"
                    >
                      {studioMenu.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-2.5 text-sm font-semibold text-zinc-700 hover:text-blue-600"
                        >
                          <item.icon className="w-4 h-4 text-violet-500 shrink-0" />
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Student Hub */}
              <Link
                href="/students"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold uppercase tracking-wider shadow-md"
              >
                <span>Student Hub</span>
                <span className="text-amber-300 text-xs">✦</span>
              </Link>

              {/* Portfolio */}
              <a
                href="https://rishvinreddy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-zinc-800 hover:bg-zinc-50"
              >
                Portfolio
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              {/* Mobile CTAs */}
              <div className="pt-4 mt-1 border-t border-zinc-200 flex flex-col gap-3">
                <Link
                  href="/recommendation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-zinc-900 text-blue-400 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border border-zinc-800"
                >
                  <Sparkles className="w-4 h-4" />
                  AI Architecture Configurator
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-blue-600 text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
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
