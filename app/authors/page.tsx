import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Authors | Rishvin Labs",
  description: "Meet the researchers and engineers behind Rishvin Labs.",
});

export default function AuthorsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 flex-1">
        <div className="max-w-screen-xl mx-auto">
          <header className="mb-16">
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 max-w-2xl mt-4 mb-6">
              Authors
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
              The engineers, researchers, and writers contributing to the Rishvin Labs knowledge base.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              href="/authors/rishvin-reddy"
              className="group flex items-center gap-6 p-6 bg-white rounded-3xl border border-zinc-200 hover:shadow-xl hover:border-blue-500 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-zinc-200 overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://avatars.githubusercontent.com/u/123456?v=4" // Placeholder
                  alt={siteConfig.founder} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {siteConfig.founder}
                </h2>
                <p className="text-sm text-zinc-500 line-clamp-1 mb-2">Lead Architect</p>
                <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  View Profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
