import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/schema";
import Link from "next/link";
import { ArrowUpRight, Workflow, Link2, Clock, Settings } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Business Process Automation & Integrations | Rishvin Labs",
  description: "Rishvin Labs builds custom business process automation, API integrations, and workflow solutions to eliminate manual data entry and operational bottlenecks.",
  canonicalUrl: "https://rishvinlabs.com/services/automation",
});

export default function AutomationPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans">
      <Navbar />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Automation", url: "/services/automation" }
        ]} 
      />
      <ServiceSchema 
        name="Business Process Automation"
        description="Custom business process automation, API integrations, and workflow solutions."
        url="/services/automation"
      />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-mono font-medium tracking-wide mb-6">
            WORKFLOW & INTEGRATION
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight mb-6">
            Eliminate <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">manual work.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We connect your disparate software systems and build automated pipelines that move data securely, instantly, and without human error.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">How we optimize operations</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">Stop paying humans to do the work of a script. We build the connective tissue between your SaaS tools.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Link2 className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Custom API Integrations</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                We build secure, serverless middleware to connect systems that don't natively talk to each other, bypassing the limitations of tools like Zapier or Make.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Workflow className="w-10 h-10 text-violet-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Data Pipelines</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Automated ETL (Extract, Transform, Load) pipelines that consolidate data from various sources into centralized analytics dashboards or data warehouses.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Clock className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Time-Based Jobs (CRON)</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Scheduled scripts that run reliably in the background to handle billing, generate reports, or clean databases without manual intervention.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Settings className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Legacy System Modernization</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Building modern API wrappers around legacy databases and on-premise systems so they can interact with modern cloud software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-zinc-50 border-t border-zinc-200">
        <h2 className="text-3xl font-serif font-bold mb-6">Scale without adding headcount.</h2>
        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
          Let's identify the operational bottlenecks in your business and replace them with code.
        </p>
        <Link 
          href="/contact?service=automation" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-mono text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          START AUTOMATING
        </Link>
      </section>

      <Footer />
    </main>
  );
}
