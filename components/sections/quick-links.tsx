"use client";

import React from "react";
import Link from "next/link";
import { 
  Rocket, 
  Layers, 
  FolderGit2, 
  Calculator, 
  Globe, 
  GitBranch, 
  Mail, 
  PhoneCall, 
  ArrowRight 
} from "lucide-react";

export function QuickLinks() {
  const links = [
    {
      title: "Start Project",
      desc: "Initiate discovery & engineering workflow",
      href: "#contact",
      icon: Rocket,
      badge: "PRIMARY_ACTION",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      hoverBorder: "hover:border-blue-500 hover:shadow-blue-500/10",
      iconBg: "bg-blue-600 text-white"
    },
    {
      title: "Explore Services",
      desc: "Web, SaaS, IoT & Cybersecurity solutions",
      href: "#services",
      icon: Layers,
      badge: "CAPABILITIES",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
      hoverBorder: "hover:border-violet-500 hover:shadow-violet-500/10",
      iconBg: "bg-violet-600 text-white"
    },
    {
      title: "View Projects",
      desc: "Case studies & technical systems deployed",
      href: "#work",
      icon: FolderGit2,
      badge: "PORTFOLIO",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      hoverBorder: "hover:border-emerald-500 hover:shadow-emerald-500/10",
      iconBg: "bg-emerald-600 text-white"
    },
    {
      title: "Get Quote",
      desc: "Transparent package tiers & estimation",
      href: "#packages",
      icon: Calculator,
      badge: "ESTIMATION",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      hoverBorder: "hover:border-amber-500 hover:shadow-amber-500/10",
      iconBg: "bg-amber-600 text-white"
    },
    {
      title: "Personal Portfolio",
      desc: "Founder achievements & background",
      href: "https://rishvinreddy.vercel.app",
      external: true,
      icon: Globe,
      badge: "FOUNDER",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      hoverBorder: "hover:border-cyan-500 hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-600 text-white"
    },
    {
      title: "GitHub Profile",
      desc: "Open source repositories & contributions",
      href: "https://github.com/RishvinReddy",
      external: true,
      icon: GitBranch,
      badge: "OPEN_SOURCE",
      badgeColor: "bg-zinc-100 text-zinc-800 border-zinc-300",
      hoverBorder: "hover:border-zinc-800 hover:shadow-zinc-950/10",
      iconBg: "bg-zinc-900 text-white"
    },
    {
      title: "Direct Email",
      desc: "rishvinreddy@gmail.com",
      href: "mailto:rishvinreddy@gmail.com",
      external: true,
      icon: Mail,
      badge: "INQUIRY",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      hoverBorder: "hover:border-rose-500 hover:shadow-rose-500/10",
      iconBg: "bg-rose-600 text-white"
    },
    {
      title: "Contact Directory",
      desc: "Schedule consultation & communication",
      href: "#contact",
      icon: PhoneCall,
      badge: "CONNECT",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      hoverBorder: "hover:border-indigo-500 hover:shadow-indigo-500/10",
      iconBg: "bg-indigo-600 text-white"
    }
  ];

  return (
    <section id="quick-links" className="py-20 bg-zinc-50/60 border-t border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="tech-badge mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>NAVIGATION PORTAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 tracking-tight">
              Quick Links Access Panel
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
            [ SELECT_DESTINATION_ENDPOINT ]
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, idx) => {
            const Icon = link.icon;
            const CardWrapper = link.external ? "a" : Link;
            const extraProps = link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <CardWrapper
                key={idx}
                href={link.href}
                {...extraProps}
                className={`bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm transition-all duration-300 flex flex-col justify-between group text-decoration-none hover:-translate-y-1.5 hover:shadow-xl ${link.hoverBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-md ${link.iconBg} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${link.badgeColor}`}>
                      {link.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {link.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between font-mono text-[11px] font-semibold text-zinc-400 group-hover:text-blue-600 transition-colors">
                  <span>Execute Route</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
