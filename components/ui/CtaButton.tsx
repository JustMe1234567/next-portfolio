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
    "inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-[0.98] w-full sm:w-auto min-h-[38px] sm:min-h-[40px] sm:px-5 sm:py-2.5",
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
          "h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4",
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
    <Link href={href} className={styles} onClick={onClick}>
      {content}
    </Link>
  );
};

export default CtaButton;
