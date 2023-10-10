import { Box, TextField } from "@mui/material";

// type
import type { Props } from "@/types/component";

interface InputProps extends Props {
  label: string;
  inputSize: "small" | "medium";
}

export const OriginalInput = ({
  label,
  inputSize,
  size,
  spacing,
}: InputProps) => {
  const { width, height } = size;
  const { marginTop, marginRight, marginBottom, marginLeft } = spacing;

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
    >
      <TextField label={label} size={inputSize} fullWidth={true} />
    </Box>
  );
};
