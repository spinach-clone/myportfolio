"use client";

import type { ReactNode } from "react";
import { useDelayedReady } from "@/hooks/use-delayed-ready";

type PageLoaderProps = {
  skeleton: ReactNode;
  children: ReactNode;
  minDuration?: number;
};

export function PageLoader({ skeleton, children, minDuration = 500 }: PageLoaderProps) {
  const ready = useDelayedReady(minDuration);

  if (!ready) {
    return <div aria-busy="true">{skeleton}</div>;
  }

  return <div className="animate-fade-in">{children}</div>;
}
