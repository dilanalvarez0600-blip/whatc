"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    name: "X (TWITTER)",
    desc: "Follow the signal",
    href: "#",
    icon: "𝕏",
  },
  {
    name: "TELEGRAM",
    desc: "Join the void",
    href: "#",
    icon: "✈",
  },
  {
    name: "DEXSCREENER",
    desc: "Watch the chart",
    href: "#",
    icon: "◎",
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32 px-4 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-cyan text-xs tracking-[0.3em]">05</span>
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-white-dim text-xs tracking-[0.2em]">INTEL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Join The <span className="text-cyan glow-text">Movement</span>
          </h2>
          <p className="text-white-dim text-lg mb-16 max-w-xl">
            Started with nothing. Building everything. Together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border hover:border-cyan bg-void-light hover:bg-void p-8 text-center transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <h3 className="font-mono text-white text-sm font-bold tracking-wider mb-2">
                {link.name}
              </h3>
              <p className="text-white-dim text-xs font-mono tracking-wider">
                {link.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
