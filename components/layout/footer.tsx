import React from "react";
import Link from "next/link";
import { Terminal, GitBranch, Globe2, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white pt-24 pb-0 relative overflow-hidden border-t border-white/10 z-10">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(37,99,235,0.12),transparent_50%),radial-gradient(circle_at_85%_30%,rgba(124,58,237,0.12),transparent_50%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none z-0 animate-pulse-slow" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-4 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group text-decoration-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Rishvin <span className="font-normal italic text-blue-400">Labs</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-sans">
              A high-end engineering studio building intelligent digital systems, IoT sensor networks, and fortified web architectures.
            </p>
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Subscribe to Research Newsletter</h4>
              <form className="flex items-center">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-2.5 text-sm text-white w-full outline-none focus:border-blue-500 transition-colors"
                />
                <button 
                  type="button" 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-r-xl text-sm font-bold transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Links Grid */}
          <div className="col-span-2 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Business */}
            <div>
              <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-widest mb-5">Business</h4>
              <div className="flex flex-col gap-3 font-sans text-sm text-zinc-400">
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
                <Link href="/work" className="hover:text-white transition-colors">Work</Link>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-widest mb-5">Community</h4>
              <div className="flex flex-col gap-3 font-sans text-sm text-zinc-400">
                <Link href="/students" className="hover:text-white transition-colors">Student Hub</Link>
                <Link href="/labs" className="hover:text-white transition-colors">Labs</Link>
                <Link href="/whitepapers" className="hover:text-white transition-colors">Whitepapers</Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-widest mb-5">Connect</h4>
              <div className="flex flex-col gap-3 font-sans text-sm text-zinc-400">
                <a href="https://github.com/RishvinReddy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <GitBranch className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href="https://linkedin.com/in/rishvinreddy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a href="https://rishvinreddy.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5" /> Founder
                </a>
                <a href="mailto:rishvinreddy@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> Email
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-widest mb-5">Legal</h4>
              <div className="flex flex-col gap-3 font-sans text-sm text-zinc-400">
                <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/legal/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
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
            <span>[ SYSTEM: NEXT.JS ]</span>
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
