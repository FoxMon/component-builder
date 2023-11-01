import { Box, Typography } from "@mui/material";

// hook
import { useActiveTarget } from "@/hooks/useActiveTarget";
import { useDragDropTarget } from "@/hooks/useDragDropTarget";
import { useDragTarget } from "@/hooks/useDragTarget";

// util
import { colors } from "@/utils/colors";

// type
import { ComponentBase } from "@/types/component";

interface TypographyProps {
  component: ComponentBase;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
}

export const OriginalTypography = ({
  component,
  text,
  props,
}: TypographyProps) => {
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
        p: 1,
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
      <Typography variant="h6" onClick={handleOriginalComponentClick}>
        {text}
      </Typography>
    </Box>
  );
};
