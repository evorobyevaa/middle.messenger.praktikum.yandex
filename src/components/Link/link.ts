import Block from 'core/Block';

import './link.scss';

interface linkProps {
  className?: string;
  href?: string;
  text?: string;
  events?: {
    click: () => void;
  };
}

export class Link extends Block {
  static componentName = "Link";
  
  constructor(props: linkProps) {
    super(props);
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
