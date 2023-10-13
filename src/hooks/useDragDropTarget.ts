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
import type { DragDropComponent } from "@/types/common";

// utils
import { components } from "@/utils/components";
import { Nullable } from "@/types/common";

// Drag이후 Drop할 때의 동작할 Hook
// 즉 Component를 떨궜을 때
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
    drop: (item: DragDropComponent, monitor: DropTargetMonitor) => {
      if (!monitor.isOver()) {
        // 놓여 졌을 때만 특정 동작을 수행하도록 한다.
        return;
      }

      if (item.isMoved) {
        if (!currentPlacedTargetComponent) {
          // 당연히 배치된 Component가 없다면 여기 조건문을 통과 안하겠지만
          // 그래도 혹시 모르니 예외처리를 진행하도록 한다.
          return;
        }

        const movedComponentTarget: Components = {};
        Object.keys(currentPlacedTargetComponent).forEach((id: string) => {
          if (id === item.cUid) {
            // Update돼야 하는 Component의 정보 재배치
            // 부모의 정보(Component ID)를 갱신한다.
            movedComponentTarget[id] = {
              uid: id,
              parent: cUid,
              children: currentPlacedTargetComponent[id].children,
              commonComponentType:
                currentPlacedTargetComponent[id].commonComponentType,
              rootCommonComponentType:
                currentPlacedTargetComponent[cUid].rootCommonComponentType,
            };
          } else if (id === cUid) {
            // Update돼야 하는 Component의 정보 재배치
            // 부모에게 자식의 정보(Component ID)를 넣어준다.
            movedComponentTarget[cUid] = {
              uid: cUid,
              parent: currentPlacedTargetComponent[cUid].parent,
              children: [
                ...currentPlacedTargetComponent[cUid].children,
                item.cUid,
              ],
              commonComponentType:
                currentPlacedTargetComponent[cUid].commonComponentType,
              rootCommonComponentType:
                currentPlacedTargetComponent[cUid].rootCommonComponentType,
            };
          } else {
            // 기존의 것들은 그대로 배치시킨다.
            movedComponentTarget[id] = currentPlacedTargetComponent[id];
          }
        });

        setPlacedTargetComponent(movedComponentTarget);
      } else {
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
      }
    },
    canDrop: () => isPossible,
  });

  return {
    isOver,
    drop,
  };
};
