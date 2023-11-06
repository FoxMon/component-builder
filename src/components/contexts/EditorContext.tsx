import { createContext, useState, useMemo, useCallback } from "react";

// type
import type { Children } from "@/types/component";

interface EditorContextState {
  isBackgroundMode: boolean;
  isCodeMode: boolean;
  updateBackgroundModeState: () => void;
  updateCodeModeState: () => void;
}

// 모눈종이 => false
// 흰색 => true
export const EditorBackgroundStateContext = createContext<EditorContextState>({
  isBackgroundMode: false,
  isCodeMode: true,
  updateBackgroundModeState: () => {},
  updateCodeModeState: () => {},
});

export const EditorContext = ({ children }: Children) => {
  const [isBackground, setIsBackground] = useState<boolean>(false);
  const [isCodeMode, setIsCodeMode] = useState<boolean>(true);

  const handleBackgroundModeStateChange = useCallback(() => {
    setIsBackground((prev: boolean) => !prev);
  }, []);

  const handleCodeModeStateChange = useCallback(() => {
    setIsCodeMode((prev: boolean) => !prev);
  }, []);

  const editorBackgroundValues: EditorContextState = useMemo(() => {
    return {
      isBackgroundMode: isBackground,
      isCodeMode: isCodeMode,
      updateBackgroundModeState: handleBackgroundModeStateChange,
      updateCodeModeState: handleCodeModeStateChange,
    };
  }, [
    isBackground,
    isCodeMode,
    handleBackgroundModeStateChange,
    handleCodeModeStateChange,
  ]);

  return (
    <EditorBackgroundStateContext.Provider value={editorBackgroundValues}>
      {children}
    </EditorBackgroundStateContext.Provider>
  );
};
