import { Box, Button } from "@mui/material";

// hook
import { useActiveTarget } from "@/hooks/useActiveTarget";
import { useDragDropTarget } from "@/hooks/useDragDropTarget";
import { useDragTarget } from "@/hooks/useDragTarget";

// util
import { colors } from "@/utils/colors";

// type
import type { ComponentBase } from "@/types/component";

interface ButtonProps {
  component: ComponentBase;
  label: string;
  variant: "outlined" | "contained";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
}

export const OriginalButton = ({
  component,
  label,
  variant,
  props,
}: ButtonProps) => {
  const { activeComponentTarget, handleOriginalComponentClick } =
    useActiveTarget(component.uid, props);

  const { drop } = useDragDropTarget(component.uid);
  const { ref } = useDragTarget(component);

  const { width, height } = props.size;
  const { marginTop, marginRight, marginBottom, marginLeft } = props.spacing;

  return (
    <Box
      // 영문을 모르겠는 Type 에러
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
      }}
    >
      <Button
        fullWidth={true}
        variant={variant}
        sx={{ ...activeComponentTarget.props }}
        onClick={handleOriginalComponentClick}
      >
        {label}
      </Button>
    </Box>
  );
};
