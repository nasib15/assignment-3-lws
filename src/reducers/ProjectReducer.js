import { data } from "../components/data/data";

const initialState = {
  projectsData: [...data],
};

const projectReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projectsData: state.projectsData.map((project) =>
          project.category.toLowerCase() === action.task.category.toLowerCase()
            ? { ...project, projects: [...project.projects, action.task] }
            : project
        ),
      };

    default:
      return state;
  }
};

export { initialState, projectReducer };
