import { workExperience } from "@/data";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/MovingBorder";

const WorkExperience = () => {
  return (
    <div id="experience" className="py-20 z-10">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1  gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 lg:gap-12 gap-2 ">
              <Image
                width={100}
                height={100}
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-1/4 md:w-20 w-16 "
              />
              <div className="lg:ms-5 lg:w-3/4 z-50">
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h2>
                <p className="text-justify text-white-100 mt-3 text-sm md:text-lg font-light tracking-tight leading-4 md:leading-5">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.tech?.map((tec, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-lg bg-purple-600 text-white text-xs font-medium"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
