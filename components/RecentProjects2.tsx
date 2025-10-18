"use client";

import { projects } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3dPin";

const RecentProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ generate category list dynamically
  const categories = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.category))),
  ];

  // ✅ filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple ">my works.</span>
      </h1>

      {/* ✅ Category Filter Buttons */}
      <div className="flex flex-wrap justify-center  gap-1 md:gap-3 sm:gap-2 mt-10 text-xs md:text-lg">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`md:px-5 px-3 py-1 md:py-2 sm:px-3 sm:py-2 justify-center rounded-lg font-medium transition 
              ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-md scale-95"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ Scrollable Projects Grid */}
      <div
        className={`
          mt-10 p-4
          grid gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          lg:max-h-full   /* ~2 rows (6 cards) desktop */
          max-h-[600px]      /* ~4 cards mobile */
          overflow-y-auto
          
          overflow-x-hidden
          custom-scroll
        `}
      >
        <AnimatePresence>
          {filteredProjects.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-4 rounded-2xl bg-card  shadow-md flex flex-col items-center justify-start lg:my-20 "
            >
              <PinContainer
                title={item.title}
                href={item.link}
                target={item.target}
              >
                <div
                  className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:h-[35vh] mb-6 "
                  id={item.id.toString()}
                >
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl "
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      width={900}
                      height={900}
                      src="/bg.png"
                      alt="bgimg"
                      className="h-full"
                    />
                  </div>
                  <Image
                    width={800}
                    height={800}
                    src={item.img}
                    alt="cover"
                    className="z-10 object-cover md:-mt-2 p-2 rotate-3 -bottom-1  absolute lg:-bottom-4 rounded-2xl h-full"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-sm lg:font-normal font-light text-xs line-clamp-none lg:line-clamp-5 text-justify"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          width={100}
                          height={100}
                          src={icon}
                          alt="icon"
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>
                  {item.live && (
                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  )}
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ✅ Custom Scrollbar - hidden until hover */}
      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: hsl(var(--foreground) / 0.3);
          border-radius: 9999px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .custom-scroll:hover::-webkit-scrollbar-thumb {
          opacity: 1;
        }
        .dark .custom-scroll::-webkit-scrollbar-thumb {
          background-color: hsl(var(--foreground) / 0.5);
        }
      `}</style>
    </div>
  );
};

export default RecentProjects;
