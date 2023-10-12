import { Box, TextField } from "@mui/material";

// project
import { useActiveTarget } from "@/hooks/useActiveTarget";

// util
import { colors } from "@/utils/colors";

// type
import type { ComponentBase, Props } from "@/types/component";

interface InputProps extends Props {
  component: ComponentBase;
  label: string;
  inputSize: "small" | "medium";
}

export const OriginalInput = ({
  component,
  label,
  inputSize,
  size,
  spacing,
}: InputProps) => {
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
      onClick={handleOriginalComponentClick}
    >
      <TextField label={label} size={inputSize} fullWidth={true} />
    </Box>
  );
};
