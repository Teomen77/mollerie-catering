import type { Metadata } from "next";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise der mollerie. Das Anfrageformular speichert keine Daten auf dieser Website.",
};

export default function DatenschutzPage() {
  return (
    <main id="inhalt" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h1 className="font-display text-5xl tracking-[-0.03em]">Datenschutz</h1>
      <div className="mt-10 max-w-[65ch] space-y-6 text-base leading-relaxed">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist{" "}
          {site.owner}, {addressLine}, {site.email}, Telefon {site.phoneDisplay}.
        </p>
        <p>
          Das Formular „Angebot anfragen“ sendet keine Daten an einen Server
          dieser Website. Es öffnet das E-Mail-Programm auf Ihrem Gerät und
          richtet die Nachricht an {site.email}. Was Sie dort absenden,
          verarbeitet {site.owner} nur, um die Anfrage zu beantworten.
        </p>
        <p>
          Beim Aufruf der Seite kann der Hoster technische Verbindungsdaten
          verarbeiten, etwa IP-Adresse, Zeitpunkt und Browsertyp, soweit das
          für den Betrieb nötig ist. Diese Website setzt keine Analyse-Cookies
          und kein Tracking.
        </p>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer
          Daten sowie auf Beschwerde bei einer Aufsichtsbehörde. Wenden Sie
          sich dafür an die oben genannte Adresse.
        </p>
        <p>
          Dieser Text ist ein kurzer Hinweis, keine abschließende
          Datenschutzerklärung. Eine Umsatzsteuer-Identifikationsnummer ist auf
          der bisherigen Website nicht veröffentlicht; dort steht die
          Steuernummer {site.taxNumber}, {site.taxOffice}.
        </p>
      </div>
    </main>
  );
}
