"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Send, CheckCircle, AlertTriangle } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [mapVisible, setMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // EmailJS keys - placeholders or read from process.env if available
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "key_placeholder";

    try {
      if (
        serviceId === "service_placeholder" ||
        templateId === "template_placeholder" ||
        publicKey === "key_placeholder"
      ) {
        // Fallback for demonstration / local testing
        console.log("EmailJS keys not configured. Simulating email sending:", formData);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      } else {
        // Actual EmailJS call
        if (formRef.current) {
          const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
          if (result.text === "OK") {
            setStatus("success");
            setFormData({ user_name: "", user_email: "", subject: "", message: "" });
          } else {
            setStatus("error");
          }
        }
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 select-none">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Get in Touch</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Info & Map Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Contact details glass card */}
            <div className="glass-panel p-8 rounded-2xl space-y-6 text-left relative overflow-hidden interactive-card">
              <div className="glass-card-glow" />
              <h3 className="text-xl font-bold font-display text-white relative z-10">Contact Details</h3>
              
              <div className="space-y-4 relative z-10">
                <a
                  href="tel:+919589536912"
                  className="flex items-center gap-4 text-white/60 hover:text-secondary transition-colors text-sm group"
                  id="contact-phone"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-secondary/15 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>(+91) 9589536912</span>
                </a>
                
                <a
                  href="mailto:yuvrajsinghyadav994@gmail.com"
                  className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors text-sm group"
                  id="contact-email"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/15 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>yuvrajsinghyadav994@gmail.com</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/yuvraj-singh-jadav-29052038a"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-white/60 hover:text-secondary transition-colors text-sm group"
                  id="contact-linkedin"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-secondary/15 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span>linkedin.com/in/yuvraj-singh-jadav-29052038a</span>
                </a>
                
                <a
                  href="https://github.com/Krishkgt07"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-white/60 hover:text-accent transition-colors text-sm group"
                  id="contact-github"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-accent/15 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <span>github.com/Krishkgt07</span>
                </a>
              </div>
            </div>

            {/* Styled Dark Google Map Container */}
            <div ref={mapRef} className="glass-panel h-[280px] rounded-2xl overflow-hidden relative border border-white/5 shadow-inner bg-black/20 flex items-center justify-center">
              {mapVisible ? (
                <iframe
                  title="Indore location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55663738096!2d75.79380993510972!3d22.7239116773229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b4d0c3b%3A0x7a6aeab057a4dbd1!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(92%) hue-rotate(185deg) grayscale(40%) contrast(115%) opacity(0.7)",
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  id="contact-location-map"
                />
              ) : (
                <div className="text-white/20 text-[10px] tracking-[0.2em] font-mono animate-pulse uppercase">Initializing map core...</div>
              )}
              {/* Dark Gradient Overlay to match BG */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative h-full flex flex-col justify-center text-left interactive-card">
              <div className="glass-card-glow" />
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-xs font-semibold tracking-wider text-white/50 font-display">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm font-sans"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-xs font-semibold tracking-wider text-white/50 font-display">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold tracking-wider text-white/50 font-display">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm font-sans"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold tracking-wider text-white/50 font-display">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg disabled:opacity-50"
                  id="contact-btn-submit"
                >
                  {loading ? (
                    <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-t-transparent border-white" />
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Toast status alert overlay */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-center gap-3 text-xs"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Thanks! Message sent successfully. I'll get back to you shortly.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-red-950/20 border border-red-500/30 text-red-400 rounded-xl flex items-center gap-3 text-xs"
                    >
                      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                      <span>Oops! Something went wrong. Please try emailing me directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
