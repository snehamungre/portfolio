import { ProjectGrid } from "../components/Projects/ProjectGrid";
import { projects } from "../data/projects";

export const ProjectsPage = () => {
  return (
    <ProjectGrid projects={projects} title="All Projects" />
  );
};
