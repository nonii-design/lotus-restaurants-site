import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "有限会社Lotus | 飲食ブランド（SUIREN / 粋蓮）",
    template: "%s | Lotus",
  },
  description:
    "志木・宮古島を拠点とする飲食ブランド。お箸ビストロ SUIREN、地鶏と島野菜 粋蓮、炉と島釜飯 粋蓮（2026年6月頃オープン予定）。",
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
      <body className="min-h-full flex flex-col font-sans bg-white text-[rgba(0,0,0,0.95)]">
        {children}
      </body>
    </html>
  );
}
