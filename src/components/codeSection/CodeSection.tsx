import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Highlight, themes } from "prism-react-renderer";

// recoil
import { useRecoilValue } from "recoil";
import { placedTargetComponentSelector } from "@/core/componeents/selectors/target";

// project
import { CodeGenerator } from "@/core";

// type
import { Components } from "@/types/component";

export const CodeSection = () => {
  const [code, setCode] = useState<string>("");

  const placedComponent = useRecoilValue(placedTargetComponentSelector);

  useEffect(() => {
    (async () => {
      const codeGenerator = new CodeGenerator();
      const codeStr: string = await codeGenerator.generateCode(
        placedComponent as Components,
      );

      setCode(codeStr);
    })();
  }, [placedComponent]);

  return (
    <Box
      sx={{
        fontSize: "14px",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "auto",
        height: "100%",
      }}
    >
      <Highlight code={code} language="jsx" theme={themes.vsDark}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{ ...style, padding: 8, fontWeight: 400 }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};
