"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Tracks outbound links, mailto links and resume downloads site-wide, so
// server-rendered links don't need their own client-side handlers.
export function ClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const label =
        anchor.getAttribute("aria-label") ?? anchor.textContent?.trim() ?? "";
      const page = window.location.pathname;

      if (href.startsWith("mailto:")) {
        track("Email Click", { page });
      } else if (href.endsWith(".pdf")) {
        track("Resume Download", { page });
      } else if (anchor.host && anchor.host !== window.location.host) {
        track("Outbound Click", {
          destination: anchor.hostname,
          label: label.slice(0, 50),
          page,
        });
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
