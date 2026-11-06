"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Sparkles, AlertCircle, ArrowUpDown } from "lucide-react";

export interface LinkedInPostItem {
  id: string;
  shareUrn: string;
  activityUrl: string;
  embedUrl: string;
  title: string;
  aspectHeight: number;
  postNumber: number;
  category: string;
  isLatest?: boolean;
}

const FEATURED_POSTS: LinkedInPostItem[] = [
  {
    id: "post-4",
    shareUrn: "urn:li:ugcPost:7524444728545787904",
    activityUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7524444728545787904/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7524444728545787904",
    title: "Rishvin Labs Engineering Update — ugcPost 7524444728545787904",
    aspectHeight: 1575,
    postNumber: 4,
    category: "Technical Systems & Product",
    isLatest: true,
  },
  {
    id: "post-3",
    shareUrn: "urn:li:ugcPost:7524371016148664320",
    activityUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7524371016148664320/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7524371016148664320",
    title: "Rishvin Labs Engineering Update — ugcPost 7524371016148664320",
    aspectHeight: 1743,
    postNumber: 3,
    category: "Engineering Architecture",
  },
  {
    id: "post-2",
    shareUrn: "urn:li:share:7515872408700985344",
    activityUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7515872411813326849/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7515872408700985344",
    title: "Rishvin Labs Engineering Update — Founder Journey",
    aspectHeight: 1782,
    postNumber: 2,
    category: "Founder Journey & Craftsmanship",
  },
  {
    id: "post-1",
    shareUrn: "urn:li:share:7513674919663198210",
    activityUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7513674922968186880/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7513674919663198210",
    title: "Rishvin Labs Engineering Update — Studio Milestone",
    aspectHeight: 1656,
    postNumber: 1,
    category: "Studio Milestone",
  },
];

export function LinkedInFeaturedPosts() {
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const sortedPosts = [...FEATURED_POSTS].sort((a, b) => {
    return sortOrder === "desc" ? b.postNumber - a.postNumber : a.postNumber - b.postNumber;
  });

  return (
    <section id="featured-updates" className="py-20 md:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Engineering in Public
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-zinc-950 mb-4">
              Featured Updates &amp; Publications
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
              Direct dispatches from the studio, discussing architectural decisions, product engineering,
              and technological insights. Ordered according to the time posted.
            </p>
          </div>

          {/* Chronological Sort Toggle */}
          <div className="shrink-0">
            <button
              onClick={() => setSortOrder(prev => prev === "desc" ? "asc" : "desc")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 text-xs font-mono font-bold text-zinc-700 hover:text-zinc-950 transition-colors shadow-xs"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-blue-600" />
              <span>{sortOrder === "desc" ? "Showing Newest First" : "Showing Oldest First"}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Embeds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {sortedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-zinc-50 rounded-3xl border border-zinc-200 p-5 sm:p-7 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all"
            >
              {/* Post Header Meta */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200/80">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full ${post.isLatest ? "bg-emerald-500 animate-pulse" : "bg-blue-600"}`} />
                  <span className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    Update #{post.postNumber} · {post.category}
                  </span>
                  {post.isLatest && (
                    <span className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Latest
                    </span>
                  )}
                </div>
                <a
                  href={post.activityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  <span>Open on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Responsive Iframe Container */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm flex items-center justify-center min-h-[500px]">
                <iframe
                  src={post.embedUrl}
                  height={post.aspectHeight}
                  width="100%"
                  frameBorder={0}
                  allowFullScreen
                  title={post.title}
                  loading="lazy"
                  className="w-full max-w-[504px] mx-auto border-0 block"
                />
              </div>

              {/* Post Footer & Graceful Fallback */}
              <div className="mt-5 pt-4 border-t border-zinc-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
                <span>Direct Activity Link:</span>
                <a
                  href={post.activityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 hover:text-blue-600 flex items-center gap-1 break-all"
                >
                  <span className="truncate max-w-[280px]">{post.activityUrl}</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback & Cookie Policy Notice */}
        <div className="mt-12 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-start gap-3 text-xs text-zinc-600 font-sans">
          <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Third-Party Cookie Notice:</strong> If the LinkedIn embeds above appear blank or are blocked by browser privacy settings (such as Brave Shields, Safari Intelligent Tracking Prevention, or Firefox Strict Mode), click <strong>&quot;Open on LinkedIn&quot;</strong> on each card to view the post directly.
          </div>
        </div>
      </div>
    </section>
  );
}
