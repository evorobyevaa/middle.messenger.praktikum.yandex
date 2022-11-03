import Block from 'core/Block';
import MessagesController from 'controllers/MessagesController';

import './dialogueMain.scss';


export class DialogueMain extends Block {
  static componentName = "DialogueMain";

  constructor(props: any) {
    super({...props});
    this.setProps({
      onSend: (e: Event) => {
        e.preventDefault();
        const input = document.querySelector('input[name="message"]') as HTMLInputElement;
        if (input) {
          const value = input.value;
      
          MessagesController.sendMessage(value);
        }
      }
    })
  }

  protected render(): string {
    // language=hbs
    return `
    <div class="chats__main">
      <div class="chats__messages messages">
        {{#each messages}}
          {{{DialogueMessage content=content }}}
        {{/each}}
      </div>
      <div class="chats__footer">
        <form class="chats__form" action="">
          <button class="chats__attach-btn" type="button"></button>
          <input class="chats__input" type="text" name="message" placeholder="Сообщение">
          {{{Button className="chats__submit-btn" type="submit" onClick=onSend}}}
        </form>
      </div>
    </div>
    `;
  }
}