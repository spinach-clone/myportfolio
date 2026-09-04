import Link from "next/link";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-32 text-center">
      <p className="small-text font-medium text-primary">404</p>
      <h1 className="h2 mt-4">This page doesn&apos;t exist.</h1>
      <p className="body-text mt-4">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <Button href="/" className="mt-8">
        Back home
      </Button>
      <p className="small-text mt-4">
        or head to <Link href="/projects" className="text-primary">projects</Link>.
      </p>
    </div>
  );
}
