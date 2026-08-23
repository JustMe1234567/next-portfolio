import { hero } from "@/data";
import { cn } from "@/lib/utils";
import CtaButton from "./ui/CtaButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section className="relative flex min-h-[min(88svh,820px)] items-center pt-20 pb-12 sm:pt-24 sm:pb-14 lg:min-h-screen lg:h-screen lg:py-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-[70vh]"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[60vh] w-[40vh] hidden sm:block"
          fill="purple"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className={cn(
            "absolute inset-0 opacity-60",
            "[background-size:80px_80px] sm:[background-size:120px_120px]",
            "[background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)]"
          )}
        />
        <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center sm:gap-6 lg:max-w-4xl lg:gap-8">
          <p className="section-eyebrow text-xs sm:text-sm lg:text-base">
            {hero.eyebrow}
          </p>
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-pretty sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">{hero.headlineLine1}</span>
            <span className="mt-1 block text-purple sm:mt-2">
              {hero.headlineLine2}
            </span>
          </h1>
          <p className="max-w-lg text-sm leading-relaxed text-white-200 sm:text-base lg:max-w-2xl lg:text-lg xl:text-xl">
            {hero.subheadline}
          </p>
          <div className="flex w-full max-w-xs flex-col gap-3 pt-1 sm:max-w-none sm:flex-row sm:justify-center lg:gap-4 lg:pt-2">
            <CtaButton href="/contact" variant="primary" className="w-full sm:w-auto">
              Hire me
            </CtaButton>
            <CtaButton href="/#projects" variant="secondary" className="w-full sm:w-auto">
              View work
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
