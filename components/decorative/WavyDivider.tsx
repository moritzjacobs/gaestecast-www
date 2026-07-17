type WavyDividerProps = {
  color?: string;
  flip?: boolean;
  className?: string;
};

export default function WavyDivider({
  color = "var(--color-ink)",
  flip = false,
  className = "",
}: WavyDividerProps) {
  return (
    <div
      aria-hidden
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="h-6 w-full"
      >
        <path
          d="M0 20 C 100 40, 200 0, 300 20 S 500 40, 600 20 S 800 0, 900 20 S 1100 40, 1200 20"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
