import config from "@/data/config";
import Reveal from "./Reveal";

// Phần thiệp mời trang trọng — mô phỏng mẫu cinelove:
// TRÂN TRỌNG KÍNH MỜI / thời gian lớn màu champagne / địa điểm / nút xem đường đi
export default function InvitationDetails() {
  const inv = config.invitation;
  if (!inv) return null;

  const lines = (t) => (t || "").split("\n");

  // Nguồn bản đồ nhúng: ưu tiên mapEmbed, nếu không thì tự tạo từ địa chỉ.
  const mapSrc = inv.mapEmbed
    ? inv.mapEmbed
    : inv.placeAddress
    ? `https://maps.google.com/maps?q=${encodeURIComponent(
        inv.placeAddress
      )}&hl=vi&z=16&output=embed`
    : "";

  return (
    <section className="paper bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-serif text-2xl font-medium uppercase tracking-wide text-ink md:text-3xl">
            {inv.heading}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-4 font-serif text-lg uppercase leading-relaxed text-ink/80">
            {lines(inv.sub).map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 font-serif text-3xl font-semibold text-champagne md:text-4xl">
            {inv.timeBig}
          </p>
          {inv.lunar ? (
            <p className="mt-2 font-serif text-lg text-ink/70">{inv.lunar}</p>
          ) : null}
        </Reveal>

        <div className="divider my-10">
          <span className="text-champagne">♥</span>
        </div>

        <Reveal delay={80}>
          <h3 className="font-serif text-2xl font-medium uppercase tracking-wide text-ink">
            {inv.placeHeading}
          </h3>
          <p className="mt-3 font-serif text-3xl font-semibold text-champagne md:text-4xl">
            {inv.placeBig}
          </p>
          <p className="mt-3 font-serif text-lg text-ink/70">{inv.placeAddress}</p>
        </Reveal>

        {inv.mapUrl ? (
          <Reveal delay={160}>
            <a
              href={inv.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#94745c] px-8 py-3 font-sans text-base text-white transition hover:opacity-90"
            >
              Xem đường đi
            </a>
          </Reveal>
        ) : null}

        {mapSrc ? (
          <Reveal delay={200}>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-sm ring-1 ring-rosegold/10">
              <iframe
                title="Bản đồ địa điểm tổ chức"
                src={mapSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
