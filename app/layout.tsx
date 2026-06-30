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
  twitter: {
    card: "summary_large_image",
    title: "Yuvraj Singh Jadav | AI & ML Engineering Portfolio",
    description: "Portfolio of Yuvraj Singh Jadav, a Computer Science Engineering student specializing in AI/ML.",
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
        {/* Structured Schema JSON-LD (SEO Best Practices) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yuvraj Singh Jadav",
              "email": "yuvrajsinghyadav994@gmail.com",
              "jobTitle": "Artificial Intelligence & Machine Learning Student / Software Developer",
              "alumniOf": "Acropolis Institute of Technology and Research",
              "url": "https://portpholio-sooty.vercel.app",
              "sameAs": [
                "https://github.com/Krishkgt07",
                "https://www.linkedin.com/in/yuvraj-singh-jadav-29052038a"
              ]
            })
          }}
        />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
