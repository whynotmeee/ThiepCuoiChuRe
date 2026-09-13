"use client";

import { useEffect, useState } from "react";
import config from "@/data/config";

function getRemaining(target) {
  const now = new Date().getTime();
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export default function Countdown() {
  const target = new Date(config.weddingDate).getTime();
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getRemaining(target));
    const timer = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  const boxes = [
    { label: "Ngày", value: time?.days },
    { label: "Giờ", value: time?.hours },
    { label: "Phút", value: time?.minutes },
    { label: "Giây", value: time?.seconds },
  ];

  return (
    <section className="bg-sage/10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-sage">
          Đếm ngược tới ngày chung đôi
        </p>
        <div className="divider my-5">
          <span className="font-serif text-gold">♥</span>
        </div>

        {time?.done ? (
          <p className="font-script text-4xl text-rosegold">
            Hạnh phúc đã bắt đầu!
          </p>
        ) : (
          <div className="mt-8 flex justify-center gap-3 md:gap-6">
            {boxes.map((b) => (
              <div
                key={b.label}
                className="flex w-[70px] flex-col items-center rounded-2xl bg-white/70 py-4 shadow-sm ring-1 ring-rosegold/10 md:w-[100px] md:py-6"
              >
                <span className="font-serif text-3xl font-semibold text-rosegold md:text-5xl tabular-nums">
                  {time ? String(b.value).padStart(2, "0") : "--"}
                </span>
                <span className="mt-1 font-sans text-xs uppercase tracking-wider text-ink/60 md:text-sm">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
