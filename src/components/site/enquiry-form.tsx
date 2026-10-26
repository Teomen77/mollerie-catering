"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type Field = "name" | "anlass" | "reach";
type Errors = Partial<Record<Field, string>>;

const fieldClass =
  "h-12 rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 text-base shadow-none md:text-base focus-visible:border-beet focus-visible:ring-0";

export function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const anlass = String(data.get("anlass") ?? "").trim();
    const guests = String(data.get("guests") ?? "").trim();
    const place = String(data.get("place") ?? "").trim();
    const when = String(data.get("when") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Bitte nennen Sie Ihren Namen.";
    if (!anlass) next.anlass = "Bitte nennen Sie den Anlass.";
    if (!phone && !email) {
      next.reach = "Bitte geben Sie eine Telefonnummer oder eine E-Mail-Adresse an.";
    }
    setErrors(next);
    setReady(false);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Name: ${name}`,
      `Telefon: ${phone || "—"}`,
      `E-Mail: ${email || "—"}`,
      `Anlass: ${anlass}`,
      `Gäste: ${guests || "—"}`,
      `Ort: ${place || "—"}`,
      `Zeitpunkt: ${when || "—"}`,
      "",
      message || "(keine weitere Nachricht)",
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(`Anfrage: ${anlass}`)}&body=${encodeURIComponent(body)}`;
    setReady(true);
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <p className="text-sm leading-relaxed text-ink-soft">
        Das Formular speichert nichts auf dieser Website. Absenden öffnet Ihr
        E-Mail-Programm mit einer Nachricht an {site.email}.
      </p>
      {Object.keys(errors).length > 0 ? (
        <p role="alert" className="text-sm text-destructive">
          Bitte ergänzen Sie die markierten Angaben. Danach können Sie die
          E-Mail öffnen.
        </p>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field
          label="Telefon"
          name="phone"
          error={errors.reach}
          autoComplete="tel"
          type="tel"
        />
        <Field label="E-Mail" name="email" autoComplete="email" type="email" />
        <Field
          label="Anlass"
          name="anlass"
          error={errors.anlass}
          placeholder="Geburtstag, Drehtag, Messe"
        />
        <Field label="Gäste" name="guests" placeholder="ungefähre Zahl" />
        <Field label="Ort" name="place" placeholder="Adresse oder Köln" autoComplete="street-address" />
        <Field label="Zeitpunkt" name="when" placeholder="Datum, Tageszeit" className="sm:col-span-2" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Nachricht</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          className="min-h-28 resize-none rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 py-3 text-base shadow-none md:text-base focus-visible:border-beet focus-visible:ring-0"
        />
      </div>
      <div className="flex flex-col items-start gap-3">
        <Button
          type="submit"
          className="h-12 rounded-none bg-beet px-6 text-base text-paper hover:bg-beet/90 focus-visible:ring-0"
        >
          Anfrage in E-Mail öffnen
        </Button>
        {ready ? (
          <p role="status" className="text-sm text-ink-soft">
            Ihr E-Mail-Programm sollte sich jetzt öffnen. Wenn nicht, schreiben
            Sie direkt an {site.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  placeholder,
  autoComplete,
  className,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
}) {
  const id = `enquiry-${name}`;
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
