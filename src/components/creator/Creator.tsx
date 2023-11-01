import { Box } from "@mui/material";

// project
import { OriginalComponent } from "./original/origialComponent";
import { OriginalInput } from "./original/OriginalInput";
import { OriginalButton } from "./original/OriginalButton";
import { OriginalCheckBox } from "./original/OriginalCheckBox";
import { OriginalBox } from "./original/OriginalBox";
import { OriginalTypography } from "./original/OriginalTypography";
import { OriginalSpinner } from "./original/OriginalSpinner";

// util
import { checkComponent } from "@/utils/components";
import { originProps } from "@/utils/originProps";

// type
import type { ComponentBase } from "@/types/component";
import type { Nullable } from "@/types/common";
import { ChildrenOriginalComponent } from "./ChildrenOriginalComponent";

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

  const originalComponentName: Nullable<string> =
    OriginalComponent[componentType];

  const generatedComponent: Nullable<JSX.Element> = (() => {
    switch (originalComponentName) {
      case "OriginalInput": {
        return (
          <OriginalInput
            component={component}
            label={originProps["Input"].label}
            inputSize={originProps["Input"]?.inputSize}
            props={originProps["Input"].props}
          />
        );
      }

      case "OriginalCheckBox": {
        return (
          <OriginalCheckBox
            component={component}
            props={originProps["CheckBox"].props}
          />
        );
      }

      case "OriginalButton": {
        return (
          <OriginalButton
            component={component}
            variant={originProps["Button"].variant}
            label={originProps["Button"].label}
            props={originProps["Button"].props}
          />
        );
      }

      case "OriginalBox": {
        return (
          <OriginalBox component={component} props={originProps["Box"].props}>
            <ChildrenOriginalComponent component={component} />
          </OriginalBox>
        );
      }

      case "OriginalTypography": {
        return (
          <OriginalTypography
            component={component}
            text={originProps["Typography"].text}
            props={originProps["Typography"].props}
          />
        );
      }

      case "OriginalSpinner": {
        return (
          <OriginalSpinner
            component={component}
            props={originProps["Spinner"].props}
          />
        );
      }

      default: {
        return null;
      }
    }
  })();

  if (!generatedComponent) {
    return null;
  }

  // TODO: Drag 추가
  // 감싸여 졌다면 Box로 감싸 주도록 한다.
  if (isWrapped) {
    return <Box>{generatedComponent}</Box>;
  }

  return generatedComponent;
};
