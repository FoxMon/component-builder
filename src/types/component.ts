import { ReactNode } from "react";

/**
 * Component Builder가 제작할 수 있는 Component 종류
 *
 * [Input, Grid, etc ...]
 */
export type CommonComponentType = "Box" | "Form" | "Input";

/**
 * Component Builder는 자신의 자식과 부모를 식별할 수 있어야 한다.
 */
export interface ComponentBase {
  /**
   * Unique한 ID
   */
  uid: string;

  /**
   * 해당 Component의 부모 uid
   */
  parent: string;

  /**
   * 해당 Component의 자식들의 이름
   * 자식이 여럿 있을 수 있으므로 Array<string>
   */
  children: string[];

  /**
   * 어떤 Component를 만들 수 있는가?
   */
  commonComponentType: CommonComponentType;

  /**
   * 최상위의 부모의 Component가 무엇인지 알 수 있어야 한다.
   */
  rootCommonComponentType: CommonComponentType;
}

/**
 * ComponentBase Type의 Object 정의
 *      [UID]로 식별하기로 한다
 */
export interface Components {
  [uid: string]: ComponentBase;
}

/**
 * Children Props Type
 */
export interface Children {
  children: ReactNode;
}

/**
 * Top, Right, Bottom, Left로 Layout배치가
 * 가능하다.
 */
export type Layout = "Top" | "Right" | "Bottom" | "Left";

/**
 * Component의 공통 props type 정의
 * [Size, Spacing, Layout]
 */
export interface Props {
  size: {
    width: number;
    height: number;
  };
  spacing: {
    marginLeft: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
  };
  layout: Layout;
}
