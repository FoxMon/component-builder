import { useRef } from "react";
import { useDrag } from "react-dnd";

// type
import type { ComponentBase } from "@/types/component";

export const useDragTarget = (component: ComponentBase) => {
  const ref = useRef<HTMLDivElement>(null);

  const [_, drag] = useDrag({
    type: component.commonComponentType,
    item: {
      cUid: component.uid,
      commonComponentType: component.commonComponentType,
      isMoved: true,
      orderIndex: component.orderIndex,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging,
    }),
  });

  return {
    ref: drag(ref),
    drag,
  };
};
