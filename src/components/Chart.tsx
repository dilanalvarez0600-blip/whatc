"use client";

import { motion } from "framer-motion";

export default function Chart() {
  return (
    <section id="chart" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan text-sm tracking-widest uppercase mb-4">◆ Live Chart ◆</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Chart
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-border bg-surface rounded-2xl overflow-hidden glow-border"
        >
          <div className="relative aspect-[16/9] sm:aspect-[2/1] flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-cyan text-4xl sm:text-6xl font-bold mb-4 glow-text">
                NO CHART YET
              </p>
              <p className="text-white-dim text-sm sm:text-base max-w-md mx-auto">
                Can&apos;t chart what doesn&apos;t exist yet.
                <br />
                <span className="text-cyan">But when it does, you&apos;ll see it here.</span>
              </p>
            </div>
          </div>
        </motion.div>

        <p className="text-white-dim text-xs text-center mt-6 tracking-wider">
          Chart will be embedded from DexScreener when available
        </p>
      </div>
    </section>
  );
}
