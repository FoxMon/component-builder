// recoil
import { useRecoilState } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";

export const useActiveTarget = (componentUid: string, props: any) => {
  const [activeComponentTarget, setActiveComponentTarget] =
    useRecoilState(activeTarget);

  const handleOriginalComponentClick = () => {
    setActiveComponentTarget({
      cUid: componentUid,
      isActive: true,
      isSelected: true,
      props: props,
    });
  };

  return {
    activeComponentTarget,
    handleOriginalComponentClick,
  };
};
