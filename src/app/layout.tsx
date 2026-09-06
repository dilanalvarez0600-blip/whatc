import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "$WhatC — WHAT CAN I LOSE?",
  description: "I started with nothing. A mystery became a meme. A meme became a movement. On Robinhood Chain.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "$WhatC — WHAT CAN I LOSE?",
    description: "I started with nothing. A mystery became a meme. A meme became a movement. On Robinhood Chain.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$WhatC — WHAT CAN I LOSE?",
    description: "I started with nothing. A mystery became a meme. A meme became a movement.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
