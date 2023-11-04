import { atom } from "recoil";

// type
import type { Components } from "@/types/component";
import type { Nullable } from "@/types/common";

// Editor에 배치된 Components
export const placedTargetComponent = atom<Nullable<Components>>({
  key: "Placed:Target:Component",
  default: null,
});
