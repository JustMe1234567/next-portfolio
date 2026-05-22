"use client";

import ProjectCard from "@/components/ProjectCard";
import { projectFilters, projects } from "@/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import CtaButton from "./ui/CtaButton";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";

const RecentProjects = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectFilters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <Section id="projects" aria-labelledby="projects-heading" divider>
      <div className="section-stack">
        <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="Projects"
            title="Selected work"
            description="WordPress themes and front-end builds for agencies and businesses."
            titleId="projects-heading"
            align="left"
            className="max-w-lg !mx-0"
          />

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects"
          >
            {projectFilters.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat ? "true" : "false"}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-3.5 py-2 text-xs font-medium transition sm:text-sm",
                  activeCategory === cat
                    ? "border-purple bg-purple text-black-100 shadow-sm shadow-purple/20"
                    : "border-purple/20 text-white-200 hover:border-purple/40 hover:bg-purple/10 hover:text-purple"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "projects-grid-scroll overflow-y-auto overflow-x-hidden rounded-xl border border-white/[0.06] sm:rounded-2xl",
                "max-h-[420px] sm:max-h-[460px] lg:max-h-[500px]"
              )}
            >
              <ul className="grid list-none grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-3">
                {filteredProjects.length === 0 ? (
                  <li className="col-span-full py-10 text-center text-sm text-white-200">
                    No projects in this category.
                  </li>
                ) : (
                  filteredProjects.map((project) => (
                    <li key={project.id} className="min-w-0">
                      <ProjectCard project={project} />
                    </li>
                  ))
                )}
              </ul>
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length > 4 && (
            <p className="mt-2 text-center text-[10px] text-white/35">
              Scroll for more
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <CtaButton href="/contact" variant="secondary">
            Discuss your project
          </CtaButton>
        </div>
      </div>
    </Section>
  );
};

export default RecentProjects;
