import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { ThemeProvider } from "@/app/providers/theme-provider";
import { personalInfo } from "@/lib/data";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"], display: "swap" });

const title = `${personalInfo.name} | Front-End Developer (React.js & Next.js)`;
const description =
  "Front-End Developer with 2 years of experience building e-commerce platforms, CMS and admin dashboards, ERP, HRMS and university portals with React.js, Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zeinab-portfolio-phi.vercel.app"),
  title,
  description,
  keywords: [
    "Front-End Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Egypt",
    "Zeinab Mohamed Abbas",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    images: ["/portfolio.png"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/portfolio.png"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#09090c" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
