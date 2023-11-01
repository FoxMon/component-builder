import { useMemo } from "react";
import { Box } from "@mui/material";

// hook
import { useActiveTarget } from "@/hooks/useActiveTarget";
import { useDragDropTarget } from "@/hooks/useDragDropTarget";
import { useDragTarget } from "@/hooks/useDragTarget";

// util
import { originProps } from "@/utils/originProps";
import { colors } from "@/utils/colors";

// type
import { ComponentBase, ChildrenAlias } from "@/types/component";

interface BoxOriginProps {
  props: any;
}

interface BoxProps extends BoxOriginProps {
  component: ComponentBase;
  children: ChildrenAlias;
}

export const OriginalBox = ({ component, props, children }: BoxProps) => {
  const { activeComponentTarget, handleOriginalComponentClick } =
    useActiveTarget(component.uid, props);

  const { isOver, drop } = useDragDropTarget(component.uid);
  const { ref } = useDragTarget(component);

  const { width, height } = props.size;
  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  } = props.spacing;

  const boxProps = useMemo(() => {
    const { line, lineStyle, color } = originProps.Box.border;
    const boxBorder: string = `${line}px ${lineStyle} ${color}`;

    return {
      border:
        activeComponentTarget.cUid === component.uid
          ? `3px dashed ${colors.green500}`
          : boxBorder,
      background: isOver ? colors.gray500 : "",
    };
  }, [activeComponentTarget.cUid, component.uid, isOver]);

  return (
    <Box
      // 영문을 모르겠는 Type 에러
      // @ts-ignore
      ref={drop(ref)}
      sx={{
        border: boxProps.border,
        background: boxProps.background,
        width: width,
        height: component.children.length > 0 ? "auto" : height,
        mt: marginTop,
        mr: marginRight,
        mb: marginBottom,
        ml: marginLeft,
        pt: component.children.length > 0 ? 1 : paddingTop,
        pr: component.children.length > 0 ? 1 : paddingRight,
        pb: component.children.length > 0 ? 1 : paddingBottom,
        pl: component.children.length > 0 ? 1 : paddingLeft,
        cursor: "pointer",
      }}
      onClick={handleOriginalComponentClick}
    >
      {children}
    </Box>
  );
};
