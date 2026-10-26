import type { Metadata } from "next";
import { Figtree, Petrona } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { site } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const petrona = Petrona({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "Buffets und Catering in Köln-Ehrenfeld. Willi Moll, Liebigstraße 145. Das Angebot folgt einem Gespräch — ohne Speisekarte und ohne Preise auf dieser Seite.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mollerie-catering.vercel.app"),
  title: {
    default: `${site.title} in Köln-Ehrenfeld`,
    template: `%s · ${site.name}`,
  },
  description,
  openGraph: {
    title: `${site.title} in Köln-Ehrenfeld`,
    description,
    locale: "de_DE",
    type: "website",
    url: "https://mollerie-catering.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.title,
  founder: { "@type": "Person", name: site.owner },
  foundingDate: "2009-04",
  email: site.email,
  telephone: [site.phoneTel, site.mobileTel],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: "DE",
  },
  sameAs: [site.oldSite],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${figtree.variable} ${petrona.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Zum Inhalt
        </a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
