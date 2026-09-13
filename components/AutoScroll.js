"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tự động cuộn trang chậm rãi sau khi mở thiệp.
 * - Bắt đầu khi nhận sự kiện "invitation:open".
 * - Người dùng có thể tạm dừng / tiếp tục bằng nút nổi.
 * - Tự dừng khi người dùng CHỦ ĐỘNG cuộn (vuốt rõ ràng) hoặc khi tới cuối trang.
 *
 * Lưu ý tương thích trình duyệt trong ứng dụng (Messenger / Facebook WebView):
 *  - Không dừng chỉ vì một cú "touchstart" (cú chạm mở thiệp cũng tính là touchstart).
 *  - Dùng nhiều cách cuộn (window / documentElement / body) vì WebView có thể
 *    đặt phần tử cuộn khác nhau.
 *
 * Props:
 *  - speed: số pixel cuộn mỗi giây (mặc định 45).
 *  - startDelay: thời gian chờ trước khi bắt đầu cuộn, tính bằng ms (mặc định 2500).
 */
export default function AutoScroll({ speed = 45, startDelay = 2500 }) {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const accRef = useRef(0);
  // Vị trí cuộn kỳ vọng do chính auto-scroll tạo ra (để phân biệt với cuộn thủ công)
  const expectedYRef = useRef(0);
  // Toạ độ chạm ban đầu để nhận biết vuốt thật sự
  const touchStartYRef = useRef(null);

  // Đọc / ghi vị trí cuộn theo cách tương thích nhiều trình duyệt
  const getScrollY = () =>
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  const scrollByCompat = (dy) => {
    // Cách chuẩn
    window.scrollBy(0, dy);
    // Fallback cho WebView đặt scroller ở documentElement / body
    const y = getScrollY();
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = y;
    }
  };

  const getMaxScroll = () => {
    const doc = document.documentElement;
    const body = document.body;
    const scrollHeight = Math.max(
      doc.scrollHeight,
      body.scrollHeight,
      doc.offsetHeight,
      body.offsetHeight
    );
    return scrollHeight - window.innerHeight;
  };

  // Bắt đầu sau khi mở thiệp
  useEffect(() => {
    let timer;
    const onOpen = () => {
      setVisible(true);
      timer = setTimeout(() => {
        expectedYRef.current = getScrollY();
        setActive(true);
      }, startDelay);
    };
    window.addEventListener("invitation:open", onOpen);
    return () => {
      window.removeEventListener("invitation:open", onOpen);
      clearTimeout(timer);
    };
  }, [startDelay]);

  // Vòng lặp cuộn
  useEffect(() => {
    if (!active) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setActive(false);
      return;
    }

    const step = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = Math.min((ts - lastTsRef.current) / 1000, 0.05);
      lastTsRef.current = ts;

      accRef.current += speed * dt;
      const whole = Math.floor(accRef.current);
      if (whole >= 1) {
        accRef.current -= whole;
        scrollByCompat(whole);
        // Ghi lại vị trí kỳ vọng để so với cuộn thủ công
        expectedYRef.current = getScrollY();
      }

      if (getScrollY() >= getMaxScroll() - 2) {
        setActive(false);
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [active, speed]);

  // Dừng khi người dùng CHỦ ĐỘNG cuộn (không dừng vì cú chạm mở thiệp)
  useEffect(() => {
    if (!active) return;

    const stop = () => setActive(false);

    // Chuột / trackpad: cuộn là chủ động -> dừng
    const onWheel = () => stop();

    // Bàn phím: các phím điều hướng -> dừng
    const onKeydown = (e) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];
      if (keys.includes(e.key)) stop();
    };

    // Cảm ứng: chỉ dừng khi vuốt rõ ràng (di chuyển > 8px), không dừng khi chạm nhẹ
    const onTouchStart = (e) => {
      touchStartYRef.current = e.touches?.[0]?.clientY ?? null;
    };
    const onTouchMove = (e) => {
      const y = e.touches?.[0]?.clientY;
      if (touchStartYRef.current == null || y == null) return;
      if (Math.abs(y - touchStartYRef.current) > 8) stop();
    };

    const opts = { passive: true };
    window.addEventListener("wheel", onWheel, opts);
    window.addEventListener("keydown", onKeydown);
    window.addEventListener("touchstart", onTouchStart, opts);
    window.addEventListener("touchmove", onTouchMove, opts);
    return () => {
      window.removeEventListener("wheel", onWheel, opts);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("touchstart", onTouchStart, opts);
      window.removeEventListener("touchmove", onTouchMove, opts);
    };
  }, [active]);

  if (!visible) return null;

  return (
    <button
      onClick={() => {
        lastTsRef.current = null;
        expectedYRef.current = getScrollY();
        setActive((v) => !v);
      }}
      aria-label={active ? "Tạm dừng tự cuộn" : "Tự động cuộn"}
      className="fixed bottom-5 right-20 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-rosegold text-white shadow-lg transition hover:bg-rosegold/90"
    >
      {active ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.4 1.4L16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8z" transform="rotate(90 12 12)" />
        </svg>
      )}
    </button>
  );
}
