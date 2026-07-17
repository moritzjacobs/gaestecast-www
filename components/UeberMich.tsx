import Image from "next/image";
import { ueberMich } from "@/content/site";
import CtaButton from "./CtaButton";
import Illustration from "./decorative/Illustration";

export default function UeberMich() {
  return (
    <section id="ueber-mich" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-xs">
          <div className="-rotate-2 overflow-hidden rounded-[2rem] border-4 border-ink shadow-[8px_8px_0_var(--color-sage)]">
            <Image
              src={ueberMich.image.src}
              alt={ueberMich.image.alt}
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <Illustration
            name="signet"
            rotate={8}
            widthClass="w-20"
            className="absolute -right-6 -top-6 hidden sm:block"
          />
        </div>

        <div>
          <h2 className="font-display text-4xl md:text-5xl">
            {ueberMich.title}
          </h2>
          {ueberMich.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 font-sans text-lg text-ink/80">
              {paragraph}
            </p>
          ))}

          <div className="mt-8 rounded-3xl border-2 border-dashed border-ink/40 bg-cream-soft p-6">
            <h3 className="font-display text-2xl font-semibold text-terracotta">
              {ueberMich.availability.title}
            </h3>
            <p className="mt-3 font-sans text-ink/80">
              {ueberMich.availability.body}
            </p>
            <div className="mt-6">
              <CtaButton href={ueberMich.availability.ctaHref}>
                {ueberMich.availability.ctaLabel}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
