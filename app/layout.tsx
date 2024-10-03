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
  description: "Self Love Club massage and bodyworks | Wilmington, North Carolina",
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
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
          <main className='flex flex-row'>
            <section className='main-container'>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Topbar />
            <TooltipProvider>
              {children}
            <ThemeToggle />
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
