"use client";

import Image from "next/image";
import oldCat from "@/public/oldCat.png";
// import { Button } from "@relume_io/relume-ui";
import React from "react";

export default function HeroHeader() {
  return (
    <section className="px-4 py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-2 lg:items-center">
        <div>
        <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
          It is time to understand science.
        </h1>
        <p className="md:text-lg">
          At The Catician, we break down complex scientific research into
          digestible insights. Join our newsletter and podcast to enhance
          your understanding of hard science.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <button className="bg-black text-white p-4">Join</button>
            <button className="bg-gray-300 text-black p-4">Examples</button>
        </div>
        </div>
        <div>
        <Image
          src={oldCat}
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
        </div>
      </div>
      </div>
    </section>
  );
}
