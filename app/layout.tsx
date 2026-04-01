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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
