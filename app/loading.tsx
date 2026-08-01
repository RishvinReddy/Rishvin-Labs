export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-zinc-200 border-t-blue-600 rounded-full animate-spin mb-4" />
      <div className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest animate-pulse">
        Initializing System...
      </div>
    </div>
  );
}
