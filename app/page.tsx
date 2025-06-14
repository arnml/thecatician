import HeroSectionOne from "@/components/hero-section-demo-1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Jules' Next.js Showcase", // More specific title for the homepage
  description: "Welcome to the homepage of Jules' Next.js Showcase. Discover innovative projects and web development insights.",
  openGraph: {
    // Overriding or adding to the root layout's Open Graph tags for this specific page
    title: "Homepage - Jules' Next.js Showcase",
    description: "The official homepage for Jules' collection of Next.js projects.",
    // Images and other properties from the root layout will be inherited if not specified here
  },
  twitter: {
    // Overriding or adding to the root layout's Twitter tags
    title: "Homepage - Jules' Next.js Showcase",
    description: "The official homepage for Jules' collection of Next.js projects.",
  }
};

export default function Home() {
  return (
    <HeroSectionOne />
  );
}
