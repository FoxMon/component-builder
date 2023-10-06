import { useState, MouseEvent } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

// assets
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <MenuItem onClick={handleMenuClose}>
          <Typography variant="subtitle2">Save Page</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Typography variant="subtitle2">Save Page</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Typography variant="subtitle2">Save Page</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
