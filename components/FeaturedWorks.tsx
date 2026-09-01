import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";
import { Section } from "./ui/Section";
import { SectionHeader } from "./ui/SectionHeader";

const FeaturedWorks = () => {
  const featured = projects.filter((p) => [7, 10, 12].includes(p.id));

  return (
    <Section
      id="featured-works"
      divider
      aria-labelledby="featured-works-heading"
    >
      <div className="section-stack">
        <SectionHeader
          label="Featured Works"
          title={
            <>
              A few of my <span className="text-purple">favorite builds</span>
            </>
          }
          description="Handpicked projects—Plantittoo, Ursula Jewelry, and Horcasb Dental."
          titleId="featured-works-heading"
        />

        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {featured.map((project) => (
            <li key={project.id} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default FeaturedWorks;
