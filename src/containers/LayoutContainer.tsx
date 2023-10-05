import { Outlet } from "react-router-dom";
import { styled, Box, AppBar, Toolbar, CssBaseline } from "@mui/material";

// project
import { Header } from "@/layout/header/Header";

// styles
const Content = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  background: "#f8fafc",
  marginTop: "66.72px",
}));

export const LayoutContainer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: "#1a202c",
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Content>
        <Outlet />
      </Content>
    </Box>
  );
};
