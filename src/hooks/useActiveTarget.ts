// recoil
import { useRecoilState } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useActiveTarget = (componentUid: string, props: any) => {
  const [activeComponentTarget, setActiveComponentTarget] =
    useRecoilState(activeTarget);

  const handleOriginalComponentClick = (e: MouseEvent) => {
    e.stopPropagation();

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
