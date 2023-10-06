import { DropTargetMonitor, useDrop } from "react-dnd";

// recoil
import { useSetRecoilState } from "recoil";
import { targetComponent } from "@/core/componeents/target";

// core
import { agentBuilder } from "@/core/builder/agent";

// type
import type { CommonComponentType, Components } from "@/types/component";

// utils
import { possibleDragComponents } from "@/utils/components";

interface DropComponentItem {
  type: string;
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
  accept: CommonComponentType[] = possibleDragComponents,
) => {
  const setTargetComponent = useSetRecoilState(targetComponent);

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

      const generatedComponent: Components = agentBuilder[item.type](
        item.rootComponentType,
      ).components;

      const componentObject: Components = {};
      Object.keys(generatedComponent).forEach((uid: string) => {
        componentObject[uid] = generatedComponent[uid];
      });

      setTargetComponent({
        selectedComponentUid: cUid,
        components: componentObject,
      });
    },
    canDrop: () => isPossible,
  });

  return {
    isOver,
    drop,
  };
};
