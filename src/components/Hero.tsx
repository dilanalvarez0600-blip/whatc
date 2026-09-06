"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CONTRACT = "PASTE_CONTRACT_HERE";

export default function Hero() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyMsg, setCopyMsg] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const copyContract = useCallback(async () => {
    await navigator.clipboard.writeText(CONTRACT);
    const msgs = [
      "Evidence secured.",
      "Copied. You had nothing to lose.",
      "Just keep pushin C.",
      "The void acknowledges you.",
    ];
    setCopyMsg(msgs[Math.floor(Math.random() * msgs.length)]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/banner.png"
          alt="WhatC Banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void" />
      </div>

      <div className="absolute inset-0 grid-bg opacity-[0.04]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="WhatC Character"
            width={160}
            height={160}
            className="mx-auto rounded-full animate-float"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-mono text-cyan text-xs sm:text-sm tracking-[0.4em] uppercase mb-6"
        >
          Robinhood Chain
        </motion.p>

        <div className="relative mb-4 min-h-[80px] sm:min-h-[120px] md:min-h-[160px] flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: revealed ? 0 : 1 }}
            transition={{ duration: 0.6 }}
            className="absolute text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
          >
            <span className="redacted px-2 sm:px-3 rounded-sm">What&nbsp;C</span>
            <span className="text-white">an I Lose</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: revealed ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
          >
            <span className="text-cyan glow-text">What C</span>
            <span className="text-white">an I Lose</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl sm:text-2xl md:text-3xl text-white-dim font-light mb-12"
        >
          I started with nothing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#buy"
            className="bg-cyan hover:bg-cyan-dim text-void font-bold text-sm sm:text-base tracking-wider px-8 py-4 transition-all duration-200 hover:scale-105 animate-pulse-glow"
          >
            BUY $WhatC
          </a>
          <a
            href="#chart"
            className="border border-border hover:border-cyan text-white-dim hover:text-cyan font-mono text-sm sm:text-base tracking-wider px-8 py-4 transition-all duration-200"
          >
            VIEW CHART
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-surface border border-border px-4 py-3 max-w-full">
            <span className="text-white-dim font-mono text-[10px] sm:text-xs shrink-0">CA:</span>
            <span className="font-mono text-white text-[10px] sm:text-xs truncate max-w-[180px] sm:max-w-none">
              {CONTRACT}
            </span>
            <button
              onClick={copyContract}
              className="text-cyan hover:text-cyan-dim font-mono text-[10px] sm:text-xs shrink-0 border border-border hover:border-cyan px-3 py-1 transition-all duration-200"
            >
              {copied ? copyMsg : "COPY"}
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="absolute bottom-8 animate-float z-10"
      >
        <span className="font-mono text-white-dim text-xs tracking-[0.3em]">↓ SCROLL DOWN ↓</span>
      </motion.div>
    </section>
  );
}
