"use client";

import { motion } from "framer-motion";

export default function Incident() {
  return (
    <section id="story" className="relative py-24 sm:py-32 px-4 noise-bg">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan text-xs tracking-[0.3em]">01</span>
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-white-dim text-xs tracking-[0.2em]">THE ORIGIN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-16">
            How A <span className="text-cyan glow-text">Hidden Text</span>
            <br />Became A Movement
          </h2>

          <div className="space-y-0">
            <div className="border-l-2 border-cyan pl-6 sm:pl-8 pb-12 relative">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-cyan" />
              <p className="font-mono text-cyan text-xs mb-3 tracking-[0.2em]">THE BANNER</p>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                The developer of <span className="text-cyan font-semibold">pons</span> updated
                their X profile banner with a single sentence.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6 sm:pl-8 pb-12 relative">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-border-light" />
              <p className="font-mono text-white-dim text-xs mb-3 tracking-[0.2em]">THE MYSTERY</p>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                But the profile image was covering the first few characters.
                Nobody could read the full text.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-surface border border-border p-6 sm:p-10 ml-6 sm:ml-8 mb-12 relative glow-border"
            >
              <p className="font-mono text-white-dim text-xs mb-5 tracking-[0.2em]">VISIBLE TEXT ON BANNER</p>
              <p className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="redacted mr-2 px-3 rounded-sm text-sm sm:text-base">████</span>
                <span className="text-white">an I lose,</span>
              </p>
              <p className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2 text-white">
                I started with nothing.
              </p>
            </motion.div>

            <div className="border-l-2 border-border pl-6 sm:pl-8 pb-12 relative">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-border-light" />
              <p className="font-mono text-white-dim text-xs mb-3 tracking-[0.2em]">THE FRENZY</p>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                The community started guessing.
                What were the hidden characters?
              </p>
              <div className="mt-6 space-y-3">
                <div className="inline-block bg-void-light border border-border px-4 py-2 mr-2">
                  <span className="font-mono text-white-dim text-sm">&quot;C<span className="text-white">an I lose&quot;</span></span>
                </div>
                <div className="inline-block bg-void-light border border-border px-4 py-2 mr-2">
                  <span className="font-mono text-white-dim text-sm">&quot;Wh<span className="text-cyan">at C</span><span className="text-white">an I lose&quot;</span></span>
                </div>
                <div className="inline-block bg-surface border border-cyan px-4 py-2">
                  <span className="font-mono text-cyan text-sm font-bold">&quot;What Can I Lose&quot; ✓</span>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-cyan pl-6 sm:pl-8 relative">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-cyan" />
              <p className="font-mono text-cyan text-xs mb-3 tracking-[0.2em]">THE TOKEN</p>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                A question became a meme.
                <br />
                A meme became <span className="text-cyan font-semibold">$WhatC</span>.
                <br />
                <span className="text-white-dim">What can I lose? I started with nothing.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
