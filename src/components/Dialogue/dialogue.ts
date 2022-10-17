import Block from 'core/Block';

import './dialogue.scss';

interface dialogueProps {
  name?: string;
  textYou?: string;
  text?: string;
  time?: string | Date;
  count?: number;
}

export class Dialogue extends Block {
  static componentName = "Dialogue";

  constructor(props: dialogueProps) {
    super(props);
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="dialogue">
        <div class="dialogue__photo"></div>
        <div class="dialogue__content">
          <div class="dialogue__name">{{name}}</div>
          <div class="dialogue__text"><span class="dialogue__text--you">{{textYou}}</span>{{text}}</div>
        </div>
        <div class="dialogue__info">
          <time class="dialogue__time">{{time}}</time>
          <div class="dialogue__count">{{count}}</div>
        </div>
      </div>
    `;
  }
}
