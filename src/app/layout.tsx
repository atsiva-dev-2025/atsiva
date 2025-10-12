import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MotionConfig } from "framer-motion";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Toaster } from 'sonner';
import { SkipToContent } from "@/components/SkipToContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ATSIVA - Clean Solar Energy & Smart Solutions',
  description: 'Leading provider of solar energy solutions and smart automation systems in Nigeria',
  keywords: ['solar energy', 'renewable energy', 'automation', 'telecom', 'Nigeria'],
  openGraph: {
    title: 'ATSIVA - Clean Solar Energy & Smart Solutions',
    description: 'Leading provider of solar energy solutions and smart automation systems',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        <MotionConfig reducedMotion="user">
          <ErrorBoundary>
            <SkipToContent />
            <Navbar />
            <main id="main-content" className="min-h-screen">{children}</main>
            <Footer />
            <Toaster position="top-right" richColors />
          </ErrorBoundary>
        </MotionConfig>
      </body>
    </html>
  );
}
