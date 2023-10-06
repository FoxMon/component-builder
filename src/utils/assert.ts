// util
import { logging } from "./logger";

/**
 * Assertion 타입 명시를 위한 Assert type 정의
 */
type Assert = (condition: boolean, msg?: string) => asserts condition;

/**
 * Assert에 실패할 경우 Error를 뿜어내도록 한다.
 *
 * @param {string | undefined} msg
 */
const assertError = (msg?: string) => {
  logging(`Assertion faild !! ${msg ? `message: ${msg}` : ""}`);
  throw new Error("Asserion fail");
};

/**
 * Assertion 함수
 *
 * @param {boolean} condition
 * @param {string | undefined} msg
 */
export const assert: Assert = (
  condition: boolean,
  msg?: string,
): asserts condition => {
  if (!condition) {
    assertError(msg);
  }
};
