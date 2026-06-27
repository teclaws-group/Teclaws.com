"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 55, damping: 18 } },
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-white px-6 py-24 text-center">
      {/* Floating background shapes */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-secondary/6 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 16, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute right-[8%] bottom-[20%] h-72 w-72 rounded-full bg-secondary/5 blur-3xl"
      />

      {/* Abstract graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-40 w-40">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/25"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border-2 border-dashed border-secondary/15"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl font-bold text-primary/10">?</span>
          </div>
        </div>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="text-xs font-semibold uppercase tracking-widest text-secondary">
          404 Error
        </motion.p>
        <motion.h1 variants={item} className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">
          Page Not Found
        </motion.h1>
        <motion.p variants={item} className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
          The page you are looking for has been moved, renamed, or does not exist. Let us point you in the right direction.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary-dark"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-secondary/40 hover:text-secondary"
          >
            Contact us
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-14">
          <p className="mb-4 text-xs text-muted">Or jump to one of these pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Industries", href: "/industries" },
              { label: "Process", href: "/process" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground/70 ring-1 ring-border transition-colors hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
