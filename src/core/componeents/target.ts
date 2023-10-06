import { atom } from "recoil";

// type
import type { Components } from "@/types/component";

/**
 * Drag했을 때 어떠한 Component인지 구분하기 위함.
 * 선택된 Component의 ID를 알아야 한다.
 * 또한 선택된 Component의 정보를 알아야 한다.
 */
export interface TargetComponent {
  selectedComponentUid: string;
  components: Components;
}

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
