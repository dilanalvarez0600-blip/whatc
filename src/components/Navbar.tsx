"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Buy", href: "#buy" },
  { label: "Chart", href: "#chart" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="WhatC" width={32} height={32} className="rounded-full" />
          <span className="font-bold text-white text-base">
            What<span className="text-cyan">C</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white-dim hover:text-cyan text-sm transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://x.com/whatcanilose" target="_blank" rel="noopener noreferrer" className="text-white-dim hover:text-cyan text-sm transition-colors">𝕏</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white-dim hover:text-cyan text-sm transition-colors">TG</a>
          <a
            href="#buy"
            className="bg-cyan hover:bg-cyan-dim text-void text-sm font-bold px-5 py-2 rounded-full transition-colors duration-200"
          >
            Buy $WhatC
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white-dim hover:text-cyan text-2xl"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-void-light border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col items-center gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-white-dim hover:text-cyan text-lg"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#buy"
                onClick={() => setOpen(false)}
                className="bg-cyan text-void font-bold px-8 py-3 rounded-full text-base mt-2"
              >
                Buy $WhatC
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
