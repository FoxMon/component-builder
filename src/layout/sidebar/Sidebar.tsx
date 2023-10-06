import { Box, Input } from "@mui/material";

// proejct
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowY: "auto",
        flex: "0 0 14rem",
        m: 0,
        p: 0,
        background: "#2e3748",
        width: "12rem",
      }}
    >
      <Box
        sx={{
          p: 3,
          pt: 2.275,
          pb: 1,
          position: "sticky",
          width: "100%",
          background: "#2e3748",
          top: 0,
        }}
      >
        <Input
          placeholder="Search compoent"
          fullWidth={true}
          sx={{
            p: 1,
            borderColor: "rgba(225, 225, 225, 0.04)",
            background: "rgba(255, 255, 255, 0.06)",
            color: "#CBD5E0",
            ":hover": {
              borderColor: "rgba(225, 225, 225, 0.08)",
            },
          }}
        />
      </Box>
      <Box sx={{ p: 4, pt: 0 }}>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </Box>
    </Box>
  );
};
