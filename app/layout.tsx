import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import NewsletterSchema from "@/components/newsletter-schema";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"; // Fallback for local dev

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'The Catician | Science & AI Newsletter with a Feline Twist',
  description: 'Subscribe to The Catician newsletter for weekly insights on cosmic science, AI research, and nerdy discoveries, delivered with curiosity and clarity.',
  keywords: 'science newsletter, AI newsletter, tech newsletter, science communication, cat science, technology news, AI research updates',
  applicationName: 'The Catician Newsletter',
  authors: [{ name: 'The Catician' }],
  category: 'Newsletter, Science Communication, Technology',
  openGraph: {
    type: 'website',
    title: 'The Catician Newsletter',
    description: 'Your weekly dose of science, AI, and cosmic curiosity',
    url: siteUrl,
    siteName: 'The Catician',
    images: [
      {
        url: '/thecatshow.png',
        width: 1200,
        height: 630,
        alt: 'The Catician Newsletter'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Catician Newsletter',
    description: 'Science, AI, and curiosity — with a feline twist',
    images: ['/thecatshow.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <NewsletterSchema />
      </head>
      <body>
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
