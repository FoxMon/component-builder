import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

// assets
import { themePalette } from "./assets/theme/themePalette";

// project
import { AppErrorBoundary } from "./components/errorBoundaries/AppErrorBoundary";
import { ScrollArea } from "./layout/ScrollArea";
import { Routes } from "./routes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themePalette}>
        <CssBaseline />
        <AppErrorBoundary>
          <ScrollArea>
            <Routes />
          </ScrollArea>
        </AppErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
