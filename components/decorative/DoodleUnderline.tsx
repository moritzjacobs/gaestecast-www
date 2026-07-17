type DoodleUnderlineProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

export default function DoodleUnderline({
  children,
  color = "var(--color-terracotta)",
  className = "",
}: DoodleUnderlineProps) {
  return (
    <span className={`doodle-underline ${className}`}>
      {children}
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden>
        <path
          d="M2 12 C 40 2, 80 18, 120 8 S 180 2, 198 10"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
