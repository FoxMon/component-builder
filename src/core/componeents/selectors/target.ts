import { selector } from "recoil";

// proejct
import { placedTargetComponent } from "../target";

export const placedTargetComponentSelector = selector({
  key: "Placed:Target:Component:Selector",
  get: ({ get }) => get(placedTargetComponent),
});
