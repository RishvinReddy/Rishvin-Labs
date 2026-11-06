import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllContent } from "@/lib/mdx";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { Microscope, ArrowRight, ShieldCheck } from "lucide-react";
import { ContentCard } from "@/components/content/ContentCard";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Research & Lab Investigations | Rishvin Labs",
  description: "Applied research into blockchain evidence integrity, embedded systems telemetry, and network protocol analysis.",
  canonicalUrl: "https://rishvin-labs.vercel.app/research",
});

export default function ResearchPage() {
  const posts = getAllContent("research");

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Research", url: "/research" },
        ]}
      />

      <section className="pt-40 pb-24 px-6 flex-1">
        <div className="max-w-screen-xl mx-auto">
          <header className="mb-16">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 inline-flex items-center gap-2">
              <Microscope className="w-4 h-4" /> Lab Investigations
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 max-w-3xl mt-4 leading-tight">
              Applied Research &amp; Technical Prototyping
            </h1>
            <p className="text-zinc-600 text-lg max-w-2xl mt-6 leading-relaxed">
              Investigating the intersections of embedded hardware, cryptographic proofs, and network protocol resilience.
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
                <span>PREPRINT PREPARATION PHASE</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-zinc-950 mb-4">
                Research Publications in Progress
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base mb-8">
                Formal technical monographs and experimental preprints are currently undergoing documentation and benchmark verification prior to public indexing. In the interim, detailed engineering breakdowns of our completed research prototypes are available in our technical case studies.
              </p>
              <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    FEATURED LAB INVESTIGATION
                  </div>
                  <div className="font-bold text-zinc-950 text-base">
                    ChainForensics: Blockchain-Backed IoT Evidence Integrity
                  </div>
                </div>
                <Link
                  href="/work/chainforensics"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shrink-0"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
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
