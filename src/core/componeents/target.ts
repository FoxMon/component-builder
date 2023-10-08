import { atom } from "recoil";

// type
import type { Components } from "@/types/component";
import type { Nullable } from "@/types/common";

/**
 * Drag했을 때 어떠한 Component인지 구분하기 위함.
 * 선택된 Component의 ID를 알아야 한다.
 * 또한 선택된 Component의 정보를 알아야 한다.
 */
export interface TargetComponent {
  selectedComponentUid: string;
  components: Components;
}

// 굳이 default가 있어야 하나?
// Dragging을 하지 않았다면 충분히 null일 가능성이 존재한다.
// 따라서 Nullable 타입으로 지정해야 하지 않을까...
export const targetComponent = atom<TargetComponent>({
  key: "Selected:Target:Component",
  default: {
    selectedComponentUid: "",
    components: {
      [""]: {
        uid: "",
        parent: "",
        children: [],
        commonComponentType: "Box",
        rootCommonComponentType: "Box",
      },
    },
  },
});

// Editor에 배치된 Components
export const placedTargetComponent = atom<Nullable<Components>>({
  key: "Placed:Target:Component",
  default: null,
});
