import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  link: string;
  iconLists: string[];
  category: string[];
  target: string;
  live: boolean;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] transition hover:border-purple/30">
      <div className="relative aspect-[16/10] overflow-hidden">
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
          <span className="pointer-events-none absolute top-2 right-2 rounded-full border border-white/10 bg-black/70 px-2 py-0.5 text-[9px] font-medium uppercase text-white">
            Live
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3.5 sm:p-4">
        <div className="flex flex-wrap gap-1">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="rounded border border-purple/20 bg-purple/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase text-purple"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-sm font-bold text-white line-clamp-1 sm:text-base">
          {project.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-xs leading-relaxed text-white-200 sm:text-sm">
          {project.des}
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
