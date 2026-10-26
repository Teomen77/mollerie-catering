import { addressLine, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        <div className="max-w-sm">
          <p className="font-display text-3xl tracking-[-0.03em]">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {site.title}
            <br />
            {addressLine}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a className="hover:underline" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <a className="hover:underline" href={`tel:${site.mobileTel}`}>
            Mobil {site.mobileDisplay}
          </a>
          <a className="hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <nav aria-label="Rechtliches" className="flex flex-col gap-2 text-sm">
          <a className="hover:underline" href="/impressum">
            Impressum
          </a>
          <a className="hover:underline" href="/datenschutz">
            Datenschutz
          </a>
          <a className="hover:underline" href={site.oldSite}>
            Bisherige Website
          </a>
        </nav>
      </div>
    </footer>
  );
}
