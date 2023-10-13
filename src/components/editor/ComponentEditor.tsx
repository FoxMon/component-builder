import { Box, Typography } from "@mui/material";

// project
import { Creator } from "../creator/Creator";

// hooks
import { useDragDropTarget } from "@/hooks/useDragDropTarget";

// recoil
import { useRecoilValue } from "recoil";
import { placedTargetComponentSelector } from "@/core/componeents/selectors/target";

// util
import { filterComponent } from "@/utils/components";

// type
import type { Nullable } from "@/types/common";
import type { Components } from "@/types/component";

export const ComponentEditor = () => {
  const { drop } = useDragDropTarget("root", true);

  const placedComponent: Nullable<Components> = useRecoilValue(
    placedTargetComponentSelector,
  );

  return (
    <Box
      ref={drop}
      sx={{
        p: 2,
        position: "relative",
        height: "auto",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      <Box sx={{ m: "0 auto", width: "100%" }}>
        {placedComponent ? (
          Object.keys(placedComponent)
            .filter((id: string) => filterComponent(placedComponent[id].parent))
            .map((key: string) => (
              <Box key={key}>
                <Creator
                  componentType={placedComponent[key]?.commonComponentType}
                  component={placedComponent[key]}
                  isWrapped={false}
                />
              </Box>
            ))
        ) : (
          <Typography variant="subtitle2" sx={{ fontSize: "1.25rem" }}>
            Drag component to start design your page without programming ! Or
            load your previous designed page.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
