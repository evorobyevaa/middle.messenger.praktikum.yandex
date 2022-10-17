import Block from 'core/Block';
import { validateForm } from 'helpers/ValidateForm';

import './input.scss';

interface InputContainerProps {
  containinerClassName?: string[];
  className?: string[];
  type?: string;
  name?: string;
  label?: string;
  error?: string;
  onInput?: () => void;
  onFocus?: () => void;
}

export class InputContainer extends Block {
  static componentName = "InputContainer";
  
  constructor(props: InputContainerProps) {
    super({
      ...props,
      onBlur: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement;

        const errorMessage = validateForm([
          {type: inputEl.name, value: inputEl.value}
        ])

        this.refs.errorRef.setProps({error: errorMessage});
      }
    });
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="{{containinerClassName}}">
        {{{ Input
          className=className
          type=type 
          name=name
          error=error
          onInput=onInput
          onFocus=onFocus
          onBlur=onBlur
        }}}
        <label class="input__label">{{label}}</label>
        {{{ InputError ref="errorRef" error=error }}}
      </div>
    `;
  }
}
