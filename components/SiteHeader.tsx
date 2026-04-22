import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0908]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="shrink-0 font-serif text-[17px] tracking-[0.24em] text-[rgba(234,230,222,0.96)] transition hover:text-[#d9be83]"
        >
          Lotus
        </Link>

        <nav className="hidden items-center gap-10 text-[13px] tracking-[0.2em] text-[#a39e98] md:flex">
          <a
            href="#brand-movie"
            className="font-serif transition hover:text-[#d9be83]"
          >
            Movie
          </a>
          <a
            href="#stores"
            className="font-serif transition hover:text-[#d9be83]"
          >
            店舗
          </a>
          <a
            href="#company"
            className="font-serif transition hover:text-[#d9be83]"
          >
            企業情報
          </a>
        </nav>

        <a
          href="#stores"
          className="inline-flex items-center justify-center border border-[rgba(201,169,98,0.35)] bg-[rgba(201,169,98,0.08)] px-4 py-2 font-serif text-[12px] tracking-[0.24em] text-[#d9be83] transition hover:border-[rgba(201,169,98,0.6)] hover:bg-[rgba(201,169,98,0.14)]"
        >
          店舗を見る
        </a>
      </div>
    </header>
  );
}
