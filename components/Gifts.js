"use client";

import { useState } from "react";
import config from "@/data/config";
import Reveal from "./Reveal";

// Tạo URL mã QR VietQR từ mã BIN ngân hàng + số tài khoản.
// Nếu người dùng đã có sẵn ảnh QR (g.qr) thì ưu tiên dùng ảnh đó.
function getQrSrc(g) {
  if (g.qr) return g.qr;
  if (g.bankBin && g.accountNumber) {
    const params = new URLSearchParams();
    if (g.accountName) params.set("accountName", g.accountName);
    const query = params.toString();
    return `https://img.vietqr.io/image/${g.bankBin}-${g.accountNumber}-compact2.png${
      query ? `?${query}` : ""
    }`;
  }
  return "";
}

export default function Gifts() {
  const { gifts } = config;
  const [showQr, setShowQr] = useState(false);

  if (!gifts?.length) return null;

  const gift = gifts[0];
  const qrSrc = getQrSrc(gift);

  return (
    <section className="bg-sage/10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          {!showQr ? (
            // --- Hộp quà: chạm để hiện QR ngay tại chỗ ---
            <button
              onClick={() => setShowQr(true)}
              className="group mx-auto block"
              aria-label="Chạm để nhận mã QR"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 animate-wobble items-center justify-center rounded-2xl bg-champagne/15 text-3xl text-champagne transition group-hover:scale-110">
                🎁
              </div>
              <p className="font-serif text-2xl text-ink">Hộp quà cưới</p>
              <div className="divider my-5">
                <span className="font-serif text-gold">♥</span>
              </div>
              <p className="mx-auto max-w-xl font-serif text-lg text-ink/70">
                Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi lời
                chúc qua chuyển khoản, hãy chạm vào hộp quà để nhận mã QR.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-rosegold px-6 py-2 font-sans text-sm text-white transition group-hover:bg-rosegold/90">
                Chạm để nhận mã QR
              </span>
            </button>
          ) : (
            // --- Mã QR hiện ngay tại chỗ (thay cho hộp quà) ---
            <div>
              <h3 className="font-serif text-2xl font-semibold text-rosegold">
                {gift.owner}
              </h3>
              {gift.bank ? (
                <p className="mt-1 font-sans text-sm uppercase tracking-wider text-sage">
                  {gift.bank}
                </p>
              ) : null}

              {qrSrc ? (
                <div className="mx-auto mt-5 w-64 max-w-full overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-rosegold/15">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrSrc}
                    alt={`Mã QR chuyển khoản ${gift.owner}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <p className="mt-5 font-sans text-sm text-ink/50">
                  (Chưa cấu hình mã QR)
                </p>
              )}

              <p className="mt-4 font-sans text-sm text-ink/50">
                Quét mã QR để gửi lời chúc mừng
              </p>

              <button
                onClick={() => setShowQr(false)}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink/5 px-6 py-2 font-sans text-sm text-ink/60 transition hover:bg-ink/10"
              >
                Đóng
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
