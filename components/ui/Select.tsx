"use client";

import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SelectProps = {
  id?: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
};

const Select = ({
  id,
  value,
  options,
  onChange,
  disabled,
  className,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(() =>
    Math.max(0, options.indexOf(value))
  );
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (open) setHighlighted(Math.max(0, options.indexOf(value)));
  }, [open, value, options]);

  const commit = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(options.length - 1, h + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(0, h - 1));
        break;
      case "Home":
        e.preventDefault();
        setHighlighted(0);
        break;
      case "End":
        e.preventDefault();
        setHighlighted(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        commit(options[highlighted]);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-xl border border-black-300 bg-black-200 px-4 py-3 text-left text-sm sm:text-base text-white outline-none transition placeholder:text-white-200/70 focus:border-purple/50 focus:ring-2 focus:ring-purple/20 disabled:opacity-50",
          open && "border-purple/50 ring-2 ring-purple/20"
        )}
      >
        <span className="truncate">{value}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-white-200 transition-transform duration-200",
            open && "rotate-180 text-purple"
          )}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-activedescendant={id ? `${id}-option-${highlighted}` : undefined}
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 max-h-64 overflow-auto rounded-xl border border-black-300 bg-black-100 p-1.5 shadow-xl shadow-black/30 backdrop-blur-xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-1 duration-150"
        >
          {options.map((option, i) => {
            const selected = option === value;
            const active = highlighted === i;
            return (
              <li
                key={option}
                id={id ? `${id}-option-${i}` : undefined}
                role="option"
                aria-selected={selected}
              >
                <button
                  type="button"
                  onMouseEnter={() => setHighlighted(i)}
                  onClick={() => commit(option)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                    selected ? "text-purple" : "text-white",
                    active ? "bg-purple/10" : "bg-transparent"
                  )}
                >
                  <span className="truncate">{option}</span>
                  {selected && (
                    <Check className="h-4 w-4 shrink-0 text-purple" aria-hidden />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;