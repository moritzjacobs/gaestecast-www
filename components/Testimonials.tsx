import Image from "next/image";
import { testimonials } from "@/content/site";

export default function Testimonials() {
  return (
    <section id="stimmen" className="bg-cream-soft px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl">
          {testimonials.title}
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-sm text-ink/60">
          {testimonials.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <figure
              key={item.name}
              className={`rounded-3xl border-2 border-ink bg-cream p-6 shadow-[5px_5px_0_var(--color-ink)] ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <blockquote className="font-sans text-ink/90">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Image
                  src={`https://picsum.photos/seed/${item.avatarSeed}/100/100`}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-ink object-cover"
                />
                <div>
                  <p className="font-display text-lg leading-tight">
                    {item.name}
                  </p>
                  <p className="font-sans text-xs text-ink/60">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
