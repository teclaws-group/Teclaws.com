interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/75">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-[2.75rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
