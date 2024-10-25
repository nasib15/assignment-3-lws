import { useState } from "react";
import { toast } from "react-toastify";
import { getAllProjects } from "../data/data";
import useProjectContext from "../hooks/useProjectContext";
import { AddSVG } from "../SVG/IconSVG";
import AddEditModal from "./AddEditModal";
import ProjectCard from "./ProjectCard";

const ProjectBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const { dispatch } = useProjectContext();

  const projectsData = getAllProjects();

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToUpdate(null);
  };

  // On submit function and calling dispatch to handle the rest...
  const handleAddEditTask = (e, task, isAdd) => {
    e.preventDefault();

    // Validation for empty fields
    if (!task.taskName || !task.description || !task.date || !task.category) {
      return toast.error("Please fill all the fields", {
        position: "top-center",
      });
    }

    if (isAdd) {
      dispatch({ type: "ADD_PROJECT", task });
    }

    if (!isAdd) {
      dispatch({ type: "EDIT_PROJECT", task });
    }

    setIsModalOpen(false);
  };

  // Edit task function
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setIsModalOpen(true);
  };

  // Delete task function
  const handleDeleteTask = (task) => {
    dispatch({ type: "DELETE_PROJECT", task });
    window.confirm("Are you sure you want to delete this task?");
    if (window.confirm) {
      toast.error("Task deleted successfully", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      {isModalOpen && (
        <AddEditModal
          onSubmit={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onClose={handleCloseModal}
        />
      )}
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              onClick={handleModal}
            >
              <AddSVG />
              Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProjectBoard;
