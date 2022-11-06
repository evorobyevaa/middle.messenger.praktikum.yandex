import Block from 'core/Block';

import './form.scss';

interface FormProps {
  className?: string[];
  onSubmit?: () => void;
}

export class Form extends Block {
  static componentName = "Form";
  
  constructor({ onSubmit, ...props }: FormProps) {
    super({ events: { submit: onSubmit }, ...props });
  }

  protected render(): string {
    // language=hbs
    return `
    <form>
      <div class="{{className}}" data-slot="1"></div>
    </form>
    `;
  }
}
