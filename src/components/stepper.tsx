"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export type Step = { title: string; description: string };

type StepperSize = "sm" | "md";

const SIZE_CONFIG: Record<StepperSize, { circle: string; inset: string }> = {
  sm: { circle: "h-8 w-8", inset: "top-4 bottom-4 left-4" },
  md: { circle: "h-9 w-9", inset: "top-[18px] bottom-[18px] left-[18px]" },
};

const PARTICLE_COUNT = 6;
const STAGGER = 0.45;

export function Stepper({
  steps,
  size = "sm",
  titleAs = "p",
  titleClassName = "font-semibold text-text-primary",
}: {
  steps: Step[];
  size?: StepperSize;
  titleAs?: "p" | "h3";
  titleClassName?: string;
}) {
  const containerRef = useRef<HTMLOListElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });
  const { circle, inset } = SIZE_CONFIG[size];
  const lineDuration = Math.max(steps.length - 1, 1) * STAGGER + 0.4;

  return (
    <ol ref={containerRef} className="relative flex flex-col gap-6">
      <span
        aria-hidden="true"
        className={`absolute w-0.5 -translate-x-1/2 rounded-full bg-primary/15 ${inset}`}
      />
      <motion.span
        aria-hidden="true"
        className={`absolute w-0.5 origin-top -translate-x-1/2 rounded-full bg-primary ${inset}`}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: lineDuration, ease: [0.65, 0, 0.35, 1] }}
      />
      {steps.map((step, index) => (
        <StepperItem
          key={step.title}
          index={index}
          step={step}
          inView={inView}
          circleClassName={circle}
          titleAs={titleAs}
          titleClassName={titleClassName}
        />
      ))}
    </ol>
  );
}

function StepperItem({
  index,
  step,
  inView,
  circleClassName,
  titleAs: TitleTag,
  titleClassName,
}: {
  index: number;
  step: Step;
  inView: boolean;
  circleClassName: string;
  titleAs: "p" | "h3";
  titleClassName: string;
}) {
  const [filled, setFilled] = useState(false);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setTimeout(() => {
      setFilled(true);
      setBurst((count) => count + 1);
    }, index * STAGGER * 1000 + 150);
    return () => window.clearTimeout(id);
  }, [inView, index]);

  return (
    <li className="relative flex gap-4">
      <span
        className={`relative z-10 flex shrink-0 items-center justify-center ${circleClassName}`}
      >
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: filled ? "#6C63FF" : "rgba(108,99,255,0.1)",
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
        <motion.span
          className="relative font-heading text-sm font-bold"
          animate={{ color: filled ? "#FFFFFF" : "#6C63FF" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {index + 1}
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
                    x: Math.cos(angle) * 18,
                    y: Math.sin(angle) * 18,
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
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={filled ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <TitleTag className={titleClassName}>{step.title}</TitleTag>
        <p className="body-text mt-0.5">{step.description}</p>
      </motion.div>
    </li>
  );
}
