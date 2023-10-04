import { Symbol } from "@/utils/symbol";

export class Builder extends Symbol {
  constructor() {
    super("Component:Builder");

    Symbol.freeze(this, Builder);
  }
}
