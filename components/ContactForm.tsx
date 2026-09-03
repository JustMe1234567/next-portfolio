"use client";

import { site } from "@/data";
import { useState } from "react";
import CtaButton from "./ui/CtaButton";

type ContactFormProps = {
  className?: string;
};

const fieldClass =
  "w-full min-h-[48px] rounded-xl border border-black-300 bg-black-200 px-4 py-3 text-sm sm:text-base text-white outline-none transition placeholder:text-white/40 focus:border-purple/50 disabled:opacity-50";

type Status = "idle" | "loading" | "success" | "error";

const FALLBACK_ERROR =
  "We couldn't send your message. Please try again or email me directly.";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    platform: "WordPress",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, name, email, message }),
      });

      let data: { success?: boolean; message?: string } = {};

      try {
        data = await res.json();
      } catch {
        throw new Error(FALLBACK_ERROR);
      }

      if (!res.ok || !data.success) {
        throw new Error(data.message || FALLBACK_ERROR);
      }

      setStatus("success");
      setForm({ name: "", email: "", platform: "WordPress", message: "" });
    } catch (err) {
      setStatus("error");

      if (err instanceof TypeError) {
        setErrorMessage(
          "Couldn't connect. Check your internet and try again."
        );
        return;
      }

      setErrorMessage(
        err instanceof Error ? err.message : FALLBACK_ERROR
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className={`rounded-xl border border-purple/30 bg-purple/10 p-6 text-center ${className}`}
      >
        <p className="text-lg font-semibold text-purple">Inquiry received!</p>
        <p className="mt-2 text-sm text-white-200">
          Thanks for reaching out. I&apos;ll review your project details and get
          back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-purple underline hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-4 sm:gap-5 ${className}`}
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
        disabled={status === "loading"}
        className={fieldClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Work email"
        value={form.email}
        onChange={handleChange}
        required
        disabled={status === "loading"}
        className={fieldClass}
      />
      <select
        name="platform"
        value={form.platform}
        onChange={handleChange}
        disabled={status === "loading"}
        className={fieldClass}
        aria-label="Project platform"
      >
        <option value="WordPress">WordPress</option>
        <option value="Shopify">Shopify</option>
        <option value="Webflow">Webflow</option>
        <option value="Not sure yet">Not sure yet</option>
      </select>
      <textarea
        name="message"
        placeholder="Project goals, timeline, and links (Figma, current site, etc.)"
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
        disabled={status === "loading"}
        className={`${fieldClass} min-h-[140px] resize-y`}
      />

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}{" "}
          <a href={`mailto:${site.email}`} className="text-purple underline">
            Email me directly
          </a>
        </p>
      )}

      <CtaButton
        type="submit"
        variant="primary"
        className="w-full mt-1"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Contact me"}
      </CtaButton>
    </form>
  );
};

export default ContactForm;
