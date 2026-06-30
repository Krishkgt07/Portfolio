"use client";

import { useEffect, useState } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-12 mt-20 border-t border-white/5 bg-[#050505] z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo/Name */}
        <div className="font-display text-sm tracking-wider text-white/50">
          © {new Date().getFullYear()} <span className="text-white font-bold">Yuvraj Singh Jadav</span>. All rights reserved.
        </div>

        {/* Made with ❤️ */}
        <div className="text-xs text-white/40 font-mono">
          Made with <span className="text-red-500 animate-pulse">❤️</span> by Yuvraj
        </div>

        {/* Social Link Items */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Krishkgt07"
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white hover:scale-110 transition-all"
            id="footer-github"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/yuvraj-singh-jadav-29052038a"
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white hover:scale-110 transition-all"
            id="footer-linkedin"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:yuvrajsinghyadav994@gmail.com"
            className="text-white/40 hover:text-white hover:scale-110 transition-all"
            id="footer-email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/20 hover:bg-primary border border-primary/45 text-white shadow-lg cursor-pointer backdrop-blur-sm transition-colors"
            aria-label="Scroll back to top"
            id="footer-btn-scroll-top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
