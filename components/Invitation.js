"use client";

import { useEffect, useState } from "react";
import Envelope from "./Envelope";

// Bọc toàn bộ nội dung thiệp. Hiện màn "Chạm để mở thiệp" trước,
// khi mở sẽ hiện nội dung + bắn sự kiện để phát nhạc.
export default function Invitation({ children }) {
  const [opened, setOpened] = useState(false);

  // Khoá cuộn trang khi chưa mở thiệp
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
    window.dispatchEvent(new Event("invitation:open"));
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {!opened ? <Envelope onOpen={handleOpen} /> : null}
      <div
        className={`transition-opacity duration-1000 ${
          opened ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
