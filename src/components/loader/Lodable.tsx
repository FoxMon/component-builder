import { Suspense, ComponentType } from "react";
import { Loader } from "./Loader";

export const Lodable = (Component: ComponentType) => (props: any) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};
