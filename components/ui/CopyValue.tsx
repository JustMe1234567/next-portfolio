"use client";

import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

type CopyValueProps = {
  value: string;
  copyValue?: string;
  icon: React.ReactNode;
  label: string;
};

const CopyValue = ({
  value,
  copyValue,
  icon,
  label,
}: CopyValueProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = copyValue ?? value;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; leave as is.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex w-full min-h-[44px] items-center gap-3 text-left text-white-200 transition hover:text-purple"
      aria-label={`Copy ${label}`}
      title="Click to copy"
    >
      <span className="shrink-0">{copied ? <FaCheck className="text-purple" /> : icon}</span>
      <span className="truncate">{value}</span>
      <span className="ml-auto shrink-0 text-xs uppercase tracking-wide text-white-200/60 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
};

export default CopyValue;