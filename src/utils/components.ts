// util
import { assert } from "./assert";

// type
import type { CommonComponentType } from "@/types/component";
import type { Nullable } from "@/types/common";

/**
 * 현재 갖고 있는 Component들의 집합
 */
export const components: CommonComponentType[] = [
  "Box",
  "Flex",
  "Grid",
  "Stack",
  "Form",
  "Input",
  "CheckBox",
  "Select",
  "Button",
  "Typography",
  "Spinner",
];

/**
 * Creator로 build할 수 있는 component인지 유효성 검사
 * 만약 component-builder project가 가지고 있지 않은 component라면
 * Creator가 만들 수 없는 component이다.
 *
 * @param {string} componentType
 * @returns {boolean}
 */
export const checkComponent = (componentType: string): boolean => {
  const foundComponent: Nullable<string[]> = components.filter(
    (c: string) => c === componentType,
  );

  // 유효한 component의 type이 아니라면 반드시 Error를 나타낸다.
  assert(foundComponent.length > 0, "Cannot found this component");

  return true;
};

/**
 * 최상위 루트의 parent는 자기 자신의 ComponentType으로 초기화가 될 것이므로
 * 만약에 최상위 루트의 자식으로 들어간 경우에는 parent는 부모 Component의 ID를 가지고 있을 것이다.
 *
 * 따라서 최상위 루트 Component를 구분하기 위해서는 자기 자신의 ComponentType인 것들만 가능하다.
 *
 * @param {string} componentType
 * @returns {boolean}
 */
export const filterComponent = (componentType: string): boolean => {
  const isRootComponent: boolean = (components as string[]).includes(
    componentType,
  );

  return isRootComponent;
};
