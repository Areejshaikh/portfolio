import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './navber/page';
import Contact from "./contect/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Areej Zaheer | Full-Stack Developer",
  description: "Full-stack developer specializing in Next.js, React, and modern web architectures. I build fast, accessible, and scalable web applications.",
  keywords: ["Full-Stack Developer", "Next.js Developer", "React Developer", "Web Developer Karachi", "TypeScript Developer"],
  openGraph: {
    title: "Areej Zaheer | Full-Stack Developer",
    description: "Building web applications that perform, scale, and convert. Specialized in Next.js, React, and TypeScript.",
    url: "https://areejzaheer.vercel.app",
    siteName: "Areej Zaheer Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar />
        {children}
        <Contact />
        
      </body>
    </html>
  );
}
