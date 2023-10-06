import { Box, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export const SidebarItem = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        transition: "margin 200ms",
        my: 1,
        borderRadius: "8px",
        p: 1,
        display: "flex",
        alignItems: "center",
        cursor: "move",
        color: "#FFFFFFCC",
      }}
    >
      <DragIndicatorIcon sx={{ mr: 2, fontSize: "1.125rem" }} />
      <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
        Box
      </Typography>
    </Box>
  );
};
