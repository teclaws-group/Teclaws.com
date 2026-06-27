"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  parallax?: boolean;
}

export function ImageReveal({ src, alt, className, delay = 0, parallax = true }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl bg-border/30 ${className ?? ""}`}>
      {/* Reveal mask */}
      <motion.div
        className="absolute inset-0 z-10 origin-left bg-secondary"
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay }}
        style={{ transformOrigin: "right" }}
      />

      {/* Image with optional parallax */}
      <motion.div
        style={parallax ? { y } : {}}
        className="absolute inset-0 scale-[1.08]"
      >
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: delay + 0.05 }}
          className="relative h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
