"use client";

import { useEffect, useRef, useState } from "react";

// Bọc nội dung để tạo hiệu ứng hiện dần khi cuộn tới
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "default",
}) {
  const baseClass = variant === "zoom" ? "reveal-zoom" : "reveal";
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
