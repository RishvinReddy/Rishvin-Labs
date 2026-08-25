import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/schema";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag, Zap, LineChart, Server } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "D2C Technology Solutions & E-Commerce Infrastructure | Rishvin Labs",
  description: "Rishvin Labs builds conversion-optimized storefronts, headless e-commerce architectures, and automation systems for ambitious Direct-to-Consumer (D2C) brands.",
  canonicalUrl: "https://rishvinlabs.com/d2c",
});

export default function D2CPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans">
      <Navbar />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "D2C Technology", url: "/d2c" }
        ]} 
      />
      <ServiceSchema 
        name="D2C Technology Solutions"
        description="Headless commerce, automation, and performance optimization for Direct-to-Consumer brands."
        url="/d2c"
      />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-medium tracking-wide mb-6">
            D2C & E-COMMERCE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight mb-6">
            E-Commerce built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">performance.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We engineer lightning-fast headless storefronts and intelligent backend integrations that scale with your brand and maximize conversion rates.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Core Capabilities</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">Modern consumer brands need technology that acts as a competitive advantage, not a bottleneck.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Zap className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Headless Commerce</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Decouple your frontend from your backend logic. We build blazing fast custom storefronts (Next.js/React) powered by Shopify Plus, Swell, or Medusa APIs.
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 font-medium">
                <li>→ Sub-second page loads</li>
                <li>→ Completely custom UX/UI</li>
                <li>→ Improved Core Web Vitals</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Server className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Backend & API Integrations</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Connect your storefront to your ERP, 3PL, CRM, and bespoke operational tools. We build the middleware that makes your operations seamless.
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 font-medium">
                <li>→ Custom ERP integrations</li>
                <li>→ Automated fulfillment routing</li>
                <li>→ Real-time inventory sync</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <ShoppingBag className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Conversion Optimization</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Data-driven architecture designed to reduce friction. From streamlined checkout flows to intelligent product recommendations.
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 font-medium">
                <li>→ Advanced A/B testing infrastructure</li>
                <li>→ Cart abandonment recovery</li>
                <li>→ Search & discovery optimization</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <LineChart className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">AI for E-Commerce</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Leverage generative AI to automate customer support, generate dynamic product descriptions, and provide personalized shopping assistants.
              </p>
              <Link href="/services/ai-development" className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center">
                Learn about our AI services <ArrowUpRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-zinc-50 border-t border-zinc-200">
        <h2 className="text-3xl font-serif font-bold mb-6">Upgrade your tech stack.</h2>
        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
          Ready to migrate to a headless architecture or build a custom integration? We can help you plan and execute the transition seamlessly.
        </p>
        <Link 
          href="/contact?service=d2c" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-mono text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          START A D2C PROJECT
        </Link>
      </section>

      <Footer />
    </main>
  );
}
