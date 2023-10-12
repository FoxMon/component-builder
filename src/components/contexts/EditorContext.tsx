import { createContext, useState, useMemo, useCallback } from "react";

// type
import type { Children } from "@/types/component";

interface EditorContextState {
  isBackgroundMode: boolean;
  updateBackgroundModeState: () => void;
}

// 모눈종이 => false
// 흰색 => true
export const EditorBackgroundStateContext = createContext<EditorContextState>({
  isBackgroundMode: false,
  updateBackgroundModeState: () => {},
});

export const EditorContext = ({ children }: Children) => {
  const [isBackground, setIsBackground] = useState<boolean>(false);

  const handleBackgroundModeStateChange = useCallback(() => {
    setIsBackground((prev: boolean) => !prev);
  }, []);

  const editorBackgroundValues: EditorContextState = useMemo(() => {
    return {
      isBackgroundMode: isBackground,
      updateBackgroundModeState: handleBackgroundModeStateChange,
    };
  }, [isBackground, handleBackgroundModeStateChange]);

  return (
    <EditorBackgroundStateContext.Provider value={editorBackgroundValues}>
      {children}
    </EditorBackgroundStateContext.Provider>
  );
};
