import React from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxBySlug, getMdxFiles, getRelatedPosts } from "@/lib/mdx";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArticleSchema } from "@/components/seo/schema";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { AuthorCard } from "@/components/blog/AuthorCard";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  const posts = getMdxFiles("case-studies");
  return posts.map((post) => ({
    slug: post.replace(/\.mdx?$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getMdxBySlug("case-studies", slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Case Study`,
    description: post.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getMdxBySlug("case-studies", slug);

  if (!post) return notFound();

  const relatedPosts = getRelatedPosts(slug, post, 2);

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      <ArticleSchema 
        title={post.title}
        description={post.description}
        datePublished={post.publishedAt || new Date().toISOString()}
        authorName={siteConfig.name}
        image={post.coverImage}
      />

      <article className="pt-32 pb-24 px-6 flex-1">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-16">
            <Breadcrumb />
            <div className="flex items-center justify-center gap-4 text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-6 mt-6">
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-8">
              {post.title}
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="max-w-5xl mx-auto aspect-[21/9] w-full bg-zinc-100 rounded-3xl overflow-hidden mb-20 shadow-sm border border-zinc-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Layout: TOC + Content + Sidebar Info */}
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
            {/* Left Sidebar (TOC) */}
            <aside className="hidden lg:block w-64 shrink-0">
              <TableOfContents toc={post.toc} />
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="prose prose-zinc prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-a:text-blue-600 hover:prose-a:text-blue-700">
                <MDXRemote 
                  source={post.content} 
                  options={{
                    mdxOptions: {
                      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
                    }
                  }} 
                />
              </div>

              {/* Tags */}
              {post.tags && (
                <div className="mt-16 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-lg text-xs font-mono uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar (Author & Share) */}
            <aside className="w-full lg:w-64 shrink-0 space-y-12 border-t border-zinc-200 pt-12 lg:border-t-0 lg:pt-0">
              <div>
                <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">Lead Architect</h4>
                <AuthorCard authorName={post.author || siteConfig.founder} date={post.publishedAt} />
              </div>
              <ShareButtons title={post.title} slug={post.slug} type="case-studies" />
            </aside>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-5xl mx-auto mt-32 pt-16 border-t border-zinc-200">
              <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-8">Related Case Studies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map(rp => (
                  <Link key={rp.slug} href={`/case-studies/${rp.slug}`} className="group block p-6 bg-white rounded-2xl border border-zinc-200 hover:border-blue-500 hover:shadow-xl transition-all">
                    <div className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                      {rp.readingTime}
                    </div>
                    <h4 className="text-lg font-bold text-zinc-950 group-hover:text-blue-600 transition-colors mb-2">
                      {rp.title}
                    </h4>
                    <p className="text-sm text-zinc-500 line-clamp-2">{rp.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
