"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export type WorkStep = {
  number: string;
  title: string;
  lead: string;
  body: string;
  icon: ReactNode;
};

const STAGGER = 0.45;

export function WorkTimeline({ steps }: { steps: WorkStep[] }) {
  const containerRef = useRef<HTMLOListElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.15 });
  const lineDuration = Math.max(steps.length - 1, 1) * STAGGER + 0.4;

  return (
    <ol ref={containerRef} className="relative flex flex-col gap-6">
      <span
        aria-hidden="true"
        className="absolute top-7 bottom-7 left-7 w-0.5 -translate-x-1/2 rounded-full bg-primary/15"
      />
      <motion.span
        aria-hidden="true"
        className="absolute top-7 bottom-7 left-7 w-0.5 origin-top -translate-x-1/2 rounded-full bg-primary"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: lineDuration, ease: [0.65, 0, 0.35, 1] }}
      />
      {steps.map((step, index) => (
        <WorkTimelineItem key={step.title} index={index} step={step} inView={inView} />
      ))}
    </ol>
  );
}

function WorkTimelineItem({
  index,
  step,
  inView,
}: {
  index: number;
  step: WorkStep;
  inView: boolean;
}) {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = window.setTimeout(
      () => setFilled(true),
      index * STAGGER * 1000 + 150,
    );
    return () => window.clearTimeout(id);
  }, [inView, index]);

  return (
    <li className="relative flex gap-5 sm:gap-6">
      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-2xl"
          animate={{
            backgroundColor: filled ? "#6C63FF" : "rgba(108,99,255,0.1)",
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
        <motion.span
          className="relative h-6 w-6"
          animate={{ color: filled ? "#FFFFFF" : "#6C63FF" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {step.icon}
        </motion.span>
      </span>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={filled ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 rounded-2xl border border-black/10 bg-surface p-6 shadow-[0_2px_10px_-4px_rgba(17,24,39,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(108,99,255,0.2)]"
      >
        <h3 className="h3">
          <span className="text-primary">{step.number}</span>
          <span className="mx-2 text-text-secondary">—</span>
          {step.title}
        </h3>
        <p className="mt-3 font-semibold text-text-primary">{step.lead}</p>
        <p className="body-text mt-2">{step.body}</p>
      </motion.div>
    </li>
  );
}
