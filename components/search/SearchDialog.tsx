"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { Search, X, Loader2, ArrowRight, Clock, Flame } from "lucide-react";
import Link from "next/link";
import { ContentType } from "@/lib/content-model";

const POPULAR_SEARCHES = ["Zero-Trust", "React Architecture", "Forensics", "Kubernetes"];
const FILTERS: { label: string; value: ContentType | 'all' }[] = [
  { label: "All", value: "all" },
  { label: "Blog", value: "blog" },
  { label: "Research", value: "research" },
  { label: "Case Studies", value: "case-studies" },
  { label: "Whitepapers", value: "whitepapers" },
  { label: "Resources", value: "resources" },
];

export function SearchDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<ContentType | 'all'>('all');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load recent searches
    const stored = localStorage.getItem("recentSearches");
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored).slice(0, 5));
      } catch (e) { }
    }
  }, []);

  const saveRecentSearch = (term: string) => {
    if (!term.trim()) return;
    const updated = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const executeSearch = useCallback(async (searchTerm: string, activeFilter: string) => {
    if (!searchTerm.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    try {
      let url = `/api/search?q=${encodeURIComponent(searchTerm)}`;
      if (activeFilter !== 'all') {
        url += `&type=${activeFilter}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.results || []);
    } catch (e) {
      console.error(e);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      executeSearch(query, filter);
    }, 250);
    return () => clearTimeout(timer);
  }, [query, filter, executeSearch]);

  // Handle hotkeys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 flex flex-col max-h-[80vh]">
        {/* Search Input */}
        <div className="flex items-center px-4 py-4 border-b border-zinc-100">
          <Search className="w-6 h-6 text-blue-600 shrink-0" />
          <input
            ref={inputRef}
            autoFocus
            type="text"
            className="flex-1 bg-transparent border-none outline-none px-4 text-zinc-950 placeholder-zinc-400 font-sans text-xl"
            placeholder="Search knowledge base..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') saveRecentSearch(query);
            }}
          />
          <button onClick={onClose} className="p-1.5 rounded-lg text-zinc-400 hover:bg-zinc-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 px-4 py-3 bg-zinc-50 border-b border-zinc-100 overflow-x-auto no-scrollbar">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                filter === f.value 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-zinc-200 text-zinc-500 hover:border-zinc-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#fafafa]">
          {query.length === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    <Clock className="w-3.5 h-3.5" /> Recent
                  </h4>
                  <ul className="space-y-2">
                    {recentSearches.map(term => (
                      <li key={term}>
                        <button 
                          onClick={() => setQuery(term)}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-100 text-zinc-700 text-sm flex items-center justify-between group transition-colors"
                        >
                          {term}
                          <ArrowRight className="w-3 h-3 text-zinc-300 group-hover:text-zinc-500" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <h4 className="flex items-center gap-2 font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  <Flame className="w-3.5 h-3.5" /> Popular
                </h4>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : isSearching ? (
            <div className="p-12 flex flex-col items-center justify-center text-blue-600 gap-4">
              <Loader2 className="w-8 h-8 animate-spin" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Searching Index...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <div className="px-2 py-2 text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center justify-between">
                <span>{results.length} Results Found</span>
              </div>
              {results.map((result: any) => (
                <Link
                  key={`${result.type}-${result.slug}`}
                  href={result.url}
                  onClick={() => {
                    saveRecentSearch(query);
                    onClose();
                  }}
                  className="group block p-4 bg-white rounded-xl border border-zinc-200 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                      {result.type.replace('-', ' ')}
                    </span>
                    {result.publishedAt && (
                      <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        {new Date(result.publishedAt).getFullYear()}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 group-hover:text-blue-600 transition-colors mb-1">
                    {result.title}
                  </h3>
                  <p className="text-sm text-zinc-500 line-clamp-1">{result.description}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">No results found</h3>
              <p className="text-zinc-500 text-sm">We couldn't find anything matching "{query}". Try adjusting your filters or terms.</p>
            </div>
          )}
        </div>
        
        <div className="bg-white px-4 py-3 text-xs text-zinc-400 font-mono border-t border-zinc-200 flex justify-between items-center shrink-0">
          <span>FlexSearch Enabled</span>
          <span className="flex items-center gap-2">
            <span className="border border-zinc-200 bg-zinc-50 rounded px-1.5 shadow-sm text-zinc-500">ESC</span> to close
          </span>
        </div>
      </div>
    </div>
  );
}
