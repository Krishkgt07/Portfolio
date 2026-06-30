"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Film, Compass, Music, Shield, Award, Video, FilmIcon } from "lucide-react";

// CountUp utility sub-component
function CountUpNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const incrementTime = Math.max(Math.floor(duration / value), 30);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={ref} className="font-display font-black text-4xl md:text-5xl text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const INTERESTS = [
    { name: "Photography", icon: <Camera className="w-5 h-5 text-primary" /> },
    { name: "Videography", icon: <Film className="w-5 h-5 text-secondary" /> },
    { name: "Travelling", icon: <Compass className="w-5 h-5 text-accent" /> },
    { name: "Playing Guitar", icon: <Music className="w-5 h-5 text-pink-500" /> },
    { name: "Volleyball", icon: <Shield className="w-5 h-5 text-emerald-500" /> },
  ];

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Achievements Counter Section */}
        <div>
          {/* Section Header */}
          <div className="text-center space-y-4 mb-20 select-none">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Milestones</h3>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Film & Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Achievements</span>
            </h2>
          </div>

          {/* Counters Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {/* IIFF Counter */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl flex flex-col justify-between text-center relative interactive-card">
              <div className="glass-card-glow" />
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-2 relative z-10">
                <div className="flex justify-center items-baseline gap-1">
                  <CountUpNumber value={2} suffix="x" />
                </div>
                <h4 className="text-md font-bold font-display text-white">IIFF Winner</h4>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  Two-time Winner at the prestigious Indore International Film Festival.
                </p>
              </div>
            </motion.div>

            {/* Farewell Editor Counter */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl flex flex-col justify-between text-center relative interactive-card">
              <div className="glass-card-glow" />
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center mb-6">
                <Video className="w-6 h-6" />
              </div>
              <div className="space-y-2 relative z-10">
                <div className="flex justify-center items-baseline gap-1">
                  <CountUpNumber value={1} suffix="" />
                </div>
                <h4 className="text-md font-bold font-display text-white">Official Editor</h4>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  Official Video Editor for the College Farewell Event, managing complex post-production.
                </p>
              </div>
            </motion.div>

            {/* AI Nexus Films Counter */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl flex flex-col justify-between text-center relative interactive-card">
              <div className="glass-card-glow" />
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-6">
                <FilmIcon className="w-6 h-6" />
              </div>
              <div className="space-y-2 relative z-10">
                <div className="flex justify-center items-baseline gap-1">
                  <CountUpNumber value={5} suffix="+" />
                </div>
                <h4 className="text-md font-bold font-display text-white">Film Director</h4>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  Director & Editor for the official AI Nexus Club promotional movies.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <div>
          {/* Interests Header */}
          <div className="text-center space-y-4 mb-16 select-none">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Hobbies & Lifestyle</h3>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Interests</span>
            </h2>
          </div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {INTERESTS.map((interest, idx) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel px-6 py-4 rounded-xl flex items-center gap-3 interactive-card"
              >
                <div className="glass-card-glow" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {interest.icon}
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-white">{interest.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
