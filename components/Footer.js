import config from "@/data/config";

export default function Footer() {
  const { groom, bride, nameOrder, thankYou, hashtag, closingQuote } = config;
  const first = nameOrder === "bride" ? bride.name : groom.name;
  const second = nameOrder === "bride" ? groom.name : bride.name;
  const lines = (t) => (t || "").split("\n");

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-blush px-6 py-20 text-center">
      <div className="absolute inset-0 paper opacity-50" />
      <div className="relative z-10">
        {closingQuote ? (
          <div className="mx-auto mb-10 max-w-2xl font-serif text-lg italic leading-relaxed text-ink/70">
            {lines(closingQuote).map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        ) : null}

        <p className="mx-auto max-w-xl font-serif text-xl leading-relaxed text-ink/80">
          {thankYou}
        </p>
        <div className="divider my-8 mx-auto max-w-xs">
          <span className="font-serif text-gold">♥</span>
        </div>
        <h2 className="font-script text-5xl text-champagne md:text-6xl">
          {first} &amp; {second}
        </h2>
        {hashtag ? (
          <p className="mt-4 font-sans text-sm uppercase tracking-[0.3em] text-champagne/80">
            {hashtag}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
