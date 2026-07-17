import Image from "next/image";

const sources = {
  signet: { src: "/images/signet.svg", width: 300, height: 311 },
  mikro: { src: "/images/mikro.svg", width: 400, height: 261 },
  klinke: { src: "/images/klinke.svg", width: 542, height: 136 },
} as const;

type IllustrationProps = {
  name: keyof typeof sources;
  rotate?: number;
  className?: string;
  widthClass?: string;
};

export default function Illustration({
  name,
  rotate = 0,
  className = "",
  widthClass = "w-24",
}: IllustrationProps) {
  const { src, width, height } = sources[name];

  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      aria-hidden
      className={`${widthClass} h-auto select-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}
