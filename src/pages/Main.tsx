import { useContext, useMemo } from "react";
import { Box } from "@mui/material";

// proejct
import { WithLayout } from "@/hoc/withLayout";
import { ComponentEditor } from "@/components/editor/ComponentEditor";
import { EditorBackgroundStateContext } from "@/components/contexts/editorContext";

const WrappedComponentEditor = WithLayout(ComponentEditor);

export const Main = () => {
  const { isBackgroundMode } = useContext(EditorBackgroundStateContext);

  const boxProps = useMemo(() => {
    return isBackgroundMode
      ? { bgColor: "#FFFFFF" }
      : {
          backgroundImage:
            "linear-gradient(to right, #d9e2e9 1px, transparent 1px), linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);",
          backgroundSize: "20px 20px",
        };
  }, [isBackgroundMode]);

  return (
    <Box
      sx={{
        ...boxProps,
        minHeight: "100vh",
      }}
    >
      <WrappedComponentEditor />
    </Box>
  );
};
