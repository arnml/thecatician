"use client";

import React from "react";
import styles from "@/components/HeroSection/Hero.module.css"
import Image from "next/image";
import scaling_paper from "@/public/scaling_paper.png";
import student from "@/public/student.png";
import anysotropy_paper from "@/public/anisotropy_paper.png";
import dispersive_waves_paper from "@/public/dispersive_waves_paper.png";
import fiscal_mechanism from "@/public/fiscal_mechanism.png";
export default function HeroSection() {
  return (
    <section
      className="grid grid-cols-1 gap-y-8 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-5 max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-10xl">
          Unlocking Science: Simplifying Complex Research Papers
        </h1>
        <p className="md:text-md">
          At The Catician, we bridge the gap between intricate scientific
          research and your understanding. Our newsletter and podcast make hard
          science accessible and enjoyable for every enthusiast.
        </p>
        <div className="mt-6 flex gap-4">
            <button className="bg-black text-white p-4 w-40">Join</button>
            <button className="bg-gray-300 text-black p-4 w-40">Examples</button>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
            <div className={`-mt-[40%] grid w-full h-full columns-2 grid-cols-1 gap-4 self-center ${styles['animate-loop-vertically']}`}>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={scaling_paper}
                  alt="Scaling Paper"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={anysotropy_paper}
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={dispersive_waves_paper}
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={fiscal_mechanism}
                  alt="Relume placeholder image 4"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={student}
                  alt="Relume placeholder image 5"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={dispersive_waves_paper}
                  alt="Relume placeholder image 6"
                />
              </div>
            </div>
          </div>
          <div
  className={`grid w-full h-full grid-cols-1 gap-4 ${styles['animate-loop-vertically']}`}
>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={fiscal_mechanism}
                  alt="Relume placeholder image 1"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={student}
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={scaling_paper}
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={dispersive_waves_paper}
                  alt="Relume placeholder image 4"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={student}
                  alt="Relume placeholder image 5"
                />
              </div>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={anysotropy_paper}
                  alt="Relume placeholder image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
