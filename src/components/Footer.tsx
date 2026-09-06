"use client";

import Image from "next/image";

const CONTRACT = "PASTE_CONTRACT_HERE";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-void-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="WhatC" width={28} height={28} className="rounded-full" />
              <span className="font-bold text-white">
                What<span className="text-cyan">C</span>
              </span>
            </div>
            <p className="text-white-dim text-sm leading-relaxed">
              What can I lose, I started with nothing.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-white text-xs tracking-[0.2em] mb-4">LINKS</h4>
            <div className="space-y-2">
              <a href="#buy" className="block text-white-dim hover:text-cyan text-sm transition-colors">Buy $WhatC</a>
              <a href="#chart" className="block text-white-dim hover:text-cyan text-sm transition-colors">Chart</a>
              <a href="#" className="block text-white-dim hover:text-cyan text-sm transition-colors">DexScreener</a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-white text-xs tracking-[0.2em] mb-4">COMMUNITY</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white-dim hover:text-cyan text-sm transition-colors">X (Twitter)</a>
              <a href="#" className="block text-white-dim hover:text-cyan text-sm transition-colors">Telegram</a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-white text-xs tracking-[0.2em] mb-4">CONTRACT</h4>
            <p className="font-mono text-white-dim text-[10px] break-all leading-relaxed">{CONTRACT}</p>
            <p className="font-mono text-white-dim text-[10px] mt-2">Robinhood Chain</p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-white-dim text-[10px] font-mono text-center leading-relaxed max-w-2xl mx-auto">
            $WhatC is a meme coin with no intrinsic value or expectation of financial return.
            There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
            Do your own research before making any financial decisions.
          </p>
          <p className="text-white-dim text-[10px] font-mono text-center mt-4">
            © 2026 $WhatC — Just keep pushin C.
          </p>
        </div>
      </div>
    </footer>
  );
}
