"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Database, Wifi, ShieldAlert } from "lucide-react";

export function FeaturedWork() {
  const projects = [
    {
      title: "Smart Irrigation System",
      category: "IoT & ESP32 Telemetry",
      desc: "Automated soil moisture telemetry array with solar charging management and low-latency MQTT broker synchronization.",
      tags: ["ESP32", "C++", "MQTT", "FreeRTOS", "Solar Power"],
      href: "/projects",
      icon: Wifi,
      metric: "40% Water Saved",
      accent: "border-blue-500/20 bg-blue-50/50 text-blue-700"
    },
    {
      title: "Finance Management",
      category: "Full-Stack Web Architecture",
      desc: "Multi-currency wealth analytics engine featuring live bank data synchronization, OCR receipt scanning, and zero-knowledge encryption.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "FastAPI", "AES-256"],
      href: "/projects",
      icon: Database,
      metric: "< 10ms Query Latency",
      accent: "border-violet-500/20 bg-violet-50/50 text-violet-700"
    },
    {
      title: "Smart Waste Monitor",
      category: "Embedded IoT Mesh Network",
      desc: "Ultrasonic fill-level sensor telemetry array with automated routing alerts and city-wide decentralized mesh grid connectivity.",
      tags: ["ESP32", "LoRaWAN", "Python", "Dashboard", "Telemetry"],
      href: "/projects",
      icon: Cpu,
      metric: "99.8% Uptime Array",
      accent: "border-emerald-500/20 bg-emerald-50/50 text-emerald-700"
    },
    {
      title: "Recruitment Portal",
      category: "AI SaaS Platform",
      desc: "AI-driven applicant tracking system with automated resume parsing, natural language skill matching, and video interview scoring.",
      tags: ["React", "Node.js", "GraphQL", "TensorFlow", "Redis"],
      href: "/projects",
      icon: ShieldAlert,
      metric: "5x Hiring Velocity",
      accent: "border-amber-500/20 bg-amber-50/50 text-amber-700"
    }
  ];

  return (
    <section id="work" className="py-24 bg-zinc-50 border-t border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="tech-badge mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>[ FEATURED SYSTEMS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950">
              Technical Case Studies.
            </h2>
          </div>
          
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-300 shadow-sm transition-all w-fit"
          >
            <span>VIEW_ALL_SYSTEMS()</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Bar */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className={`font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${project.accent}`}>
                      {project.category}
                    </span>
                    <div className="font-mono text-xs font-bold text-zinc-400 bg-zinc-100 px-3 py-1 rounded-lg border border-zinc-200/80">
                      {project.metric}
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-base text-zinc-600 leading-relaxed mb-8">
                    {project.desc}
                  </p>
                </div>

                {/* Bottom Bar: Tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] text-zinc-500 bg-zinc-50 border border-zinc-200/80 px-2.5 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-zinc-900 group-hover:text-blue-600 transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                    <div className="w-9 h-9 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
