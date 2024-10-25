import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProjectContext, SearchContext } from "./contexts";
import Page from "./Page";
import { initialState, projectReducer } from "./reducers/ProjectReducer";

function App() {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const [searchValue, setSearchValue] = useState("");

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <ToastContainer pauseOnFocusLoss={false} limit={3} />
        <Page />
      </SearchContext.Provider>
    </ProjectContext.Provider>
  );
}

export default App;
