"use client";

import React from "react";
import { Link2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function ShareButtons({ title, slug, type = "blog" }: { title: string; slug: string; type?: string }) {
  const url = `${siteConfig.url}/${type}/${slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mr-2 w-full mb-1">
        Share
      </span>
      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
        title="Share on X"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
        title="Share on LinkedIn"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      {/* Reddit */}
      <a
        href={`https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center hover:bg-[#FF4500] hover:text-white transition-colors"
        title="Share on Reddit"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 22C6.477 22 2 18.477 2 14c0-2.126 1.054-4.062 2.766-5.49a5.952 5.952 0 0 1-.266-1.76c0-3.314 2.686-6 6-6 1.405 0 2.693.483 3.716 1.288L17 3.5h4v1.5h-2.316l-2.025 6.074C18.498 11.662 22 13.528 22 16c0 4.477-4.477 8-10 8zm-5.5-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 19c2.5 0 4.5-1.5 4.5-1.5l-1-1.5s-1.5 1.5-3.5 1.5-3.5-1.5-3.5-1.5l-1 1.5S9.5 19 12 19z"/></svg>
      </a>
      {/* Hacker News */}
      <a
        href={`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center hover:bg-[#FF6600] hover:text-white transition-colors"
        title="Submit to Hacker News"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M2.5 2h19v19h-19V2zm10.74 8.79l-3.35-6.39h-1.62l4.08 7.37v4.73h1.49v-4.73l4.13-7.37h-1.65l-3.08 6.39z"/></svg>
      </a>
      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center hover:bg-zinc-200 transition-colors"
        title="Copy Link"
      >
        <Link2 className="w-4 h-4" />
      </button>
    </div>
  );
}
