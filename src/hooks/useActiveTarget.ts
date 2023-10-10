import { MouseEvent } from "react";

// recoil
import { useSetRecoilState } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";

export const useActiveTarget = () => {
  const setActiveTarget = useSetRecoilState(activeTarget);

  const activeComponentProps = {
    onClick: (e: MouseEvent, componentUid: string) => {
      e.stopPropagation();

      setActiveTarget({
        cUid: componentUid,
        isActive: true,
        isSelected: true,
      });
    },
  };

  return {
    activeComponentProps,
  };
};
