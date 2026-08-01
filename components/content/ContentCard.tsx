import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnyContent } from "@/lib/content-model";

export function ContentCard({ post }: { post: AnyContent }) {
  // Compute date string
  const dateStr = post.updatedAt 
    ? `Updated ${new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`
    : new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <Link 
      href={`/${post.type}/${post.slug}`}
      className="group flex flex-col bg-white rounded-3xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 transition-all"
    >
      {post.coverImage && (
        <div className="aspect-[16/9] w-full bg-zinc-100 overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            {dateStr}
          </span>
          {post.readingTime && (
            <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              {post.readingTime}
            </span>
          )}
        </div>
        
        {/* Rich Taxonomy Badges */}
        {(post.category || post.topic) && (
          <div className="flex gap-2 mb-3">
            {post.category && (
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-mono font-bold uppercase tracking-widest">
                {post.category}
              </span>
            )}
            {post.topic && (
              <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-[10px] font-mono font-bold uppercase tracking-widest">
                {post.topic}
              </span>
            )}
          </div>
        )}

        <h2 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
          {post.series ? (
            <span className="text-zinc-500">{post.series.name}: Part {post.series.part} - </span>
          ) : null}
          {post.title}
        </h2>
        <p className="text-sm text-zinc-500 mb-8 line-clamp-3 flex-1">
          {post.description}
        </p>
        <div className="flex items-center gap-2 mt-auto font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
          Read {post.type === 'whitepapers' ? 'Paper' : 'Post'} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
