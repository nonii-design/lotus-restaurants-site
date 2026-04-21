import Image from "next/image";
import { BrandVideoSection } from "@/components/BrandVideoSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StoreSection } from "@/components/StoreSection";
import { company, stores } from "@/lib/site-config";

export default function Home() {
  const heroImg = "/images/suiren-miyako/miyako-30.jpg";

  return (
    <div className="flex min-h-full flex-col bg-white text-[rgba(0,0,0,0.95)]">
      <SiteHeader />

      <main className="flex-1">
        {/* ====================== HERO ====================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
              <div>
                <span className="inline-flex items-center rounded-full bg-[#f3ecdf] px-2.5 py-1 text-[12px] font-semibold tracking-[0.125px] text-[#7a5120]">
                  Dining Brand / 志木 · 宮古島
                </span>

                <h1 className="mt-6 text-[48px] font-bold leading-[1.02] tracking-[-0.033em] text-[rgba(0,0,0,0.95)] sm:text-[64px] sm:leading-none">
                  <span className="block font-serif font-medium">
                    食と空間で、
                  </span>
                  <span className="block font-serif font-medium">
                    記憶に残る一夜を。
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-[20px] font-semibold leading-[1.4] tracking-[-0.005em] text-[#615d59]">
                  {company.tagline}
                </p>

                <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-[#615d59]">
                  お箸ビストロ SUIREN（志木）、地鶏と島野菜 粋蓮（宮古島）、
                  そして炉と島釜飯 粋蓮（2026年6月頃オープン予定）。
                  三つの店がひとつのブランドとして、それぞれの土地の魅力を紡ぎます。
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#stores"
                    className="inline-flex items-center justify-center rounded-[4px] bg-[#523410] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#3d2608] active:scale-[0.97]"
                  >
                    店舗を見る
                  </a>
                  <a
                    href="#brand-movie"
                    className="inline-flex items-center justify-center rounded-[4px] bg-black/[0.05] px-5 py-2.5 text-[15px] font-semibold text-[rgba(0,0,0,0.95)] transition hover:bg-black/[0.08] active:scale-[0.97]"
                  >
                    ブランド動画
                  </a>
                </div>
              </div>

              {/* Hero image card — 16px radius, whisper border, deep shadow */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] border border-black/10 bg-[#f6f5f4] shadow-[var(--shadow-deep)]">
                <Image
                  src={heroImg}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ====================== BRAND MOVIE ====================== */}
        <BrandVideoSection />

        {/* ====================== STORES LEAD ====================== */}
        <section
          id="stores"
          className="scroll-mt-20 border-t border-black/10 bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-[#f3ecdf] px-2.5 py-1 text-[12px] font-semibold tracking-[0.125px] text-[#7a5120]">
                Stores
              </span>
              <h2 className="mt-5 text-[40px] font-bold leading-none tracking-[-0.031em] text-[rgba(0,0,0,0.95)] sm:text-[48px]">
                <span className="font-serif font-medium">店舗紹介</span>
              </h2>
              <p className="mt-5 text-[16px] leading-[1.65] text-[#615d59]">
                本サイトは 1 ページ構成です。各店のご予約・最新情報・地図・口コミは、
                下記リンク（Instagram / 予約 / Google ビジネスプロフィール）
                からご覧いただけます。
              </p>
            </div>

            {/* Quick index pills */}
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {stores.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#store-${s.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-[13px] font-semibold text-[rgba(0,0,0,0.85)] shadow-[var(--shadow-card)] transition hover:border-black/20 hover:text-[#523410]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#523410]" />
                    {s.nameJa}
                    {s.status === "coming_soon" && (
                      <span className="text-[11px] font-semibold text-[#7a5120]">
                        Coming soon
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ====================== STORE SECTIONS ====================== */}
        {stores.map((store, index) => (
          <StoreSection key={store.slug} store={store} index={index} />
        ))}

        {/* ====================== COMPANY ====================== */}
        <section
          id="company"
          className="scroll-mt-20 border-t border-black/10 bg-white"
        >
          <div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 sm:py-28">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-[#f3ecdf] px-2.5 py-1 text-[12px] font-semibold tracking-[0.125px] text-[#7a5120]">
                Company
              </span>
              <h2 className="mt-5 text-[40px] font-bold leading-none tracking-[-0.031em] text-[rgba(0,0,0,0.95)] sm:text-[48px]">
                <span className="font-serif font-medium">企業情報</span>
              </h2>
              <p className="mt-6 font-serif text-[26px] font-medium leading-[1.25] tracking-[-0.011em] text-[rgba(0,0,0,0.95)]">
                {company.legalName}
              </p>
              {company.legalNameEn && (
                <p className="mt-2 text-[13px] font-semibold tracking-[0.125px] text-[#a39e98]">
                  {company.legalNameEn}
                </p>
              )}
            </div>

            {/* Company card */}
            <div className="mt-12 overflow-hidden rounded-[16px] border border-black/10 bg-white shadow-[var(--shadow-card)]">
              <dl className="divide-y divide-black/[0.08]">
                {company.established && (
                  <Row label="設立" value={company.established} />
                )}
                {company.capital && (
                  <Row label="資本金" value={company.capital} />
                )}
                {company.representative && (
                  <Row label="代表" value={company.representative} />
                )}
                {company.employees && (
                  <Row label="従業員数" value={company.employees} />
                )}
                {company.businessDescription && (
                  <Row label="事業内容" value={company.businessDescription} />
                )}
                {company.offices.length > 0 && (
                  <div className="grid gap-2 px-6 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6 sm:px-8 sm:py-6">
                    <dt className="text-[14px] font-semibold text-[#a39e98]">
                      所在地
                    </dt>
                    <dd className="space-y-3 text-[15px] text-[rgba(0,0,0,0.85)]">
                      {company.offices.map((office) => (
                        <div
                          key={office.label}
                          className="flex flex-wrap items-center gap-3"
                        >
                          <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-2.5 py-0.5 text-[12px] font-semibold tracking-[0.125px] text-[#615d59]">
                            {office.label}
                          </span>
                          <span>{office.address}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                )}
                {company.banks && (
                  <Row label="取引金融機関" value={company.banks} />
                )}
                {company.contactEmail && (
                  <div className="grid gap-2 px-6 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6 sm:px-8 sm:py-6">
                    <dt className="text-[14px] font-semibold text-[#a39e98]">
                      お問い合わせ
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${company.contactEmail}`}
                        className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#523410] underline-offset-4 hover:underline"
                      >
                        {company.contactEmail}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 px-6 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6 sm:px-8 sm:py-6">
      <dt className="text-[14px] font-semibold text-[#a39e98]">{label}</dt>
      <dd className="text-[15px] text-[rgba(0,0,0,0.85)]">{value}</dd>
    </div>
  );
}
