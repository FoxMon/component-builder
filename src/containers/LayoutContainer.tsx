import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  styled,
  useTheme,
  Box,
  AppBar,
  Toolbar,
  Theme,
  CssBaseline,
} from "@mui/material";

// project
import { Header } from "@/layout/header/Header";
import { Sidebar } from "@/layout/sidebar/Sidebar";

interface ContentProps {
  theme: Theme;
  open: boolean;
}

const DRAWER_WIDTH: number = 260;

// styles
const Content = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: ContentProps) => ({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  background: "rgba(0, 0, 0, 0.1)",
  marginTop: "66.72px",
  marginRight: "10px",
  borderRadius: "8px",
  transition: theme.transitions.create(
    "margin",
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        },
  ),
  [theme.breakpoints.up("md")]: {
    marginLeft: open ? "10px" : -DRAWER_WIDTH + 10,
    width: "100%",
  },
}));

export const LayoutContainer = () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState<boolean>(true);

  const theme = useTheme();

  const handleLeftDrawerChange = () => {
    setIsLeftDrawerOpen((prev: boolean) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: isLeftDrawerOpen
            ? theme.transitions.create("width")
            : "none",
        }}
      >
        <Toolbar>
          <Header onLeftDrawerChangeEvent={handleLeftDrawerChange} />
        </Toolbar>
      </AppBar>
      <Sidebar
        isLeftDrawerOpen={isLeftDrawerOpen}
        onLeftDrawerChangeEvent={handleLeftDrawerChange}
      />
      <Content theme={theme} open={isLeftDrawerOpen}>
        <Outlet />
      </Content>
    </Box>
  );
};
