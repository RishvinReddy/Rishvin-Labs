"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { SearchBar } from "@/components/search/SearchBar";

export function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const navRef   = useRef<HTMLDivElement>(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close on route change ── */
  useEffect(() => { 
    setTimeout(() => {
      setMobileMenuOpen(false); 
    }, 0);
  }, [pathname]);

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
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-6">

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
              Technology Studio
            </span>
          </div>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center xl:justify-start xl:ml-12">
          <Link href="/services"  className={linkCls(pathname === "/services")}>Services</Link>
          <Link href="/students"  className={linkCls(pathname === "/students")}>Student Hub</Link>
          <Link href="/solutions" className={linkCls(pathname === "/solutions")}>Solutions</Link>
          <Link href="/work"      className={linkCls(pathname === "/work" || pathname.startsWith("/work/"))}>Work</Link>
          <Link href="/about"     className={linkCls(pathname === "/about")}>About</Link>
          <Link href="/contact"   className={linkCls(pathname === "/contact")}>Contact</Link>
        </nav>

        {/* ── RIGHT: Status + CTA ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">

          {/* Divider: nav | utility */}
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
              
              <div className="pt-2">
                <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 px-4">Navigation</h4>
                {[
                  { label: "Services",    href: "/services",  active: pathname === "/services" },
                  { label: "Student Hub", href: "/students",  active: pathname === "/students" },
                  { label: "Solutions",   href: "/solutions", active: pathname === "/solutions" },
                  { label: "Work",        href: "/work",      active: pathname === "/work" },
                  { label: "About",       href: "/about",     active: pathname === "/about" },
                  { label: "Contact",     href: "/contact",   active: pathname === "/contact" },
                ].map(({ label, href, active }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider ${
                      active ? "bg-blue-50 text-blue-600 border border-blue-200/70" : "text-zinc-800 hover:bg-zinc-50"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Mobile Utilities */}
              <div className="pt-4 mt-1 border-t border-zinc-200">
                <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 px-4">Utilities</h4>
                <div className="px-4 pb-2">
                  <SearchBar />
                </div>
              </div>

              {/* Mobile CTAs */}
              <div className="pt-4 mt-1 border-t border-zinc-200 flex flex-col gap-3">
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
