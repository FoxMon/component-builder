import { selectorFamily } from "recoil";

// project
import { placedTargetComponent } from "../target";

// type
import type { Nullable } from "@/types/common";
import type { Components } from "@/types/component";

export const activeTargetSelector = selectorFamily({
  key: "Active:Target:Selector",
  get:
    (cUid: string) =>
    ({ get }) => {
      const placedComponent: Nullable<Components> = get(placedTargetComponent);

      if (placedComponent) {
        return placedComponent[cUid];
      }

      return null;
    },
});
