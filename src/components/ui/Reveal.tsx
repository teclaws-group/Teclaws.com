"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: boolean;
  className?: string;
  hover?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  scale = false,
  className,
  hover = false,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale: scale ? 0.95 : 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 52,
        damping: 17,
        delay,
      }}
      whileHover={
        hover
          ? { y: -6, transition: { type: "spring", stiffness: 360, damping: 22 } }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
