// util
import { assert } from "./assert";

// type
import type { CommonComponentType } from "@/types/component";
import type { Nullable } from "@/types/common";

/**
 * 현재 갖고 있는 Component들의 집합
 */
export const components: CommonComponentType[] = ["Box", "Form", "Input"];

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
