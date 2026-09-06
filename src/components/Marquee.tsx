"use client";

const ITEMS = [
  "WHAT CAN I LOSE",
  "I STARTED WITH NOTHING",
  "$WhatC",
  "JUST KEEP PUSHIN C",
  "ROBINHOOD CHAIN",
  "NO MONEY NO FRIENDS NO LUCK JUST ME",
];

export default function Marquee() {
  const content = ITEMS.map((item) => `${item} ◆ `).join("");

  return (
    <div className="w-full bg-cyan overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="font-bold text-sm sm:text-base tracking-wider text-void">
          {content}{content}
        </span>
      </div>
    </div>
  );
}
