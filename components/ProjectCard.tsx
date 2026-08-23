import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export type Project = {
  id: number;
  title: string;
  des: string;
  short: string;
  img: string;
  link: string;
  iconLists: string[];
  category: string[];
  target: string;
  live: boolean;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const typeLabels: Record<string, string> = {
    WordPress: "WordPress Development",
    Frontend: "Frontend Development",
  };
  const type = typeLabels[project.category[0]] ?? project.category[0];

  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] transition hover:border-purple/30">
      <div
        className="animate-float relative aspect-[16/10] overflow-hidden"
        style={{
          animationDuration: `${1.5 + (project.id % 5) * 0.4}s`,
          animationDelay: `${(project.id % 4) * -0.5}s`,
        }}
      >
        {project.live ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full"
            aria-label={`Visit ${project.title}`}
          >
            <Image
              src={project.img}
              alt={project.title}
              width={480}
              height={300}
              className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
            />
          </a>
        ) : (
          <Image
            src={project.img}
            alt={project.title}
            width={480}
            height={300}
            className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
          />
        )}
        {project.live && (
          <span className="pointer-events-none absolute top-2 right-2 rounded-full border border-white/10 bg-black/70 px-2 py-0.5 text-[9px] font-medium uppercase text-[#fff]">
            Live
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3.5 sm:p-4">
        <h3 className="text-sm font-bold text-white line-clamp-2 sm:text-base">
          {project.title} <span className="text-purple">&mdash; {type}</span>
        </h3>
        <p className="flex-1 text-xs leading-relaxed text-white-200 sm:text-sm">
          {project.short}
        </p>

        <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
          <div className="flex -space-x-1.5">
            {project.iconLists.slice(0, 4).map((icon, i) => (
              <div
                key={icon}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black-200"
                style={{ zIndex: 4 - i }}
              >
                <Image src={icon} alt="" width={14} height={14} className="h-3.5 w-3.5" />
              </div>
            ))}
          </div>
          {project.live && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-xs font-semibold text-purple hover:text-white"
            >
              View <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
