import { useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import SplitPane from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

// project
import { Creator } from "../creator/Creator";
import { CodeSection } from "../codeSection/CodeSection";
import { EditorBackgroundStateContext } from "../contexts/editorContext";

// hooks
import { useDragDropTarget } from "@/hooks/useDragDropTarget";

// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { placedTargetComponentSelector } from "@/core/componeents/selectors/target";
import { activeTarget } from "@/core/componeents/activeTarget";

// util
import { filterComponent } from "@/utils/components";

// type
import type { Nullable } from "@/types/common";
import type { Components } from "@/types/component";

export const ComponentEditor = () => {
  const { drop } = useDragDropTarget("root", true);

  const placedComponent: Nullable<Components> = useRecoilValue(
    placedTargetComponentSelector,
  );
  const setActiveTarget = useSetRecoilState(activeTarget);

  const [sizes, setSizes] = useState<(number | string)[]>([100, 25, "auto"]);

  const { isCodeMode } = useContext(EditorBackgroundStateContext);

  const handleEditorOutsideClick = () => {
    setActiveTarget({
      cUid: "",
      isActive: false,
      isSelected: false,
      commonComponentType: "",
      props: {},
    });
  };

  return (
    <Box sx={{ height: "100%" }}>
      {/* @ts-ignore */}
      <SplitPane
        sizes={sizes}
        split="horizontal"
        onChange={(sizes) => setSizes(sizes)}
      >
        <Box
          ref={drop}
          sx={{
            p: 2,
            position: "relative",
            height: "auto",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
          }}
          onClick={handleEditorOutsideClick}
        >
          <Box sx={{ m: "0 auto", width: "100%" }}>
            {placedComponent ? (
              Object.keys(placedComponent)
                .filter((id: string) =>
                  filterComponent(placedComponent[id].parent),
                )
                .map((key: string) => (
                  <Box key={key} sx={{ p: 1 }}>
                    <Creator
                      componentType={placedComponent[key]?.commonComponentType}
                      component={placedComponent[key]}
                      isWrapped={false}
                    />
                  </Box>
                ))
            ) : (
              <Typography variant="subtitle2" sx={{ fontSize: "1.25rem" }}>
                Drag component to start design your page without programming !
                Or load your previous designed page.
              </Typography>
            )}
          </Box>
        </Box>
        {isCodeMode ? (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              background: "rgb(30, 30, 30);",
            }}
          >
            <CodeSection />
          </Box>
        ) : (
          <Box></Box>
        )}
      </SplitPane>
    </Box>
  );
};
