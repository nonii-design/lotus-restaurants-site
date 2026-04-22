import Image from "next/image";
import { BrandVideoSection } from "@/components/BrandVideoSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StoreSection } from "@/components/StoreSection";
import { company, stores } from "@/lib/site-config";

export default function Home() {
  const heroImg = "/images/suiren-miyako/miyako-30.jpg";

  return (
    <div className="flex min-h-full flex-col bg-[#0a0908] text-[rgba(234,230,222,0.96)]">
      <SiteHeader />

      <main className="flex-1">
        {/* ====================== HERO ====================== */}
        <section className="relative min-h-[92vh] overflow-hidden">
          <Image
            src={heroImg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Multi-layer gradient for quiet, restrained mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#0a0908]/70 to-[#0a0908]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0908_95%)]" />

          <div className="relative mx-auto flex min-h-[92vh] max-w-[1100px] flex-col justify-center px-5 pb-28 pt-32 sm:px-8">
            <p className="eyebrow">Dining Brand · 志木 / 宮古島</p>

            <h1 className="mt-10 font-serif text-[clamp(2.1rem,5.6vw,3.75rem)] font-light leading-[1.55] tracking-[0.14em] text-[rgba(234,230,222,0.96)]">
              「また来たよ」で
              <br />
              溢れるお店でありたい。
            </h1>

            <p className="mt-10 max-w-md font-serif text-[13.5px] leading-[2.2] tracking-[0.14em] text-[#c9a962]/90">
              {company.tagline}
            </p>

            <p className="mt-6 max-w-lg font-serif text-[13px] leading-[2.2] tracking-[0.08em] text-[#a39e98]">
              お箸ビストロ SUIREN（埼玉県：志木）、
              <br className="hidden sm:block" />
              地鶏と島野菜 粋蓮（沖縄県：宮古島）、
              <br className="hidden sm:block" />
              そして炉と島釜飯 粋蓮（宮古島にて2026年7月OPEN予定）。
              <br className="hidden sm:block" />
              三つの店がひとつのブランドとして、それぞれの土地の魅力を紡ぎます。
            </p>

            <div className="mt-14 flex flex-wrap gap-4">
              <a
                href="#stores"
                className="inline-flex items-center justify-center border border-[rgba(201,169,98,0.4)] bg-[rgba(201,169,98,0.08)] px-8 py-3 font-serif text-[12px] tracking-[0.3em] text-[#d9be83] transition hover:border-[rgba(201,169,98,0.7)] hover:bg-[rgba(201,169,98,0.16)]"
              >
                店舗を見る
              </a>
              <a
                href="#brand-movie"
                className="inline-flex items-center justify-center border border-white/[0.1] px-8 py-3 font-serif text-[12px] tracking-[0.3em] text-[#a39e98] transition hover:border-white/[0.24] hover:text-[#eae6de]"
              >
                ブランド動画
              </a>
            </div>
          </div>
        </section>

        {/* ====================== BRAND MOVIE ====================== */}
        <BrandVideoSection />

        {/* ====================== STORES LEAD ====================== */}
        <section
          id="stores"
          className="scroll-mt-20 border-t border-white/[0.04] bg-[#0a0908]"
        >
          <div className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Stores</p>
              <h2 className="mt-7 font-serif text-[32px] font-normal leading-[1.6] tracking-[0.14em] text-[rgba(234,230,222,0.96)] sm:text-[38px] sm:leading-[1.55]">
                店舗紹介
              </h2>
              <p className="mx-auto mt-8 max-w-lg font-serif text-[13px] leading-[2.2] tracking-[0.08em] text-[#a39e98]">
                本サイトは 1 ページ構成です。
                <br className="hidden sm:block" />
                各店のご予約・最新情報・地図・口コミは、
                <br className="hidden sm:block" />
                下記リンク（Instagram / 予約 / Google ビジネスプロフィール）からご覧いただけます。
              </p>
            </div>

            {/* Quick index */}
            <ul className="mt-14 grid gap-3 sm:grid-cols-3">
              {stores.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#store-${s.slug}`}
                    className="group flex h-full flex-col border border-white/[0.08] bg-[#0e0c0a] px-6 py-6 transition hover:border-[rgba(201,169,98,0.35)]"
                  >
                    {s.nameSub && (
                      <span className="font-serif text-[10px] tracking-[0.35em] text-[#c9a962]">
                        {s.nameSub}
                      </span>
                    )}
                    <span className="mt-3 font-serif text-[16px] leading-[1.7] tracking-[0.08em] text-[rgba(234,230,222,0.96)] transition group-hover:text-[#d9be83]">
                      {s.nameJa}
                    </span>
                    {s.status === "coming_soon" && (
                      <span className="mt-3 font-serif text-[10.5px] leading-[1.8] tracking-[0.25em] text-[#a18a53]">
                        {s.openingNote ?? "Coming soon"}
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
          className="scroll-mt-20 border-t border-white/[0.04] bg-[#100e0c]"
        >
          <div className="mx-auto max-w-[900px] px-5 py-24 sm:px-8 sm:py-32">
            <div className="text-center">
              <p className="eyebrow">Company</p>
              <h2 className="mt-7 font-serif text-[32px] font-normal leading-[1.55] tracking-[0.14em] text-[rgba(234,230,222,0.96)] sm:text-[38px]">
                企業情報
              </h2>
              <p className="mt-10 font-serif text-[20px] leading-[1.8] tracking-[0.18em] text-[rgba(234,230,222,0.96)]">
                {company.legalName}
              </p>
              {company.legalNameEn && (
                <p className="mt-3 font-serif text-[10.5px] tracking-[0.4em] text-[#6a635d]">
                  {company.legalNameEn.toUpperCase()}
                </p>
              )}
            </div>

            {/* Company info — quiet dl */}
            <dl className="mx-auto mt-16 max-w-xl">
              {company.established && (
                <CompanyRow label="設立" value={company.established} />
              )}
              {company.representative && (
                <CompanyRow label="代表" value={company.representative} />
              )}
              {company.partner && (
                <CompanyRow label="パートナー" value={company.partner} />
              )}
              {company.employees && (
                <CompanyRow label="従業員数" value={company.employees} />
              )}
              {company.businessDescription && (
                <CompanyRow
                  label="事業内容"
                  value={company.businessDescription}
                />
              )}
              {company.offices.length > 0 && (
                <div className="grid gap-3 border-t border-white/[0.05] py-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8">
                  <dt className="font-serif text-[11px] tracking-[0.3em] text-[#6a635d]">
                    所在地
                  </dt>
                  <dd className="space-y-4 font-serif text-[13.5px] leading-[1.9] tracking-[0.05em] text-[#a39e98]">
                    {company.offices.map((office) => (
                      <div key={office.label} className="flex flex-col gap-1.5">
                        <span className="font-serif text-[10px] tracking-[0.35em] text-[#c9a962]">
                          {office.label}
                        </span>
                        <span>{office.address}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              )}
              {company.banks && (
                <CompanyRow label="取引金融機関" value={company.banks} />
              )}
              {company.contactEmail && (
                <div className="grid gap-3 border-t border-white/[0.05] py-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8">
                  <dt className="font-serif text-[11px] tracking-[0.3em] text-[#6a635d]">
                    お問い合わせ
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${company.contactEmail}`}
                      className="font-serif text-[13.5px] tracking-[0.1em] text-[#d9be83] underline-offset-8 hover:underline"
                    >
                      {company.contactEmail}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function CompanyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-3 border-t border-white/[0.05] py-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8">
      <dt className="font-serif text-[11px] tracking-[0.3em] text-[#6a635d]">
        {label}
      </dt>
      <dd className="font-serif text-[13.5px] leading-[1.9] tracking-[0.05em] text-[#a39e98]">
        {value}
      </dd>
    </div>
  );
}
