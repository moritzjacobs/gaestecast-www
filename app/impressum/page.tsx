import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Impressum — Gästecast",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 font-sans text-ink">
        <h1 className="font-display text-4xl">Impressum</h1>

        <section className="mt-8 space-y-1">
          <h2 className="font-display text-2xl">Angaben gemäß § 5 TMG</h2>
          <p>[Vorname Nachname]</p>
          <p>[Straße Hausnummer]</p>
          <p>[PLZ Ort]</p>
        </section>

        <section className="mt-8 space-y-1">
          <h2 className="font-display text-2xl">Kontakt</h2>
          <p>Telefon: [Telefonnummer]</p>
          <p>E-Mail: [E-Mail-Adresse]</p>
        </section>

        <section className="mt-8 space-y-1">
          <h2 className="font-display text-2xl">Umsatzsteuer-ID</h2>
          <p>
            [Falls vorhanden: Umsatzsteuer-Identifikationsnummer gemäß § 27a
            Umsatzsteuergesetz — sonst Abschnitt entfernen]
          </p>
        </section>

        <section className="mt-8 space-y-1">
          <h2 className="font-display text-2xl">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>[Vorname Nachname]</p>
          <p>[Straße Hausnummer]</p>
          <p>[PLZ Ort]</p>
        </section>

        <p className="mt-10 text-sm text-ink/60">
          Platzhaltertext — bitte vor Veröffentlichung der Seite durch die
          eigenen, vollständigen Angaben ersetzen.
        </p>
      </main>
      <Footer />
    </>
  );
}
