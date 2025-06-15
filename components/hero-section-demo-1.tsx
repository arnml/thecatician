"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSectionOne() {
  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      {/* Decorative Vertical and Horizontal Lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20">
        {/* Headline */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Science, AI, and curiosity — with a feline twist."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={word + index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Join The Catician — your go-to space for clever takes on cosmic science,
          AI research, and everything delightfully nerdy. Delivered with curiosity,
          clarity, and the occasional meow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="w-60 transform transition-all duration-300 hover:-translate-y-0.5">
            <a
              href="https://thecatician.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Newsletter
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-60 transform transition-all duration-300 hover:-translate-y-0.5">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </Button>
        </motion.div>

        {/* ========= START: Glow Effect Wrapper ========= */}
        <div className="relative mt-20">
          <div className="absolute -inset-2">
            <div className="w-full h-full max-w-7xl mx-auto rounded-3xl opacity-40 blur-lg bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500"></div>
          </div>
          {/* ========= END: Glow Effect Wrapper ========= */}

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="relative max-w-7xl z-10 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="w-full aspect-[16/9] overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 relative">
              <Image
                src="/thecatshow.png"
                alt="Podcast recording setup with microphones and people in a studio"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">The Catician</h1>
      </div>
      <Button asChild className="w-24 md:w-32 transform transition-all duration-300 hover:-translate-y-0.5">
        <a
          href="https://thecatician.substack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe
        </a>
      </Button>
    </nav>
  );
};