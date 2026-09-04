import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-primary text-white shadow-[0_8px_20px_-6px_rgba(108,99,255,0.55)] hover:bg-[#5b52f0] hover:shadow-[0_10px_24px_-6px_rgba(108,99,255,0.65)] active:scale-[0.98]"
      : "bg-surface text-text-primary border border-black/10 hover:border-primary/40 hover:text-primary active:scale-[0.98]";

  const combined = `${base} ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={combined}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
      {icon}
    </Link>
  );
}
