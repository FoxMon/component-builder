import { atom } from "recoil";

// type
import { Props } from "@/types/component";

interface ActiveTarget {
  cUid: string;
  isActive: boolean;
  isSelected: boolean;
}

interface ActiveTargetProps {
  props: Props;
}

export const activeTarget = atom<ActiveTarget>({
  key: "Active:Target",
  default: {
    cUid: "",
    isActive: false,
    isSelected: false,
  },
});

// 현재 선택된 Component에 대한 Props
// 위의 activeTarget Atom과 같이 묶어야 하는지
// 깊은 고민이 필요할 것 같음
export const activeTargetProps = atom<ActiveTargetProps>({
  key: "Active:Target:Props",
  default: {
    props: {
      size: {
        width: "100%",
        height: "100%",
      },
      spacing: {
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
      },
    },
  },
});
