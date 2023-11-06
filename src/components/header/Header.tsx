import { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

// assets
import GitHubIcon from "@mui/icons-material/GitHub";

// project
import { LogoSection } from "./LogoSection";
import { HeaderMenu } from "./HeaderMenu";
import { EditorBackgroundStateContext } from "../contexts/editorContext";

export const Header = () => {
  const { isCodeMode, updateBackgroundModeState, updateCodeModeState } =
    useContext(EditorBackgroundStateContext);

  const handleGithubIconClick = () => {
    window.open("https://github.com/FoxMon/component-builder");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} sx={{ alignItems: "center" }}>
        <Grid item xs={1}>
          <LogoSection />
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <HeaderMenu />
            <FormControlLabel
              sx={{ color: "#FFFFFFCF" }}
              label="BACKGROUND"
              control={
                <Checkbox
                  sx={{ color: "#B2F5EA" }}
                  size="small"
                  onChange={updateBackgroundModeState}
                />
              }
            />
            <FormControlLabel
              sx={{ color: "#FFFFFFCF" }}
              label="CODE"
              control={
                <Checkbox
                  sx={{ color: "#B2F5EA" }}
                  size="small"
                  checked={isCodeMode}
                  onChange={updateCodeModeState}
                />
              }
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              mr: 1,
            }}
            onClick={handleGithubIconClick}
          >
            <GitHubIcon />
          </Box>
          <Typography variant="caption" sx={{ mr: 0.725 }}>
            by
          </Typography>
          <Typography variant="caption" sx={{ color: "#B2F5EA" }}>
            HoBom
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
