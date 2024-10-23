import { getAllProjects } from "../components/data/data";

const projectsData = getAllProjects();

const initialState = { ...projectsData };

const projectReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {};

    default:
      return state;
  }
};

export { initialState, projectReducer };
