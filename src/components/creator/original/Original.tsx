import { memo } from "react";

// recoil
import { useRecoilValue } from "recoil";
import { targetComponentSelector } from "@/core/componeents/selectors/target";
// project
import { Creator } from "../Creator";

// type
import type { TargetComponent } from "@/core/componeents/target";

interface OriginalProps {
  componentType: string;
}

export const Original = memo(({ componentType }: OriginalProps) => {
  const presentComponent: TargetComponent = useRecoilValue(
    targetComponentSelector,
  );

  switch (componentType) {
    case "Input": {
      return (
        <Creator
          component={presentComponent.components[componentType]}
          componentType={componentType}
          isWrapped={false}
        />
      );
    }

    default: {
      return null;
    }
  }
});
