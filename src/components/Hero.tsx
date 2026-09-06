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
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-void/70 to-void" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <Image
            src="/logo.png"
            alt="WhatC Character"
            width={180}
            height={180}
            className="mx-auto rounded-full animate-float drop-shadow-[0_0_40px_rgba(0,229,160,0.3)]"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-cyan text-sm sm:text-base tracking-widest uppercase mb-8"
        >
          ◆ Robinhood Chain ◆
        </motion.p>

        <div className="relative mb-6 min-h-[60px] sm:min-h-[100px] md:min-h-[140px] flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: revealed ? 0 : 1 }}
            transition={{ duration: 0.6 }}
            className="absolute text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
          >
            <span className="redacted px-2 sm:px-4 rounded-sm">What&nbsp;C</span>
            <span className="text-white">an I Lose</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: revealed ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
          >
            <span className="text-cyan glow-text">What C</span>
            <span className="text-white">an I Lose</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl sm:text-2xl md:text-3xl text-white-dim font-light mb-14"
        >
          I started with nothing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#buy"
            className="bg-cyan hover:bg-cyan-dim text-void font-bold text-base tracking-wider px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 animate-pulse-glow"
          >
            BUY $WhatC
          </a>
          <a
            href="#chart"
            className="border border-border-light hover:border-cyan text-white-dim hover:text-cyan text-base tracking-wider px-10 py-4 rounded-full transition-all duration-200"
          >
            VIEW CHART
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-surface border border-border rounded-full px-5 py-3">
            <span className="text-white-dim text-xs shrink-0">CA:</span>
            <span className="font-mono text-white text-xs truncate max-w-[160px] sm:max-w-[280px]">
              {CONTRACT}
            </span>
            <button
              onClick={copyContract}
              className="text-cyan hover:text-cyan-dim text-xs font-bold shrink-0 transition-colors"
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
        className="absolute bottom-10 animate-float z-10"
      >
        <span className="text-white-dim text-sm tracking-widest">↓</span>
      </motion.div>
    </section>
  );
}
