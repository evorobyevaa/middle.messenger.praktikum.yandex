import Block from 'core/Block';

import './input.scss';

interface InputProps {
  className?: string[];
  type?: string;
  name?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class Input extends Block {
  static componentName = "Input";
  
  constructor({onFocus, onBlur, ...props}: InputProps) {
    super({events: {focus: onFocus, blur: onBlur}, ...props});
  }

  protected render(): string {
    // language=hbs
    return `
      <input class="input {{className}}" type={{type}} name={{name}} required />
    `;
  }
}
