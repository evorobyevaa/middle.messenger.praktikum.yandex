import Block from 'core/Block';

import './button.scss';

interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;

}

export class Button extends Block {
  static componentName = "Button";

  constructor({onClick, ...props}: ButtonProps) {
    super({events: {click: onClick}, ...props});
  }

  protected render(): string {
    // language=hbs
    return `
      <button class="btn {{className}}" type="button">{{text}}</button>
    `;
  }
}
