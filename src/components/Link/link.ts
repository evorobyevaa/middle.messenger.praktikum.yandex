import Block from 'core/Block';

import './link.scss';

interface linkProps {
  className?: string;
  href?: string;
  text?: string;
  onClick?: () => void;
}

export class Link extends Block {
  static componentName = "Link";
  
  constructor({onClick, ...props}: linkProps) {
    super({events: {click: onClick}, ...props});
  }

  protected render(): string {
    // language=hbs
    return `
      <a class="link {{className}}" href="{{href}}">
        {{text}}
      </a>
    `;
  }
}
