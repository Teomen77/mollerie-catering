import type { Metadata } from "next";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der mollerie, Willi Moll, Liebigstraße 145, 50823 Köln.",
};

export default function ImpressumPage() {
  return (
    <main id="inhalt" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h1 className="font-display text-5xl tracking-[-0.03em]">Impressum</h1>
      <div className="mt-10 max-w-[65ch] space-y-6 text-base leading-relaxed">
        <p>
          Angaben gemäß § 5 DDG. Verantwortlich für den Inhalt ist {site.owner}.
        </p>
        <p>
          {site.owner}
          <br />
          {site.title}
          <br />
          {addressLine}
        </p>
        <p>
          Telefon:{" "}
          <a className="underline underline-offset-4" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <br />
          Mobil:{" "}
          <a className="underline underline-offset-4" href={`tel:${site.mobileTel}`}>
            {site.mobileDisplay}
          </a>
          <br />
          E-Mail:{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p>
          Steuernummer {site.taxNumber}, {site.taxOffice}. Diese Angaben stehen
          im Impressum der bisherigen Website. Eine Umsatzsteuer-Identifikationsnummer
          und ein Handelsregistereintrag sind dort nicht veröffentlicht.
        </p>
        <p>
          Die bisherige Website:{" "}
          <a className="underline underline-offset-4" href={site.oldSite}>
            {site.oldSite}
          </a>
        </p>
      </div>
    </main>
  );
}
