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

type GeneratorFunction = Partial<CommonComponentType | string>;

/**
 * Generator 함수의 Type 정의
 */
interface AgentGeneratorFunction {
  [name: GeneratorFunction]: (parent: string) => BuiltComponent;
}

/**
 * Builder class를 활용하여 실질적으로 Component를 만드는데 필요한
 * 데이터를 만들기 위해 사용하는 Agent Class 정의
 */
class Agent extends Symbol {
  constructor() {
    super("Coponent:Builder:Agent");

    Symbol.freeze(this, Agent);
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

  /**
   * Box를 생성하는 Method
   *
   * @param {string} parent
   * @returns {BuiltComponent}
   */
  public static generateBox(parent: string): BuiltComponent {
    const builder: Builder = new Builder("Box");

    const generatedBoxId: string = builder.addChildNode("Box", parent, null);

    const components: Components = builder.getComponents();

    const generatedBoxComponent: BuiltComponent = {
      root: generatedBoxId,
      parent: parent,
      components: components,
    };

    return generatedBoxComponent;
  }

  /**
   * Input를 생성하는 Method
   *
   * @param {string} parent
   * @returns {BuiltComponent}
   */
  public static generateInput(parent: string): BuiltComponent {
    const builder: Builder = new Builder("Input");

    const generatedInputId: string = builder.addChildNode(
      "Input",
      parent,
      null,
    );

    const components: Components = builder.getComponents();

    const generatedInputComponent: BuiltComponent = {
      root: generatedInputId,
      parent: parent,
      components: components,
    };

    return generatedInputComponent;
  }

  public static generateButton(parent: string): BuiltComponent {
    const builder: Builder = new Builder("Button");

    const generatedButtonId: string = builder.addChildNode(
      "Button",
      parent,
      null,
    );

    const components: Components = builder.getComponents();

    const generatedButtonComponent: BuiltComponent = {
      root: generatedButtonId,
      parent: parent,
      components: components,
    };

    return generatedButtonComponent;
  }
}

export const agentBuilder: AgentGeneratorFunction = {
  Form: Agent.generateFormGroup,
  Box: Agent.generateBox,
  Input: Agent.generateInput,
  Button: Agent.generateButton,
};
