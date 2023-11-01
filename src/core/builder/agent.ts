import { Builder } from "./builder";
import { Symbol } from "@/utils/symbol";
import type { CommonComponentType, Components } from "@/types/component";

/**
 * 생성된 Component의 Type
 * Agent를 활용하여 Component를 생성하는데
 * 이 때 반환하는 Type 정의
 */
interface BuiltComponent {
  /**
   * Root's UID
   */
  root: string;

  /**
   * Parent's UID
   */
  parent: string;

  /**
   * Component의 정보
   */
  components: Components;
}

/**
 * Builder class를 활용하여 실질적으로 Component를 만드는데 필요한
 * 데이터를 만들기 위해 사용하는 Agent Class 정의
 */
export class Agent extends Symbol {
  constructor() {
    super("Coponent:Builder:Agent");

    Symbol.freeze(this, Agent);
  }

  /**
   * 핵심 로직
   * 모든 Component를 생성할 수 있도록 하는 Method
   *
   * @param {string} parent
   * @param {CommonComponentType} type
   * @returns {BuiltComponent}
   */
  public static generateComponent(
    parent: string,
    type: CommonComponentType,
  ): BuiltComponent {
    const builder: Builder = new Builder(type);

    const generatedComponentId: string = builder.addChildNode(
      type,
      parent,
      null,
    );

    const components: Components = builder.getComponents();

    const generatedComponent: BuiltComponent = {
      root: generatedComponentId,
      parent: parent,
      components: components,
    };

    return generatedComponent;
  }
}
