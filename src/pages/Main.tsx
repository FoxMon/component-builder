import { Box } from "@mui/material";

// proejct
import { WithLayout } from "@/hoc/withLayout";
import { ComponentEditor } from "@/components/editor/ComponentEditor";

const WrappedComponentEditor = WithLayout(ComponentEditor);

export const Main = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, #d9e2e9 1px, transparent 1px), linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);",
        backgroundSize: "20px 20px",
        bgColor: "#edf2f6",
        minHeight: "100vh",
      }}
    >
      <WrappedComponentEditor />
    </Box>
  );
};
