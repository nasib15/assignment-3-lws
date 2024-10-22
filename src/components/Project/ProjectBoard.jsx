import { getAllProjects } from "../data/data";
import { AddSVG } from "../SVG/IconSVG";
import ProjectCard from "./ProjectCard";

const ProjectBoard = () => {
  const projectData = getAllProjects();

  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
              <AddSVG />
              Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          {projectData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProjectBoard;
