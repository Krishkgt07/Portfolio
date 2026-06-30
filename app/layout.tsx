import type { Metadata } from "next";
import { Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuvraj Singh Jadav | AI & ML Engineering Portfolio",
  description: "Portfolio of Yuvraj Singh Jadav, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. Discover intelligent software, computer vision projects, and creative filmmaking.",
  keywords: [
    "Yuvraj Singh Jadav",
    "Computer Science Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Developer Portfolio",
    "Computer Vision Portfolio",
    "OpenCV Developer",
    "Indore Film Festival Winner"
  ],
  authors: [{ name: "Yuvraj Singh Jadav" }],
  openGraph: {
    title: "Yuvraj Singh Jadav | AI & ML Portfolio",
    description: "Creative developer and AI student building intelligent systems and cinematic digital experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${poppins.variable} font-sans bg-[#050505] text-[#ededed] antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden`}
      >
        <BackgroundEffects />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
