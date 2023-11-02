import { useState } from "react";
import { Box, Select, MenuItem, SelectChangeEvent } from "@mui/material";

// hook
import { useActiveTarget } from "@/hooks/useActiveTarget";
import { useDragDropTarget } from "@/hooks/useDragDropTarget";
import { useDragTarget } from "@/hooks/useDragTarget";

// util
import { colors } from "@/utils/colors";

// type
import type { ComponentBase } from "@/types/component";

interface Option {
  name: string;
  value: string;
}

interface SelectProps {
  component: ComponentBase;
  label: string;
  options: Option[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
}

export const OriginalSelect = ({
  component,
  label,
  options,
  props,
}: SelectProps) => {
  const { activeComponentTarget, handleOriginalComponentClick } =
    useActiveTarget(component.uid, props);

  const { drop } = useDragDropTarget(component.uid);
  const { ref } = useDragTarget(component);

  const { width, height } = props.size;
  const { marginTop, marginRight, marginBottom, marginLeft } = props.spacing;

  const [value, setValue] = useState<number | string>(options[0].value);

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
  };

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
        cursor: "pointer",
      }}
      onClick={handleOriginalComponentClick}
    >
      <Select
        fullWidth={true}
        label={label}
        value={value as string}
        onChange={handleChange}
      >
        {options.map((option: Option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
