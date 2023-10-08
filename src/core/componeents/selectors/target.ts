import { selector } from "recoil";

// proejct
import { targetComponent, placedTargetComponent } from "../target";

export const targetComponentSelector = selector({
  key: "Target:Component:Selector",
  get: ({ get }) => get(targetComponent),
});

export const placedTargetComponentSelector = selector({
  key: "Placed:Target:Component:Selector",
  get: ({ get }) => get(placedTargetComponent),
});
