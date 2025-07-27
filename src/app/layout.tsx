import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextSkill - IELTS Course by Munzereen Shahid",
  description:
    "Prepare for Academic and General Training IELTS with the NextSkill IELTS course. Learn from expert instructor Munzereen Shahid and boost your band score.",
  twitter: {
    title: "NextSkill - IELTS Course",
    description:
      "Join the IELTS Course by Munzereen Shahid on NextSkill. Comprehensive preparation for both Academic and General Training IELTS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
