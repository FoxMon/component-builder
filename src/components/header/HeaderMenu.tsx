import { useState, MouseEvent } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

// assets
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SaveIcon from "@mui/icons-material/Save";

export const HeaderMenu = () => {
  const [menuAnchorElement, setMenuAnchorElement] =
    useState<null | HTMLElement>(null);

  const isMenuOpen: boolean = Boolean(menuAnchorElement);

  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  };

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
          onClick={handleMenuClose}
        >
          <SaveIcon />
          <Typography variant="subtitle2">Save page with components</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
