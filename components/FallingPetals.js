"use client";

import { useEffect, useState } from "react";

// Cánh hoa + trái tim rơi nhẹ nhàng từ trên xuống
export default function FallingPetals({ count = 16 }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 10,
      opacity: 0.4 + Math.random() * 0.5,
      // Tỷ lệ tim / hoa = 7/3 (70% tim, 30% hoa)
      isHeart: Math.random() < 0.7,
    }));
    setPetals(items);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {petals.map((p) =>
        p.isHeart ? (
          <span
            key={p.id}
            className="absolute top-[-40px] block leading-none"
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size + 2}px`,
              color: "#ff1e27",
              opacity: p.opacity,
              animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
            }}
          >
            ❤
          </span>
        ) : (
          <span
            key={p.id}
            className="absolute top-[-40px] block rounded-full"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              background:
                "radial-gradient(circle at 30% 30%, #f7e7e4, #b76e79)",
              animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        )
      )}
    </div>
  );
}
