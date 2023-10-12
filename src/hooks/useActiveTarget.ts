// recoil
import { useSetRecoilState } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";

export const useActiveTarget = (componentUid: string) => {
  const setActiveTarget = useSetRecoilState(activeTarget);

  const handleOriginalComponentClick = () => {
    setActiveTarget({
      cUid: componentUid,
      isActive: true,
      isSelected: true,
    });
  };

  return {
    handleOriginalComponentClick,
  };
};
