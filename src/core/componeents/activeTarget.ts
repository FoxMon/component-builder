import { atom } from "recoil";

interface ActiveTarget {
  cUid: string;
  isActive: boolean;
  isSelected: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
