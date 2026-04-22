/**
 * 公開前に各URL・画像パスを実データに差し替えてください。
 * 画像は /public 配下に置き、パスは "/images/..." のように指定できます。
 */

export type StoreStatus = "open" | "coming_soon";

export interface Store {
  slug: string;
  nameJa: string;
  nameSub?: string;
  tagline: string;
  location: string;
  status: StoreStatus;
  /** coming_soon のとき表示（例: 宮古島にて2026年7月OPEN予定） */
  openingNote?: string;
  /** 単価帯など短い補足表示（例: "客単価 5,000〜6,000円"） */
  priceNote?: string;
  /** ターゲット層など（例: "地元のお客様が中心"） */
  conceptNote?: string;
  heroImage: string;
  gallery: string[];
  instagramUrl: string;
  reserveUrl: string;
  /** まだ無い場合は null（ボタンを非表示または無効化） */
  googleBusinessUrl: string | null;
  description: string;
}

/**
 * 全店舗共通のブランド動画（SUIREN＋粋蓮を合わせたイメージムービー）。
 * 動画を掲載する場合は /public/videos/ 配下にファイルを置き、
 * brandVideo.src を "/videos/xxx.mp4" のように指定してください。
 */
export const brandVideo = {
  src: null as string | null,
  poster: "/images/suiren-miyako/miyako-30.jpg",
  title: "Brand Movie",
  caption: "お箸ビストロ SUIREN と 粋蓮 — 志木・宮古島をつなぐ、食の体験。",
};

export const company = {
  legalName: "有限会社Lotus",
  legalNameEn: "Lotus Co., Ltd.",
  tagline: "志木・宮古島をつなぐ、食の体験。",
  established: "1999年7月",
  representative: "取締役 坂西 優馬",
  partner: "THE BROTHER WORKS（宮古島）",
  employees: "30名（2026年5月時点）",
  businessDescription:
    "飲食店経営／飲食店オペレーション受託業務／飲食店コンサルティング業務",
  banks: "沖縄銀行・三井住友銀行・東京信用金庫",
  contactEmail: "info@and-suiren.com",
  offices: [
    {
      label: "本社（店舗）",
      address: "沖縄県宮古島市平良下里542-2 与古田ハイツ103",
    },
    {
      label: "埼玉（店舗）",
      address: "埼玉県志木市本町5-24-2 TOMONIビル1F",
    },
  ],
};

export const stores: Store[] = [
  {
    slug: "suiren-shiki",
    nameJa: "お箸ビストロ SUIREN",
    nameSub: "埼玉県：志木",
    tagline: "箸で愉しむ、ビストロの時間。",
    location: "埼玉県志木市本町5-24-2 TOMONIビル1F",
    status: "open",
    heroImage: "/images/suiren-shiki/shiki-16.jpg",
    gallery: [
      "/images/suiren-shiki/shiki-14.jpg",
      "/images/suiren-shiki/shiki-10.jpg",
      "/images/suiren-shiki/shiki-07.jpg",
      "/images/suiren-shiki/shiki-18.jpg",
      "/images/suiren-shiki/shiki-01.jpg",
      "/images/suiren-shiki/shiki-22.jpg",
    ],
    instagramUrl: "https://www.instagram.com/and.suiren/",
    reserveUrl: "https://www.hotpepper.jp/strJ003410690/yoyaku/hpds/",
    googleBusinessUrl: "https://share.google/BiQSfbqHZErGAGwhB",
    description:
      "東武東上線志木駅東口からスキップで1分♪\n肩肘張らないカジュアルな創作ビストロ。美味しかったよ、も大事ですが、楽しかったよ、と言って頂けるお店作りを。",
  },
  {
    slug: "suiren-miyako",
    nameJa: "地鶏と島野菜 粋蓮",
    nameSub: "沖縄県：宮古島",
    tagline: "島の恵みを活かし、地鶏を食らう。",
    location: "沖縄県宮古島市",
    status: "open",
    heroImage: "/images/suiren-miyako/miyako-30.jpg",
    gallery: [
      "/images/suiren-miyako/miyako-38.jpg",
      "/images/suiren-miyako/miyako-20.jpg",
      "/images/suiren-miyako/miyako-03.jpg",
      "/images/suiren-miyako/miyako-35.jpg",
      "/images/suiren-miyako/miyako-01.jpg",
      "/images/suiren-miyako/miyako-04.jpg",
    ],
    instagramUrl: "https://www.instagram.com/and.suiren.miyakojima/",
    reserveUrl: "https://www.hotpepper.jp/strJ003851473/yoyaku/hpds/",
    googleBusinessUrl: "https://share.google/67l98zmxGrRQEvSga",
    conceptNote: "地元のお客様を中心に、観光シーズン（4月〜11月）も賑わう一軒。",
    description:
      "宮古島の島野菜と各地から厳選して仕入れた地鶏、都内で活躍した居酒屋職人たちが「これぞ」という料理とお酒をご用意。",
  },
  {
    slug: "ro-suiren",
    nameJa: "炉と島釜飯 粋蓮",
    nameSub: "沖縄県：宮古島",
    tagline: "炉の炭火と、島釜飯で。",
    location: "沖縄県宮古島市（店舗詳細は順次公開）",
    status: "coming_soon",
    openingNote: "宮古島にて2026年7月OPEN予定",
    priceNote: "客単価 5,000〜6,000円",
    conceptNote:
      "地元のお客様を大切に。観光シーズンも楽しめる、少し上質な炭火と釜飯の店。",
    // 開業前のため、姉妹店「地鶏と島野菜 粋蓮」の写真をブランドイメージとして暫定掲載。
    // 店舗写真が用意でき次第差し替えてください。
    heroImage: "/images/suiren-miyako/miyako-06.jpg",
    gallery: [
      "/images/suiren-miyako/miyako-32.jpg",
      "/images/suiren-miyako/miyako-30.jpg",
    ],
    // Instagram は新店専用アカウントが開設されるまで、本店（粋蓮 宮古島）の Instagram にリンク
    instagramUrl: "https://www.instagram.com/and.suiren.miyakojima/",
    reserveUrl: "https://example.com/",
    googleBusinessUrl: null,
    description:
      "「炉」の炭火でじっくり仕上げる一皿と、島野菜をふんだんに使った島釜飯を主役に据えた、粋蓮の新業態。宮古島の地元のお客様を第一に、落ち着いた大人の時間をお届けします。",
  },
];
