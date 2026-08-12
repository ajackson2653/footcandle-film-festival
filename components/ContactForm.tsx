"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-accent/50 bg-surface p-8 rounded-sm">
        <h3 className="text-xl text-accent">Thank you!</h3>
        <p className="mt-3 text-muted font-light">
          Your message has been sent. Someone will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot for spam bots (hidden from users) */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <Field label="Name" name="name" type="text" required />
      <Field label="Email" name="email" type="email" required />

      <div>
        <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-wide mb-2">
          Comment / Question
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-white font-light focus:border-accent focus:outline-none"
        />
      </div>

      {status === "error" && <p className="text-accent-2 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold uppercase tracking-wide bg-accent text-black hover:bg-accent-hover rounded-sm transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold uppercase tracking-wide mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-white font-light focus:border-accent focus:outline-none"
      />
    </div>
  );
}
