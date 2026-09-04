"use client";

import { useState, type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

type HoverPreviewProps = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  fit?: "cover" | "contain";
  as?: "div" | "li";
};

export function HoverPreview({
  src,
  alt,
  children,
  className = "",
  fit = "cover",
  as = "div",
}: HoverPreviewProps) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 });

  function handleMouseMove(event: MouseEvent) {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  // Always mounted; visibility is driven by a plain CSS opacity/scale
  // transition (not framer-motion's animate prop) so it can't get stuck
  // mid-animation independent of the cursor-following position values.
  // Portaled to <body> so `position: fixed` is always relative to the
  // viewport — a transformed ancestor (e.g. Reveal's translate-y) would
  // otherwise become the containing block and throw the position off.
  const preview =
    typeof document !== "undefined"
      ? createPortal(
          <motion.div
            style={{
              position: "fixed",
              left: springX,
              top: springY,
              marginLeft: 16,
              marginTop: -84,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(0.85)",
            }}
            className="pointer-events-none z-50 w-72 overflow-hidden rounded-xl border-4 border-white bg-white shadow-2xl transition-[opacity,transform] duration-200 ease-out sm:w-96"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className={`h-56 w-full sm:h-72 ${
                fit === "contain" ? "object-contain p-1" : "object-cover"
              }`}
            />
          </motion.div>,
          document.body,
        )
      : null;

  const handlers = {
    onMouseEnter: (event: MouseEvent<HTMLElement>) => {
      x.set(event.clientX);
      y.set(event.clientY);
      springX.jump(event.clientX);
      springY.jump(event.clientY);
      setHovered(true);
    },
    onMouseLeave: () => setHovered(false),
    onMouseMove: handleMouseMove as (event: MouseEvent<HTMLElement>) => void,
  };

  if (as === "li") {
    return (
      <li className={className} {...handlers}>
        {children}
        {preview}
      </li>
    );
  }

  return (
    <div className={className} {...handlers}>
      {children}
      {preview}
    </div>
  );
}
