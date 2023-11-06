import Prettier from "prettier/standalone";
import * as BabelPlugin from "prettier/parser-babel";
import * as EstreePlugin from "prettier/plugins/estree";

// type
import type { Components } from "@/types/component";

export class CodeGenerator {
  private code: string;

  constructor(code = "") {
    this.code = code || "";
  }

  /**
   * Code를 생성하는 함수
   *
   * @param {Components} components
   * @returns {Promise<string>}
   */
  public async generateCode(components: Components): Promise<string> {
    let codeStr: string = "";

    Object.keys(components).forEach((uid: string) => {
      codeStr += `<${components[uid].commonComponentType}>`;

      components[uid].children.forEach((chUid: string) => {
        codeStr += `<${components[chUid].commonComponentType} />`;
      });

      codeStr += `</${components[uid].commonComponentType}>`;
    });

    this.code = `
        const App = () => {
            return (
                <div>
                    ${codeStr}
                </div>
            )
        }

        export default App;
    `;

    return await this.formatCode(this.code);
  }

  /**
   * Code formatting
   * Prettier를 활용하여 code 정리
   */
  public async formatCode(code: string): Promise<string> {
    try {
      const formattedCode: string = await Prettier.format(code, {
        parser: "babel",
        semi: true,
        singleQuote: false,
        plugins: [BabelPlugin, EstreePlugin],
      });

      return formattedCode;
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
