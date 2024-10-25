import { getAllTasks } from "../components/data/data";

const tasksList = getAllTasks();

const initialState = {
  tasksList: [...tasksList],
};

const projectReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        tasksList: [...state.tasksList, action.task],
      };

    case "EDIT_PROJECT":
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        tasksList: state.tasksList.filter((task) => task.id !== action.id),
      };

    default:
      return state;
  }
};

export { initialState, projectReducer };
