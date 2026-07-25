import React from "react";
import Link from "next/link";
import { Terminal, GitBranch, Globe, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white pt-24 pb-0 relative overflow-hidden border-t border-white/10 z-10">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(37,99,235,0.12),transparent_50%),radial-gradient(circle_at_85%_30%,rgba(124,58,237,0.12),transparent_50%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none z-0 animate-pulse-slow" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col (col-span-4) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group text-decoration-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Rishvin <span className="font-normal italic text-blue-400">Labs</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-sans">
              A high-end engineering studio building intelligent digital systems, IoT sensor networks, and fortified web architectures for modern businesses.
            </p>
          </div>

          {/* Company Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">
              Company
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-zinc-400">
              <Link href="#about" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>About Us</span>
              </Link>
              <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>Services</span>
              </Link>
              <Link href="#work" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>Projects</span>
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Services Links (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">
              Services
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-zinc-400">
              <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>Web Development</span>
              </Link>
              <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>SaaS & Cloud Platforms</span>
              </Link>
              <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>IoT Telemetry Solutions</span>
              </Link>
              <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>Cybersecurity Vaults</span>
              </Link>
            </div>
          </div>

          {/* Connect (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-zinc-400 mb-6">
              <a href="https://rishvinreddy.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>Founder — Rishvin Reddy</span>
              </a>
              <a href="https://rishvinreddy.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>Portfolio</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/RishvinReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all shadow-lg"
                aria-label="GitHub"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href="https://rishvinreddy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all shadow-lg"
                aria-label="Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:rishvinreddy@gmail.com"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <div>
            &copy; {currentYear} Rishvin Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[10px]">
            <span>[ STATUS: OPERATIONAL ]</span>
            <span>[ SYSTEM: NEXT.JS 16 ]</span>
          </div>
        </div>
      </div>

      {/* Massive Background Typography at Bottom */}
      <div className="w-full overflow-hidden flex justify-center items-end pointer-events-none select-none opacity-10 mt-0">
        <h1 className="font-serif font-black text-[20vw] leading-[0.85] text-white whitespace-nowrap tracking-tighter m-0 p-0 translate-y-[15%]">
          RISHVIN LABS
        </h1>
      </div>
    </footer>
  );
}
