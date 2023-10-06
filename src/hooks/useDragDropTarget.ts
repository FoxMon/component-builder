import { useDrop } from "react-dnd";
import { possibleRootComponents } from "@/utils/components";
import type { CommonComponentType } from "@/types/component";

export const useDargDropTarget = (
  cUid: string,
  isPossible: boolean = true,
  accept: CommonComponentType[] = possibleRootComponents,
) => {
  const [{ isOver }, drop] = useDrop({
    accept: accept,
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    canDrop: () => isPossible,
  });

  return {
    isOver,
    drop,
  };
};
