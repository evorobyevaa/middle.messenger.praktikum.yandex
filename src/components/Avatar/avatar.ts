import Block from 'core/Block';

import './avatar.scss';

interface AvatarProps {
  path?: string;
  onClick?: () => void;
}

export class Avatar extends Block {
  static componentName = "Avatar";
  
  constructor({onClick, ...props}: AvatarProps) {
    super({events: {click: onClick}, ...props});
  }

  protected render(): string {
    // language=hbs
    return `
    <div class="profile__avatar">
      {{#if path}}
        <img class="avatar__image" src="https://ya-praktikum.tech/api/v2/resources/{{path}}" alt="Аватар">
      {{/if}}
    </div>
    `;
  }
}
