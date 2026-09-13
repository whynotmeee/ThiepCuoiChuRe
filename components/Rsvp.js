"use client";

import { useState } from "react";
import config from "@/data/config";
import Reveal from "./Reveal";

export default function Rsvp() {
  const [form, setForm] = useState({
    name: "",
    attend: "yes",
    guests: "1",
    wish: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const rsvp = config.rsvp;

    // Gửi dữ liệu vào Google Form (nếu đã cấu hình)
    if (rsvp?.formId && rsvp?.fields) {
      try {
        const data = new FormData();
        data.append(rsvp.fields.name, form.name);
        data.append(
          rsvp.fields.attend,
          form.attend === "yes" ? rsvp.attendYes : rsvp.attendNo
        );
        // Chỉ gửi số người khi có tham dự
        data.append(
          rsvp.fields.guests,
          form.attend === "yes" ? form.guests : ""
        );
        data.append(rsvp.fields.wish, form.wish);

        const url = `https://docs.google.com/forms/d/e/${rsvp.formId}/formResponse`;
        // no-cors: Google Form không trả CORS, nhưng vẫn ghi nhận được dữ liệu
        await fetch(url, {
          method: "POST",
          mode: "no-cors",
          body: data,
        });
      } catch (_) {
        // Bỏ qua lỗi mạng — vẫn hiển thị lời cảm ơn để trải nghiệm mượt
      }
    }

    // Lưu bản sao vào localStorage phòng khi cần đối chiếu
    try {
      const key = "rsvp_responses";
      const prev = JSON.parse(localStorage.getItem(key) || "[]");
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(prev));
    } catch (_) {}

    setSending(false);
    setSubmitted(true);
  };

  return (
    <section className="paper bg-blush/30 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-rosegold">
            Xác nhận tham dự
          </p>
          <div className="divider my-5">
            <span className="font-serif text-gold">♥</span>
          </div>
          <p className="font-serif text-lg text-ink/70">
            Hãy cho chúng tôi biết bạn có thể đến chung vui nhé!
          </p>
        </Reveal>

        <Reveal delay={100}>
          {submitted ? (
            <div className="mt-8 rounded-3xl bg-white/80 p-10 text-center shadow-sm ring-1 ring-rosegold/10">
              <p className="text-4xl">💌</p>
              <h3 className="mt-4 font-script text-4xl text-rosegold">
                Cảm ơn bạn!
              </h3>
              <p className="mt-2 font-serif text-lg text-ink/70">
                Chúng tôi đã nhận được lời phản hồi của bạn.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5 rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-rosegold/10"
            >
              <div>
                <label className="mb-1 block font-sans text-sm text-ink/70">
                  Họ và tên
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-xl border border-rosegold/20 bg-cream px-4 py-3 font-serif text-lg outline-none focus:border-rosegold"
                />
              </div>

              <div>
                <label className="mb-1 block font-sans text-sm text-ink/70">
                  Bạn sẽ tham dự chứ?
                </label>
                <select
                  name="attend"
                  value={form.attend}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-rosegold/20 bg-cream px-4 py-3 font-serif text-lg outline-none focus:border-rosegold"
                >
                  <option value="yes">Có, tôi sẽ đến</option>
                  <option value="no">Rất tiếc, tôi không thể đến</option>
                </select>
              </div>

              {form.attend === "yes" ? (
                <div>
                  <label className="mb-1 block font-sans text-sm text-ink/70">
                    Số người tham dự
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-rosegold/20 bg-cream px-4 py-3 font-serif text-lg outline-none focus:border-rosegold"
                  />
                </div>
              ) : null}

              <div>
                <label className="mb-1 block font-sans text-sm text-ink/70">
                  Lời chúc
                </label>
                <textarea
                  name="wish"
                  value={form.wish}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Gửi lời chúc tới cô dâu chú rể..."
                  className="w-full rounded-xl border border-rosegold/20 bg-cream px-4 py-3 font-serif text-lg outline-none focus:border-rosegold"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-rosegold py-3 font-sans text-base text-white transition hover:bg-rosegold/90 disabled:opacity-60"
              >
                {sending ? "Đang gửi..." : "Gửi xác nhận"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
