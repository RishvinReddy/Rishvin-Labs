import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/schema";
import Link from "next/link";
import { ArrowUpRight, Bot, Cpu, Network, Database } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "AI Development & Automation Services | Rishvin Labs",
  description: "Rishvin Labs builds custom AI agents, LLM integrations, and automated workflows to supercharge your business operations.",
  canonicalUrl: "https://rishvinlabs.com/services/ai-development",
});

export default function AIDevelopmentPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans">
      <Navbar />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "AI Development", url: "/services/ai-development" }
        ]} 
      />
      <ServiceSchema 
        name="AI Development & Automation"
        description="Custom AI agents, LLM integrations, and automated workflows to supercharge business operations."
        url="/services/ai-development"
      />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium tracking-wide mb-6">
            AI & MACHINE LEARNING
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight mb-6">
            Intelligence applied to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">operations.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Move beyond chatbots. We build autonomous AI agents, fine-tuned language models, and RAG architectures that do real work.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-6">Beyond the Hype</h2>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                Artificial Intelligence is transitioning from a novelty to a fundamental layer of modern software. However, generic wrappers around ChatGPT aren't enough to solve complex business problems.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                We focus on integrating AI deeply into your existing infrastructure. This means connecting models to your private data stores securely, and giving AI agents the ability to take actions in your external software platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <Bot className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold mb-1">Autonomous Agents</h4>
                <p className="text-sm text-zinc-500">Systems that plan and execute multi-step tasks.</p>
              </div>
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <Database className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold mb-1">Advanced RAG</h4>
                <p className="text-sm text-zinc-500">Semantic search over your proprietary documents.</p>
              </div>
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <Network className="w-8 h-8 text-indigo-600 mb-3" />
                <h4 className="font-bold mb-1">Workflow Automation</h4>
                <p className="text-sm text-zinc-500">Connecting APIs to eliminate manual data entry.</p>
              </div>
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <Cpu className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-bold mb-1">Model Fine-Tuning</h4>
                <p className="text-sm text-zinc-500">Customized outputs for domain-specific tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-zinc-50 border-t border-zinc-200">
        <h2 className="text-3xl font-serif font-bold mb-6">Build your AI advantage.</h2>
        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
          From internal productivity tools to customer-facing AI products, let's architect a solution that drives value.
        </p>
        <Link 
          href="/contact?service=ai-development" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-mono text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          DISCUSS YOUR AI PROJECT
        </Link>
      </section>

      <Footer />
    </main>
  );
}
