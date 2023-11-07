// util
import { logging } from "./logger";

// type
import { Components } from "@/types/component";

const STORAGE_KEY: string = "component-spec";

export class Session {
  private name: string;

  private storage: Storage;

  constructor() {
    this.name = "Session Storage";

    this.storage = sessionStorage;
  }

  public save(component: Components): boolean {
    try {
      this.storage.setItem(STORAGE_KEY, JSON.stringify(component));

      return true;
    } catch (e: unknown) {
      logging(e);

      throw new Error((e as Error).toString());
    }
  }

  public get(): Components {
    try {
      const components: Components = this.storage.get(STORAGE_KEY);

      return components;
    } catch (e: unknown) {
      logging(e);

      throw new Error((e as Error).toString());
    }
  }

  public clear(): void {
    this.storage.clear();
  }

  public getName(): string {
    return this.name;
  }
}
