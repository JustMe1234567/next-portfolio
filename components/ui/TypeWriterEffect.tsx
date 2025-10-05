"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroTypewriter() {
  return (
    <p className=" text-xl md:text-3xl font-bold">
      <span className="text-purple">
        <Typewriter
          words={[
            "a Front-end Developer.",
            "a Back-end Developer.",
            "an IoT Specialist.",
            "an Automation Specialist.",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80} // slower typing
          deleteSpeed={40} // smoother backspacing
          delaySpeed={1500}
        />
      </span>
    </p>
  );
}
