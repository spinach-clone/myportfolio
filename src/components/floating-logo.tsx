"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FloatingLogo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 ${className}`}
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/cr-logo.svg"
        alt=""
        width={260}
        height={260}
        className="h-40 w-40 opacity-80 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
      />
    </motion.div>
  );
}
