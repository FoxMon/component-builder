import { createElement } from "react";
import { Box } from "@mui/material";

// project
import { OriginalComponent } from "./original/origialComponent";

// util
import { checkComponent } from "@/utils/components";

// type
import type { ComponentBase } from "@/types/component";

/**
 * Component Creator의 props type 정의
 */
interface CreatorProps {
  /**
   * 어떠한 Component를 만들 것인지 알아야 하므로
   */
  componentType: string;

  /**
   * Component를 만들려면 component의 정보가 필요하다.
   */
  component: ComponentBase;

  /**
   * 감싸여진 component라면 특단의 조치가 필요하므로
   */
  isWrapped: boolean;
}

export const Creator = ({
  componentType,
  component,
  isWrapped,
}: CreatorProps) => {
  // Component를 만들기 전에 유효성을 검사한다.
  checkComponent(componentType);

  // TODO: Props 추가
  const componentProps = {};

  const childrenComponent = createElement(OriginalComponent[componentType], {
    ...componentProps,
    ...component.children.map((name: string) => <Box key={name}></Box>),
  });

  // TODO: Drag 추가
  // 감싸여 졌다면 Box로 감싸 주도록 한다.
  if (isWrapped) {
    return <Box>{childrenComponent}</Box>;
  }

  return childrenComponent;
};
