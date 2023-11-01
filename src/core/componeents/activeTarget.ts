import { atom } from "recoil";

interface ActiveTarget {
  cUid: string;
  isActive: boolean;
  isSelected: boolean;
  props: any;
}

export const activeTarget = atom<ActiveTarget>({
  key: "Active:Target",
  default: {
    cUid: "",
    isActive: false,
    isSelected: false,
    props: {},
  },
});
