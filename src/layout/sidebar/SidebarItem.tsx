import { useDrag } from "react-dnd";
import { Box, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

interface SidebarItem {
  name: string;
  componentType: string;
  rootComponentType: string;
  isChildComponent: boolean;
}

export const SidebarItem = ({
  name,
  componentType,
  rootComponentType,
  isChildComponent,
}: SidebarItem) => {
  const [_, drag] = useDrag({
    type: componentType,
    item: {
      id: componentType,
      type: componentType,
      rootComponentType: rootComponentType,
    },
  });

  return (
    <Box
      ref={drag}
      sx={{
        boxSizing: "border-box",
        transition: "margin 200ms",
        my: 1,
        ml: isChildComponent ? 4 : 0,
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
        {name}
      </Typography>
    </Box>
  );
};
