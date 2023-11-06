import { MouseEvent } from "react";

// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";
import { placedTargetComponent } from "@/core/componeents/target";

// util
import { originProps } from "@/utils/originProps";

// type
import type { Components } from "@/types/component";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useActiveTarget = (componentUid: string, props: any) => {
  const [activeComponentTarget, setActiveComponentTarget] =
    useRecoilState(activeTarget);

  const placedComponent = useRecoilValue(placedTargetComponent);

  const handleOriginalComponentClick = (e: MouseEvent) => {
    e.stopPropagation();

    const compProp = (() => {
      if (activeComponentTarget.props == props) {
        const componentType: string = (placedComponent as Components)[
          componentUid
        ].commonComponentType;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return originProps[componentType];
      }

      return props;
    })();

    setActiveComponentTarget({
      cUid: componentUid,
      isActive: true,
      isSelected: true,
      commonComponentType: (placedComponent as Components)[componentUid]
        .commonComponentType,
      props: compProp,
    });
  };

  return {
    activeComponentTarget,
    handleOriginalComponentClick,
  };
};
