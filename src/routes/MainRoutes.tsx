// proejct
import { LayoutContainer } from "@/containers/LayoutContainer";
import { Main } from "@/pages/Main";

export const MainRoutes = {
  path: "/",
  element: <LayoutContainer />,
  children: [
    {
      path: "/",
      element: <Main />,
    },
  ],
};
