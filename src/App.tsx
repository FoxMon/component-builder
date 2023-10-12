import { RecoilRoot } from "recoil";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// project
import { AppErrorBoundary } from "./components/errorBoundaries/AppErrorBoundary";
import { EditorContext } from "@/components/contexts/editorContext";
import { MainRouter } from "@/routes/MainRouter";

function App() {
  return (
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <AppErrorBoundary>
          <EditorContext>
            <MainRouter />
          </EditorContext>
        </AppErrorBoundary>
      </StyledEngineProvider>
    </RecoilRoot>
  );
}

export default App;
