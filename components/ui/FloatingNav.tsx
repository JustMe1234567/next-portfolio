"use client";

import { site } from "@/data";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import ThemeToggle from "./ThemeToggle";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
}

function NavLink({
  link,
  name,
  onNavigate,
  className,
}: {
  link: string;
  name: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isHash = link.startsWith("#") || link.startsWith("/#");
  const sectionId = link.replace(/^\/#/, "").replace(/^#/, "");

  const handleClick = (e: React.MouseEvent) => {
    if (!isHash) return;
    e.preventDefault();
    onNavigate?.();
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  if (isHash) {
    return (
      <a
        href={`/#${sectionId}`}
        className={cn("nav-link whitespace-nowrap", className)}
        onClick={handleClick}
      >
        {name}
      </a>
    );
  }

  return (
    <Link
      href={link}
      className={cn("nav-link whitespace-nowrap", className)}
      onClick={onNavigate}
    >
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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
        <div className="relative z-50 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-black-100 px-3 py-2 shadow-lg shadow-black/40 sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-2.5 lg:bg-black-200/90 lg:backdrop-blur-xl">
          <Link
            href="/"
            className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
            onClick={closeMenu}
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

          <nav className="hidden items-center gap-4 lg:flex lg:gap-7">
            {navItems.map((item, idx) => (
              <NavLink key={idx} link={item.link} name={item.name} />
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <CtaButton
              href="/contact"
              variant="primary"
              className="!min-h-[34px] shrink-0 !gap-1 !rounded-lg !px-2.5 !py-1.5 !text-xs sm:!min-h-[36px] sm:!px-3 sm:!text-sm"
            >
              Hire me
            </CtaButton>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-purple/40 hover:text-purple lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/75 lg:hidden"
                onClick={closeMenu}
              />
              <motion.nav
                id="mobile-nav-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="relative z-50 mt-2 rounded-xl border border-white/15 bg-black-100 p-4 shadow-xl lg:hidden"
              >
                <ul className="flex flex-col gap-1">
                  {navItems.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        link={item.link}
                        name={item.name}
                        onNavigate={closeMenu}
                        className="!block w-full rounded-lg px-3 py-3 !text-base !text-white hover:bg-white/10"
                      />
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
};
