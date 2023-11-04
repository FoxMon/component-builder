import { DropTargetMonitor, useDrop } from "react-dnd";

// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { placedTargetComponent } from "@/core/componeents/target";
import { placedTargetComponentSelector } from "@/core/componeents/selectors/target";
import { activeTarget } from "@/core/componeents/activeTarget";

// core
import { Agent } from "@/core/builder/agent";

// type
import type { CommonComponentType, Components } from "@/types/component";
import type { DragDropComponent } from "@/types/common";
import type { ActiveTarget } from "@/core/componeents/activeTarget";

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
  const setPlacedTargetComponent = useSetRecoilState(placedTargetComponent);

  const currentPlacedTargetComponent: Nullable<Components> = useRecoilValue(
    placedTargetComponentSelector,
  );
  const currentActiveTarget: ActiveTarget = useRecoilValue(activeTarget);

  const [{ isOver }, drop] = useDrop({
    accept: accept,
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    hover: (item) => {
      /**
       * 컴포넌트가 클릭 ( Active Mode ) 이 된 상태에서
       * Drag Drop으로 위 아래 위치 조정이 가능하다.
       */
      if (
        currentActiveTarget.isActive &&
        cUid !== "root" &&
        item.cUid !== cUid
      ) {
        if (!currentPlacedTargetComponent) {
          return;
        }

        // Order Index 교체
        const newOrderedComponents: Components = {
          ...currentPlacedTargetComponent,
          [cUid]: {
            ...currentPlacedTargetComponent[cUid],
            orderIndex: currentPlacedTargetComponent[item.cUid].orderIndex,
          },
          [item.cUid]: {
            ...currentPlacedTargetComponent[item.cUid],
            orderIndex: currentPlacedTargetComponent[cUid].orderIndex,
          },
        };

        const sortedNewOrderedComponents = Object.entries(newOrderedComponents)
          .sort(
            ([, first], [, second]) =>
              (first.orderIndex as number) - (second.orderIndex as number),
          )
          .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

        setPlacedTargetComponent(sortedNewOrderedComponents);
      }
    },
    drop: (item: DragDropComponent, monitor: DropTargetMonitor) => {
      if (!monitor.isOver()) {
        // 놓여 졌을 때만 특정 동작을 수행하도록 한다.
        return;
      }

      if (item.isMoved) {
        if (item.cUid === cUid) {
          // 자기 자신일때는 수행 X
          return;
        }

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
        const generatedComponent: Components = Agent.generateComponent(
          item.rootComponentType,
          item.type as CommonComponentType,
        ).components;

        const totalPlacedTargetComponentLength: number = (() => {
          if (currentPlacedTargetComponent) {
            return Object.keys(currentPlacedTargetComponent).length;
          }

          return 0;
        })();

        const componentObject: Components = {};
        Object.keys(generatedComponent).forEach((uid: string) => {
          componentObject[uid] = generatedComponent[uid];

          componentObject[uid].orderIndex =
            totalPlacedTargetComponentLength + 1;
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
