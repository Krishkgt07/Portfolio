"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Mouse parallax springs
  const rotateX = useSpring(0, { stiffness: 100, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 25 });
  const transX = useSpring(0, { stiffness: 100, damping: 25 });
  const transY = useSpring(0, { stiffness: 100, damping: 25 });

  // Scroll animations
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 800], [0, 200]);
  const splineScale = useTransform(scrollY, [0, 800], [1, 0.8]);
  const splineOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Get coordinates relative to center of the viewport (-0.5 to 0.5)
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      
      setMousePosition({ x, y });
      
      // Calculate rotation degrees (max 15 deg) and translations (max 20px)
      rotateX.set(-y * 15);
      rotateY.set(x * 15);
      transX.set(x * 25);
      transY.set(y * 25);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY, transX, transY]);

  // Handle typing animation lines
  const [typedIndex, setTypedIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const titles = [
    "Computer Science Engineering Student",
    "Artificial Intelligence & Machine Learning Specialization",
    "Creative Film Director & Video Editor",
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let textToType = titles[typedIndex % titles.length];
    let currentCharIndex = 0;

    const type = () => {
      if (currentCharIndex <= textToType.length) {
        setTypedText(textToType.substring(0, currentCharIndex));
        currentCharIndex++;
        timer = setTimeout(type, 60);
      } else {
        // Hold full text, then erase
        timer = setTimeout(erase, 2500);
      }
    };

    const erase = () => {
      if (currentCharIndex >= 0) {
        setTypedText(textToType.substring(0, currentCharIndex));
        currentCharIndex--;
        timer = setTimeout(erase, 30);
      } else {
        setTypedIndex((prev) => prev + 1);
      }
    };

    type();
    return () => clearTimeout(timer);
  }, [typedIndex]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 md:pt-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto px-6 w-full flex-grow items-center relative z-10 gap-8">
        
        {/* Text Area (6 cols on lg) */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-center order-2 lg:order-1 select-none text-left">
          
          {/* Accent greeting */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start"
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/50">
              Welcome to my space
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-light text-white/80"
            >
              Hi, I'm
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-white"
            >
              Yuvraj Singh <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Jadav</span>
            </motion.h1>
            
            {/* Dynamic Subheading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-10 flex items-center"
            >
              <h3 className="text-md md:text-lg font-mono font-semibold text-secondary">
                {typedText}
                <span className="animate-ping ml-0.5 text-accent">|</span>
              </h3>
            </motion.div>
          </div>

          {/* Subheading text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base text-white/60 max-w-lg leading-relaxed font-sans"
          >
            Building intelligent software, computer vision tools, and modern high-fidelity web experiences. Blending technology with digital storytelling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]"
              id="hero-btn-projects"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:scale-[1.02]"
              id="hero-btn-resume"
            >
              Resume <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 pt-6"
          >
            <a
              href="https://github.com/Krishkgt07"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white hover:scale-110 transition-all"
              id="hero-social-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvraj-singh-jadav-29052038a"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white hover:scale-110 transition-all"
              id="hero-social-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:yuvrajsinghyadav994@gmail.com"
              className="text-white/40 hover:text-white hover:scale-110 transition-all"
              id="hero-social-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* 3D Canvas / Spline Model Area (6 cols on lg) */}
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            x: transX,
            y: transY,
            scale: splineScale,
            opacity: splineOpacity,
            translateY: yOffset
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 h-[450px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2 relative"
          id="hero-3d-model-container"
        >
          <div className="absolute inset-0 z-0 bg-radial-gradient from-secondary/10 to-transparent blur-[80px]" />
          <div className="w-full h-full relative z-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Loading Indicator */}
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505] z-20">
                <div className="space-y-4 text-center font-display">
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-t-transparent border-secondary" />
                  <span className="text-xs text-white/40 tracking-wider">COMPILING 3D WORLD...</span>
                </div>
              </div>
            )}
            {/* Render the official community Spline scene preview URL inside an iframe */}
            <iframe
              src="https://app.spline.design/file/415a000d-0196-4af3-8afd-5ba868b07aa7?view=preview"
              className="w-full h-full border-0 bg-transparent"
              title="Yuvraj 3D Spline Centerpiece"
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="pb-8 flex justify-center w-full relative z-10">
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 hover:text-white transition-colors"
          id="hero-scroll-indicator"
        >
          <span>Scroll to Explore</span>
          <div className="h-6 w-3.5 rounded-full border border-white/20 p-1 flex justify-center">
            <span className="h-1.5 w-1 rounded-full bg-secondary animate-bounce" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
