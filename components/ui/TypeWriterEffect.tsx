"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroTypewriter() {
  return (
    <p className="text-purple font-medium text-base sm:text-xl md:text-2xl">
      <Typewriter
        words={[
          "WordPress developer.",
          "Shopify specialist.",
          "Webflow builder.",
        ]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={45}
        delaySpeed={1800}
      />
    </p>
  );
}
