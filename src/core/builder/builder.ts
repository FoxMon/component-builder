import { Symbol } from "@/utils/symbol";
import { uidGenerator } from "@/utils/uidGenerator";
import type { Nullable } from "@/types/common";
import type { CommonComponentType, Components } from "@/types/component";

export class Builder extends Symbol {
  // Root가 어떤 Component인지 알아야 할 때도 있고 아닐 경우도 있다.
  // 자신이 최상위 Component인 경우 Root Component Type을 알 필요가 없다.
  // 그 외에는 Root Component Type을 알아야 한다.
  // Ex) Input안에 Input이 들어가면 안되므로,,,
  private rootComponentType: Nullable<CommonComponentType>;

  // 최상위 Component라면 자신이 갖고 있는 Component들의 정보를 알아야 한다.
  private components: Components;

  constructor(rootComponentType?: CommonComponentType) {
    super("Component:Builder");

    if (rootComponentType) {
      this.rootComponentType = rootComponentType;
    } else {
      this.rootComponentType = null;
    }

    this.components = {};
  }

  /**
   * 자식노드 생성
   * 혹은 최상위 Component 생성
   *
   * @param {CommonComponentType} commonComponentType
   * @param {string} parent
   * @param {Nullable<CommonComponentType>} rootCommonComponentType
   * @returns {string}
   */
  public addChildNode(
    commonComponentType: CommonComponentType,
    parent: string = "root",
    rootCommonComponentType?: Nullable<CommonComponentType>,
  ): string {
    const uid: string = uidGenerator();

    if (parent === "root") {
      this.rootComponentType = commonComponentType;
    }

    if (this.components[parent]) {
      this.components[parent].children.push(uid);
    }

    const rootComponentType: CommonComponentType = (rootCommonComponentType ||
      this.rootComponentType) as CommonComponentType;

    this.components = {
      ...this.components,
      [uid]: {
        uid: uid,
        parent: parent,
        children: [],
        commonComponentType: commonComponentType,
        rootCommonComponentType: rootComponentType,
      },
    };

    return uid;
  }

  /**
   * Get root component type
   *
   * @returns {Nullable<CommonComponentType>}
   */
  public getRootComponentType(): Nullable<CommonComponentType> {
    if (this.rootComponentType) {
      return this.rootComponentType;
    }

    return null;
  }

  /**
   * Get components
   *
   * @returns {Components}
   */
  public getComponents(): Components {
    return this.components;
  }
}
