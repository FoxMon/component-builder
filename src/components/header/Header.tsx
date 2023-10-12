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
  const { updateBackgroundModeState } = useContext(
    EditorBackgroundStateContext,
  );

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
                  onChange={updateBackgroundModeState}
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
          <GitHubIcon sx={{ cursor: "pointer", mr: 1 }} />
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
