"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Calendar } from "lucide-react";

interface Certification {
  title: string;
  provider: string;
  authority: string;
  color: string;
}

const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Data Structures and Algorithms using Java",
    provider: "NPTEL",
    authority: "Indian Institute of Technology (IIT) Kharagpur",
    color: "rgba(59, 130, 246, 0.4)", // Blue
  },
  {
    title: "Data Science Foundation",
    provider: "Infosys Springboard",
    authority: "Infosys Limited",
    color: "rgba(6, 182, 212, 0.4)", // Cyan
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as any } },
  };

  return (
    <section id="certifications" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 select-none">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Verification</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certifications</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6"
        >
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="glass-panel p-8 rounded-2xl relative flex flex-col justify-between overflow-hidden interactive-card group"
            >
              {/* Dynamic hover spotlight gradient */}
              <div className="glass-card-glow" />

              {/* Glowing shadow border on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none -z-10"
                style={{
                  boxShadow: `0 0 30px -10px ${cert.color}`,
                }}
              />

              <div className="space-y-6 relative z-10 text-left">
                {/* Header Badge */}
                <div className="flex justify-between items-start">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      borderColor: cert.color,
                      backgroundColor: cert.color.replace("0.4", "0.05"),
                      color: cert.color.replace("0.4", "1"),
                    }}
                  >
                    <Award className="w-6 h-6 animate-pulse" />
                  </div>
                  
                  <span className="flex items-center gap-1 text-[10px] font-mono text-secondary px-2.5 py-0.5 rounded-full bg-secondary/5 border border-secondary/20">
                    <CheckCircle2 className="w-3 h-3 text-secondary" /> Verified
                  </span>
                </div>

                {/* Info titles */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-white/50 space-y-1">
                    <p className="font-semibold text-white/70">{cert.provider}</p>
                    <p>{cert.authority}</p>
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/30 relative z-10">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Credential Record Active</span>
                </div>
                <span>YSJ-CERT-{index + 101}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
