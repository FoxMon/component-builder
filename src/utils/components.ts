import type { CommonComponentType } from "@/types/component";

/**
 * 현재 갖고 있는 Component들의 집합
 */
export const components: CommonComponentType[] = ["Box", "Form", "Input"];

/**
 * Drag가 될 수 있는 component 정의
 */
export const possibleDragComponents: CommonComponentType[] = components.filter(
  (name: CommonComponentType) => ["Box", "Form", "Input"].includes(name),
);
