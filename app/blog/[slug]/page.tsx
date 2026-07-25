import React from "react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: `${post.frontmatter.title} | Rishvin Labs Blog`,
    description: post.frontmatter.description,
    authors: [{ name: post.frontmatter.author }],
    alternates: {
      canonical: `https://rishvinreddy.vercel.app/rishvin-labs/blog/${slug}`,
    }
  };
}

const components = {
  h1: (props: any) => <h1 className="text-4xl font-serif font-black mb-6 mt-12 text-zinc-900" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-serif font-bold mb-4 mt-10 text-zinc-900 border-b border-zinc-200 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mb-4 mt-8 text-zinc-900" {...props} />,
  p: (props: any) => <p className="mb-6 leading-relaxed text-zinc-700 text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-zinc-700 text-lg" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-zinc-700 text-lg" {...props} />,
  li: (props: any) => <li {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline font-semibold" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-blue-600 pl-6 py-2 mb-6 italic bg-blue-50/50 rounded-r-lg text-zinc-700" {...props} />,
  pre: (props: any) => <pre className="bg-zinc-950 text-zinc-100 p-6 rounded-xl overflow-x-auto mb-6 text-sm" {...props} />,
  code: (props: any) => <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm" {...props} />,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Generate Article JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.frontmatter.title,
    "description": post.frontmatter.description,
    "author": {
      "@type": "Person",
      "name": post.frontmatter.author,
      "url": "https://rishvinreddy.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rishvin Labs",
      "url": "https://rishvinreddy.vercel.app/rishvin-labs"
    },
    "datePublished": new Date(post.frontmatter.date).toISOString(),
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-40 pb-24 px-6 flex-grow">
        <div className="max-w-screen-md mx-auto">
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors font-semibold text-sm mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </Link>

          <header className="mb-16">
            <div className="flex gap-2 flex-wrap mb-6">
              {post.frontmatter.tags?.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 font-mono text-[10px] uppercase tracking-widest rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-8 leading-tight">
              {post.frontmatter.title}
            </h1>
            
            <div className="flex items-center gap-6 pt-6 border-t border-zinc-200">
              <div className="flex items-center gap-2 text-zinc-600">
                <User className="w-4 h-4" />
                <span className="font-semibold text-sm">{post.frontmatter.author}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-zinc prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
          
        </div>
      </article>

      <Footer />
    </main>
  );
}
