import config from "@/data/config";
import Reveal from "./Reveal";

export default function Events() {
  const { events } = config;
  if (!events?.length) return null;

  return (
    <section className="paper bg-blush/30 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-rosegold">
            Sự kiện cưới
          </p>
          <div className="divider my-5">
            <span className="font-serif text-gold">❦</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {events.map((ev, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex h-full flex-col items-center rounded-3xl bg-white/70 p-8 text-center shadow-sm ring-1 ring-rosegold/10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rosegold/10 text-2xl text-rosegold">
                  ♥
                </div>
                <h3 className="font-serif text-3xl font-semibold text-rosegold">
                  {ev.title}
                </h3>
                <p className="mt-3 font-sans text-base text-ink/80">{ev.time}</p>
                <p className="mt-4 font-serif text-xl text-ink">{ev.venue}</p>
                <p className="mt-1 font-sans text-sm text-ink/60">{ev.address}</p>
                {ev.mapUrl ? (
                  <a
                    href={ev.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-rosegold px-6 py-2 font-sans text-sm text-rosegold transition hover:bg-rosegold hover:text-white"
                  >
                    Xem bản đồ
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
