"use client";

const ITEMS = [
  "WHAT CAN I LOSE",
  "I STARTED WITH NOTHING",
  "$WhatC",
  "JUST KEEP PUSHIN C",
  "NO MONEY",
  "NO FRIENDS",
  "NO LUCK",
  "JUST ME",
  "ROBINHOOD CHAIN",
  "SMALL STEPS BIG DREAMS",
];

export default function Marquee() {
  const content = ITEMS.map((item) => `${item} ◆ `).join("");

  return (
    <div className="w-full border-y border-border bg-surface overflow-hidden py-3 relative">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="font-mono text-xs sm:text-sm tracking-[0.15em] text-cyan">
          {content}{content}
        </span>
      </div>
    </div>
  );
}
