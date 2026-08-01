import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllContent } from "@/lib/mdx";
import { constructMetadata } from "@/lib/metadata";
import { BookOpen } from "lucide-react";
import { ContentCard } from "@/components/content/ContentCard";

export const metadata = constructMetadata({
  title: "Engineering Blog | Rishvin Labs",
  description: "Insights, post-mortems, and engineering philosophies from Rishvin Labs.",
});

export default function BlogPage() {
  const posts = getAllContent("blog");

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <header className="mb-16">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Engineering Journal
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 max-w-2xl mt-4">
              Writing on architecture, zero-trust, and code.
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <ContentCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
