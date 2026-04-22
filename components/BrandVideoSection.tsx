import { brandVideo } from "@/lib/site-config";

/**
 * Brand movie — warm dark theme, centered serif copy.
 */
export function BrandVideoSection() {
  const { src, poster, title, caption } = brandVideo;

  return (
    <section
      id="brand-movie"
      className="scroll-mt-20 border-t border-white/[0.04] bg-[#100e0c] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[980px] px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow">{title}</p>
          <h2 className="mx-auto mt-7 max-w-2xl font-serif text-[22px] font-normal leading-[2] tracking-[0.12em] text-[rgba(234,230,222,0.96)] sm:text-[26px] sm:leading-[2]">
            {caption}
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-[13.5px] leading-[2] tracking-[0.08em] text-[#a39e98]">
            志木と宮古島。
            <br className="hidden sm:block" />
            異なる土地の空気を、ひとつのブランドに織り込んだ、食と時間のイメージムービー。
          </p>
        </div>

        {src ? (
          <div className="mt-14 overflow-hidden border border-white/[0.08] bg-[#13110f] shadow-[var(--shadow-deep)]">
            <video
              className="aspect-video w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={poster ?? undefined}
            >
              <source src={src} type="video/mp4" />
              お使いのブラウザは動画タグに対応していません。
            </video>
          </div>
        ) : (
          <div className="mt-14">
            {poster ? (
              <div
                className="relative aspect-video overflow-hidden border border-white/[0.08] bg-cover bg-center shadow-[var(--shadow-deep)]"
                style={{ backgroundImage: `url(${poster})` }}
                role="img"
                aria-label="ブランド動画サムネイル"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center gap-3 border border-[rgba(201,169,98,0.35)] bg-black/40 px-5 py-2.5 font-serif text-[11px] tracking-[0.3em] text-[#d9be83] backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-2.5 w-2.5 fill-current"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Coming soon
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
