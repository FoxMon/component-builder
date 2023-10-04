export class Symbol {
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
