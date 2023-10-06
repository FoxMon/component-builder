import type { CommonComponentType } from "@/types/component";

/**
 * 현재 갖고 있는 Component들의 집합
 */
export const components: CommonComponentType[] = ["Box", "Form", "Input"];

/**
 * 부모가 될 수 있는 Root component 정의
 */
export const possibleRootComponents: CommonComponentType[] = components.filter(
  (name: CommonComponentType) => ["Box", "Form"].includes(name),
);
