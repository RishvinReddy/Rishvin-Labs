"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-red-100">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h1 className="text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4">System Error</h1>
        <p className="text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed">
          An unexpected error occurred while processing your request. Our engineering team has been notified.
        </p>
        <button 
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-zinc-950 text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg"
        >
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
      </div>
      <Footer />
    </main>
  );
}
