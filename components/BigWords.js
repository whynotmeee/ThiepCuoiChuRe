import Reveal from "./Reveal";

// Khối chữ in hoa lớn kiểu điện ảnh (YOU ARE / THE LOVE OF / MY LIFE)
export default function BigWords({ words = [], tone = "light", sub }) {
  if (!words.length) return null;
  const dark = tone === "dark";

  return (
    <section
      className={`px-6 py-16 md:py-24 ${dark ? "bg-ink text-white" : "bg-white text-ink"}`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex flex-col items-center gap-1">
            {words.map((w, i) => (
              <span
                key={i}
                className="font-sans text-2xl font-medium uppercase tracking-[0.15em] md:text-4xl"
                style={{ color: i === 1 ? "#baa58a" : undefined }}
              >
                {w}
              </span>
            ))}
          </div>
          {sub ? (
            <p className={`mt-6 font-serif text-lg italic ${dark ? "text-white/70" : "text-ink/60"}`}>
              {sub}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
