import { company } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-[18px] font-medium tracking-tight text-[rgba(0,0,0,0.95)]">
            {company.legalName}
          </p>
          {company.legalNameEn && (
            <p className="mt-1 text-[12px] font-medium tracking-[0.125px] text-[#a39e98]">
              {company.legalNameEn}
            </p>
          )}
          <p className="mt-3 text-[13px] text-[#615d59]">
            © {new Date().getFullYear()} Lotus Co., Ltd. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium text-[#615d59]">
          <a href="#brand-movie" className="transition hover:text-[#523410]">
            Movie
          </a>
          <a href="#stores" className="transition hover:text-[#523410]">
            店舗
          </a>
          <a href="#company" className="transition hover:text-[#523410]">
            企業情報
          </a>
          {company.contactEmail && (
            <a
              href={`mailto:${company.contactEmail}`}
              className="transition hover:text-[#523410]"
            >
              {company.contactEmail}
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}
