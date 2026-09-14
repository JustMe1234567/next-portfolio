"use client";

import { site } from "@/data";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CtaButton from "./ui/CtaButton";
import { createContactSubmission } from "@/lib/appwrite-client";

type ContactFormProps = {
  className?: string;
};

const SERVICE_OPTIONS = [
  "WordPress Website",
  "Shopify Store",
  "Webflow Website",
  "Redesign",
  "Maintenance & Support",
] as const;

const SOURCE = "vercel portfolio";

const fieldClass =
  "w-full rounded-xl border border-black-300 bg-black-200 px-4 py-3 text-sm sm:text-base text-white outline-none transition placeholder:text-white-200/70 focus:border-purple/50 focus:ring-2 focus:ring-purple/20 disabled:opacity-50";

const labelClass = "mb-1.5 block text-sm font-medium text-white-200";

type Status = "idle" | "loading" | "success" | "error";

const FALLBACK_ERROR =
  "We couldn't send your message. Please try again or email me directly.";

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [form, setForm] = useState<{
    name: string;
    service: string;
    customService: string;
    budget: string;
    message: string;
  }>({
    name: "",
    service: SERVICE_OPTIONS[0],
    customService: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isCustomService = form.service === "Others";

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
    const service = isCustomService
      ? form.customService.trim()
      : form.service;
    const budget = form.budget.trim();
    const message = form.message.trim();

    if (!name || !service || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, the service, and a message.");
      return;
    }

    setStatus("loading");

    try {
      await createContactSubmission({
        name,
        service,
        budget,
        message,
        source: SOURCE,
      });

      setStatus("success");
      setForm({
        name: "",
        service: SERVICE_OPTIONS[0],
        customService: "",
        budget: "",
        message: "",
      });
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
      className={`flex w-full flex-col gap-5 ${className}`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="cf-service" className={labelClass}>
            Service
          </label>
          <div className="relative">
            <select
              id="cf-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              disabled={status === "loading"}
              className={`${fieldClass} appearance-none pr-10`}
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              <option value="Others">Others</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white-200"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {isCustomService && (
        <div>
          <label htmlFor="cf-custom-service" className={labelClass}>
            Tell us the service you need
          </label>
          <input
            id="cf-custom-service"
            type="text"
            name="customService"
            placeholder="e.g. Landing page for a startup"
            value={form.customService}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className={fieldClass}
          />
        </div>
      )}

      <div>
        <label htmlFor="cf-budget" className={labelClass}>
          Budget
        </label>
        <input
          id="cf-budget"
          type="text"
          name="budget"
          inputMode="numeric"
          placeholder="e.g. $500 – $1,500"
          value={form.budget}
          onChange={handleChange}
          disabled={status === "loading"}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Project goals, timeline, and links (Figma, current site, etc.)"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className={`${fieldClass} min-h-[140px] resize-y`}
        />
      </div>

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