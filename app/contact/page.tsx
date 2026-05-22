import ContactForm from "@/components/ContactForm";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactPage, navItems, site, socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaEnvelope,
  FaLocationPin,
  FaPhone,
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-black-100 text-white">
      <FloatingNav navItems={navItems} />

      <div className="section-container flex-1 max-w-5xl pt-20 pb-10 sm:pt-24 sm:pb-12">
        <Link
          href="/"
          className="mb-8 sm:mb-10 inline-flex min-h-[44px] items-center gap-2 text-sm text-white-200 transition hover:text-purple"
        >
          <FaArrowLeft className="text-xs" aria-hidden />
          Back to portfolio
        </Link>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <SectionHeader
              label="Contact"
              title={contactPage.headline}
              description={contactPage.subheadline}
              align="left"
              className="max-w-none"
            />

            <ul className="space-y-3 sm:space-y-4">
              {contactPage.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm sm:text-base text-white-200 leading-relaxed"
                >
                  <span className="shrink-0 text-purple" aria-hidden>
                    ✓
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="space-y-4 text-sm sm:text-base">
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-[44px] items-center gap-3 text-white-200 transition hover:text-purple"
              >
                <FaEnvelope className="shrink-0" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex min-h-[44px] items-center gap-3 text-white-200 transition hover:text-purple"
              >
                <FaPhone className="shrink-0" />
                {site.phone}
              </a>
              <div className="flex min-h-[44px] items-center gap-3 text-white-200">
                <FaLocationPin className="shrink-0" />
                {site.location}
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-black-300 bg-black-200 transition hover:border-purple/40"
                  aria-label="Social profile"
                >
                  <Image src={info.img} alt="" width={24} height={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="card-surface rounded-2xl sm:rounded-3xl border border-white/[0.1] p-5 sm:p-6 md:p-8 lg:p-10 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold">Project details</h2>
              <p className="text-sm text-white-200 leading-relaxed">
                Your inquiry is saved to my project sheet—I usually reply within
                24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      <footer className="border-t border-white/[0.08] py-6 sm:py-8 text-center text-sm text-white-200">
        <div className="section-container">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
