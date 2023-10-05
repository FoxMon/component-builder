// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, useMediaQuery } from "@mui/material";

interface SidebarProps {
  isLeftDrawerOpen: boolean;
  onLeftDrawerChangeEvent: () => void;
}

const DRAWER_WIDTH: number = 260;

export const Sidebar = ({
  isLeftDrawerOpen,
  onLeftDrawerChangeEvent,
}: SidebarProps) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: matchUpMd ? DRAWER_WIDTH : "auto",
      }}
    >
      <Drawer
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={isLeftDrawerOpen}
        onClose={onLeftDrawerChangeEvent}
        sx={{
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "88px",
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        Sidebar
      </Drawer>
    </Box>
  );
};
