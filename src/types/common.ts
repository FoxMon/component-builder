// type
import type { CommonComponentType } from "./component";

/**
 * Null일 가능성도 있는 Type
 */
export type Nullable<Type> = Type | null | undefined;

export interface DragDropComponent {
  type: string;
  cUid: string;
  name: string;
  componentType: CommonComponentType;
  rootComponentType: string;
  isMoved: string;
  isChildComponent: boolean;
}
