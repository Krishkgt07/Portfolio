"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code, Layout, Server, Database, Library, Settings } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string; // for glow borders
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code className="w-5 h-5" />,
    skills: ["Python", "JavaScript"],
    color: "rgba(59, 130, 246, 0.4)", // Blue
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["HTML", "CSS"],
    color: "rgba(6, 182, 212, 0.4)", // Cyan
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Flask", "FastAPI", "REST APIs"],
    color: "rgba(139, 92, 246, 0.4)", // Purple
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL"],
    color: "rgba(236, 72, 153, 0.4)", // Pink
  },
  {
    title: "Libraries (AI/ML)",
    icon: <Library className="w-5 h-5" />,
    skills: ["Pandas", "NumPy", "Matplotlib", "PyTorch"],
    color: "rgba(245, 158, 11, 0.4)", // Amber
  },
  {
    title: "Tools",
    icon: <Settings className="w-5 h-5" />,
    skills: ["Git", "GitHub"],
    color: "rgba(16, 185, 129, 0.4)", // Emerald
  },
];

// Interactive Tilt Card wrapper
function TiltCard({ category }: { category: SkillCategory }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Position coordinates relative to card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const rotateXSpring = useSpring(0, { damping: 20, stiffness: 200 });
  const rotateYSpring = useSpring(0, { damping: 20, stiffness: 200 });

  // Map coordinate bounds to rotation limits (max 10 degrees)
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  // Connect springs to transforms
  React.useEffect(() => {
    rotateXSpring.set(rotateX.get());
    rotateYSpring.set(rotateY.get());
    
    const unsubscribeX = rotateX.on("change", (latest) => rotateXSpring.set(latest));
    const unsubscribeY = rotateY.on("change", (latest) => rotateYSpring.set(latest));
    
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [rotateX, rotateY, rotateXSpring, rotateYSpring]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to center of the card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);

    // Update individual card hover coordinate variables (for CSS spotlight gradients)
    const relativeX = ((e.clientX - rect.left) / width) * 100;
    const relativeY = ((e.clientY - rect.top) / height) * 100;
    card.style.setProperty("--mouse-x", `${relativeX}%`);
    card.style.setProperty("--mouse-y", `${relativeY}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className="glass-panel p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between h-[220px] cursor-pointer group interactive-card"
    >
      {/* Background glow card overlay (tracks cursor) */}
      <div className="glass-card-glow" />

      {/* Underlay glow shadow boundary */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none -z-10"
        style={{
          boxShadow: `0 0 40px -10px ${category.color}`,
        }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="space-y-4 relative z-10 flex-grow">
        {/* Header containing icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
          style={{
            borderColor: category.color,
            backgroundColor: category.color.replace("0.4", "0.05"),
            color: category.color.replace("0.4", "1"),
          }}
        >
          {category.icon}
        </div>

        {/* Category Title */}
        <h4 className="text-lg font-bold font-display text-white">{category.title}</h4>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70 font-mono"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 select-none">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Capabilities</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Skills</span>
          </h2>
        </div>

        {/* Grid of categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <TiltCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
