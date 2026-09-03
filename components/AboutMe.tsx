import { about } from "@/data";
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
          title="WordPress, Shopify & Webflow specialist"
          description="WordPress, Shopify, and Webflow—shipped on time, built to last."
        />

        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-5 sm:gap-6">
          <Image
            src={about.image}
            alt="John Chloe profile"
            width={800}
            height={800}
            className="h-44 w-44 rounded-2xl object-cover shadow-lg ring-2 ring-purple/20 sm:h-52 sm:w-52 lg:h-100 lg:w-100"
          />

          <p className="text-center text-sm leading-relaxed text-white-200 sm:text-base">
            {about.intro}
          </p>

          <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {about.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-0.5">
                <span className="text-xl font-bold tabular-nums sm:text-2xl">
                  {stat.number}
                  {"suffix" in stat ? stat.suffix : "+"}
                </span>
                <span className="whitespace-nowrap text-center text-[11px] text-white-200 sm:text-xs">
                  {stat.title}
                </span>
              </div>
            ))}
          </div>

          <CtaButton href="/contact" variant="primary">
            Start a project
          </CtaButton>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
