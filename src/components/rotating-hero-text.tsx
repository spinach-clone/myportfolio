"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Highlight } from "./highlight";

const words = [
  { text: "Christo Rey", duration: 4000, highlight: true },
  { text: "A Designer", duration: 2200, highlight: false },
  { text: "A Developer", duration: 2200, highlight: false },
];

export function RotatingHeroText({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIndex((current) => (current + 1) % words.length);
    }, words[index].duration);
    return () => window.clearTimeout(timeout);
  }, [index]);

  const current = words[index];

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={current.text}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="inline-block"
        >
          {current.highlight ? (
            <Highlight>{current.text}</Highlight>
          ) : (
            current.text
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
