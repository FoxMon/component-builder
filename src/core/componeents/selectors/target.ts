import { selector } from "recoil";

// proejct
import { targetComponent } from "../target";

export const targetComponentSelector = selector({
  key: "Target:Component:Selector",
  get: ({ get }) => get(targetComponent),
  set: ({ set }, newTargetComponent) =>
    set(targetComponent, newTargetComponent),
});
