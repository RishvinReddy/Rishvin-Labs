import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllContent } from "@/lib/mdx";
import { constructMetadata } from "@/lib/seo/metadata";
import { Microscope } from "lucide-react";
import { ContentCard } from "@/components/content/ContentCard";

export const metadata = constructMetadata({
  title: "Research | Rishvin Labs",
  description: "Deep-dives into digital forensics, blockchain security, and network analysis.",
});

export default function ResearchPage() {
  const posts = getAllContent("research");

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <header className="mb-16">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 inline-flex items-center gap-2">
              <Microscope className="w-4 h-4" /> Lab Notes
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 max-w-2xl mt-4">
              Research & Discoveries
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
