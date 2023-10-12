import { Box, Button } from "@mui/material";

// project
import { useActiveTarget } from "@/hooks/useActiveTarget";

// util
import { colors } from "@/utils/colors";

// type
import type { ComponentBase, Props } from "@/types/component";

interface ButtonProps extends Props {
  component: ComponentBase;
  label: string;
  variant: "outlined" | "contained";
}

export const OriginalButton = ({
  component,
  label,
  variant,
  size,
  spacing,
}: ButtonProps) => {
  const { width, height } = size;
  const { marginTop, marginRight, marginBottom, marginLeft } = spacing;

  const { activeComponentTarget, handleOriginalComponentClick } =
    useActiveTarget(component.uid);

  return (
    <Box
      sx={{
        width: width,
        height: height,
        mt: marginTop,
        mr: marginRight,
        mb: marginBottom,
        ml: marginLeft,
        border:
          activeComponentTarget.cUid === component.uid
            ? `3px dashed ${colors.green500}`
            : "none",
      }}
    >
      <Button
        fullWidth={true}
        variant={variant}
        onClick={handleOriginalComponentClick}
      >
        {label}
      </Button>
    </Box>
  );
};
