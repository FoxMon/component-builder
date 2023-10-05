import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

// assets
import { themePalette } from "./assets/theme/themePalette";

// project
import { ScrollArea } from "./layout/ScrollArea";
import { Routes } from "./routes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themePalette}>
        <CssBaseline />
        <ScrollArea>
          <Routes />
        </ScrollArea>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
