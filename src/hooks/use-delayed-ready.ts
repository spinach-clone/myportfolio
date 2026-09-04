"use client";

import { useEffect, useState } from "react";

export function useDelayedReady(minDuration = 500) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), minDuration);
    return () => window.clearTimeout(timer);
  }, [minDuration]);

  return ready;
}
