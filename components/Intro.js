import config from "@/data/config";
import Reveal from "./Reveal";

// Lời ngỏ + lời cảm ơn tiếng Anh + tên cô dâu chú rể kèm ảnh
export default function Intro() {
  const { groom, bride, nameOrder, intro, introEn, coupleImage } = config;
  const first = nameOrder === "bride" ? bride : groom;
  const second = nameOrder === "bride" ? groom : bride;

  const lines = (t) => (t || "").split("\n");

  const PersonCard = ({ p }) => (
    <div className="flex flex-col items-center">
      <p className="font-serif text-3xl text-champagne">{p.name}</p>
      <p className="mt-1 font-sans text-xs uppercase tracking-widest text-ink/50">
        {p.role}
      </p>
    </div>
  );

  return (
    <section className="paper bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="font-serif text-lg leading-relaxed text-ink/80 md:text-xl">
            {lines(intro).map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </Reveal>

        {introEn ? (
          <Reveal delay={100}>
            <div className="mt-8 font-sans text-sm uppercase leading-relaxed tracking-wide text-champagne">
              {lines(introEn).map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </Reveal>
        ) : null}

        <div className="divider my-10">
          <span className="text-champagne">♥</span>
        </div>

        <Reveal delay={120}>
          <div className="flex items-center justify-center gap-6 md:gap-12">
            <PersonCard p={first} />
            <span className="font-script text-4xl text-champagne md:text-5xl">&amp;</span>
            <PersonCard p={second} />
          </div>
        </Reveal>

        {coupleImage ? (
          <Reveal delay={160}>
            <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-3xl shadow-sm ring-1 ring-rosegold/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={coupleImage}
                alt={`${bride.name} & ${groom.name}`}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
