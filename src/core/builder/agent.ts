import { Builder } from "./builder";
import { Symbol } from "@/utils/symbol";
import type { Components } from "@/types/component";

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
 * Generator 함수의 Type 정의
 */
type AgentGeneratorFunction = (parent: string) => BuiltComponent;

/**
 * Builder class를 활용하여 실질적으로 Component를 만드는데 필요한
 * 데이터를 만들기 위해 사용하는 Agent Class 정의
 */
export class Agent extends Symbol {
  // Agent의 Form Generator
  public static Form: AgentGeneratorFunction;

  constructor() {
    super("Coponent:Builder:Agent");
  }

  /**
   * Form group을 생성하는 Method
   *
   * @param {string} parent
   * @returns {BuiltComponent}
   */
  public static generateFormGroup(parent: string): BuiltComponent {
    const builder: Builder = new Builder("Form");

    const generatedFormId: string = builder.addChildNode("Form", parent, null);
    builder.addChildNode("Input", generatedFormId, "Form");

    const components: Components = builder.getComponents();

    const generatedFormComponent: BuiltComponent = {
      root: generatedFormId,
      parent: parent,
      components: components,
    };

    return generatedFormComponent;
  }
}

{
  // Agent's Form generator
  Agent.Form = Agent.generateFormGroup;
}
