import Image from "next/image";
import { hero } from "@/content/site";
import CtaButton from "./CtaButton";
import DoodleUnderline from "./decorative/DoodleUnderline";
import Illustration from "./decorative/Illustration";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-terracotta">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">
            {hero.headline[0]}
            <br />
            <DoodleUnderline>{hero.headline[1]}</DoodleUnderline>
          </h1>
          <p className="mt-6 max-w-lg font-sans text-lg text-ink/80">
            {hero.subtitle}
          </p>
          <div className="mt-8">
            <CtaButton href={hero.ctaHref}>{hero.ctaLabel}</CtaButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="rotate-2 overflow-hidden rounded-[2rem] border-4 border-ink shadow-[10px_10px_0_var(--color-terracotta)]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1200}
              height={1400}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <Illustration
            name="mikro"
            rotate={-12}
            widthClass="w-28"
            className="absolute -bottom-8 -left-8 hidden drop-shadow-sm sm:block"
          />
        </div>
      </div>
    </section>
  );
}
