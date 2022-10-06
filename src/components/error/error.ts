import Block from 'core/Block';

import './error.scss';

interface ErrorProps {
  value?: number;
  description?: string;
}

export class Error extends Block {
  static componentName = "Error";
  
  constructor(props: ErrorProps) {
    super(props);
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="error">
        <h1 class="error__title">{{value}}</h1>
        <p class="error__desc">{{description}}</p>
        {{{ Link 
          className="error__link" 
          href="/chats" text="Назад к чатам" 
        }}}
      </div>
    `;
  }
}
