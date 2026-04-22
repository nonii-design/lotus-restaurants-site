import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "有限会社Lotus | 飲食ブランド（SUIREN / 粋蓮）",
    template: "%s | Lotus",
  },
  description:
    "志木・宮古島を拠点とする飲食ブランド。お箸ビストロ SUIREN（埼玉県：志木）、地鶏と島野菜 粋蓮（沖縄県：宮古島）、炉と島釜飯 粋蓮（宮古島にて2026年7月OPEN予定）。",
  openGraph: {
    title: "有限会社Lotus",
    description: "志木・宮古島をつなぐ、食の体験。SUIREN / 粋蓮。",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJp.variable} ${notoSerifJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif bg-[#0a0908] text-[rgba(234,230,222,0.96)]">
        {children}
      </body>
    </html>
  );
}
