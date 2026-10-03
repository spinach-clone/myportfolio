import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { AtsToggle } from "@/components/ats-toggle";
import { ClickTracker } from "@/components/click-tracker";
import "./globals.css";

const themeInitScript = `
(function () {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christo Rey Espina — Portfolio",
  description:
    "Christo Rey Espina builds clean, focused web and mobile products. Explore selected work and get in touch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <p className="border-t border-black/5 py-6 text-center text-xs text-text-secondary">
          &copy; 2026 Christo Rey Espina.
        </p>
        <AtsToggle />
        <ClickTracker />
        <Analytics />
      </body>
    </html>
  );
}
