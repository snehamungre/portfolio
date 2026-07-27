import { Hero } from "../components/Home/Hero";
import { ToolSetStrip } from "../components/Home/ToolSetStrip";
import { ProjectGrid } from "../components/Projects/ProjectGrid";
import { projects } from "../data/projects";

export const HomePage = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <ToolSetStrip />
      <ProjectGrid projects={featuredProjects} title="Featured Projects" />
    </>
  );
};
