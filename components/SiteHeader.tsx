import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="shrink-0 font-serif text-xl tracking-tight text-[rgba(0,0,0,0.95)] transition hover:text-[#523410]"
        >
          Lotus
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-[rgba(0,0,0,0.95)] md:flex">
          <a
            href="#brand-movie"
            className="transition hover:text-[#523410]"
          >
            Movie
          </a>
          <a href="#stores" className="transition hover:text-[#523410]">
            店舗
          </a>
          <a href="#company" className="transition hover:text-[#523410]">
            企業情報
          </a>
        </nav>

        <a
          href="#stores"
          className="inline-flex items-center justify-center rounded-[4px] bg-[#523410] px-4 py-2 text-[14px] font-semibold text-white transition hover:bg-[#3d2608] active:scale-[0.97]"
        >
          店舗を見る
        </a>
      </div>
    </header>
  );
}
