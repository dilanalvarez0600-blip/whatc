"use client";

import { motion } from "framer-motion";

export default function Chart() {
  return (
    <section id="chart" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-cyan text-xs tracking-[0.3em]">04</span>
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-white-dim text-xs tracking-[0.2em]">SURVEILLANCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-16">
            Live <span className="text-cyan glow-text">Chart</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-border bg-surface overflow-hidden glow-border"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-void-light">
            <div className="w-2.5 h-2.5 rounded-full bg-red" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyan opacity-40" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyan opacity-20" />
            <span className="font-mono text-white-dim text-[10px] ml-2 tracking-wider">$WhatC / CHART</span>
          </div>

          <div className="relative aspect-[16/9] sm:aspect-[2/1] flex items-center justify-center bg-void-soft">
            <div className="text-center px-4">
              <p className="font-mono text-cyan text-3xl sm:text-5xl font-bold mb-4 glow-text">
                NO CHART YET
              </p>
              <p className="text-white-dim font-mono text-xs sm:text-sm tracking-wider">
                Can&apos;t chart what doesn&apos;t exist yet.
                <br />
                <span className="text-cyan">But when it does, you&apos;ll see it here.</span>
              </p>
            </div>
          </div>
        </motion.div>

        <p className="font-mono text-white-dim text-[10px] text-center mt-4 tracking-wider">
          CHART WILL BE EMBEDDED FROM DEXSCREENER WHEN AVAILABLE
        </p>
      </div>
    </section>
  );
}
