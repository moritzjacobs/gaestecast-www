import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Gästecast",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 font-sans text-ink">
        <h1 className="font-display text-4xl">Datenschutzerklärung</h1>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl">Verantwortlicher</h2>
          <p>
            [Vorname Nachname], [Straße Hausnummer], [PLZ Ort], [E-Mail-Adresse]
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl">Kontaktformular</h2>
          <p>
            Wenn ihr das Kontaktformular auf dieser Seite nutzt, werden die von
            euch angegebenen Daten (Name, E-Mail-Adresse, Datum eurer Feier,
            Nachricht) ausschließlich zur Bearbeitung eurer Anfrage
            verarbeitet. Eine Weitergabe an Dritte erfolgt nicht.
          </p>
          <p className="text-sm text-ink/60">
            [Platzhalter: hier ergänzen, sobald der tatsächliche Versandweg
            (z. B. eigener Mailserver) feststeht — inklusive Speicherdauer und
            Rechtsgrundlage gemäß Art. 6 Abs. 1 DSGVO.]
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl">Hosting</h2>
          <p>
            [Platzhalter: Angaben zum Hosting-Anbieter (z. B. Vercel Inc.),
            Serverstandort und ggf. abgeschlossenem
            Auftragsverarbeitungsvertrag ergänzen.]
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-2xl">Eure Rechte</h2>
          <p>
            Ihr habt jederzeit das Recht auf Auskunft, Berichtigung, Löschung
            oder Einschränkung der Verarbeitung eurer personenbezogenen Daten
            sowie ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde. Wendet euch dazu gerne an die oben genannte
            Kontaktadresse.
          </p>
        </section>

        <p className="mt-10 text-sm text-ink/60">
          Platzhaltertext — bitte vor Veröffentlichung der Seite rechtlich
          prüfen und vervollständigen lassen.
        </p>
      </main>
      <Footer />
    </>
  );
}
