import { Outlet } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { styled, Box, AppBar, Toolbar, CssBaseline } from "@mui/material";

// project
import { Header } from "@/layout/header/Header";
import { Sidebar } from "@/layout/sidebar/Sidebar";
import { Observer } from "@/components/observer/Observer";

// styles
const Content = styled("main")(() => ({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  backgroundImage:
    "linear-gradient(to right, #d9e2e9 1px, transparent 1px), linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);",
  backgroundSize: "20px 20px",
  bgColor: "#edf2f6",
}));

export const LayoutContainer = () => {
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: "#1a202c",
          height: "60px",
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <DndProvider backend={HTML5Backend}>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Content>
            <Outlet />
          </Content>
          <Observer />
        </Box>
      </DndProvider>
    </Box>
  );
};
