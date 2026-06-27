import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-widest ${
            light ? "text-white/50" : "text-secondary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/60" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
