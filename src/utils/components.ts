import type { CommonComponentType } from "@/types/component";

export const components: CommonComponentType[] = ["Box", "Form", "Input"];

export const possibleRootComponents: CommonComponentType[] = components.filter(
  (name: CommonComponentType) => ["Box", "Form"].includes(name),
);
