import { Block } from "core";

export class Page404 extends Block {
  protected render(): string {
    return `   
      <div class="center">
        {{{ Error value="404" description="Не туда попали" }}}
      </div>      
    `
  }
}


