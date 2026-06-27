"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  el?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 52,
      damping: 16,
      delay: i * 0.055,
    },
  }),
};

export function AnimatedText({ text, el = "span", className, delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");
  const Tag = el;

  return (
    <Tag className={className}>
      <motion.span
        className="inline-flex flex-wrap"
        style={{ gap: "0 0.35em" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i + delay / 0.055}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
