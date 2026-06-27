"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
}

export function ParallaxImage({ src, alt, className, strength = 40 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
