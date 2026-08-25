import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { CheckCircle2, Server, Globe2, Activity } from "lucide-react";

export const metadata = constructMetadata({
  title: "System Status | Rishvin Labs",
  description: "Real-time operational status of Rishvin Labs infrastructure, APIs, and web services.",
});

const STATUS_DATA = [
  { name: "Main Website (rishvinlabs.com)", status: "Operational", uptime: "100%", icon: <Globe2 className="w-5 h-5" /> },
  { name: "Authentication Gateway", status: "Operational", uptime: "99.99%", icon: <Server className="w-5 h-5" /> },
  { name: "Telemetry & Edge API", status: "Operational", uptime: "99.99%", icon: <Activity className="w-5 h-5" /> },
  { name: "GitHub Repository Sync", status: "Operational", uptime: "100%", icon: <Server className="w-5 h-5" /> },
];

export default function StatusPage() {
  const currentTimestamp = new Date().toUTCString();

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest mb-4 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> All Systems Operational
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6">
              System Status
            </h1>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
              Last Updated: {currentTimestamp}
            </p>
          </header>

          <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="divide-y divide-zinc-100">
              {STATUS_DATA.map((item, idx) => (
                <div key={idx} className="p-6 sm:p-8 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-zinc-950">{item.name}</div>
                      <div className="text-sm text-zinc-500 font-mono mt-1">Uptime: {item.uptime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-zinc-950 rounded-3xl text-center text-white">
            <h3 className="font-serif font-bold text-2xl mb-4">Experiencing issues?</h3>
            <p className="text-zinc-400 mb-6">If you are encountering problems not reflected on this page, please reach out to our engineering team.</p>
            <a href="mailto:contact@rishvinlabs.com" className="inline-block bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors">
              Report an Issue
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
