<<<<<<< HEAD
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
=======
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/app/providers/theme-provider";
import "./globals.css";

// Configure Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// SEO metadata
export const metadata: Metadata = {
  title: "Zeinab Mohamed Abbas | Front-End",
  description: "Frontend Software Engineer specializing in modern web technologies",
  keywords: ["Next ", "front-End developer", "react", "typescript"],
  openGraph: {
    type: "website",
    title: "Zeinab Mohamed Abbas | Front-End",
    description: "Frontend Software Engineer specializing in modern web technologies",
    images: ["/og-image.png"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
>>>>>>> 298ca654d9030827b0be63526300e89e8fdfb8e3
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
