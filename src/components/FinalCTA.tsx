"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative py-36 sm:py-44 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="WhatC"
            width={120}
            height={120}
            className="mx-auto rounded-full mb-12 animate-float drop-shadow-[0_0_40px_rgba(0,229,160,0.3)]"
          />

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
            You Have
            <br />
            <span className="text-cyan glow-text">Nothing To Lose</span>
          </h2>

          <p className="text-white-dim text-lg sm:text-xl mb-14 max-w-md mx-auto">
            What can I lose? I started with nothing.
            <br />
            Just keep pushin C.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#buy"
              className="bg-cyan hover:bg-cyan-dim text-void font-bold text-lg tracking-wider px-12 py-5 rounded-full transition-all duration-200 hover:scale-105 animate-pulse-glow"
            >
              BUY $WhatC
            </a>
            <a
              href="#community"
              className="border border-border-light hover:border-cyan text-white-dim hover:text-cyan text-base tracking-wider px-12 py-5 rounded-full transition-all duration-200"
            >
              JOIN THE MOVEMENT
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
