"use client";

import { useState } from "react";
import config from "@/data/config";
import Reveal from "./Reveal";

// Nếu chưa có ảnh thật, dùng các ô placeholder gradient nhẹ nhàng
const PLACEHOLDER_COUNT = 6;

export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);

  const hasImages = gallery && gallery.length > 0;
  const items = hasImages
    ? gallery
    : Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => null);

  return (
    <section className="bg-cream px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-rosegold">
            Khoảnh khắc
          </p>
          <div className="divider my-5">
            <span className="font-serif text-gold">❦</span>
          </div>
          {!hasImages ? (
            <p className="mx-auto max-w-xl font-sans text-sm text-ink/50">
              (Thêm ảnh vào thư mục <code>/public/gallery</code> rồi liệt kê trong{" "}
              <code>data/config.js</code> để hiển thị album của bạn)
            </p>
          ) : null}
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {items.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 120} variant="zoom">
              {src ? (
                <button
                  onClick={() => setActive(src)}
                  className="group block aspect-[3/4] w-full overflow-hidden rounded-2xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Ảnh cưới ${i + 1}`}
                    className="gallery-img h-full w-full object-cover group-hover:scale-105"
                  />
                </button>
              ) : (
                <div className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blush to-sage/20 text-rosegold/40">
                  <span className="text-4xl">♥</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active}
            alt="Ảnh cưới"
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}
