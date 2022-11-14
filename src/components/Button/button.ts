import Block from 'core/Block';

import './button.scss';

interface ButtonProps {
  className?: string[];
  text?: string;
  type?: string;
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
      <button class="{{className}}" type={{{type}}}>{{text}}</button>
    `;
  }
}
