import Image from "next/image";

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/the-teclaw-logo.png"
        alt="Teclaws"
        width={800}
        height={800}
        className="shrink-0 object-contain"
        style={{ width: "72px", height: "auto" }}
        priority
      />
    </span>
  );
}
