import { useState, useCallback, MouseEvent } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";

// assets
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SaveIcon from "@mui/icons-material/Save";
import ClearAllIcon from "@mui/icons-material/ClearAll";

// recoil
import { useRecoilState } from "recoil";
import { placedTargetComponent } from "@/core/componeents/target";

// util
import { Session } from "@/utils/session";

export const HeaderMenu = () => {
  const [menuAnchorElement, setMenuAnchorElement] =
    useState<null | HTMLElement>(null);

  const [placeComponent, setPlacedComponent] = useRecoilState(
    placedTargetComponent,
  );

  const isMenuOpen: boolean = Boolean(menuAnchorElement);

  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  };

  const handleSaveMenuButtonClick = useCallback(() => {
    if (placeComponent) {
      const session = new Session();

      session.save(placeComponent);
    }

    setMenuAnchorElement(null);
  }, [placeComponent]);

  const handleClearMenuButtonClick = useCallback(() => {
    const session = new Session();

    session.clear();

    setPlacedComponent({});
    setMenuAnchorElement(null);
  }, []);

  return (
    <Box>
      <Button sx={{ color: "#FFFFFFCF" }} onClick={handleMenuOpen}>
        <Typography variant="subtitle2">Editor</Typography>
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        anchorEl={menuAnchorElement}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
          onClick={handleSaveMenuButtonClick}
        >
          <SaveIcon />
          <Typography variant="subtitle2">Save page with components</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
          onClick={handleClearMenuButtonClick}
        >
          <ClearAllIcon />
          <Typography variant="subtitle2">Clear all components</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
