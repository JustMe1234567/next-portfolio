import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  titleId?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  titleId,
  align = "center",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-2xl space-y-2 sm:space-y-3",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <p className="section-eyebrow">{label}</p>
      <h2
        id={titleId}
        className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white text-pretty"
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-white-200 leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </header>
  );
}
