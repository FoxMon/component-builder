import { useMemo } from "react";
import { Box } from "@mui/material";

// project
import { useActiveTarget } from "@/hooks/useActiveTarget";

// util
import { originProps } from "@/utils/originProps";
import { colors } from "@/utils/colors";

// type
import { Props, ComponentBase, ChildrenAlias } from "@/types/component";

interface BoxProps extends Props {
  component: ComponentBase;
  children: ChildrenAlias;
}

export const OriginalBox = ({ component, children }: BoxProps) => {
  const { activeComponentTarget, handleOriginalComponentClick } =
    useActiveTarget(component.uid);

  const boxProps = useMemo(() => {
    const { line, lineStyle, color } = originProps.Box.border;
    const boxBorder: string = `${line}px ${lineStyle} ${color}`;

    return {
      border:
        activeComponentTarget.cUid === component.uid
          ? `3px dashed ${colors.green500}`
          : boxBorder,
    };
  }, [activeComponentTarget.cUid, component.uid]);

  return (
    <Box
      sx={{ border: boxProps.border }}
      onClick={handleOriginalComponentClick}
    >
      {children}
    </Box>
  );
};
