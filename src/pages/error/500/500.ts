import { Block } from "core";

export class Page500 extends Block {
  protected render(): string {
    return `   
      <div class="center">
        {{{ Error value="500" description="Мы уже фиксим" }}}
      </div>      
    `
  }
}




