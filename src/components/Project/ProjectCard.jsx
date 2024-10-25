import useProjectContext from "../hooks/useProjectContext";
import { SortSVG } from "../SVG/IconSVG";
import ProjectCardDetails from "./ProjectCardDetails";
import TaskListEmpty from "./TaskListEmpty";

const ProjectCard = ({ category, color, onEdit, onDelete }) => {
  const { state } = useProjectContext();
  const tasks = state.tasksList.filter((task) => task.category === category);

  // Color variants for dynamic class
  const colorVariants = {
    indigo: "bg-indigo-600",
    yellow: "bg-yellow-500",
    teal: "bg-teal-500",
    rose: "bg-rose-500",
  };

  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className={`rounded-lg ${colorVariants[color]} p-4`}>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {category} ({tasks.length})
            </h3>
            <SortSVG />
          </div>
          <div>
            {tasks.length === 0 && <TaskListEmpty />}
            {tasks.map((task) => (
              <ProjectCardDetails
                key={task.id}
                task={task}
                color={color}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
