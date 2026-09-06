"use client";

import Image from "next/image";

const CONTRACT = "0xfd1c237b46d03a614ebd69a51455dce3a0ce4487";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image src="/logo.png" alt="WhatC" width={48} height={48} className="mx-auto rounded-full mb-4" />
          <p className="font-bold text-white text-xl mb-2">
            What<span className="text-cyan">C</span>
          </p>
          <p className="text-white-dim text-sm">
            What can I lose, I started with nothing.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a href="#buy" className="text-white-dim hover:text-cyan text-sm transition-colors">Buy</a>
          <span className="text-border">◆</span>
          <a href="#chart" className="text-white-dim hover:text-cyan text-sm transition-colors">Chart</a>
          <span className="text-border">◆</span>
          <a href="https://x.com/whatcanilose" target="_blank" rel="noopener noreferrer" className="text-white-dim hover:text-cyan text-sm transition-colors">X</a>
          <span className="text-border">◆</span>
          <a href="https://dexscreener.com/robinhood/0xd903709cfddf776aa8bd258544f0a3cbb5298b6a7a70018bfbce268d671b0526" target="_blank" rel="noopener noreferrer" className="text-white-dim hover:text-cyan text-sm transition-colors">DexScreener</a>
        </div>

        <div className="mb-8">
          <p className="text-white-dim text-xs tracking-wider mb-1">CONTRACT</p>
          <p className="font-mono text-white-dim text-xs break-all">{CONTRACT}</p>
          <p className="text-white-dim text-xs mt-1">Robinhood Chain</p>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-white-dim text-[11px] leading-relaxed max-w-xl mx-auto mb-4">
            $WhatC is a meme coin with no intrinsic value or expectation of financial return.
            There is no formal team or roadmap. The coin is for entertainment purposes only.
          </p>
          <p className="text-white-dim text-[11px]">
            © 2026 $WhatC — Just keep pushin C.
          </p>
        </div>
      </div>
    </footer>
  );
}
