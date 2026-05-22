import { processSteps } from "@/data";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Code2,
  PenTool,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import CtaButton from "./ui/CtaButton";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";

const stepIcons: Record<number, LucideIcon> = {
  1: Search,
  2: PenTool,
  3: Code2,
  4: CheckCircle2,
  5: Rocket,
};

const Process = () => {
  return (
    <Section id="process" divider>
      <div className="section-stack">
        <SectionHeader
          label="How I work"
          title={
            <>
              Process from <span className="text-purple">brief to launch</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12">
          {processSteps.map((item) => {
            const Icon = stepIcons[item.id];
            return (
              <article
                key={item.id}
                className={cn(
                  "card-surface flex flex-col rounded-xl border border-white/[0.08] p-4 sm:rounded-2xl sm:p-5",
                  "transition hover:border-purple/25",
                  item.gridClass
                )}
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple/30 bg-purple/10 text-purple">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-purple sm:text-xs">
                    Step {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white-200">
                  {item.description}
                </p>

                <p className="mt-4 border-t border-white/[0.06] pt-3 text-[10px] font-medium uppercase tracking-wide text-purple/80">
                  {item.deliverables.join(" • ")}
                </p>

                {item.cta && (
                  <div className="mt-4">
                    <CtaButton href="/contact" variant="primary" className="w-full sm:w-auto">
                      Start a project
                    </CtaButton>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Process;
