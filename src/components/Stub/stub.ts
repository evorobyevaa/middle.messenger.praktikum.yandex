import { Block } from "core";

import './stub.scss';


export class Stub extends Block {
  static componentName = "Stub";

  protected render(): string {
    // language=hbs
    return `
    <div class="stub">
      Выберите чат
    </div>
    `
  }
}
