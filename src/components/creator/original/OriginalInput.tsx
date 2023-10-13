import { Box, TextField } from "@mui/material";

// hook
import { useActiveTarget } from "@/hooks/useActiveTarget";
import { useDragDropTarget } from "@/hooks/useDragDropTarget";
import { useDragTarget } from "@/hooks/useDragTarget";

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
  const { activeComponentTarget, handleOriginalComponentClick } =
    useActiveTarget(component.uid);

  const { drop } = useDragDropTarget(component.uid);
  const { ref } = useDragTarget(component);

  const { width, height } = size;
  const { marginTop, marginRight, marginBottom, marginLeft } = spacing;

  return (
    <Box
      // 영문을 모르겠는 Type 에러
      // @ts-ignore
      ref={drop(ref)}
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
        cursor: "pointer",
      }}
      onClick={handleOriginalComponentClick}
    >
      <TextField label={label} size={inputSize} fullWidth={true} />
    </Box>
  );
};
