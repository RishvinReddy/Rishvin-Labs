import React from "react";
import { 
  ExternalLink, 
  Terminal 
} from "lucide-react";

export function StudentOpenSourceSection() {
  const steps = [
    {
      step: "01",
      title: "Inspect Repository Architecture & Standards",
      desc: "Clone the repo locally, inspect the directory structure, read the README.md, CONTRIBUTING.md, and test the local setup before touching any code."
    },
    {
      step: "02",
      title: "Locate Triage Tags (good-first-issue)",
      desc: "Look for issues labeled 'good first issue', 'documentation', or 'help wanted'. Comment on the issue to request assignment before writing code."
    },
    {
      step: "03",
      title: "Branching Strategy & Conventional Commits",
      desc: "Fork the repo, create an isolated branch (e.g. feat/issue-12-auth-fix), and format your commits using Conventional Commits (feat:, fix:, docs:)."
    },
    {
      step: "04",
      title: "Write Reproducible Tests & Lint",
      desc: "Ensure all existing tests pass and add unit tests covering your change. Run the project linter and formatter to adhere to project style."
    },
    {
      step: "05",
      title: "Submit a Structured Pull Request",
      desc: "Write a clear PR description explaining what was fixed, link the corresponding issue ID, include screenshots for UI changes, and respond constructively to reviews."
    }
  ];

  return (
    <section id="open-source" className="py-24 px-6 bg-[#fafafa] border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 07_OPEN_SOURCE_PRACTICE"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Open Source &amp; How to Contribute
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            Contributing to open source is the single most effective way to learn collaborative engineering, code review conventions, and production software standards.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-600 hover:shadow-lg transition-all"
            >
              <div>
                <span className="font-mono text-2xl font-black text-blue-600 block mb-4">
                  {s.step}
                </span>
                <h3 className="font-serif font-bold text-lg text-zinc-950 mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Git Workflow Box */}
        <div className="bg-zinc-950 rounded-3xl p-8 sm:p-10 border border-zinc-800 text-white mb-12">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-400 uppercase tracking-wider mb-6">
            <Terminal className="w-4 h-4" />
            <span>Standard Git Contribution Terminal Commands</span>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto space-y-3">
            <p className="text-zinc-500">{"# 1. Clone your fork and add upstream remote"}</p>
            <p className="text-emerald-400">git clone https://github.com/YOUR_USERNAME/repository.git</p>
            <p className="text-emerald-400">git remote add upstream https://github.com/ORIGINAL_OWNER/repository.git</p>
            
            <p className="text-zinc-500 pt-2">{"# 2. Create a clean branch from latest main"}</p>
            <p className="text-emerald-400">git fetch upstream</p>
            <p className="text-emerald-400">git checkout -b fix/issue-42-hash-collision upstream/main</p>

            <p className="text-zinc-500 pt-2">{"# 3. Commit with Conventional Commits syntax and push"}</p>
            <p className="text-emerald-400">git commit -m &quot;fix(forensics): resolve buffer overflow in sha256 chunking&quot;</p>
            <p className="text-emerald-400">git push origin fix/issue-42-hash-collision</p>
          </div>
        </div>

        {/* Resources & Repositories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://github.com/RishvinReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between hover:border-zinc-400 transition-all group"
          >
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-blue-600 block mb-1">
                Verified Public Repositories
              </span>
              <span className="font-serif font-bold text-lg text-zinc-950 block">
                github.com/RishvinReddy
              </span>
              <span className="text-xs text-zinc-500">
                Explore open-source tools, repositories, and engineering codebases.
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href="https://opensource.guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between hover:border-zinc-400 transition-all group"
          >
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-emerald-600 block mb-1">
                Official GitHub Curriculum
              </span>
              <span className="font-serif font-bold text-lg text-zinc-950 block">
                OpenSource.guide
              </span>
              <span className="text-xs text-zinc-500">
                How to contribute to open source, write clean PRs, and engage constructively.
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
