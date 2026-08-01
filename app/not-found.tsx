import Link from "next/link";
import { ArrowLeft, ServerCrash } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="w-20 h-20 bg-zinc-100 text-zinc-400 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-zinc-200">
          <ServerCrash className="w-10 h-10" />
        </div>
        <h1 className="text-7xl font-serif font-black tracking-tight text-zinc-950 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-zinc-800 mb-6">Page Not Found</h2>
        <p className="text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed">
          The requested engineering resource or page does not exist. It may have been moved, deleted, or you might have mistyped the URL.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-zinc-950 text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
