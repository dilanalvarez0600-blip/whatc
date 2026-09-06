"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "STORY", href: "#story" },
  { label: "GALLERY", href: "#gallery" },
  { label: "BUY", href: "#buy" },
  { label: "CHART", href: "#chart" },
  { label: "COMMUNITY", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <Image src="/logo.png" alt="WhatC" width={36} height={36} className="rounded-full" />
            <span className="font-bold text-white text-lg">
              What<span className="text-cyan">C</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white-dim hover:text-cyan text-xs font-mono tracking-widest transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#buy"
              className="bg-cyan hover:bg-cyan-dim text-void text-xs font-mono font-bold tracking-widest px-5 py-2.5 transition-colors duration-200"
            >
              BUY $WhatC
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white-dim hover:text-cyan font-mono text-sm tracking-wider"
          >
            {open ? "[×]" : "[≡]"}
          </button>
        </div>
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
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-white-dim hover:text-cyan text-sm font-mono tracking-widest"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#buy"
                onClick={() => setOpen(false)}
                className="bg-cyan text-void text-sm font-mono font-bold tracking-widest px-5 py-3 text-center"
              >
                BUY $WhatC
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
