"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { greetings } from "@/data/greetings";

interface GlobalIntroProps {
  hasSeenIntro: boolean;
}

export function GlobalIntro({ hasSeenIntro }: GlobalIntroProps) {
  const [hasPlayed, setHasPlayed] = useState(hasSeenIntro);
  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [isDone, setIsDone] = useState(hasSeenIntro);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      setTimeout(() => {
        setReducedMotion(true);
        setShowFinal(true);
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (!hasPlayed) {
      document.cookie = "intro_played=1; path=/";
      setTimeout(() => setHasPlayed(true), 0);
    }
  }, [hasPlayed]);

  useEffect(() => {
    if (isDone) return;
    
    if (reducedMotion) {
      const timer = setTimeout(() => setIsDone(true), 500);
      return () => clearTimeout(timer);
    }

    // Every greeting gets exactly 250ms
    if (index < greetings.length && !showFinal) {
      const timer = setTimeout(() => setIndex(index + 1), 250);
      return () => clearTimeout(timer);
    } else if (index === greetings.length && !showFinal) {
      const t = setTimeout(() => setShowFinal(true), 0);
      return () => clearTimeout(t);
    } else if (showFinal && !isDone) {
      const timer = setTimeout(() => setIsDone(true), 250);
      return () => clearTimeout(timer);
    }
  }, [index, isDone, showFinal, reducedMotion]);

  if (isDone && hasPlayed) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="intro-overlay"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#09090b] text-white flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Progress Indicator */}
          {!showFinal && !reducedMotion && index < greetings.length && (
            <div className="absolute bottom-12 font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
              {String(index + 1).padStart(2, "0")} / {greetings.length}
            </div>
          )}

          <div className="relative w-full h-full flex items-center justify-center">
            {/* mode="wait" REMOVED for fluid overlapping enter/exit */}
            <AnimatePresence>
              {!showFinal ? (
                index < greetings.length ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.08, ease: "easeOut" } }}
                    exit={{ opacity: 0, y: -14, filter: "blur(4px)", transition: { duration: 0.07, ease: "easeIn" } }}
                    className="absolute font-serif text-5xl md:text-6xl font-normal tracking-tight text-white"
                  >
                    {greetings[index].text}
                  </motion.div>
                ) : null
              ) : (
                <motion.div
                  key="final"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } }}
                  className="flex flex-col items-center text-center leading-none"
                >
                  <div className="font-serif text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
                    HELLO.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
