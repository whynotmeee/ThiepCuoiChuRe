"use client";

import { useState } from "react";
import config from "@/data/config";

// Màn mở đầu "Chạm để mở thiệp" — phong bì lớn, khi bấm sẽ mở nắp,
// lá thư trượt lên rồi cả overlay mờ dần và phát nhạc (nếu có).
export default function Envelope({ onOpen }) {
  const { groom, bride, nameOrder, coverImage } = config;
  const [opening, setOpening] = useState(false);

  const first = nameOrder === "bride" ? bride.name : groom.name;
  const second = nameOrder === "bride" ? groom.name : bride.name;

  // Các trái tim bay ra khi mở thiệp
  const burstHearts = Array.from({ length: 14 }).map((_, i) => {
    const angle = -90 + (Math.random() * 160 - 80); // hướng lên, lệch trái/phải
    const distance = 120 + Math.random() * 160;
    const rad = (angle * Math.PI) / 180;
    return {
      id: i,
      dx: Math.cos(rad) * distance,
      dy: Math.sin(rad) * distance,
      size: 60 + Math.random() * 56,
      delay: Math.random() * 0.5,
      duration: 1.6 + Math.random() * 0.4,
      rotate: Math.random() * 60 - 30,
    };
  });

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // Chờ animation mở thiệp + tim bay chạy xong rồi mới hiện nội dung
    setTimeout(() => onOpen?.(), 1600);
  };

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center px-6 text-center transition-all duration-700 ${
        opening ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        background: coverImage
          ? `linear-gradient(rgba(30,20,20,0.5), rgba(30,20,20,0.6)), url(${coverImage}) center/cover`
          : "linear-gradient(160deg, #f7e7e4 0%, #fdfbf7 45%, #e8ede2 100%)",
        transform: opening ? "scale(1.08)" : "scale(1)",
      }}
    >
      <h1
        className={`big-word font-script text-5xl leading-tight md:text-7xl ${
          coverImage ? "text-white" : "text-ink"
        }`}
      >
        Wedding
        <br />
        Invitation
      </h1>

      <div className="my-6 flex flex-col items-center gap-2">
        <span className={coverImage ? "text-white/80" : "text-champagne"}>♥</span>
        <p
          className={`font-serif text-3xl md:text-4xl ${
            coverImage ? "text-white" : "text-champagne"
          }`}
        >
          {first} &amp; {second}
        </p>
      </div>

      {/* Phong bì lớn có thể mở */}
      <button
        onClick={handleOpen}
        aria-label="Chạm để mở thiệp"
        className={`group relative mt-2 block ${coverImage ? "text-white" : "text-ink"}`}
      >
        <div
          className={`envelope ${opening ? "is-open" : ""} relative mx-auto`}
          style={{ width: 220, height: 150 }}
        >
          {/* Thân phong bì */}
          <div className="envelope-body absolute inset-0 rounded-lg bg-[#f3e3d7] shadow-xl ring-1 ring-rosegold/30" />

          {/* Lá thư trượt lên khi mở */}
          <div className="envelope-letter absolute left-1/2 top-3 h-[120px] w-[86%] -translate-x-1/2 rounded-md bg-white shadow-md ring-1 ring-rosegold/15">
            <div className="flex h-full flex-col items-center justify-center gap-1 px-2">
              <span className="text-2xl text-rosegold">♥</span>
              <p className="font-script text-xl leading-none text-rosegold">
                {first} &amp; {second}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/50">
                Save the date
              </p>
            </div>
          </div>

          {/* Nếp gấp thân dưới (che phần dưới lá thư) */}
          <div className="envelope-pocket absolute inset-x-0 bottom-0 h-[92px] rounded-b-lg bg-[#ecd6c6]" />

          {/* Nắp phong bì (mở lên khi bấm) */}
          <div className="envelope-flap absolute inset-x-0 top-0 h-[75px] origin-top">
            <div
              className="mx-auto h-0 w-0"
              style={{
                borderLeft: "110px solid transparent",
                borderRight: "110px solid transparent",
                borderTop: "75px solid #e7cbb8",
              }}
            />
          </div>

          {/* Trái tim niêm phong */}
          <span className="envelope-seal absolute left-1/2 top-[46px] -translate-x-1/2 text-2xl text-[#ff1e27]">
            ❤
          </span>

          {/* Trái tim bay ra khi mở thiệp */}
          {opening
            ? burstHearts.map((h) => (
                <span
                  key={h.id}
                  className="burst-heart absolute left-1/2 top-[40px] text-[#ff1e27]"
                  style={{
                    fontSize: `${h.size}px`,
                    "--dx": `${h.dx}px`,
                    "--dy": `${h.dy}px`,
                    "--rot": `${h.rotate}deg`,
                    animation: `heartBurst ${h.duration}s ease-out ${h.delay}s forwards`,
                  }}
                >
                  ❤
                </span>
              ))
            : null}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.3em]">
          {opening ? "Đang mở..." : "Chạm để mở thiệp"}
        </span>
      </button>
    </div>
  );
}
