import Block from 'core/Block';
import { Message } from 'api/chatsAPI';
import store from 'core/Store';

import './dialogueMessage.scss';


export class DialogueMessage extends Block {
  static componentName = "DialogueMessage";

  constructor(props: Message) {
    super({...props});
    const user = store.getState().user;
    
    this.setProps({
      isMyMessage: user.id === this.props.userId
    })
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="messages__text messages__text--right">{{content}}</div>
    `;
  }
}