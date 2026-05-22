import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  divider?: boolean;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  divider,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("section-shell", className)}
    >
      <div className={cn("section-container", containerClassName)}>
        {divider && (
          <div
            className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:mb-8"
            aria-hidden
          />
        )}
        {children}
      </div>
    </section>
  );
}
