import { CssBaseline, StyledEngineProvider } from "@mui/material";

// project
import { AppErrorBoundary } from "./components/errorBoundaries/AppErrorBoundary";
import { ScrollArea } from "./layout/ScrollArea";
import { Routes } from "./routes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <AppErrorBoundary>
        <ScrollArea>
          <Routes />
        </ScrollArea>
      </AppErrorBoundary>
    </StyledEngineProvider>
  );
}

export default App;
