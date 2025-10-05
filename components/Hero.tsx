import { cn } from "@/lib/utils";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import HeroTypewriter from "./ui/TypeWriterEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="#hero">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      {/* Gradient Grid bg */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.2] bg-grid-black-100/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:150px_150px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>
      {/* Display texts */}
      <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-widest uppercase text-xs text-center text-blue-100 max-w-80 ">
            My portfolio website
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Digital Solutions"
            duration={0.5}
          />
          {/* Typewriter */}
          <div className="flex md:mt-4 justify-center items-center text-center gap-2 text-sm mt-4 md:mb-0 mb-7 lg:text-2xl ">
            <div>
              <p>
                Hi I&apos;m <span className="font-bold">John Chloe,</span>
              </p>
              <HeroTypewriter />
            </div>
          </div>
          {/* Button */}
          <a href="#projects" className="hover:cursor-pointer">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
