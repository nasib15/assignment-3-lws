import { SortSVG } from "../SVG/IconSVG";
import ProjectCardDetails from "./ProjectCardDetails";

const ProjectCard = ({ category, projects, color }) => {
  // Color variants for dynamic class
  const colorVariants = {
    "indigo-600": "bg-indigo-600",
    "yellow-500": "bg-yellow-500",
    "teal-500": "bg-teal-500",
    "rose-500": "bg-rose-500",
  };
  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className={`rounded-lg ${colorVariants[color]} p-4`}>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {category} ({projects.length})
            </h3>
            <SortSVG />
          </div>
          <div>
            {projects.map((project) => (
              <ProjectCardDetails key={project.id} {...project} color={color} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
