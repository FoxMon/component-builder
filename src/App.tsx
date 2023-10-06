import { RecoilRoot } from "recoil";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// project
import { AppErrorBoundary } from "./components/errorBoundaries/AppErrorBoundary";
import { MainRouter } from "@/routes/MainRouter";

function App() {
  return (
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <AppErrorBoundary>
          <MainRouter />
        </AppErrorBoundary>
      </StyledEngineProvider>
    </RecoilRoot>
  );
}

export default App;
