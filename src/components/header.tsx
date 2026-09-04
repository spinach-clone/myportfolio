"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DownloadIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative text-sm font-medium transition-colors ${
        active ? "text-primary" : "text-text-secondary hover:text-primary"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary transition-opacity duration-200 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
}

function useScrollProgress(pathname: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    function update() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const value = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, value)));
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return progress;
}

export function Header() {
  const pathname = usePathname();
  const progress = useScrollProgress(pathname);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-text-primary"
          >
            <Image
              src="/cr-logo.svg"
              alt=""
              width={28}
              height={28}
              className="logo-glow h-7 w-7"
            />
            Christo
          </Link>

          <nav className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-primary/40 hover:text-primary"
            >
              Resume
              <DownloadIcon className="h-4 w-4" />
            </a>
            <ThemeToggle />
          </div>
        </div>

        <nav className="flex items-center justify-center gap-6 border-t border-black/5 py-2 sm:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={isActive(pathname, link.href)}
            />
          ))}
        </nav>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 h-1 bg-black/5">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </>
  );
}
