import { Box } from "@mui/material";

// project
import { Creator } from "@/components/creator/Creator";

// hook
import { useDragDropTarget } from "@/hooks/useDragDropTarget";

import { useRecoilValue } from "recoil";
import { placedTargetComponentSelector } from "@/core/componeents/selectors/target";

// type
import type { ComponentBase, Components } from "@/types/component";
import type { Nullable } from "@/types/common";

interface ChildrenOriginalComponentProps {
  component: ComponentBase;
}

export const ChildrenOriginalComponent = ({
  component,
}: ChildrenOriginalComponentProps) => {
  const { drop } = useDragDropTarget(component.uid);

  const placedComponent: Nullable<Components> = useRecoilValue(
    placedTargetComponentSelector,
  );

  const children = component.children.map((uid: string) => {
    if (placedComponent) {
      return (
        <Box key={uid}>
          <Creator
            componentType={placedComponent[uid].commonComponentType}
            component={placedComponent[uid]}
            isWrapped={true}
          />
        </Box>
      );
    } else {
      return null;
    }
  });

  return <Box ref={drop}>{children}</Box>;
};
