"use client";

import { motion } from "framer-motion";

const PAIR_URL =
  "https://dexscreener.com/robinhood/0xd903709cfddf776aa8bd258544f0a3cbb5298b6a7a70018bfbce268d671b0526";

export default function Chart() {
  return (
    <section id="chart" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan text-sm tracking-widest uppercase mb-4">◆ Live Chart ◆</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            $WhatC / ETH
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-border bg-surface rounded-2xl overflow-hidden glow-border"
        >
          <iframe
            src={`${PAIR_URL}?embed=1&theme=dark&trades=0&info=0`}
            className="w-full aspect-[4/5] sm:aspect-[16/9] block"
            title="$WhatC Live Chart on DexScreener"
            loading="lazy"
          />
        </motion.div>

        <a
          href={PAIR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 border border-border-light hover:border-cyan text-white-dim hover:text-cyan text-sm tracking-wider px-8 py-3 rounded-full transition-all duration-200"
        >
          OPEN ON DEXSCREENER ↗
        </a>
      </div>
    </section>
  );
}
