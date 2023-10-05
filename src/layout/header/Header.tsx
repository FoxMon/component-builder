// material-ui
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase } from "@mui/material";

// assets
import MenuIcon from "@mui/icons-material/Menu";

// project
import { LogoSection } from "./LogoSection";
import { SearchSection } from "./SearchSection";

interface HeaderProps {
  onLeftDrawerChangeEvent: () => void;
}

export const Header = ({ onLeftDrawerChangeEvent }: HeaderProps) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{ transition: "all .2s ease-in-out" }}
            onClick={onLeftDrawerChangeEvent}
            color="inherit"
          >
            <MenuIcon />
          </Avatar>
        </ButtonBase>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
      <SearchSection />
    </>
  );
};
