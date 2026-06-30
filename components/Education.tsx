"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, GraduationCap } from "lucide-react";

interface TimelineItem {
  year: string;
  degree: string;
  field: string;
  institution: string;
  grade: string;
  icon: React.ReactNode;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2024 - 2028",
    degree: "B.Tech. CSE (AI & ML)",
    field: "Pursuing from Acropolis Institute of Technology and Research, Indore",
    institution: "Affiliated to RGPV Bhopal",
    grade: "Average CGPA: 6.5",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: "2024",
    degree: "HSC (Higher Secondary)",
    field: "Science Stream (MP Board)",
    institution: "Jayant Public H.S. School",
    grade: "Grade: 72%",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    year: "2022",
    degree: "SSC (Secondary School)",
    field: "General Education (MP Board)",
    institution: "Govt. H.S. School",
    grade: "Grade: 80%",
    icon: <Award className="w-5 h-5" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 select-none">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Academic Path</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Timeline</span>
          </h2>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-primary via-secondary to-accent/20 -translate-x-1/2" />

          {/* Timeline Cards */}
          <div className="space-y-16">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge (Node) */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      className={`p-2.5 rounded-full border-2 bg-[#050505] flex items-center justify-center shadow-lg ${
                        index === 0
                          ? "border-secondary text-secondary shadow-secondary/20"
                          : index === 1
                          ? "border-primary text-primary shadow-primary/20"
                          : "border-accent text-accent shadow-accent/20"
                      }`}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Card Section */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? 40 : -40,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="glass-panel p-6 rounded-2xl relative interactive-card"
                    >
                      {/* Floating glow behind card */}
                      <div className="glass-card-glow" />

                      {/* Content */}
                      <div className="relative z-10 space-y-3">
                        <span className="inline-block px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-secondary">
                          {item.year}
                        </span>
                        
                        <div className="space-y-1">
                          <h4 className="text-lg md:text-xl font-bold font-display text-white">
                            {item.degree}
                          </h4>
                          <p className="text-sm font-semibold text-white/80">
                            {item.field}
                          </p>
                        </div>

                        <div className="text-xs text-white/50 space-y-1">
                          <p>{item.institution}</p>
                          <p className="font-mono font-semibold text-accent">{item.grade}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for Desktop Layout alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
