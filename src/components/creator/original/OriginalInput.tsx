import { Box, TextField } from "@mui/material";

// project
import { useActiveTarget } from "@/hooks/useActiveTarget";

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

  const { handleOriginalComponentClick } = useActiveTarget(component.uid);

  return (
    <Box
      sx={{
        width: width,
        height: height,
        mt: marginTop,
        mr: marginRight,
        mb: marginBottom,
        ml: marginLeft,
      }}
      onClick={handleOriginalComponentClick}
    >
      <TextField label={label} size={inputSize} fullWidth={true} />
    </Box>
  );
};
