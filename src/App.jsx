import { useReducer } from "react";
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/Project/ProjectBoard";
import Sidebar from "./components/Sidebar";
import { ProjectContext } from "./contexts";
import { initialState, projectReducer } from "./reducers/ProjectReducer";

function App() {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      <div className="bg-gray-900 text-white flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Navbar />
          <ProjectBoard />
        </main>
      </div>
    </ProjectContext.Provider>
  );
}

export default App;
