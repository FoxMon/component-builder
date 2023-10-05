import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Children } from "@/types/component";

export const ScrollArea = ({ children }: Children) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
};
