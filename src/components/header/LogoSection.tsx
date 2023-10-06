import { Box, ButtonBase, Typography } from "@mui/material";

export const LogoSection = () => {
  const handleLogoButtonClick = () => {
    window.location.replace("/");
  };

  return (
    <Box>
      <ButtonBase disableRipple onClick={handleLogoButtonClick}>
        <Typography
          variant="subtitle1"
          sx={{ color: "white", fontWeight: 800 }}
        >
          HBCB
        </Typography>
      </ButtonBase>
    </Box>
  );
};
