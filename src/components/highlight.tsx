"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HighlightProps = {
  children: ReactNode;
  color?: string;
  delay?: number;
  className?: string;
};

export function Highlight({
  children,
  color = "var(--color-primary-light)",
  delay = 0,
  className = "",
}: HighlightProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        className="absolute inset-x-0 bottom-[6%] -z-0 h-[38%] origin-left rounded-[0.2em]"
        style={{ background: color }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.65, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </span>
  );
}
