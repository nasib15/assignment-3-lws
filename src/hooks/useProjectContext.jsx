import { useContext } from "react";
import { ProjectContext } from "../contexts";

const useProjectContext = () => {
  const { state, dispatch } = useContext(ProjectContext);
  return { state, dispatch };
};

export default useProjectContext;
