import type { Project } from "../../types";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  title?: string;
}

export const ProjectGrid = ({ projects, title }: ProjectGridProps) => {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {title && (
          <h2 className="mb-8 text-center font-heading text-2xl text-accent-dark sm:text-3xl">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
