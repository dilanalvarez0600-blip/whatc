"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative py-32 sm:py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="WhatC"
            width={100}
            height={100}
            className="mx-auto rounded-full mb-10 animate-float"
          />

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">You Have</span>
            <br />
            <span className="text-cyan glow-text">Nothing To Lose</span>
          </h2>

          <p className="text-white-dim text-lg sm:text-xl mb-12 max-w-lg mx-auto">
            What can I lose? I started with nothing.
            <br />
            Just keep pushin C.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#buy"
              className="bg-cyan hover:bg-cyan-dim text-void font-bold text-base sm:text-lg tracking-wider px-10 py-5 transition-all duration-200 hover:scale-105 animate-pulse-glow"
            >
              BUY $WhatC
            </a>
            <a
              href="#community"
              className="border border-border hover:border-cyan text-white-dim hover:text-cyan font-mono text-sm tracking-wider px-10 py-5 transition-all duration-200"
            >
              JOIN THE MOVEMENT
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
