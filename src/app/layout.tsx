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
  title: "Dollar for Ukraine - Support Ukraine's Army",
  description:
    "Join our volunteer initiative to support Ukraine's army. Every dollar makes a difference in defending freedom and democracy.",
  openGraph: {
    title: "Dollar for Ukraine - Support Ukraine's Army",
    description:
      "Join our volunteer initiative to support Ukraine's army. Every dollar makes a difference in defending freedom and democracy.",
    url: "https://dollar4urkraine.vercel.app/",
    siteName: "Dollar for Ukraine",
    images: [
      {
        url: "https://dollar4urkraine.vercel.app/images/ukraine-logo.png",
        width: 1200,
        height: 630,
        alt: "Dollar for Ukraine Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
