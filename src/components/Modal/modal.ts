import Block from 'core/Block';

import './modal.scss';

interface modalProps {
  className?: string[];
  title?: string;
  text?: string;
}

export class Modal extends Block {
  static componentName = "Modal";
  
  constructor(props: modalProps) {
    super(props);
  }

  protected render(): string {
    // language=hbs
    return `
    <div class="modal {{className}}">
      <p class="modal__title">{{title}}</p>
      {{{ Input type="text" name=name }}}
      {{{ Button text=text onClick=onClick }}}
    </div>
    `;
  }
}
