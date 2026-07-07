"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/teclawsgroup";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 50, damping: 16 },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white"
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[8%] top-[15%] h-72 w-72 rounded-full bg-secondary blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 14, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute left-[5%] bottom-[20%] h-56 w-56 rounded-full bg-secondary blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_460px] lg:items-center">
          {/* Left: content */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-primary sm:text-6xl lg:text-7xl"
            >
              Enterprise
              <br />
              <span className="text-secondary">Technology</span>
              <br />
              That Performs
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            >
              Cloud infrastructure, cybersecurity, software development, and DevOps services built to the standards your business demands.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary-dark"
                >
                  Book a Free Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-secondary/40 hover:text-secondary"
                >
                  Explore our services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: logo with glow */}
          <motion.div
            className="hidden lg:flex lg:items-center lg:justify-center"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 45, damping: 18, delay: 0.4 }}
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 scale-110 rounded-full bg-secondary/8 blur-3xl"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/the-claws.png"
                  alt="Teclaws"
                  width={460}
                  height={460}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
