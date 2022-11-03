import Block from 'core/Block';
import { Validator } from 'helpers/ValidateForm';

import './profile-input.scss';

interface ProfileInputContainerProps {
  label?: string;
  error?: string;
  validation: string;
}

export class ProfileInputContainer extends Block {
  static componentName = "ProfileInputContainer";
  
  constructor(props: ProfileInputContainerProps) {
    const validator = new Validator();

    super({
      ...props,
      onBlur: (e: FocusEvent) => {
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
    })
  }

  protected render(): string {
    // language=hbs
    return `
    <div class="profile__field">
      <label class="profile__input-label">{{label}}</label>
      {{{ ProfileInput 
        type=type 
        name=name 
        value=value
        readonly=readonly
        onFocus=onFocus
        onBlur=onBlur
      }}}
      {{{ InputError isValid=true ref="errorRef" error=error }}}
    </div>
    `;
  }
}