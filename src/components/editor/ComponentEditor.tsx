import { Box, Typography } from "@mui/material";

// project
import { Creator } from "../creator/Creator";

// hooks
import { useDragDropTarget } from "@/hooks/useDragDropTarget";

// recoil
import { useRecoilValue } from "recoil";
import { targetComponentSelector } from "@/core/componeents/selectors/target";

// type
import type { Nullable } from "@/types/common";
import type { TargetComponent } from "@/core/componeents/target";

export const ComponentEditor = () => {
  const { drop } = useDragDropTarget("root", true);

  const targetComponent: Nullable<TargetComponent> = useRecoilValue(
    targetComponentSelector,
  );

  console.log(targetComponent);

  return (
    <Box
      ref={drop}
      sx={{
        p: 2,
        position: "relative",
        height: "100%",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      {targetComponent ? (
        Object.keys(targetComponent.components).map((key: string) => (
          <Creator
            key={key}
            componentType={
              targetComponent?.components[key]?.commonComponentType
            }
            component={targetComponent?.components[key]}
            isWrapped={false}
          />
        ))
      ) : (
        <Typography variant="subtitle2" sx={{ fontSize: "1.25rem" }}>
          Drag component to start design your page without programming ! Or load
          your previous designed page.
        </Typography>
      )}
    </Box>
  );
};
