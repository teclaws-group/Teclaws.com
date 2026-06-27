"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { FAQ } from "@/lib/data";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-border last:border-none">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-start justify-between gap-4 py-5 text-left"
          aria-expanded={open}
        >
          <span className="text-sm font-semibold text-primary sm:text-base">{question}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="mt-0.5 shrink-0 text-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </motion.span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 28 }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-sm leading-relaxed text-muted">{answer}</p>
        </motion.div>
      </div>
    </Reveal>
  );
}

export function FAQAccordion() {
  return (
    <div className="divide-y divide-border">
      {FAQ.map((item, i) => (
        <FAQItem key={item.question} question={item.question} answer={item.answer} index={i} />
      ))}
    </div>
  );
}
