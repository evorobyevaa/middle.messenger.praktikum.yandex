import Block from 'core/Block';

import './profile-input.scss';

interface ProfileInputProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  events?: {
    blur?: (e: { target: HTMLInputElement; }) => void;
    focus?: (e: { target: HTMLInputElement; }) => void;
  };
}

export class ProfileInput extends Block {
  static componentName = "ProfileInput";
  
  constructor(props: ProfileInputProps) {
    super(props);
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="profile__field">
        <label class="profile__input-label">{{label}}</label>
        <input class="profile__input" type={{type}} name={{name}} value={{value}} {{readonly}}/>
      </div>
    `;
  }
}



