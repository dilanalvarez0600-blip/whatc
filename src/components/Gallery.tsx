"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CHARACTERS = [
  { src: "/char-dreamer.png", caption: "Small steps. Big dreams.", tag: "THE DREAMER" },
  { src: "/char-sunset.png", caption: "What can I lose, I started with nothing.", tag: "THE ORIGIN" },
  { src: "/char-grinder.png", caption: "No money. No friends. No luck. Just me.", tag: "THE GRINDER" },
  { src: "/char-rocket.png", caption: "Next stop: everywhere.", tag: "THE ROCKET" },
  { src: "/char-logo.png", caption: "Meme Coin. Community. Freedom.", tag: "THE LOGO" },
  { src: "/char-artist.png", caption: "Writing our story on every wall.", tag: "THE ARTIST" },
  { src: "/char-rooftop.png", caption: "Community. Growth. Freedom.", tag: "THE ROOFTOP" },
  { src: "/char-builder.png", caption: "Dream. Build. Grow. Together.", tag: "THE BUILDER" },
  { src: "/char-peeker.png", caption: "Watching from nothing. Building everything.", tag: "THE PEEKER" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-cyan text-xs tracking-[0.3em]">02</span>
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-white-dim text-xs tracking-[0.2em]">MEME VAULT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            The <span className="text-cyan glow-text">Many Faces</span> of Nothing
          </h2>
          <p className="text-white-dim text-lg mb-16 max-w-xl">
            Nine scenes. One character. Zero regrets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CHARACTERS.map((char, i) => (
            <motion.div
              key={char.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-surface border border-border hover:border-cyan transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={char.src}
                  alt={char.tag}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="font-mono text-cyan text-[10px] tracking-[0.3em] block mb-1">
                  {char.tag}
                </span>
                <p className="text-white text-sm font-medium leading-snug">
                  {char.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
