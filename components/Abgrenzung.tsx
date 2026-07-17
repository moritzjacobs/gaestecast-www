import { abgrenzung } from "@/content/site";
import Illustration from "./decorative/Illustration";

export default function Abgrenzung() {
  return (
    <section id="abgrenzung" className="relative bg-ink px-6 py-20 text-cream">
      <Illustration
        name="klinke"
        rotate={6}
        widthClass="w-40"
        className="absolute right-6 top-6 hidden opacity-20 invert md:block"
      />

      <div className="relative mx-auto max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl">{abgrenzung.title}</h2>
        <p className="mt-6 font-sans text-lg text-cream/80">
          {abgrenzung.intro}
        </p>
        <p className="mt-6 font-display text-2xl text-gold">
          {abgrenzung.promiseLead}
        </p>

        <ul className="mt-8 space-y-6">
          {abgrenzung.bullets.map((bullet) => (
            <li key={bullet.title} className="flex gap-4">
              <span
                aria-hidden
                className="mt-1 inline-block h-3 w-3 shrink-0 rounded-full bg-terracotta"
              />
              <div>
                <p className="font-sans text-lg font-semibold">
                  {bullet.title}
                </p>
                <p className="mt-1 font-sans text-cream/80">{bullet.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
