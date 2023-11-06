import { ReactNode } from "react";

/**
 * Component Builder가 제작할 수 있는 Component 종류
 *
 * [Input, Grid, etc ...]
 */
export type CommonComponentType =
  | "Box"
  | "Flex"
  | "Grid"
  | "Stack"
  | "Form"
  | "Input"
  | "CheckBox"
  | "Select"
  | "Button"
  | "Typography"
  | "Spinner";

/**
 * Type alias 형식의 React Node
 */
export type ChildrenAlias = ReactNode;

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

  /**
   * props 에 대한 Type을 정의해야 하는데,
   * Component마다 가지고 있을 수 있는 props의 형태가 너무나도
   * 다양하기 때문에 any로,,,
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;

  /**
   * Drag drop 수행 시 component를 정렬 시킬 순서를
   * 정의하기 위한 property
   */
  orderIndex?: number;
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
