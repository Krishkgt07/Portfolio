import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports for below-the-fold components (Next.js Code Splitting)
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Education = dynamic(() => import("@/components/Education"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Certifications = dynamic(() => import("@/components/Certifications"), { ssr: true });
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
