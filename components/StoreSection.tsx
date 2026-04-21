import Image from "next/image";
import type { Store } from "@/lib/site-config";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";

type Props = {
  store: Store;
  index: number;
};

/**
 * Notion-inspired store card:
 * - whisper border (1px rgba(0,0,0,0.1))
 * - 12px card radius, 16px for featured hero image
 * - multi-layer soft shadow
 * - Warm white (#f6f5f4) alternation on every other card section
 */
export function StoreSection({ store, index }: Props) {
  const isSoon = store.status === "coming_soon";
  const alt = index % 2 === 1;

  return (
    <section
      id={`store-${store.slug}`}
      className={`scroll-mt-20 ${alt ? "bg-[#f6f5f4]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
          {/* Image card */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-black/10 bg-[#f6f5f4] shadow-[var(--shadow-card)]">
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
            <div className="flex items-center gap-2">
              {isSoon && (
                <span className="inline-flex items-center rounded-full bg-[#f3ecdf] px-2.5 py-1 text-[12px] font-semibold tracking-[0.125px] text-[#7a5120]">
                  Coming soon
                </span>
              )}
              {store.nameSub && (
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-2.5 py-1 text-[12px] font-semibold tracking-[0.125px] text-[#615d59]">
                  {store.nameSub}
                </span>
              )}
            </div>

            <h3 className="mt-5 text-[32px] leading-[1.1] tracking-[-0.02em] text-[rgba(0,0,0,0.95)] sm:text-[40px] sm:leading-[1.05]">
              <span className="font-serif font-medium">{store.nameJa}</span>
            </h3>

            <p className="mt-3 text-[20px] font-semibold leading-[1.4] tracking-[-0.005em] text-[#615d59]">
              {store.tagline}
            </p>

            <p className="mt-6 text-[16px] leading-[1.65] text-[rgba(0,0,0,0.85)]">
              {store.description}
            </p>

            {/* Meta list */}
            <dl className="mt-8 grid gap-3 text-[14px]">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 font-semibold text-[#a39e98]">
                  所在地
                </dt>
                <dd className="text-[rgba(0,0,0,0.85)]">{store.location}</dd>
              </div>
              {isSoon && store.openingNote && (
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 font-semibold text-[#a39e98]">
                    開業
                  </dt>
                  <dd className="text-[#7a5120]">{store.openingNote}</dd>
                </div>
              )}
              {store.priceNote && (
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 font-semibold text-[#a39e98]">
                    単価
                  </dt>
                  <dd className="text-[rgba(0,0,0,0.85)]">{store.priceNote}</dd>
                </div>
              )}
              {store.conceptNote && (
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 font-semibold text-[#a39e98]">
                    コンセプト
                  </dt>
                  <dd className="text-[rgba(0,0,0,0.85)]">
                    {store.conceptNote}
                  </dd>
                </div>
              )}
            </dl>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-2.5">
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
              <p className="mt-3 text-[12px] text-[#a39e98]">
                Google ビジネスプロフィールはオープン後に公開予定です。
              </p>
            )}
          </div>
        </div>

        {/* Gallery */}
        {store.gallery.length > 0 && (
          <div className="mt-14">
            <p className="text-[12px] font-semibold uppercase tracking-[0.125px] text-[#a39e98]">
              Gallery
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {store.gallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-[12px] border border-black/10 bg-[#f6f5f4] shadow-[var(--shadow-card)]"
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
