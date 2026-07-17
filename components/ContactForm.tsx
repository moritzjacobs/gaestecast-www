"use client";

import { useState, type FormEvent } from "react";
import { kontakt } from "@/content/site";
import { contactSchema } from "@/lib/contact-schema";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { form } = kontakt;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;

    const formData = new FormData(formEl);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      date: String(formData.get("date") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(parsed.error.issues[0]?.message ?? form.errorMessage);
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setErrorMessage(form.errorMessage);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border-2 border-ink bg-gold p-8 text-center text-ink shadow-[6px_6px_0_var(--color-ink)]">
        <p className="font-display text-2xl">{form.successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border-2 border-ink bg-cream-soft p-8 text-ink shadow-[6px_6px_0_var(--color-ink)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 font-sans text-sm font-semibold">
          {form.nameLabel}
          <input
            name="name"
            type="text"
            required
            className="rounded-xl border-2 border-ink bg-cream px-4 py-2 font-sans font-normal outline-none focus:border-terracotta"
          />
        </label>

        <label className="flex flex-col gap-2 font-sans text-sm font-semibold">
          {form.emailLabel}
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border-2 border-ink bg-cream px-4 py-2 font-sans font-normal outline-none focus:border-terracotta"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 font-sans text-sm font-semibold">
        {form.dateLabel}
        <input
          name="date"
          type="date"
          className="rounded-xl border-2 border-ink bg-cream px-4 py-2 font-sans font-normal outline-none focus:border-terracotta"
        />
      </label>

      <label className="flex flex-col gap-2 font-sans text-sm font-semibold">
        {form.messageLabel}
        <textarea
          name="message"
          required
          rows={4}
          className="rounded-xl border-2 border-ink bg-cream px-4 py-2 font-sans font-normal outline-none focus:border-terracotta"
        />
      </label>

      {status === "error" && errorMessage && (
        <p className="font-sans text-sm font-semibold text-terracotta">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-terracotta px-6 py-3 font-sans font-semibold text-cream-soft shadow-[4px_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0_var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? form.submittingLabel : form.submitLabel}
      </button>
    </form>
  );
}
