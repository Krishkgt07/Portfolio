"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_STEPS = [
  "Initializing core matrix...",
  "Loading 3D mesh & assets...",
  "Injecting AI & ML model weights...",
  "Configuring shader materials...",
  "Syncing neural connections...",
  "System ready.",
];

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Shifting log steps based on progress
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev));
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          setTimeout(() => setIsLoaded(true), 600);
          return 100;
        }
        // Random progress increments for natural feel
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            id="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] font-display select-none"
          >
            <div className="w-[80%] max-w-[400px] space-y-6">
              {/* Futuristic Glitchy title */}
              <div className="space-y-2 text-center">
                <h1 className="text-xl tracking-[0.2em] font-semibold text-white">
                  YSJ <span className="text-secondary">SYSTEMS</span>
                </h1>
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary/70 animate-pulse">
                  System Boot Sequence
                </p>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                <motion.div
                  className="absolute h-full bg-gradient-to-r from-primary via-secondary to-accent"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status Output */}
              <div className="flex flex-col items-between gap-1 text-[11px] font-mono text-white/40">
                <div className="flex justify-between">
                  <span className="truncate max-w-[250px]">{LOADING_STEPS[Math.min(stepIndex, LOADING_STEPS.length - 1)]}</span>
                  <span className="text-secondary font-bold">{progress}%</span>
                </div>
                <div className="text-[9px] text-white/20 uppercase tracking-widest text-right">
                  Acropolis AI/ML Lab
                </div>
              </div>
            </div>

            {/* Glowing orb behind */}
            <div className="absolute w-[300px] h-[300px] bg-secondary/10 filter blur-[100px] rounded-full -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ visibility: isLoaded ? "visible" : "hidden" }} className="w-full">
        {children}
      </div>
    </>
  );
}
