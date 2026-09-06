"use client";

import { motion } from "framer-motion";

const LINES = [
  "No money.",
  "No friends.",
  "No luck.",
  "Just me.",
  "",
  "What can I lose?",
  "",
  "I started with nothing.",
  "I still have most of it.",
  "",
  "But nothing is where",
  "everything begins.",
];

export default function Manifesto() {
  return (
    <section className="relative py-24 sm:py-32 px-4 bg-surface border-y border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-px bg-cyan" />
            <span className="font-mono text-cyan text-xs tracking-[0.3em]">THE PHILOSOPHY</span>
            <div className="w-12 h-px bg-cyan" />
          </div>

          <div className="space-y-2">
            {LINES.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-6" />
              ) : (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`text-xl sm:text-3xl md:text-4xl font-bold ${
                    line === "What can I lose?"
                      ? "text-cyan glow-text text-3xl sm:text-5xl md:text-6xl"
                      : line.startsWith("But nothing")
                      ? "text-cyan"
                      : "text-white"
                  }`}
                >
                  {line}
                </motion.p>
              )
            )}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 font-mono text-white-dim text-xs tracking-[0.3em]"
          >
            JUST KEEP PUSHIN C.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
