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
    <section id="gallery" className="relative py-28 sm:py-36 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan text-sm tracking-widest uppercase mb-4">◆ Meme Vault ◆</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            The Many Faces of Nothing
          </h2>
          <p className="text-white-dim text-lg mb-16 max-w-lg mx-auto">
            Nine scenes. One character. Zero regrets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHARACTERS.map((char, i) => (
            <motion.div
              key={char.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-surface border border-border hover:border-cyan rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={char.src}
                  alt={char.tag}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-90" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <span className="text-cyan text-xs tracking-widest block mb-2">
                  {char.tag}
                </span>
                <p className="text-white text-sm font-medium">
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
