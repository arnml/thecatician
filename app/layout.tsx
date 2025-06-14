import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; // Fallback for local dev

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Required for resolving relative image paths
  title: {
    default: "Jules' Next.js Showcase",
    template: "%s | Jules' Showcase", // For page-specific titles
  },
  description: "A collection of innovative Next.js projects and experiments by Jules. Explore cutting-edge web development.",
  keywords: ["Next.js", "React", "TypeScript", "Web Development", "Portfolio", "Projects", "Jules", "Showcase", "aceternity ui"],
  robots: "index, follow",
  creator: "Jules",
  publisher: "Jules",
  openGraph: {
    title: "Jules' Next.js Showcase",
    description: "Explore a collection of innovative Next.js projects by Jules.",
    url: siteUrl,
    siteName: "Jules' Showcase",
    images: [
      {
        url: "/thecatshow.png", // Relative to public folder
        width: 1200, // Optional: Specify image width
        height: 630, // Optional: Specify image height
        alt: "Jules' Next.js Showcase Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jules' Next.js Showcase",
    description: "A collection of innovative Next.js projects by Jules. Explore cutting-edge web development.",
    // siteId: "YOUR_TWITTER_SITE_ID", // Optional: Your Twitter site ID
    creator: "@YourTwitterHandle", // Optional: Your Twitter handle
    // creatorId: "YOUR_TWITTER_CREATOR_ID", // Optional: Your Twitter creator ID
    images: [{
        url: "/thecatshow.png", // Relative to public folder
        alt: "Jules' Next.js Showcase Banner"
    }],
  },
  // Optional: If you have icons in different sizes or formats
  icons: {
    icon: "/favicon.ico", // Default icon
    // shortcut: "/shortcut-icon.png",
    // apple: "/apple-icon.png",
    // other: {
    //   rel: "apple-touch-icon-precomposed",
    //   url: "/apple-touch-icon-precomposed.png",
    // },
  },
  // Optional: For PWA manifest
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
