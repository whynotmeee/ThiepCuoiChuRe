import config from "@/data/config";
import Reveal from "./Reveal";

// Lịch tháng đánh dấu ngày cưới (phong cách cinelove)
export default function Calendar() {
  const date = new Date(config.weddingDate);
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-based
  const weddingDay = date.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // getDay(): 0=CN..6=T7. Chuyển sang tuần bắt đầu từ Thứ 2.
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const dd = String(weddingDay).padStart(2, "0");
  const mm = String(month + 1).padStart(2, "0");

  return (
    <section className="bg-blush/30 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-md">
        <Reveal className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-rosegold">
            Ngày trọng đại
          </p>
          <div className="divider my-5">
            <span className="text-gold">♥</span>
          </div>
          <h3 className="font-serif text-2xl text-ink">
            Tháng {mm} năm {year}
          </h3>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-rosegold/10 md:p-7">
            <div className="grid grid-cols-7 gap-1 text-center">
              {weekdays.map((w) => (
                <div
                  key={w}
                  className="py-2 font-sans text-xs font-medium uppercase text-sage"
                >
                  {w}
                </div>
              ))}
              {cells.map((d, i) => {
                const isWedding = d === weddingDay;
                return (
                  <div
                    key={i}
                    className={`flex aspect-square items-center justify-center rounded-full font-serif text-sm md:text-base ${
                      d === null
                        ? ""
                        : isWedding
                        ? "bg-rosegold font-semibold text-white shadow-md animate-pulseSoft"
                        : "text-ink/70"
                    }`}
                  >
                    {isWedding ? (
                      <span className="relative flex items-center justify-center">
                        <span className="absolute text-lg">♥</span>
                        <span className="relative">{d}</span>
                      </span>
                    ) : (
                      d
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-5 text-center font-serif text-lg text-ink/70">
            Đánh dấu ngày <span className="text-rosegold">{dd}/{mm}</span> nhé!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
