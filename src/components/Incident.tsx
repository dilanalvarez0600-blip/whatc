"use client";

import { motion } from "framer-motion";

export default function Incident() {
  return (
    <section id="story" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan text-sm tracking-widest uppercase mb-4">◆ The Origin ◆</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            How It All Started
          </h2>
          <p className="text-white-dim text-lg sm:text-xl mb-20 max-w-xl mx-auto">
            A hidden text. A guessing game. A movement.
          </p>
        </motion.div>

        <div className="space-y-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-cyan font-bold">1</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">The Banner</h3>
            <p className="text-white-dim text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              The developer of <span className="text-cyan font-semibold">pons</span> updated their X profile banner with a single powerful sentence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-cyan font-bold">2</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">The Mystery</h3>
            <p className="text-white-dim text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-8">
              The profile image was covering the first few characters. Nobody could read the full text.
            </p>
            <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto glow-border">
              <p className="text-white-dim text-xs tracking-widest uppercase mb-5">What the community saw</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="redacted px-3 rounded-sm text-base">████</span>{" "}
                <span className="text-white">an I lose,</span>
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2 text-white">
                I started with nothing.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-cyan font-bold">3</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">The Guessing Game</h3>
            <p className="text-white-dim text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-8">
              What are the hidden characters? The community went wild.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="bg-surface border border-border rounded-full px-5 py-2 text-white-dim text-sm">
                &quot;Can I lose&quot;
              </span>
              <span className="bg-surface border border-border rounded-full px-5 py-2 text-white-dim text-sm">
                &quot;What can I lose&quot;
              </span>
              <span className="bg-cyan/10 border border-cyan rounded-full px-5 py-2 text-cyan text-sm font-bold">
                &quot;What Can I Lose&quot; ✓
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-cyan border border-cyan flex items-center justify-center mx-auto mb-6">
              <span className="text-void font-bold">4</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">The Token</h3>
            <p className="text-white-dim text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              A question became a meme. A meme became{" "}
              <span className="text-cyan font-bold">$WhatC</span>.
              <br />
              <span className="text-white font-medium">What can I lose? I started with nothing.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
