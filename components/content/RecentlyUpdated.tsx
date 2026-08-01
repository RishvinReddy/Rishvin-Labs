import React from "react";
import Link from "next/link";
import { Activity, ArrowRight } from "lucide-react";
import { getAllContent } from "@/lib/mdx";

export function RecentlyUpdated({ limit = 3 }: { limit?: number }) {
  // Sort by updatedAt first, then publishedAt
  const content = getAllContent()
    .sort((a, b) => {
      const dateA = new Date(a.updatedAt || a.publishedAt).getTime();
      const dateB = new Date(b.updatedAt || b.publishedAt).getTime();
      return dateB - dateA;
    })
    .slice(0, limit);

  if (content.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
      <h3 className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 pb-4 border-b border-zinc-100">
        <Activity className="w-4 h-4" /> Recently Updated
      </h3>
      <div className="space-y-4">
        {content.map((item, i) => (
          <Link
            key={i}
            href={`/${item.type}/${item.slug}`}
            className="group flex flex-col items-start gap-1 p-3 -mx-3 rounded-xl hover:bg-zinc-50 transition-colors"
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                {item.type}
              </span>
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                {new Date(item.updatedAt || item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
            <span className="font-bold text-sm text-zinc-950 group-hover:text-blue-600 transition-colors line-clamp-2">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
