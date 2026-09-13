import config from "@/data/config";

// Bìa thiệp — mô phỏng mẫu cinelove: "Wedding Invitation" chữ viết tay lớn,
// tên cô dâu chú rể, ngày, khối hoa trang trí.
export default function Hero() {
  const { groom, bride, nameOrder, coverImage, dateLine1, dateLine2 } = config;
  const firstName = nameOrder === "bride" ? bride.name : groom.name;
  const secondName = nameOrder === "bride" ? groom.name : bride.name;
  const onImage = Boolean(coverImage);

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
      style={
        onImage
          ? {
              backgroundImage: `linear-gradient(rgba(37,37,37,0.35), rgba(37,37,37,0.5)), url(${coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { background: "linear-gradient(170deg,#f8f4ee 0%,#ffffff 55%,#f3ede4 100%)" }
      }
    >
      <div className="absolute inset-0 paper opacity-60" />

      {/* Hoa trang trí góc */}
      <span className="pointer-events-none absolute -left-6 top-10 text-6xl text-champagne/30 rotate-12 select-none">❀</span>
      <span className="pointer-events-none absolute -right-4 top-1/3 text-5xl text-champagne/25 -rotate-12 select-none">✿</span>

      <div className="relative z-10 flex flex-col items-center">
        <h1
          className={`big-word font-script text-6xl leading-tight md:text-8xl animate-fadeUp ${
            onImage ? "text-white" : "text-ink"
          }`}
        >
          Wedding
          <br />
          Invitation
        </h1>

        <div
          className="my-10 flex flex-col items-center gap-2 animate-fadeUp"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <span className={`text-3xl ${onImage ? "text-white/80" : "text-champagne"}`}>♥</span>
          <p
            className={`font-serif text-4xl md:text-5xl ${
              onImage ? "text-white" : "text-champagne"
            }`}
          >
            {firstName} &amp; {secondName}
          </p>
        </div>

        <p
          className={`font-serif text-xl tracking-wide md:text-2xl animate-fadeUp ${
            onImage ? "text-white" : "text-ink"
          }`}
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {dateLine1}
        </p>
        {dateLine2 ? (
          <p
            className={`mt-1 font-sans text-sm animate-fadeUp ${
              onImage ? "text-white/70" : "text-ink/60"
            }`}
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            {dateLine2}
          </p>
        ) : null}
      </div>

      <div className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce ${onImage ? "text-white" : "text-champagne"}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
