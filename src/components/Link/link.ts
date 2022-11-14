import Block from 'core/Block';
import { withRouter, PropsWithRouter } from 'hocs/withRouter';

import './link.scss';

interface linkProps extends PropsWithRouter {
  className?: string;
  href?: string;
  text?: string;
  events?: {
    click: () => void;
  }
}

export class LinkBase extends Block {
  static componentName = "Link";
  
  constructor(props: linkProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          e.preventDefault();
          this.navigate();
        } 
      }
    })
  }

  navigate() {
    this.props.router.go(this.props.href);
  }

  protected render(): string {
    // language=hbs
    return `
      <a class="{{className}}" href="{{href}}">
        {{text}}
      </a>
    `;
  }
}
export const Link = withRouter(LinkBase);
