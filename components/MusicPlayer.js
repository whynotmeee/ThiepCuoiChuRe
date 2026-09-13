"use client";

import { useEffect, useRef, useState } from "react";
import config from "@/data/config";

export default function MusicPlayer() {
  const { music } = config;
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;

    // Tự phát khi người dùng "mở thiệp" (đây là tương tác người dùng nên trình duyệt cho phép)
    const onOpen = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    };
    window.addEventListener("invitation:open", onOpen);
    return () => window.removeEventListener("invitation:open", onOpen);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!music?.src) return null;

  return (
    <>
      <audio ref={audioRef} src={music.src} loop preload="none" />
      <button
        onClick={toggle}
        aria-label="Bật/tắt nhạc"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-rosegold text-white shadow-lg transition hover:bg-rosegold/90"
      >
        <span className={playing ? "animate-pulseSoft" : ""}>
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>
      </button>
    </>
  );
}
