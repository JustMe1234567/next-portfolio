import { platforms } from "@/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { SiShopify, SiWebflow, SiWordpress } from "react-icons/si";
import { SectionHeader } from "./ui/SectionHeader";

const platformIcons: Record<(typeof platforms)[number]["icon"], IconType> = {
  wordpress: SiWordpress,
  shopify: SiShopify,
  webflow: SiWebflow,
};

const Platforms = () => {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02] py-14 sm:py-16 md:py-20">
      <div className="section-container">
        <SectionHeader
          label="Platforms"
          title="Built on the stack your business already uses"
          description="WordPress, Shopify, or Webflow—each with a clear scope, clean handoff, and room to grow."
          className="mb-10 sm:mb-12"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {platforms.map((platform) => {
            const Icon = platformIcons[platform.icon];

            return (
              <article
                key={platform.name}
                className={cn(
                  "group relative flex min-h-[260px] flex-col rounded-2xl border bg-gradient-to-br p-5 transition duration-300 sm:min-h-[280px] sm:p-6",
                  "hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30",
                  platform.color,
                  platform.border
                )}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition group-hover:opacity-40"
                  style={{ backgroundColor: platform.accent }}
                />

                <div
                  className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black-100/80 shadow-inner sm:h-14 sm:w-14"
                  style={{
                    boxShadow: `0 0 32px ${platform.accent}33`,
                  }}
                >
                  <Icon
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    style={{ color: platform.accent }}
                    aria-hidden
                  />
                </div>

                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {platform.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white-200">
                  {platform.tagline}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2.5 border-t border-white/10 pt-5">
                  {platform.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-white-100 sm:text-[0.95rem]"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${platform.accent}22` }}
                      >
                        <Check
                          className="h-3 w-3"
                          style={{ color: platform.accent }}
                          aria-hidden
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#projects"
                  className="mt-4 inline-flex w-fit items-center gap-1 text-xs font-medium text-white/70 transition hover:text-purple sm:text-sm"
                >
                  <span>See {platform.name} work</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
