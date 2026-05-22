"use client";

import { site } from "@/data";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import CtaButton from "./CtaButton";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
}

function NavLink({ link, name }: { link: string; name: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const isHash = link.startsWith("#") || link.startsWith("/#");
  const sectionId = link.replace(/^\/#/, "").replace(/^#/, "");

  if (isHash) {
    return (
      <a
        href={`/#${sectionId}`}
        className="nav-link whitespace-nowrap"
        onClick={(e) => {
          e.preventDefault();
          if (pathname === "/") {
            scrollToSection(sectionId);
          } else {
            router.push(`/#${sectionId}`);
          }
        }}
      >
        {name}
      </a>
    );
  }

  return (
    <Link href={link} className="nav-link whitespace-nowrap">
      {name}
    </Link>
  );
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.005) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed z-[5000] top-3 sm:top-5 inset-x-3 sm:inset-x-4 md:inset-x-6 lg:inset-x-auto lg:left-1/2 lg:-translate-x-1/2 lg:max-w-4xl lg:w-full",
          className
        )}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/10 bg-black-200/90 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-xl sm:px-5 sm:py-2.5">
          <Link
            href="/"
            className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
          >
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-purple/30 transition group-hover:ring-purple sm:h-9 sm:w-9">
              <Image
                src={site.profileImage}
                alt={site.name}
                width={72}
                height={72}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden truncate font-semibold text-sm text-white transition group-hover:text-purple min-[400px]:inline sm:text-base">
              {site.name}
            </span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-5 lg:gap-7">
            {navItems.map((item, idx) => (
              <NavLink key={idx} link={item.link} name={item.name} />
            ))}
          </nav>

          <CtaButton
            href="/contact"
            variant="primary"
            className="!min-h-0 shrink-0 !py-2 !px-3 !text-xs sm:!py-2.5 sm:!px-4 sm:!text-sm"
          >
            Hire me
          </CtaButton>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};
