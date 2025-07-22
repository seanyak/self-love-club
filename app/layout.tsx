import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/shared/topbar";
import Footer from "@/components/shared/footer";
import ThemeContextProvider from "@/context/theme-context";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { TooltipProvider } from '@radix-ui/react-tooltip';
import ThemeToggle from "@/components/shared/theme-toggle";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Self Love Club | Wilmington, NC",
  description: "Discover the best massage in Wilmington, NC at Self Love Club Bodyworks & Massage. Amanda offers personalized, therapeutic bodywork—including myofascial release, deep tissue, cupping, craniosacral, and more—to help you feel your best. Locals and visitors alike rave about her intuitive touch, anatomy expertise, and transformative results. Prioritize your self-care today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <html lang='en'>
      <body 
        className={`${inter.className} bg-chart-1 text-gray-950 relative dark:bg-[#425044] dark:text-gray-50 dark:text-opacity-90`}>
          <main className='flex flex-row'>
            <section className='main-container'>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Topbar />
            <TooltipProvider>
              {children}
            </TooltipProvider>
            <Footer />
            </ThemeProvider>
            </section>
          </main>
        </body>
      </html>
      </ThemeContextProvider>
  );
}
