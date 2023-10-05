import { lazy } from "react";

// proejct
import { LayoutContainer } from "@/containers/LayoutContainer";
import { Lodable } from "@/components/loader/Lodable";

const MainPage = Lodable(
  lazy(() => import("@/pages/Main").then(({ Main }) => ({ default: Main }))),
);

export const MainRoutes = {
  path: "/",
  element: <LayoutContainer />,
  children: [
    {
      path: "/",
      element: <MainPage />,
    },
  ],
};
