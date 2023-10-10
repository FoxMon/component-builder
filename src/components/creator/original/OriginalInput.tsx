import { Box, TextField } from "@mui/material";

// type
import type { Props } from "@/types/component";

interface InputProps extends Props {
  inputSize: "small" | "medium";
}

export const OriginalInput = ({
  inputSize,
  size,
  spacing,
  layout,
}: InputProps) => {
  const { width, height } = size;

  return (
    <Box
      sx={{
        width: width,
        height: height,
      }}
    >
      <TextField
        size={inputSize}
        fullWidth={true}
        label="Please input your text"
      />
    </Box>
  );
};
