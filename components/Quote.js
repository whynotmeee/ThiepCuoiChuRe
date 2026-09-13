import Reveal from "./Reveal";

// Section câu thơ tình + (tuỳ chọn) khối chữ in hoa lớn kiểu điện ảnh.
export default function Quote({ data, tone = "light" }) {
  if (!data) return null;
  const dark = tone === "dark";
  const lines = (t) => (t || "").split("\n");

  return (
    <section
      className={`relative overflow-hidden px-6 py-20 md:py-28 ${
        dark ? "bg-ink text-white" : "bg-white text-ink"
      }`}
    >
      <div className="mx-auto max-w-3xl text-center">
        {data.words?.length ? (
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {data.words.map((w, i) => (
                <span
                  key={i}
                  className={`font-script text-4xl md:text-6xl ${
                    dark ? "text-white" : "text-champagne"
                  }`}
                >
                  {w}
                </span>
              ))}
            </div>
          </Reveal>
        ) : null}

        {data.vi ? (
          <Reveal delay={100}>
            <div className="font-serif text-xl italic leading-relaxed md:text-2xl">
              {lines(data.vi).map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </Reveal>
        ) : null}

        {data.en ? (
          <Reveal delay={180}>
            <div className={`mt-5 font-sans text-sm tracking-wide ${dark ? "text-white/60" : "text-ink/50"}`}>
              {lines(data.en).map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
