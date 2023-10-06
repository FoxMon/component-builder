import { ComponentType } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { styled, Box, AppBar, Toolbar, CssBaseline } from "@mui/material";

// project
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Observer } from "@/components/observer/Observer";

// styles
const Content = styled("main")(() => ({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
}));

export const WithLayout = (Component: ComponentType) => {
  const WrappedComponent = () => {
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
              <Component />
            </Content>
            <Observer />
          </Box>
        </DndProvider>
      </Box>
    );
  };

  return WrappedComponent;
};
