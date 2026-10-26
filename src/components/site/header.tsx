"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#kontakt", label: "Kontakt" },
  { href: "/#standort", label: "Standort" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="font-display text-2xl tracking-[-0.03em] text-ink">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Seitenabschnitte">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phoneTel}`}
            className="bg-beet px-4 py-2 text-sm text-paper hover:bg-beet/90"
          >
            Anrufen
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobilenav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobilenav"
          aria-label="Seitenabschnitte"
          className="border-t border-border px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-lg text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${site.phoneTel}`}
                className="mt-2 inline-flex bg-beet px-4 py-3 text-paper"
                onClick={() => setOpen(false)}
              >
                Anrufen {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
