"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  hover?: boolean;
}

export function Reveal({ children, delay = 0, y = 24, className, hover = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 55,
        damping: 18,
        delay,
      }}
      whileHover={
        hover
          ? {
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 20 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
