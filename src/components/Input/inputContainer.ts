import Block from 'core/Block';
import { Validator } from 'helpers/ValidateForm';

import './input.scss';

interface InputContainerProps {
  containinerClassName?: string[];
  className?: string[];
  type?: string;
  name?: string;
  label?: string;
  error?: string;
  validation: string;
}

export class InputContainer extends Block {
  static componentName = "InputContainer";
  
  constructor(props: InputContainerProps) {
    const validator = new Validator();
    const focusBlurValidate = (e: FocusEvent) => {
      const input = e.target as HTMLInputElement;

      const [isValid, message] = validator.validate(input.name, input.value);
      if (!isValid) {
        this.refs.errorRef.setProps({
          error: message,
        })
      } else {
        this.refs.errorRef.setProps({
          error: "",
        })
      } 
    }
    super({
      ...props,
      onBlur: (e: FocusEvent) => {
        focusBlurValidate(e)
      },
      onFocus: (e: FocusEvent) => {
        focusBlurValidate(e)
      }
    })
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
          onFocus=onFocus
          onBlur=onBlur
        }}}
        <label class="input__label">{{label}}</label>
        {{{ InputError isValid=true ref="errorRef" error=error }}}
      </div>
    `;
  }
}
