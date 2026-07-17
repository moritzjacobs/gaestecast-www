import { kontakt } from "@/content/site";
import ContactForm from "./ContactForm";

export default function Kontakt() {
  return (
    <section id="kontakt" className="bg-ink px-6 py-20 text-cream">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">
            {kontakt.title}
          </h2>
          <p className="mt-4 font-sans text-lg text-cream/80">
            {kontakt.intro}
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
