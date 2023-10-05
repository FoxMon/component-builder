import { ButtonBase } from "@mui/material";

export const LogoSection = () => {
  const handleLogoButtonClick = () => {
    window.location.replace("/");
  };

  return (
    <ButtonBase disableRipple onClick={handleLogoButtonClick}>
      <h1>HBPB</h1>
    </ButtonBase>
  );
};
