"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Film, BrainCircuit } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16 select-none">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-secondary"
          >
            Behind the Code
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Avatar Graphic (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-[280px] h-[340px] md:w-[320px] md:h-[380px] rounded-3xl overflow-hidden glass-panel flex items-center justify-center p-4">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />

              {/* Glowing Ambient light behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/5 to-accent/15 opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Profile Image (Yuvraj's photo) */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 flex items-center justify-center bg-black/40">
                <img
                  src="/yuvraj.webp"
                  alt="Yuvraj Singh Jadav"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Text/Info Area (7 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                Who is Yuvraj?
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed font-sans">
                Yuvraj Singh Jadav is a passionate AI & Machine Learning student pursuing B.Tech at Acropolis Institute of Technology and Research, Indore. He enjoys building intelligent software, exploring Artificial Intelligence, computer vision, backend development, and creating visually engaging digital experiences through videography and editing.
              </p>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Education Card */}
              <div className="glass-panel p-5 rounded-2xl flex gap-4 items-start interactive-card">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-white/40 font-display">Education</h4>
                  <p className="text-sm font-semibold text-white">B.Tech CSE (AI & ML)</p>
                  <p className="text-xs text-white/50">Acropolis Institute, Indore</p>
                  <p className="text-[10px] text-secondary font-mono">2024 - 2028</p>
                </div>
              </div>

              {/* ML Focus Card */}
              <div className="glass-panel p-5 rounded-2xl flex gap-4 items-start interactive-card">
                <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-white/40 font-display">Specialization</h4>
                  <p className="text-sm font-semibold text-white">AI & Deep Learning</p>
                  <p className="text-xs text-white/50">Computer Vision, OpenCV</p>
                  <p className="text-[10px] text-accent font-mono">Neural Nets & APIs</p>
                </div>
              </div>

              {/* Dev Focus Card */}
              <div className="glass-panel p-5 rounded-2xl flex gap-4 items-start interactive-card">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-white/40 font-display">Development</h4>
                  <p className="text-sm font-semibold text-white">Full-Stack & APIs</p>
                  <p className="text-xs text-white/50">Python, Flask, FastAPI</p>
                  <p className="text-[10px] text-primary font-mono">MySQL & React</p>
                </div>
              </div>

              {/* Filmmaking Card */}
              <div className="glass-panel p-5 rounded-2xl flex gap-4 items-start interactive-card">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Film className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-white/40 font-display">Storytelling</h4>
                  <p className="text-sm font-semibold text-white">Video Editing & Direction</p>
                  <p className="text-xs text-white/50">Official College Editor</p>
                  <p className="text-[10px] text-white/40 font-mono">IIFF Winner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
