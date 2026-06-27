"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  external?: boolean;
  variant?: "primary" | "white" | "outline";
  children: ReactNode;
  className?: string;
}

const variants = {
  primary: "bg-secondary px-8 py-3.5 text-sm font-semibold text-white hover:bg-secondary-dark",
  white: "bg-white px-8 py-3.5 text-sm font-semibold text-secondary hover:bg-white/90",
  outline: "border border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10",
};

export function CTAButton({ href, external, variant = "primary", children, className }: CTAButtonProps) {
  const base = `inline-flex items-center gap-2 rounded-md transition-colors ${variants[variant]} ${className ?? ""}`;

  const inner = (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      ) : (
        <Link href={href} className={base}>
          {children}
        </Link>
      )}
    </motion.div>
  );

  return inner;
}
