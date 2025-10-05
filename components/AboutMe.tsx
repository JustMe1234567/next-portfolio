import { about } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="pb-20 sm:pt-14 md:pt-36" id="aboutme">
      <div className="relative">
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.2] bg-grid-black-100/[0.2] flex items-center justify-center absolute top-0 left-0 rounded-b-full">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:150px_150px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle_at_center,transparent_2,black)] dark:bg-black-100"></div>
        </div>

        <div className="bg-black-100 absolute w-full h-10"></div>
        {/* Display texts */}
        <div className="w-full h-screen flex justify-center relative z-10 py-16">
          <div className="w-full max-w-5xl flex flex-col items-center px-6">
            {/* Header */}
            <h2 className="text-4xl font-bold text-center mb-25">About Me</h2>

            {/* Container for pic and intro */}
            <div className="grid grid-cols-1 md:gap-x-12 md:grid-cols-2 items-center w-full">
              {/* Pic */}
              <div className="flex justify-center">
                <Image
                  src={about.image}
                  alt="Profile"
                  width={800}
                  height={800}
                  className="md:w-[300px] md:h-[300px] h-[200px] w-[200px] rounded-[10px] bg-black-100 md:rounded-lg shadow-xl "
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 text-center md:text-left ">
                <p className="text-gray-300 text-justify bg-black-100 md:text-lg md:mt-7 mt-10 indent-10">
                  {about.intro}
                </p>

                {/* Stats section */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                  {about.stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <span className="text-2xl font-bold">{stat.number}+</span>
                      <span className="text-sm text-gray-400">
                        {stat.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
