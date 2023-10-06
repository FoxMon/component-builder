import { Box, Typography } from "@mui/material";

// hooks
import { useDragDropTarget } from "@/hooks/useDragDropTarget";

export const ComponentEditor = () => {
  const { drop } = useDragDropTarget("root", true);

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
      <Typography variant="subtitle2" sx={{ fontSize: "1.25rem" }}>
        Drag component to start design your page without programming ! Or load
        your previous designed page.
      </Typography>
    </Box>
  );
};
