"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { HeartIcon } from "./icons";

const PARTICLE_COUNT = 8;

export function LikeButton({
  slug,
  baseCount,
  className = "",
}: {
  slug: string;
  baseCount: number;
  className?: string;
}) {
  const storageKey = `liked:${slug}`;
  const [liked, setLiked] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    let storedLiked = false;
    try {
      storedLiked = localStorage.getItem(storageKey) === "1";
    } catch {
      // localStorage unavailable — fall back to unliked
    }
    queueMicrotask(() => {
      setHydrated(true);
      setLiked(storedLiked);
    });
  }, [storageKey]);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    const next = !liked;
    setLiked(next);
    try {
      if (next) {
        localStorage.setItem(storageKey, "1");
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch {
      // localStorage unavailable — like still reflects in UI for this visit
    }
    track(next ? "Project Like" : "Project Unlike", { slug });
    if (next) {
      setBurst((count) => count + 1);
    }
  }

  const count = baseCount + (hydrated && liked ? 1 : 0);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={liked}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
        liked
          ? "border-primary bg-primary/10 text-primary"
          : "border-black/10 text-text-secondary hover:border-primary/40 hover:text-primary"
      } ${className}`}
    >
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <motion.span
          key={liked ? "liked" : "unliked"}
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
          className="inline-flex"
        >
          <HeartIcon className="h-4 w-4" filled={liked} />
        </motion.span>
        {burst > 0 && (
          <span key={burst} className="pointer-events-none absolute inset-0">
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
              const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
              return (
                <motion.span
                  key={i}
                  className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-primary"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos(angle) * 16,
                    y: Math.sin(angle) * 16,
                    opacity: 0,
                    scale: 0.4,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              );
            })}
          </span>
        )}
      </span>
      I like it
      <span aria-hidden="true">·</span>
      <span>{count}</span>
    </button>
  );
}
