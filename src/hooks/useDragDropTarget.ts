import { DropTargetMonitor, useDrop } from "react-dnd";
import { possibleRootComponents } from "@/utils/components";
import type { CommonComponentType } from "@/types/component";

interface DropComponentItem {
  cUid: string;
  name: string;
  componentType: string;
  rootComponentType: string;
  isMoved: string;
  isChildCOmponent: boolean;
}

export const useDragDropTarget = (
  cUid: string,
  isPossible: boolean = true,
  accept: CommonComponentType[] = possibleRootComponents,
) => {
  const [{ isOver }, drop] = useDrop({
    accept: accept,
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    drop: (item: DropComponentItem, monitor: DropTargetMonitor) => {
      if (!monitor.isOver()) {
        // 놓여 졌을 때만 특정 동작을 수행하도록 한다.
        return;
      }

      // TODO...
      console.log(cUid);
      console.log(item);
    },
    canDrop: () => isPossible,
  });

  return {
    isOver,
    drop,
  };
};
