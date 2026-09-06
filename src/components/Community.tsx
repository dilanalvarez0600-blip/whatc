"use client";

import { motion } from "framer-motion";

const LINKS = [
  { name: "X (Twitter)", desc: "Follow the signal", href: "#", icon: "𝕏" },
  { name: "Telegram", desc: "Join the void", href: "#", icon: "✈" },
  { name: "DexScreener", desc: "Watch the chart", href: "#", icon: "◎" },
];

export default function Community() {
  return (
    <section id="community" className="relative py-28 sm:py-36 px-4 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan text-sm tracking-widest uppercase mb-4">◆ Community ◆</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Join The Movement
          </h2>
          <p className="text-white-dim text-lg mb-16 max-w-lg mx-auto">
            Started with nothing. Building everything. Together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
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
              className="group border border-border hover:border-cyan bg-void-light hover:bg-void rounded-2xl p-8 text-center transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <h3 className="text-white text-sm font-bold tracking-wider mb-1">
                {link.name}
              </h3>
              <p className="text-white-dim text-xs tracking-wider">
                {link.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
