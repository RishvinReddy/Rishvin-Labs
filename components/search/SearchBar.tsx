"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { SearchDialog } from "./SearchDialog";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-500 rounded-lg transition-colors text-sm font-mono"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search...</span>
        <span className="hidden sm:inline-flex items-center justify-center bg-white border border-zinc-200 rounded px-1.5 py-0.5 text-[10px] ml-4 font-sans font-bold shadow-sm">
          ⌘K
        </span>
      </button>

      <SearchDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
