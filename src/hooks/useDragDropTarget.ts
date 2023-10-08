import { DropTargetMonitor, useDrop } from "react-dnd";

// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  targetComponent,
  placedTargetComponent,
} from "@/core/componeents/target";
import { placedTargetComponentSelector } from "@/core/componeents/selectors/target";

// core
import { agentBuilder } from "@/core/builder/agent";

// type
import type { CommonComponentType, Components } from "@/types/component";

// utils
import { components } from "@/utils/components";
import { Nullable } from "@/types/common";

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
  accept: CommonComponentType[] = components,
) => {
  const setTargetComponent = useSetRecoilState(targetComponent);
  const setPlacedTargetComponent = useSetRecoilState(placedTargetComponent);

  const currentPlacedTargetComponent: Nullable<Components> = useRecoilValue(
    placedTargetComponentSelector,
  );

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

      setPlacedTargetComponent({
        ...currentPlacedTargetComponent,
        ...componentObject,
      });
    },
    canDrop: () => isPossible,
  });

  return {
    isOver,
    drop,
  };
};
