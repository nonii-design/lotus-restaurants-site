import { company } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050403] py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-[15px] tracking-[0.25em] text-[rgba(234,230,222,0.9)]">
            {company.legalName}
          </p>
          {company.legalNameEn && (
            <p className="mt-2 font-serif text-[10.5px] tracking-[0.35em] text-[#6a635d]">
              {company.legalNameEn.toUpperCase()}
            </p>
          )}
          <p className="mt-5 font-serif text-[11.5px] tracking-[0.2em] text-[#4a4440]">
            © {new Date().getFullYear()} Lotus Co., Ltd. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3 font-serif text-[12px] tracking-[0.25em] text-[#a39e98]">
          <a href="#brand-movie" className="transition hover:text-[#d9be83]">
            Movie
          </a>
          <a href="#stores" className="transition hover:text-[#d9be83]">
            店舗
          </a>
          <a href="#company" className="transition hover:text-[#d9be83]">
            企業情報
          </a>
          {company.contactEmail && (
            <a
              href={`mailto:${company.contactEmail}`}
              className="transition hover:text-[#d9be83]"
            >
              {company.contactEmail}
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}
