import config from "@/data/config";
import Reveal from "./Reveal";

export default function Story() {
  const { story } = config;
  if (!story?.length) return null;

  return (
    <section className="bg-cream px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-rosegold">
            Chuyện tình yêu
          </p>
          <div className="divider my-5">
            <span className="font-serif text-gold">♥</span>
          </div>
        </Reveal>

        <div className="relative mt-10 border-l-2 border-rosegold/25 pl-8 md:pl-12">
          {story.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="relative mb-12 last:mb-0">
                <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rosegold ring-4 ring-blush md:-left-[57px]" />
                <p className="font-script text-2xl text-gold">{item.date}</p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 font-serif text-lg leading-relaxed text-ink/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
