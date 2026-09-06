"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const CONTRACT = "0xfd1c237b46d03a614ebd69a51455dce3a0ce4487";

const STEPS = [
  { num: "01", title: "Get a Wallet", desc: "Download a Robinhood-compatible wallet and set it up." },
  { num: "02", title: "Get Some ETH", desc: "Fund your wallet with ETH via bridge or direct purchase." },
  { num: "03", title: "Open the DEX", desc: "Go to the official DEX and connect your wallet." },
  { num: "04", title: "Paste the Contract", desc: "Copy the contract address and paste it in the swap." },
  { num: "05", title: "Buy the Meme", desc: "Set your amount, confirm, and join the movement." },
];

export default function HowToBuy() {
  const [copied, setCopied] = useState(false);

  const copyContract = useCallback(async () => {
    await navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section id="buy" className="relative py-28 sm:py-36 px-4 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan text-sm tracking-widest uppercase mb-4">◆ How To Buy ◆</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            How To Lose Nothing
          </h2>
          <p className="text-white-dim text-lg mb-20 max-w-lg mx-auto">
            You started with nothing. Here&apos;s how to keep the streak going.
          </p>
        </motion.div>

        <div className="space-y-10 mb-16">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan font-bold text-sm">{step.num}</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-white-dim text-base max-w-md mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-void-light border border-border rounded-2xl p-8 max-w-xl mx-auto"
        >
          <p className="text-white-dim text-xs tracking-widest uppercase mb-4">Contract Address</p>
          <p className="font-mono text-white text-sm sm:text-base break-all mb-5">
            {CONTRACT}
          </p>
          <button
            onClick={copyContract}
            className="bg-cyan hover:bg-cyan-dim text-void font-bold text-sm px-8 py-3 rounded-full transition-colors duration-200"
          >
            {copied ? "COPIED ✓" : "COPY ADDRESS"}
          </button>
          <p className="text-white-dim text-[11px] mt-4 tracking-wider">
            Always verify the contract address. Never trust a ticker alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
