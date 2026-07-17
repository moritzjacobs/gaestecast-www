import Image from "next/image";
import Link from "next/link";
import { nav, siteMeta } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink/10 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#hero" className="flex items-center gap-2">
          <Image
            src="/images/signet.svg"
            alt={`${siteMeta.name} Signet`}
            width={44}
            height={46}
            className="h-11 w-auto -rotate-2"
          />
          <span className="font-display text-2xl font-semibold">
            {siteMeta.name}
          </span>
        </Link>

        <nav className="hidden gap-6 font-sans text-sm font-medium md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-terracotta"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="rounded-full border-2 border-ink bg-gold px-4 py-2 font-sans text-sm font-semibold text-ink shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
        >
          Datum anfragen
        </a>
      </div>
    </header>
  );
}
