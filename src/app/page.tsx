import { EnquiryForm } from "@/components/site/enquiry-form";
import { addressLine, mapLink, site } from "@/lib/site";

export default function HomePage() {
  return (
    <main id="inhalt">
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 md:grid-cols-[minmax(0,1.4fr)_auto] md:items-end md:pt-32 lg:px-10 lg:pb-28">
          <div>
            <h1 className="font-display text-[clamp(2.5rem,4.8vw,5.25rem)] leading-[0.96] tracking-[-0.035em] text-balance">
              Buffets und Catering
              <span className="block">in Ehrenfeld.</span>
            </h1>
            <p className="mt-5 max-w-[38rem] text-lg leading-relaxed text-ink-soft">
              Willi Moll kocht seit April 2009 in der Liebigstraße.
              Grundprodukte aus der Nähe, ohne Fertigprodukte. Das Angebot
              folgt einem Gespräch.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:justify-end md:pb-1">
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center bg-beet px-6 text-base text-paper hover:bg-beet/90"
            >
              Angebot anfragen
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="text-base underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-20 py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <h2 className="max-w-[16ch] font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-balance">
            Was Sie anfragen können
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
            Essen soll Freude machen, auch in der schlichten Form. Dafür
            reichen gute Grundprodukte, am liebsten aus der Nähe, und der
            Verzicht auf Fertigprodukte. So steht es von Willi Moll auf der
            bisherigen Website.
          </p>

          <article className="mt-20 max-w-3xl">
            <h3 className="font-display text-[clamp(2.4rem,4vw,4rem)] tracking-[-0.03em]">
              Buffets
            </h3>
            <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-ink-soft">
              Für alle möglichen Anlässe, in vielen Varianten. Die
              Zusammenstellung richtet sich nach der Jahreszeit und nach dem,
              was Sie vorhaben. Gerichte und Preise besprechen wir, sie
              stehen hier nicht.
            </p>
          </article>

          <article className="mt-16 border-t border-border pt-10 md:grid md:grid-cols-12 md:gap-12">
            <h3 className="font-display text-4xl tracking-[-0.03em] md:col-span-4">
              Events
            </h3>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-ink-soft md:col-span-7 md:mt-2">
              Für Messe, Film, Foto und Musik. Was an dem Tag auf den Tisch
              kommt, klären wir am Anlass — nicht über eine fertige Karte.
            </p>
          </article>

          <article className="mt-16 border-t border-border pt-10 md:grid md:grid-cols-12 md:gap-12">
            <h3 className="font-display text-4xl tracking-[-0.03em] md:col-span-4">
              Catering
            </h3>
            <div className="mt-4 md:col-span-8 md:mt-2">
              <p className="max-w-[58ch] text-lg leading-relaxed text-ink-soft">
                Täglich frisch zubereitet und geliefert. Dazu gehören Suppen,
                Quiches, Salate, Pastagerichte, Fleischgerichte, vegetarische
                Gerichte und Desserts. Die genaue Auswahl gibt es auf Anfrage.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="ablauf" className="scroll-mt-20 bg-paper-deep py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <h2 className="max-w-[14ch] font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-balance">
            So läuft eine Anfrage
          </h2>
          <ol className="mt-16 grid list-none gap-12 p-0 md:grid-cols-3 md:gap-10">
            <li>
              <h3 className="font-display text-3xl tracking-[-0.03em]">
                Anrufen oder schreiben
              </h3>
              <p className="mt-3 max-w-[32ch] leading-relaxed text-ink-soft">
                Telefon, Mobil oder das Formular. So erreichen Sie {site.owner}.
              </p>
            </li>
            <li>
              <h3 className="font-display text-3xl tracking-[-0.03em]">
                Unverbindlich sprechen
              </h3>
              <p className="mt-3 max-w-[32ch] leading-relaxed text-ink-soft">
                Anlass, Gäste, Ort und Zeitpunkt reichen für das Gespräch.
              </p>
            </li>
            <li>
              <h3 className="font-display text-3xl tracking-[-0.03em]">
                Angebot bekommen
              </h3>
              <p className="mt-3 max-w-[32ch] leading-relaxed text-ink-soft">
                Zusammenstellung und Preis entstehen daraus. Auf dieser Seite
                stehen sie nicht.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 py-28 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-balance">
              Angebot anfragen
            </h2>
            <dl className="mt-8 space-y-5 text-base">
              <div>
                <dt className="text-sm text-ink-soft">Telefon</dt>
                <dd>
                  <a className="underline-offset-4 hover:underline" href={`tel:${site.phoneTel}`}>
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-soft">Mobil</dt>
                <dd>
                  <a className="underline-offset-4 hover:underline" href={`tel:${site.mobileTel}`}>
                    {site.mobileDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-soft">E-Mail</dt>
                <dd>
                  <a className="underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-soft">Adresse</dt>
                <dd>{addressLine}</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section id="standort" className="scroll-mt-20">
        <div className="relative">
          {/* The file itself, not the image optimizer, so the map is in the first paint. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/map.png"
            alt="Karte von Liebigstraße in Köln-Ehrenfeld. Der Ring markiert Liebigstraße 145."
            width={1280}
            height={768}
            className="h-[52vh] min-h-80 w-full object-cover object-center md:h-[78vh]"
          />
          <div className="bg-paper px-5 py-10 sm:px-8 md:absolute md:bottom-10 md:left-8 md:max-w-sm md:px-8 md:py-8 lg:left-10">
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em]">
              {site.street}
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              {site.postalCode} {site.city}, {site.district}
            </p>
            <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-ink-soft">
              Die Küche ist hier. Ob geliefert wird, klären wir im Gespräch.
            </p>
            <a
              href={mapLink}
              className="mt-6 inline-flex text-sm underline underline-offset-4"
            >
              Größere Karte öffnen
            </a>
            <p className="mt-3 text-xs text-ink-soft">
              Karte © OpenStreetMap-Mitwirkende
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
