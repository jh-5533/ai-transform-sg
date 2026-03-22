import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORMA — AI Agents for Singapore SMBs",
  description:
    "Deploy AI Agents that handle customer support, sales qualification, and operations — 24/7. Built for Singapore's small and medium businesses.",
  keywords: "AI agents Singapore, AI transformation SMB, AI automation Singapore, WhatsApp AI, customer service AI",
  openGraph: {
    title: "FORMA — AI Agents for Singapore SMBs",
    description: "Your 24/7 AI workforce. Deploy in 2 weeks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="noise-overlay min-h-full">{children}</body>
    </html>
  );
}
