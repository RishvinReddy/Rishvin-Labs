import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog & Technical Articles | Rishvin Labs",
  description: "Read engineering articles, technical tutorials, and insights on Web Development, Software Engineering, AI Automation, and Cybersecurity from Rishvin Labs.",
};

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6 border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            Engineering Journal
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-8 max-w-4xl leading-tight">
            Technical Insights &amp; <span className="text-blue-600 font-normal italic">Architecture.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed font-sans">
            Deep dives into software development, cybersecurity, system architecture, and building high-performance web applications.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white flex-grow">
        <div className="max-w-screen-xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-24 bg-zinc-50 border border-zinc-200 rounded-3xl">
              <BookOpen className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-700 mb-2">No Articles Found</h3>
              <p className="text-zinc-500">We are currently migrating our technical journal. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white border border-zinc-200 rounded-3xl p-8 hover:border-blue-600 hover:shadow-xl transition-all">
                  <div className="flex gap-2 flex-wrap mb-6">
                    {post.frontmatter.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-700 font-mono text-[10px] uppercase tracking-widest rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-zinc-600 mb-8 flex-grow leading-relaxed">
                    {post.frontmatter.description}
                  </p>
                  <div className="pt-6 border-t border-zinc-100 flex items-center justify-between mt-auto">
                    <span className="font-mono text-xs text-zinc-500">
                      {new Date(post.frontmatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
