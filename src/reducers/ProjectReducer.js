import { data } from "../components/data/data";

const initialState = {
  projectsData: [...data],
};

const projectReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projectsData: state.projectsData.map((project) =>
          project.category.toLowerCase() === action.task.category.toLowerCase()
            ? { ...project, tasks: [...project.tasks, action.task] }
            : project
        ),
      };

    case "EDIT_PROJECT":
      console.log(state, action.task);
      return {
        ...state,
        projectsData: state.projectsData.map((project) =>
          project.category.toLowerCase() === action.task.category.toLowerCase()
            ? {
                ...project,
                tasks: project.tasks.map((task) =>
                  task.id === action.task.id ? action.task : task
                ),
              }
            : project
        ),
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projectsData: state.projectsData.map((project) =>
          project.category.toLowerCase() === action.task.category.toLowerCase()
            ? {
                ...project,
                tasks: project.tasks.filter(
                  (task) => task.id !== action.task.id
                ),
              }
            : project
        ),
      };

    default:
      return state;
  }
};

export { initialState, projectReducer };
