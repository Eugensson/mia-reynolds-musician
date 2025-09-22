import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Alex_Brush, Montserrat } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NavContextProvider } from "@/context/nav-context";

import "./globals.css";

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alexBrush",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Mia Reynolds | Composer & Guitarist",
  description:
    "Discover Mia Reynolds, a talented composer and guitarist creating soulful music that blends classical artistry with modern expression. Explore original compositions, live performances, and inspiring guitar works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavContextProvider>
      <html lang="en">
        <body
          className={`${alexBrush.variable} ${montserrat.variable} antialiased relative overflow-x-hidden`}
        >
          <Header />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </NavContextProvider>
  );
}
