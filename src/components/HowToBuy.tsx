"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const CONTRACT = "PASTE_CONTRACT_HERE";

const STEPS = [
  {
    num: "01",
    title: "GET A WALLET",
    desc: "Download a Robinhood-compatible wallet. Set it up. Guard your seed phrase with your life.",
  },
  {
    num: "02",
    title: "GET SOME ETH",
    desc: "Fund your wallet with ETH. You can bridge from Ethereum or buy directly.",
  },
  {
    num: "03",
    title: "OPEN THE DEX",
    desc: "Go to the official DEX. Connect your wallet. Prepare to lose nothing.",
  },
  {
    num: "04",
    title: "PASTE THE CONTRACT",
    desc: "Copy the contract address below. Paste it in the swap. Verify it's correct.",
  },
  {
    num: "05",
    title: "BUY THE MEME",
    desc: "Set your amount. Confirm the swap. Welcome to the movement.",
  },
];

export default function HowToBuy() {
  const [copied, setCopied] = useState(false);

  const copyContract = useCallback(async () => {
    await navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section id="buy" className="relative py-24 sm:py-32 px-4 bg-surface border-y border-border noise-bg">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-cyan text-xs tracking-[0.3em]">03</span>
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-white-dim text-xs tracking-[0.2em]">ACQUISITION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            How To <span className="text-cyan glow-text">Lose Nothing</span>
          </h2>
          <p className="text-white-dim text-lg mb-16 max-w-xl">
            You started with nothing. Here&apos;s how to keep the streak going.
          </p>
        </motion.div>

        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 sm:gap-8 pb-10 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-cyan flex items-center justify-center shrink-0">
                  <span className="font-mono text-cyan text-sm sm:text-base font-bold">{step.num}</span>
                </div>
                {i < STEPS.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pt-2 sm:pt-3">
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{step.title}</h3>
                <p className="text-white-dim text-sm sm:text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 bg-void-light border border-border"
        >
          <p className="font-mono text-white-dim text-xs mb-3 tracking-[0.2em]">CONTRACT ADDRESS</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <code className="font-mono text-white text-sm sm:text-base break-all flex-1">
              {CONTRACT}
            </code>
            <button
              onClick={copyContract}
              className="bg-cyan hover:bg-cyan-dim text-void font-mono text-xs font-bold tracking-wider px-6 py-3 transition-colors duration-200 shrink-0"
            >
              {copied ? "COPIED ✓" : "COPY"}
            </button>
          </div>
          <p className="font-mono text-white-dim text-[10px] mt-3 tracking-wider">
            ALWAYS VERIFY THE CONTRACT ADDRESS. NEVER TRUST A TICKER ALONE.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
