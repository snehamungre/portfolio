import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, techStack, githubUrl } = project;

  return (
    <article className="flex flex-col rounded-xl border border-tan/30 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="font-heading text-xl text-accent-dark">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted sm:text-base">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-pink-light px-2.5 py-0.5 text-xs text-accent-dark sm:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center font-nav text-sm text-accent transition-colors hover:text-accent-dark sm:text-base"
      >
        View on GitHub →
      </a>
    </article>
  );
};
