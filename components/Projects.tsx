"use client";

import { motion } from "framer-motion";
import { ExternalLink, Cpu, Trash2 } from "lucide-react";
import { Github } from "@/components/BrandIcons";

interface Project {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  previewElement: React.ReactNode;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "Smart Object Removal",
    description:
      "An AI-powered computer vision system that dynamically detects and removes undesired objects, markers, or people from image layers and video frames using OpenCV inpainting, edge-detection, and deep segmentation methods.",
    role: "Software Development (AI/ML Lead)",
    technologies: ["Python", "OpenCV", "Computer Vision", "NumPy"],
    githubUrl: "https://github.com/Krishkgt07",
    liveUrl: "https://github.com/Krishkgt07",
    // Interactive SVG preview demonstrating the concept of object removal
    previewElement: (
      <div className="w-full h-full bg-[#070707] flex items-center justify-center relative overflow-hidden select-none">
        
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-10" />
        
        {/* Simulated image layers */}
        <svg viewBox="0 0 160 100" className="w-[80%] h-[80%] text-white/10">
          {/* Main object: A person outline in red mask */}
          <rect x="25" y="20" width="110" height="60" rx="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Unwanted object area */}
          <motion.g
            animate={{
              opacity: [1, 1, 0, 0, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Red alert polygon representing detected object */}
            <polygon points="65,30 95,30 105,70 55,70" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="0.75" />
            <text x="80" y="52" fill="#ef4444" fontSize="5" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
              [TARGET_OBJ]
            </text>
          </motion.g>

          {/* Mask scanning line */}
          <motion.line
            x1="10"
            y1="10"
            x2="150"
            y2="10"
            stroke="var(--secondary)"
            strokeWidth="0.75"
            animate={{
              y: [10, 80, 10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Clean image grid underlay */}
          <motion.g
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <polygon points="65,30 95,30 105,70 55,70" fill="none" stroke="var(--secondary)" strokeWidth="0.5" strokeDasharray="2,2" />
            <text x="80" y="52" fill="var(--secondary)" fontSize="5" textAnchor="middle" fontFamily="monospace">
              INPAINTED
            </text>
          </motion.g>
        </svg>

        {/* Floating status icon */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2 py-1 rounded bg-[#0f0f0f] border border-white/5 text-[9px] font-mono text-white/50">
          <Cpu className="w-3 h-3 text-secondary animate-pulse" />
          <span>OP_CV_MASKING</span>
        </div>

        {/* Removed object overlay indicator */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[9px] font-mono text-red-500 bg-red-950/20 border border-red-900/30 px-2 py-0.5 rounded">
          <Trash2 className="w-2.5 h-2.5 animate-bounce" />
          <span>INPAINT_FLOW</span>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any } },
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 select-none">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">My Work</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
        </div>

        {/* Projects Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 max-w-4xl mx-auto gap-12"
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-12 glass-panel rounded-3xl overflow-hidden interactive-card group"
            >
              
              {/* Media/Preview Box (5 cols) */}
              <div className="lg:col-span-5 h-[260px] lg:h-auto min-h-[250px] relative border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
                {project.previewElement}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Text/Content Box (7 cols) */}
              <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-6 relative">
                
                {/* Spotlight cursor support */}
                <div className="glass-card-glow" />

                <div className="space-y-4 relative z-10 text-left">
                  {/* Category label */}
                  <span className="text-[10px] uppercase font-bold tracking-widest text-secondary bg-secondary/5 border border-secondary/20 px-3 py-1 rounded-full">
                    {project.role}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Technologies row */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-white/50 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                      id={`project-btn-github-${index}`}
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-secondary/15 hover:bg-secondary/25 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                      id={`project-btn-demo-${index}`}
                    >
                      Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
