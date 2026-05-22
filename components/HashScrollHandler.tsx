"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHash() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const el = document.getElementById(hash);
  if (el) {
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

/** Scrolls to #section after navigating from another page (e.g. /contact → /#projects). */
export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    scrollToHash();
    const t = setTimeout(scrollToHash, 150);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
