import { useRoutes } from "react-router-dom";

// proejct
import { MainRoutes } from "./MainRoutes";

export const Routes = () => {
  return useRoutes([MainRoutes]);
};
