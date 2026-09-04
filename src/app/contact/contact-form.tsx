"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/profile";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const subject = `Portfolio message from ${name}`;
    const body = [
      message,
      "",
      `— ${name}`,
      email ? `Reply to: ${email}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
        <h3 className="h3">Almost there.</h3>
        <p className="body-text mt-2">
          Your email app should now be open with your message ready to go —
          just hit send.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-text-primary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-text-primary">
          Email <span className="text-text-secondary/60">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on?"
          className="resize-none rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 outline-none transition-colors focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(108,99,255,0.55)] transition-all duration-200 hover:bg-[#5b52f0] active:scale-[0.98]"
      >
        Send message
      </button>
    </form>
  );
}
