import { Box, TextField } from "@mui/material";

// type
import type { Props } from "@/types/component";

interface InputProps extends Props {
  inputSize: "small" | "medium";
}

export const OriginalInput = ({ inputSize, size, spacing }: InputProps) => {
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
      <TextField
        size={inputSize}
        fullWidth={true}
        label="Please input your text"
      />
    </Box>
  );
};
