import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CtaButton({ href, children, className = "" }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-ink bg-terracotta px-6 py-3 font-sans font-semibold text-cream-soft shadow-[4px_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0_var(--color-ink)] ${className}`}
    >
      {children}
    </Link>
  );
}
