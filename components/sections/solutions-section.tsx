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
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  Layout
} from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Scale Operations",
      desc: "Replace manual data entry with intelligent automation and API integrations.",
      href: "/contact?service=business-automation&source=solutions",
      icon: TrendingUp,
      badge: "EFFICIENCY",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      hoverBorder: "hover:border-blue-500 hover:shadow-blue-500/10",
      iconBg: "bg-blue-600 text-white"
    },
    {
      title: "Secure Infrastructure",
      desc: "Audit vulnerabilities, implement Zero-Trust, and secure cloud environments.",
      href: "/contact?service=security-review&source=solutions",
      icon: ShieldCheck,
      badge: "PROTECTION",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
      hoverBorder: "hover:border-violet-500 hover:shadow-violet-500/10",
      iconBg: "bg-violet-600 text-white"
    },
    {
      title: "Launch Products",
      desc: "From concept to production-ready MVP in weeks, not months.",
      href: "/contact?service=custom-web-application&source=solutions",
      icon: Rocket,
      badge: "GTM",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      hoverBorder: "hover:border-emerald-500 hover:shadow-emerald-500/10",
      iconBg: "bg-emerald-600 text-white"
    },
    {
      title: "Modernize Legacy",
      desc: "Migrate outdated monoliths to fast, serverless microservices.",
      href: "/contact?service=custom-web-application&source=solutions",
      icon: Zap,
      badge: "UPGRADE",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      hoverBorder: "hover:border-amber-500 hover:shadow-amber-500/10",
      iconBg: "bg-amber-600 text-white"
    },
    {
      title: "Client Portals",
      desc: "Give your customers a premium, secure dashboard for interacting with you.",
      href: "/contact?service=custom-web-application&source=solutions",
      icon: Users,
      badge: "EXPERIENCE",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      hoverBorder: "hover:border-cyan-500 hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-600 text-white"
    },
    {
      title: "Custom Dashboards",
      desc: "Visualize complex data across your business in real-time.",
      href: "/contact?service=custom-web-application&source=solutions",
      icon: Layout,
      badge: "INSIGHTS",
      badgeColor: "bg-zinc-100 text-zinc-800 border-zinc-300",
      hoverBorder: "hover:border-zinc-800 hover:shadow-zinc-950/10",
      iconBg: "bg-zinc-900 text-white"
    },
    {
      title: "IoT Systems",
      desc: "Connect physical sensors to web applications for real-time telemetry.",
      href: "/contact?service=iot-solution&source=solutions",
      icon: Globe,
      badge: "HARDWARE",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      hoverBorder: "hover:border-rose-500 hover:shadow-rose-500/10",
      iconBg: "bg-rose-600 text-white"
    },
    {
      title: "Technical Consulting",
      desc: "Architecture reviews and strategy for engineering teams.",
      href: "/contact?service=technical-consulting&source=solutions",
      icon: PhoneCall,
      badge: "ADVISORY",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      hoverBorder: "hover:border-indigo-500 hover:shadow-indigo-500/10",
      iconBg: "bg-indigo-600 text-white"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-b border-zinc-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>BUSINESS OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-zinc-950 tracking-tight max-w-2xl">
              Solutions for scale.
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
            [ SELECT_REQUIREMENT ]
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((link, idx) => {
            const Icon = link.icon;

            return (
              <Link
                key={idx}
                href={link.href}
                className={`bg-zinc-50 rounded-2xl p-6 border border-zinc-200 shadow-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl hover:bg-white ${link.hoverBorder}`}
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

                  <h3 className="font-serif font-bold text-lg text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                    {link.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between font-mono text-[11px] font-semibold text-zinc-400 group-hover:text-blue-600 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
