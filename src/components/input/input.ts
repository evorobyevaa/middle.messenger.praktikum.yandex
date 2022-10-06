import Block from 'core/Block';

import './input.scss';

interface InputProps {
  className?: string;
  type?: string;
  name?: string;
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class Input extends Block {
  static componentName = "Input";
  
  constructor({onInput, onFocus, onBlur, ...props}: InputProps) {
    super({events: {input: onInput, focus: onFocus, blur: onBlur}, ...props});
  }

  protected render(): string {
    // language=hbs
    return `
      <input class="input {{className}}" type={{type}} name={{name}} required />
    `;
  }
}
