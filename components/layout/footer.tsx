import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GitBranch, Mail, Globe, ShieldCheck, Lock } from "lucide-react";
import { COMPANY } from "@/lib/business/company";
import { NewsletterForm } from "./NewsletterForm";
import { RishvinSignature } from "@/components/shared/RishvinSignature";
import { RishvinLogo } from "@/components/shared/RishvinLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050507] text-white pt-20 pb-0 relative overflow-hidden border-t border-zinc-900 z-10 selection:bg-blue-600 selection:text-white">
      {/* Ambient subtle glow mesh */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(37,99,235,0.08),transparent_50%),radial-gradient(circle_at_85%_25%,rgba(124,58,237,0.06),transparent_50%)] pointer-events-none z-0" 
      />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10 pb-16">
        
        {/* Main Content Grid: Brand + Newsletter on Left, 4 Navigation Columns on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Left Column: Brand, Tagline, Newsletter Capsule & Social Icons */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3.5 group text-decoration-none w-fit">
              <RishvinLogo variant="mark" width={36} height={36} className="group-hover:scale-105 transition-transform" />
              <div className="flex items-baseline">
                <span className="font-sans font-bold text-2xl tracking-tight text-white">
                  Rishvin
                </span>
                <span className="font-serif italic font-normal text-2xl text-blue-400 ml-1.5">
                  Labs
                </span>
              </div>
            </Link>

            {/* Studio Tagline */}
            <p className="font-sans text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-sm">
              A high-end engineering studio building intelligent digital systems, IoT sensor networks, and fortified web architectures.
            </p>

            {/* Newsletter Subscription UX */}
            <div className="pt-2">
              <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-zinc-400 uppercase block mb-2.5">
                SUBSCRIBE TO RESEARCH NEWSLETTER
              </span>
              <NewsletterForm />
            </div>

            {/* Verified Public Profiles & Social Icons Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-zinc-400">
              <a 
                href={COMPANY.founder.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
                aria-label="GitHub Profile"
                title="GitHub - Open Source Repositories"
              >
                <GitBranch className="w-4 h-4" />
              </a>

              <a 
                href={COMPANY.founder.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn - Professional Profile"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a 
                href={COMPANY.founder.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-900/50 hover:bg-zinc-800 transition-all"
                aria-label="YouTube Channel"
                title="YouTube - Technical Walkthroughs & Videos"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a 
                href={COMPANY.founder.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-900/50 hover:bg-zinc-800 transition-all"
                aria-label="WhatsApp Direct Chat"
                title="WhatsApp - Direct Inquiries"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M12.031 0C5.396 0 .012 5.384.012 12.019c0 2.12.553 4.188 1.603 6.01L0 24l6.16-1.615a11.968 11.968 0 0 0 5.871 1.528h.005c6.635 0 12.019-5.384 12.019-12.019 0-3.21-1.25-6.228-3.52-8.5a11.94 11.94 0 0 0-8.504-3.394zm0 22.003h-.004a9.96 9.96 0 0 1-5.077-1.39l-.364-.216-3.774.99.99-3.68-.237-.377A9.97 9.97 0 0 1 2.016 12.02c0-5.523 4.494-10.017 10.02-10.017 2.674 0 5.187 1.042 7.078 2.934a9.948 9.948 0 0 1 2.934 7.08c0 5.524-4.493 10.018-10.017 10.018zm5.49-7.498c-.301-.15-1.782-.88-2.058-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.181-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.677-1.63-.928-2.232-.244-.587-.492-.507-.677-.517l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.507s1.078 2.908 1.229 3.109c.15.2 2.122 3.24 5.14 4.544.718.31 1.278.496 1.716.635.722.23 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z"/>
                </svg>
              </a>

              <a 
                href={COMPANY.founder.portfolioUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
                aria-label="Founder Personal Portfolio"
                title="Founder Personal Portfolio (rishvinreddy.vercel.app)"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a 
                href={`mailto:${COMPANY.contactEmail}`} 
                className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
                aria-label="Direct Studio Email"
                title="Email Studio"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a 
                href={COMPANY.linkedinCompanyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[10px] font-semibold hover:text-blue-400 hover:border-blue-900/60 transition-colors"
                title="Follow Rishvin Labs on LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-blue-400" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Follow Studio</span>
              </a>

              <Link 
                href="/results" 
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] font-semibold hover:bg-blue-500/20 transition-colors"
                title="Review Evidence Verification Protocol"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Evidence Log</span>
              </Link>
            </div>

            {/* Founder Signature & Studio Seal Authentication */}
            <div className="pt-3 border-t border-zinc-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-md">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] font-bold tracking-[0.22em] text-zinc-500 uppercase mb-1">
                  FOUNDED &amp; SPEARHEADED BY
                </span>
                <Link
                  href="/about/rishvin-reddy"
                  className="group block w-44 sm:w-48 text-zinc-300 hover:text-white transition-colors"
                  title="View Founder Profile: Erolla Rishvin Reddy"
                >
                  <RishvinSignature className="w-full h-auto text-zinc-300 group-hover:text-white transition-colors" />
                </Link>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-sans text-[11px] text-zinc-400 font-medium">
                    Erolla Rishvin Reddy
                  </span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="font-mono text-[10px] text-zinc-500">
                    Lead Engineer
                  </span>
                </div>
              </div>

              <div className="flex sm:flex-col items-center gap-2 sm:gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-900">
                <a
                  href="/rishvin-labs-stamp.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-1.5 flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-black/40 border border-zinc-200 group block"
                  title="Official Rishvin Labs Company Stamp (Click to view full resolution original SVG)"
                >
                  <Image
                    src="/rishvin-labs-stamp.svg"
                    alt="Official Rishvin Labs Company Stamp"
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full object-contain"
                  />
                </a>
                <div className="flex flex-col sm:items-center">
                  <span className="font-mono text-[9px] font-bold text-zinc-300 tracking-wider uppercase">
                    OFFICIAL SEAL
                  </span>
                  <span className="font-mono text-[8px] text-zinc-500 tracking-wider">
                    EST. 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Navigation Columns matching high-end studio design */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6 pt-2">
            
            {/* Column 1: STUDIO */}
            <div>
              <h4 className="font-serif tracking-[0.25em] text-[11px] font-bold text-zinc-300 uppercase mb-5">
                STUDIO
              </h4>
              <ul className="flex flex-col gap-3 font-sans text-xs text-zinc-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-150 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about/rishvin-reddy" className="hover:text-white transition-colors duration-150 inline-block">
                    Founder Profile
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors duration-150 inline-block">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors duration-150 inline-block">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/linkedin" className="hover:text-white transition-colors duration-150 inline-block">
                    LinkedIn Updates
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-150 inline-block text-blue-400 font-medium">
                    Contact &rarr;
                  </Link>
                </li>
                <li className="pt-1 border-t border-zinc-900/60">
                  <a 
                    href={COMPANY.linkedinCompanyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-400 transition-colors duration-150 flex items-center gap-1 font-mono text-[11px] text-zinc-500"
                    title="Follow Rishvin Labs on LinkedIn"
                  >
                    <span>LinkedIn Studio</span>
                    <span className="text-[9px] text-blue-400 font-sans">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: SERVICES */}
            <div>
              <h4 className="font-serif tracking-[0.25em] text-[11px] font-bold text-zinc-300 uppercase mb-5">
                SERVICES
              </h4>
              <ul className="flex flex-col gap-3 font-sans text-xs text-zinc-400">
                <li>
                  <Link href="/services/ai-development" className="hover:text-white transition-colors duration-150 inline-block">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/software-development" className="hover:text-white transition-colors duration-150 inline-block">
                    Software Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/services/automation" className="hover:text-white transition-colors duration-150 inline-block">
                    Process Automation
                  </Link>
                </li>
                <li>
                  <Link href="/d2c" className="hover:text-white transition-colors duration-150 inline-block">
                    D2C Technology
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors duration-150 inline-block text-indigo-400 font-medium">
                    View All Services &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: RESOURCES */}
            <div>
              <h4 className="font-serif tracking-[0.25em] text-[11px] font-bold text-zinc-300 uppercase mb-5">
                RESOURCES
              </h4>
              <ul className="flex flex-col gap-3 font-sans text-xs text-zinc-400">
                <li>
                  <Link href="/students" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5">
                    <span>Student Hub</span>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase">Free</span>
                  </Link>
                </li>
                <li>
                  <Link href="/recommendation" className="hover:text-white transition-colors duration-150 inline-block">
                    Labs
                  </Link>
                </li>
                <li>
                  <Link href="/whitepapers" className="hover:text-white transition-colors duration-150 inline-block">
                    Whitepapers
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-white transition-colors duration-150 inline-block">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors duration-150 inline-block">
                    Blog
                  </Link>
                </li>
                <li className="pt-1 border-t border-zinc-900/60">
                  <a 
                    href={COMPANY.founder.orcidUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-400 transition-colors duration-150 flex items-center gap-1 font-mono text-[11px] text-zinc-500"
                    title="Researcher Identifier: 0009-0003-3112-2182"
                  >
                    <span>ORCID ID</span>
                    <span className="text-[9px] text-emerald-500 font-sans">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: LEGAL */}
            <div>
              <h4 className="font-serif tracking-[0.25em] text-[11px] font-bold text-zinc-300 uppercase mb-5">
                LEGAL
              </h4>
              <ul className="flex flex-col gap-3 font-sans text-xs text-zinc-400">
                <li>
                  <Link href="/legal/privacy-policy" className="hover:text-white transition-colors duration-150 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms-and-conditions" className="hover:text-white transition-colors duration-150 inline-block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cookie-policy" className="hover:text-white transition-colors duration-150 inline-block">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/refund-policy" className="hover:text-white transition-colors duration-150 inline-block">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/disclaimer" className="hover:text-white transition-colors duration-150 inline-block">
                    Disclaimer
                  </Link>
                </li>
                <li className="pt-1">
                  <Link 
                    href="/admin/business" 
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-zinc-500 hover:text-amber-400 transition-colors"
                    title="Private Internal Dashboard (Requires ADMIN_ACCESS_KEY)"
                  >
                    <Lock className="w-3 h-3 text-amber-500/70" />
                    <span>Private Cockpit</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="pt-8 border-t border-zinc-900/90 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] tracking-wider text-zinc-500">
          <div className="tracking-[0.15em] uppercase text-center md:text-left">
            &copy; {currentYear} RISHVIN LABS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] tracking-widest uppercase">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: OPERATIONAL
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-400">
              SYSTEM: NEXT.JS
            </span>
          </div>
        </div>

      </div>

      {/* Massive Editorial Watermark Typography */}
      <div 
        aria-hidden="true" 
        className="w-full overflow-hidden flex justify-center items-end pointer-events-none select-none opacity-[0.05] mt-0"
      >
        <span className="font-serif font-black text-[12.8vw] leading-[0.85] text-white whitespace-nowrap tracking-tight m-0 p-0 translate-y-[15%]">
          RISHVIN LABS
        </span>
      </div>
    </footer>
  );
}
