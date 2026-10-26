import Link from "next/link";

export default function NotFound() {
  return (
    <main id="inhalt" className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-5xl tracking-[-0.03em]">
        Diese Seite gibt es nicht.
      </h1>
      <p className="mt-6 max-w-[40ch] text-lg text-ink-soft">
        Zurück zur mollerie, oder rufen Sie an, wenn Sie ein Angebot möchten.
      </p>
      <Link href="/" className="mt-8 inline-flex h-12 items-center bg-beet px-6 text-paper">
        Zur Startseite
      </Link>
    </main>
  );
}
