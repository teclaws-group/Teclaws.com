"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/teclawsgroup";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 55, damping: 18 },
  },
};

export function HeroSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:items-center">
          {/* Left: content */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1
              variants={item}
              className="font-display text-6xl font-bold leading-none tracking-tight text-primary sm:text-7xl lg:text-8xl"
            >
              Teclaws
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-2xl font-display text-xl font-medium text-foreground/75 sm:text-2xl"
            >
              Enterprise Technology Solutions for Businesses Worldwide
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted"
            >
              Cloud infrastructure, cybersecurity, software development, and DevOps services, built to the standards your business demands.
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
                  className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
                >
                  Book Consultation
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-secondary/40 hover:text-secondary"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: logo */}
          <motion.div
            className="hidden lg:flex lg:items-center lg:justify-center"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 45, damping: 18, delay: 0.35 }}
          >
            <Image
              src="/the-claws.png"
              alt="Teclaws"
              width={560}
              height={560}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
