"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon, ScanIcon } from "./icons";

export function AtsToggle() {
  const pathname = usePathname();
  const isAtsView = pathname === "/ats";

  return (
    <Link
      href={isAtsView ? "/" : "/ats"}
      aria-label={isAtsView ? "Exit ATS-friendly view" : "View ATS-friendly resume"}
      title={isAtsView ? "Exit ATS-friendly view" : "View ATS-friendly resume"}
      className="fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_24px_-6px_rgba(108,99,255,0.55)] transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      {isAtsView ? (
        <ArrowLeftIcon className="h-5 w-5" />
      ) : (
        <ScanIcon className="h-5 w-5" />
      )}
    </Link>
  );
}
