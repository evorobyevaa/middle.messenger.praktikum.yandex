import Block from 'core/Block';

import './profile-input.scss';

interface ProfileInputProps {
  type?: string;
  name?: string;
  value?: string;
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class ProfileInput extends Block {
  static componentName = "ProfileInput";
  
  constructor({onInput, onFocus, onBlur, ...props}: ProfileInputProps) {
    super({events: {input: onInput, focus: onFocus, blur: onBlur}, ...props});
  }

  protected render(): string {
    // language=hbs
    return `
      <input 
        class="profile__input" 
        type={{type}} 
        name={{name}} 
        value={{#if value}}{{value}}{{else}}""{{/if}} 
        {{readonly}}
      />
      
    `;
  }
}



