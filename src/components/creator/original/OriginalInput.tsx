import { Box, TextField } from "@mui/material";

// recoil
import { useSetRecoilState } from "recoil";
import { activeTarget } from "@/core/componeents/activeTarget";

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

  const setActiveComponent = useSetRecoilState(activeTarget);

  const handleOriginalInputClick = () => {
    setActiveComponent({
      cUid: component.uid,
      isActive: true,
      isSelected: true,
    });
  };

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
      onClick={handleOriginalInputClick}
    >
      <TextField label={label} size={inputSize} fullWidth={true} />
    </Box>
  );
};
