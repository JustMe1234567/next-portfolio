"use client";

import { footerPhrase, site, socialMedia } from "@/data";
import Image from "next/image";
import { FaEnvelope, FaLocationPin } from "react-icons/fa6";
import CtaButton from "./ui/CtaButton";
import { Section } from "./ui/Section";

const contactLinks = [
  {
    id: "whatsapp",
    href: site.whatsapp,
    label: site.phone,
    icon: (
      <Image src="/wha.svg" alt="" width={20} height={20} className="h-5 w-5" />
    ),
    external: true,
  },
  {
    id: "email",
    href: `mailto:${site.email}`,
    label: site.email,
    icon: <FaEnvelope className="h-4 w-4 shrink-0 text-purple" aria-hidden />,
    external: false,
  },
  {
    id: "location",
    href: undefined,
    label: site.location,
    icon: <FaLocationPin className="h-4 w-4 shrink-0 text-purple" aria-hidden />,
    external: false,
  },
] as const;

const Footer = () => {
  return (
    <Section id="contact" divider className="!pb-8">
      <div className="section-stack mx-auto max-w-3xl">
        <div className="card-surface rounded-2xl border border-white/[0.08] p-6 text-center sm:p-8">
          <div className="flex flex-col items-center gap-5 sm:gap-6">
            <h2 className="text-xl font-bold leading-snug text-pretty sm:text-2xl md:text-3xl">
              {footerPhrase.before}{" "}
              <span className="text-purple">&ldquo;{footerPhrase.from}&rdquo;</span>{" "}
              into{" "}
              <span className="text-purple">&ldquo;{footerPhrase.to}&rdquo;</span>
            </h2>

            <Image
              src="/mc.gif"
              alt=""
              width={100}
              height={100}
              unoptimized
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />

            <p className="text-sm text-white-200">
              WordPress, Shopify, or Webflow—let&apos;s talk on the contact page.
            </p>

            <CtaButton href="/contact" variant="primary" className="w-full sm:w-auto">
              Go to contact
            </CtaButton>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple/20 bg-black-200 transition hover:border-purple/50 hover:bg-purple/10"
              aria-label={info.link}
            >
              <Image src={info.img} alt="" width={22} height={22} />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            {contactLinks.map((item) => {
              const inner = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple/20 bg-purple/5">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm text-white-200 group-hover:text-purple transition-colors truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                </>
              );

              if (!item.href) {
                return (
                  <div
                    key={item.id}
                    className="inline-flex items-center gap-3 px-1"
                  >
                    {inner}
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 rounded-lg px-1 py-1 transition hover:bg-purple/5"
                >
                  {inner}
                </a>
              );
            })}
          </div>

          <p className="text-center text-xs text-white-200/60">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
