import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// project
import { AppErrorBoundary } from "./components/errorBoundaries/AppErrorBoundary";
import { ScrollArea } from "./layout/ScrollArea";
import { Routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <AppErrorBoundary>
            <ScrollArea>
              <Routes />
            </ScrollArea>
          </AppErrorBoundary>
        </StyledEngineProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
