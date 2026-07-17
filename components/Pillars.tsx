import { pillars } from "@/content/site";
import WavyDivider from "./decorative/WavyDivider";

export default function Pillars() {
  return (
    <section id="philosophie" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl">{pillars.title}</h2>
        <p className="mt-4 max-w-2xl font-sans text-lg text-ink/80">
          {pillars.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.items.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl border-2 border-ink p-6 ${
                item.highlight
                  ? "-rotate-1 bg-gold shadow-[6px_6px_0_var(--color-ink)]"
                  : "rotate-1 bg-cream-soft"
              }`}
            >
              <h3 className="font-display text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 font-sans text-ink/80">{item.body}</p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-14 max-w-3xl border-l-4 border-terracotta pl-6 font-display text-2xl italic text-ink/90 md:text-3xl">
          &ldquo;{pillars.quote}&rdquo;
        </blockquote>
      </div>

      <WavyDivider className="mt-16" />
    </section>
  );
}
