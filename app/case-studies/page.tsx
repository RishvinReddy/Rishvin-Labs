import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllContent } from "@/lib/mdx";
import { ContentCard } from "@/components/content/ContentCard";

export const metadata = {
  title: "Case Studies & Engineering Portfolios | Rishvin Labs",
  description: "Detailed breakdowns of our most complex engineering projects, including system architecture, security designs, and technical results.",
};

export default function CaseStudiesPage() {
  const posts = getAllContent("case-studies");

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6 relative text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            Engineering Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Deep technical dives into our most complex system architectures, security implementations, and hardware integrations.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 pb-32">
        <div className="max-w-screen-xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <ContentCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="col-span-full text-center py-24 text-zinc-500 font-mono text-sm">
              No case studies published yet.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
