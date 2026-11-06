import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllContent } from "@/lib/mdx";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { ContentCard } from "@/components/content/ContentCard";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Whitepapers | Rishvin Labs",
  description: "Formal technical architecture whitepapers on security frameworks, embedded IoT pipelines, and distributed data systems.",
  canonicalUrl: "https://rishvin-labs.vercel.app/whitepapers",
});

export default function WhitepapersPage() {
  const posts = getAllContent("whitepapers");

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Whitepapers", url: "/whitepapers" },
        ]}
      />

      <section className="pt-40 pb-24 px-6 flex-1">
        <div className="max-w-screen-xl mx-auto">
          <header className="mb-16">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 inline-flex items-center gap-2">
              <FileText className="w-4 h-4" /> Technical Whitepapers
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 max-w-2xl mt-4 leading-tight">
              Architectural Specifications
            </h1>
            <p className="text-zinc-600 text-lg max-w-2xl mt-6 leading-relaxed">
              In-depth technical whitepapers covering zero-trust authentication, cryptographic audit chains, and resilient edge computing.
            </p>
          </header>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <ContentCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-zinc-200 rounded-3xl p-10 sm:p-14 max-w-3xl shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INDEXING SPECIFICATION DRAFTS</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-zinc-950 mb-4">
                Whitepapers Under Editorial Verification
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base mb-8">
                Formal architectural whitepapers are currently being compiled into downloadable PDF and accessible web formats. To explore our live architectural implementations and benchmarks today, consult our case study catalog and engineering journal.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all"
                >
                  <span>Explore Systems Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/journal"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  <span>Read Field Notes</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
