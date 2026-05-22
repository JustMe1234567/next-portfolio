import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const CtaButton = ({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
  type,
  disabled,
}: CtaButtonProps) => {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] w-full sm:w-auto min-h-[44px]",
    disabled && "pointer-events-none opacity-60",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    className
  );

  const content = (
    <>
      {children}
      <ArrowUpRight
        className={cn(
          "h-4 w-4 shrink-0",
          variant === "primary" ? "text-black-100/80" : "text-purple"
        )}
      />
    </>
  );

  if (type === "submit" || type === "button") {
    return (
      <button type={type} className={styles} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    );
  }

  if (!href) {
    return (
      <button type="button" className={styles} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    );
  }

  if (href.startsWith("#") || href.startsWith("/#")) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {content}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {content}
    </Link>
  );
};

export default CtaButton;
