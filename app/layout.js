import "./globals.css";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Quicksand,
  Playfair_Display,
} from "next/font/google";
import config from "@/data/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const siteTitle = `Thiệp cưới ${config.groom.name} & ${config.bride.name}`;
// Mô tả ngắn gọn (bỏ xuống dòng) để hiển thị đẹp trên thẻ chia sẻ
const shareDescription = (config.intro || "")
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 200);

export const metadata = {
  // Cần thiết để Next.js tạo URL tuyệt đối cho ảnh khi chia sẻ
  metadataBase: config.siteUrl ? new URL(config.siteUrl) : undefined,
  title: siteTitle,
  description: shareDescription,
  openGraph: {
    title: siteTitle,
    description: shareDescription,
    type: "website",
    locale: "vi_VN",
    url: config.siteUrl || undefined,
    siteName: siteTitle,
    images: config.ogImage
      ? [
          {
            url: config.ogImage,
            width: 1200,
            height: 630,
            alt: siteTitle,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: shareDescription,
    images: config.ogImage ? [config.ogImage] : undefined,
  },
};

export const viewport = {
  themeColor: "#b76e79",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${quicksand.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
