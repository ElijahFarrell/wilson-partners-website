"use client";

import { useState } from "react";
import { cn, focusRing } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function InterestForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="mt-12 rounded-2xl border border-gold/30 bg-white/5 px-6 py-5 text-base text-parchment-deep/90 backdrop-blur-sm"
      >
        Thanks — we got it. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="animate-rise-in animate-delay-4 mt-12 w-full max-w-md"
      noValidate
    >
      <label
        htmlFor="interest-email"
        className="block text-left text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
      >
        Let us know you reached out
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <input
          id="interest-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@organization.org"
          disabled={status === "submitting"}
          className={cn(
            "w-full flex-1 rounded-full border border-cream/20 bg-white/5 px-5 py-3.5 text-sm text-cream placeholder:text-parchment-deep/45 backdrop-blur-sm",
            focusRing,
            "focus-visible:ring-offset-ink",
          )}
        />
        <button
          type="submit"
          disabled={status === "submitting" || email.trim().length === 0}
          className={cn(
            "shrink-0 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-[transform,background-color,opacity] duration-200 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60",
            focusRing,
            "focus-visible:ring-offset-ink",
          )}
        >
          {status === "submitting" ? "Sending…" : "Notify Me"}
        </button>
      </div>
      {error ? (
        <p role="alert" className="mt-3 text-left text-sm text-gold-light">
          {error}
        </p>
      ) : (
        <p className="mt-3 text-left text-xs text-parchment-deep/50">
          Drop your email and we&apos;ll follow up when the site is ready.
        </p>
      )}
    </form>
  );
}
