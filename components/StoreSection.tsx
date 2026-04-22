import Image from "next/image";
import type { Store } from "@/lib/site-config";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";

type Props = {
  store: Store;
  index: number;
};

/**
 * Warm-dark store section.
 * - 2-column layout on desktop: image card / content
 * - whisper border on images, quiet serif typography
 * - alternate between --color-bg and --color-bg-alt
 */
export function StoreSection({ store, index }: Props) {
  const isSoon = store.status === "coming_soon";
  const alt = index % 2 === 1;

  return (
    <section
      id={`store-${store.slug}`}
      className={`scroll-mt-20 border-t border-white/[0.04] ${
        alt ? "bg-[#100e0c]" : "bg-[#0a0908]"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.08] bg-[#13110f] shadow-[var(--shadow-card)]">
            <Image
              src={store.heroImage}
              alt={store.nameJa}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3">
              {isSoon && (
                <span className="inline-flex items-center border border-[rgba(201,169,98,0.35)] bg-[rgba(201,169,98,0.06)] px-2.5 py-1 font-serif text-[11px] tracking-[0.3em] text-[#d9be83]">
                  Coming soon
                </span>
              )}
              {store.nameSub && (
                <span className="font-serif text-[11px] tracking-[0.35em] text-[#c9a962]">
                  {store.nameSub}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-5 font-serif text-[28px] font-normal leading-[1.4] tracking-[0.06em] text-[rgba(234,230,222,0.96)] sm:text-[34px] sm:leading-[1.35]">
              {store.nameJa}
            </h3>

            {/* Tagline */}
            <p className="mt-4 font-serif text-[15px] leading-[1.9] tracking-[0.1em] text-[#c9a962]/90">
              {store.tagline}
            </p>

            {/* Description */}
            <p className="mt-7 whitespace-pre-line font-serif text-[14.5px] leading-[2] tracking-[0.05em] text-[#a39e98]">
              {store.description}
            </p>

            {/* Meta list — quiet, understated dl */}
            <dl className="mt-8 space-y-3 font-serif text-[13px] leading-[1.8]">
              <Row label="所在地" value={store.location} />
              {isSoon && store.openingNote && (
                <Row label="開業" value={store.openingNote} accent />
              )}
              {store.priceNote && <Row label="単価" value={store.priceNote} />}
              {store.conceptNote && (
                <Row label="コンセプト" value={store.conceptNote} />
              )}
            </dl>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-3">
              <ExternalLinkButton
                href={store.reserveUrl}
                label="予約する"
                variant="accent"
              />
              <ExternalLinkButton href={store.instagramUrl} label="Instagram" />
              <ExternalLinkButton
                href={store.googleBusinessUrl ?? "#"}
                label="Google"
                disabled={!store.googleBusinessUrl}
              />
            </div>

            {!store.googleBusinessUrl && (
              <p className="mt-4 font-serif text-[11px] tracking-[0.2em] text-[#4a4440]">
                Google ビジネスプロフィールはオープン後に公開予定です。
              </p>
            )}
          </div>
        </div>

        {/* Gallery */}
        {store.gallery.length > 0 && (
          <div className="mt-20">
            <p className="eyebrow">Gallery</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {store.gallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden border border-white/[0.08] bg-[#13110f]"
                >
                  <Image
                    src={src}
                    alt={`${store.nameJa} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex gap-4 border-t border-white/[0.05] pt-3">
      <dt className="w-20 shrink-0 font-serif text-[11px] tracking-[0.3em] text-[#6a635d]">
        {label}
      </dt>
      <dd
        className={`font-serif text-[13.5px] leading-[1.8] tracking-[0.05em] ${
          accent ? "text-[#d9be83]" : "text-[#a39e98]"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
