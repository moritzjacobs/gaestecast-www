import Image from "next/image";
import Link from "next/link";
import { footer, siteMeta } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center font-sans text-sm md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/images/signet.svg"
            alt={`${siteMeta.name} Signet`}
            width={28}
            height={29}
            className="h-7 w-auto rotate-3 opacity-80"
          />
          <span>{footer.copyText}</span>
        </div>

        <nav className="flex gap-6">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
