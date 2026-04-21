import { brandVideo } from "@/lib/site-config";

/**
 * ブランド共通の動画セクション（Notion-inspired light theme）。
 * 動画が未受領の間はポスター画像をカード風に表示。
 */
export function BrandVideoSection() {
  const { src, poster, title, caption } = brandVideo;

  return (
    <section
      id="brand-movie"
      className="scroll-mt-20 border-t border-black/10 bg-[#f6f5f4] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#f3ecdf] px-2.5 py-1 text-[12px] font-semibold tracking-[0.125px] text-[#7a5120]">
            {title}
          </span>
          <h2 className="mt-6 font-serif text-[32px] font-medium leading-[1.3] tracking-[-0.015em] text-[rgba(0,0,0,0.95)] sm:text-[40px] sm:leading-[1.2]">
            {caption}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.65] text-[#615d59]">
            志木と宮古島。異なる土地の空気をひとつのブランドに織り込んだ、
            食と時間のイメージムービー。
          </p>
        </div>

        {src ? (
          <div className="mt-12 overflow-hidden rounded-[16px] border border-black/10 bg-white shadow-[var(--shadow-deep)]">
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
          <div className="mt-12">
            {poster ? (
              <div
                className="relative aspect-video overflow-hidden rounded-[16px] border border-black/10 bg-cover bg-center shadow-[var(--shadow-deep)]"
                style={{ backgroundImage: `url(${poster})` }}
                role="img"
                aria-label="ブランド動画サムネイル"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[13px] font-semibold text-[rgba(0,0,0,0.85)] shadow-[var(--shadow-card)] backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 fill-current"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    動画は準備中
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
