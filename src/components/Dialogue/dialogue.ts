import Block from 'core/Block';
import store from 'core/Store';
import { formatDate } from 'helpers/formatDate';
import ChatsController from 'controllers/ChatsController';
import MessagesController from 'controllers/MessagesController';
import { ChatData } from 'api/chatsAPI';
import { withStore } from 'core/Store';

import './dialogue.scss';

interface dialogueProps {
  title: string;
  last_message: string;
  time: string;
  unread_count: number;
  isAnswer: boolean;
  activeChat?: number;
  onClick?: () => void;
}

export class DialogueBase extends Block {
  static componentName = "Dialogue";

  constructor({onClick, ...props}: dialogueProps) {

    super({
      ...props, 
      events: { 
        click: (e: Event) => {
          this.onSelectChat(e);
        } 
      } 
    })
    const time = this.props.time;

    this.setProps({
      time: time  ? formatDate(time).time : "",
      isActiveChat:  this.props.id === this.props.activeChat
    })
  }

  async onSelectChat(e: Event) {
    const target = e.currentTarget as HTMLDivElement;
    const chatId = Number(target.id);

    await ChatsController.getChatUsers(chatId, {} as ChatData);
    const token = await ChatsController.getChatToken(chatId);
    
    if (token) {
      const userId = store.getState().user.id;

      MessagesController.connect({ userId, chatId, token: token.token });
    }
  }
  

  protected render(): string {
    // language=hbs
    
    return `
      <div class="dialogue{{#if isActiveChat}} active{{/if}}" id={{id}}>
        <div class="dialogue__photo"></div>
        <div class="dialogue__content">
          <div class="dialogue__title">{{title}}</div>
          <div class="dialogue__text">
            {{#if isAnswer}}
              <span class="dialogue__answer">Вы: </span>
            {{/if}}
            {{last_message}}
          </div>
        </div>
        <div class="dialogue__info">
          <time class="dialogue__time">{{time}}</time>
          {{#if unread_count}}
            <div class="dialogue__count">{{unread_count}}</div>
          {{/if}}
        </div>
      </div>
    `;
  }
}

export const withActiveChat = withStore((state) => ({ activeChat: state.activeChat }));

export const Dialogue = withActiveChat( DialogueBase as typeof Block);
