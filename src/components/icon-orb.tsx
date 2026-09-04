"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type IconOrbProps = {
  icon: ReactNode;
  label: string;
  message: string;
  glow: string;
  href: string;
  floatDuration?: number;
  floatDelay?: number;
  className?: string;
};

export function IconOrb({
  icon,
  label,
  message,
  glow,
  href,
  floatDuration = 3.6,
  floatDelay = 0,
  className = "",
}: IconOrbProps) {
  const [open, setOpen] = useState(false);
  const external = href.startsWith("http");

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
    >
      <div className="relative">
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          aria-label={label}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          className="relative flex h-14 w-14 items-center justify-center"
        >
          <span
            aria-hidden="true"
            className="absolute -inset-3 rounded-full opacity-70 blur-xl"
            style={{ background: glow }}
          />
          <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-surface text-text-primary shadow-[0_4px_16px_-4px_rgba(0,0,0,0.2)]">
            {icon}
          </span>
        </a>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.9 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 w-max max-w-[190px] -translate-x-1/2 rounded-xl bg-text-primary px-3.5 py-2.5 text-center text-xs leading-snug font-medium text-white shadow-xl"
            >
              <span
                aria-hidden="true"
                className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-text-primary"
              />
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
