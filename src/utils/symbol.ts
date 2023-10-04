/**
 * 최상위 부모 Symbol 정의
 * Class의 고유 이름과 Object freeze 동작 정의
 */
export class Symbol {
  // Class's name
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public static freeze(me: object, target: object): void {
    if (me.constructor === target) {
      Object.freeze(me);
    }
  }
}
