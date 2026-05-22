import { about, platforms } from "@/data";
import Image from "next/image";
import CtaButton from "./ui/CtaButton";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";

const AboutMe = () => {
  return (
    <Section id="aboutme" divider>
      <div className="section-stack">
        <SectionHeader
          label="About"
          title="CMS developer for hire"
          description="WordPress, Shopify, and Webflow—shipped on time, built to last."
        />

        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-5 sm:gap-6">
          <Image
            src={about.image}
            alt="John Chloe profile"
            width={800}
            height={800}
            className="h-32 w-32 rounded-2xl object-cover shadow-lg ring-2 ring-purple/20 sm:h-40 sm:w-40"
          />

          <p className="text-center text-sm leading-relaxed text-white-200 sm:text-base">
            {about.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="rounded-full border border-purple/30 bg-purple/10 px-3 py-1 text-xs font-medium text-purple"
              >
                {p.name}
              </span>
            ))}
          </div>

          <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {about.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-0.5">
                <span className="text-xl font-bold tabular-nums sm:text-2xl">
                  {stat.number}
                  {"suffix" in stat ? stat.suffix : "+"}
                </span>
                <span className="text-center text-[11px] text-gray-400 sm:text-xs">
                  {stat.title}
                </span>
              </div>
            ))}
          </div>

          <CtaButton href="/contact" variant="primary">
            Hire me
          </CtaButton>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
