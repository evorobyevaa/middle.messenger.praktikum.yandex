import Block from 'core/Block';
import ChatsController from 'controllers/ChatsController';

import './dialogueHeader.scss';

export class DialogueHeader extends Block {
  static componentName = "DialogueHeader";

  constructor(props: any) {
    super({ ...props });

    this.setProps({
      onDeleteChat: (e: Event) => {
        e.preventDefault();
        ChatsController.deleteChat(this.props.activeChatId);
      }
    })
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="chats__header">
        <div class="dialogue__photo"></div>
        <div class="dialogue__name">{{activeChatTitle}}</div>
        {{{ Button
          className="btn chats__delete" 
          text="Удалить чат" 
          onClick=onDeleteChat
        }}}
      </div>
    `;
  }
}
