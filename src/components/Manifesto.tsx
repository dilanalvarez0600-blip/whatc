"use client";

import { motion } from "framer-motion";

const LINES = [
  { text: "No money.", style: "normal" },
  { text: "No friends.", style: "normal" },
  { text: "No luck.", style: "normal" },
  { text: "Just me.", style: "normal" },
  { text: "", style: "spacer" },
  { text: "What can I lose?", style: "hero" },
  { text: "", style: "spacer" },
  { text: "I started with nothing.", style: "normal" },
  { text: "I still have most of it.", style: "dim" },
  { text: "", style: "spacer" },
  { text: "But nothing is where", style: "accent" },
  { text: "everything begins.", style: "accent" },
];

export default function Manifesto() {
  return (
    <section className="relative py-28 sm:py-36 px-4 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan text-sm tracking-widest uppercase mb-20">◆ The Philosophy ◆</p>

          <div className="space-y-3">
            {LINES.map((line, i) =>
              line.style === "spacer" ? (
                <div key={i} className="h-8" />
              ) : (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={
                    line.style === "hero"
                      ? "text-4xl sm:text-6xl md:text-7xl font-bold text-cyan glow-text"
                      : line.style === "accent"
                      ? "text-2xl sm:text-3xl md:text-4xl font-bold text-cyan"
                      : line.style === "dim"
                      ? "text-xl sm:text-2xl md:text-3xl font-bold text-white-dim"
                      : "text-xl sm:text-2xl md:text-3xl font-bold text-white"
                  }
                >
                  {line.text}
                </motion.p>
              )
            )}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-white-dim text-sm tracking-widest"
          >
            JUST KEEP PUSHIN C.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
