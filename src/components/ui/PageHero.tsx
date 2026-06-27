"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 52, damping: 17 } },
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 sm:py-28">
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem]"
      />
      {/* Floating orb */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-7xl px-6"
      >
        <motion.span variants={item} className="text-xs font-semibold uppercase tracking-widest text-white/60">
          {eyebrow}
        </motion.span>
        <motion.h1 variants={item} className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl md:text-[3rem] leading-tight tracking-tight">
          {title}
        </motion.h1>
        {description && (
          <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
