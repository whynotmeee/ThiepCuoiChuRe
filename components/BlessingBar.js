"use client";

import { useEffect, useState } from "react";
import config from "@/data/config";

// Thanh lời chúc chạy nổi ở góc (mô phỏng "blessing-box" của mẫu cinelove)
export default function BlessingBar() {
  const blessings = config.blessings || [];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (blessings.length === 0) return;
    const timer = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % blessings.length);
        setShow(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, [blessings.length]);

  if (blessings.length === 0) return null;
  const b = blessings[index];

  return (
    <div className="pointer-events-none fixed left-1/2 top-4 z-40 w-[92%] max-w-md -translate-x-1/2">
      <div
        className={`rounded-full bg-white/90 px-4 py-2 text-center text-sm shadow-md ring-1 ring-champagne/20 backdrop-blur transition-all duration-300 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <span className="font-semibold text-champagne">{b.name}</span>
        <span className="text-ink/70">: {b.text}</span>
      </div>
    </div>
  );
}
