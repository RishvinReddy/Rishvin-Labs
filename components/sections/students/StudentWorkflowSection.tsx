import React from "react";
import { 
  Compass, 
  BookOpen, 
  Hammer, 
  FileText, 
  Share2, 
  Users 
} from "lucide-react";

export function StudentWorkflowSection() {
  const steps = [
    {
      num: "01",
      title: "Explore",
      action: "Identify Your Interest",
      desc: "Survey the 6 core engineering domains. Audit your current skills and determine whether full-stack, security, forensics, IoT, or blockchain excites you most.",
      icon: Compass
    },
    {
      num: "02",
      title: "Learn",
      action: "Work Through Fundamentals",
      desc: "Select a structured roadmap. Focus on the Beginner stage, write code daily, read official language specifications, and avoid superficial short-cuts.",
      icon: BookOpen
    },
    {
      num: "03",
      title: "Build",
      action: "Ship a Practical Challenge",
      desc: "Choose an architectural project challenge. Implement the complete specification from scratch, handle edge cases, and write comprehensive automated tests.",
      icon: Hammer
    },
    {
      num: "04",
      title: "Document",
      action: "Write Clear Architecture Notes",
      desc: "Draft a comprehensive README. Detail the problem solved, system architecture diagram, benchmark figures, and local reproduction instructions.",
      icon: FileText
    },
    {
      num: "05",
      title: "Share",
      action: "Submit for Peer Review",
      desc: "Publish your repository openly on GitHub under an open-source license. Submit it to our showcase or request an architectural code review.",
      icon: Share2
    },
    {
      num: "06",
      title: "Connect",
      action: "Collaborate in the Community",
      desc: "Contribute pull requests to open-source software, participate in international hackathons, and collaborate with other ambitious student builders.",
      icon: Users
    }
  ];

  return (
    <section id="participation" className="py-24 px-6 bg-[#fafafa] border-b border-zinc-200 scroll-mt-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {"// 11_PARTICIPATION_FRAMEWORK"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            How to Participate in the Hub
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-sans">
            A self-guided, progressive workflow designed to help students systematically build engineering competence and demonstrable portfolio evidence.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-400 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-blue-600">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-zinc-950 mb-1">
                    {s.title}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                    {s.action}
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
