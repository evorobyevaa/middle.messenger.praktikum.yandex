import { Block } from "core";
import {withStore} from "../../core/Store";
import ChatsController from "../../controllers/ChatsController";
import { getFormData } from "helpers/getFormData";
import { ChatData } from "api/chatsAPI";

import "./chats.scss";

export class ChatsPageBase extends Block {
  constructor(props: any) {
    super({...props});
    ChatsController.fetchChats();

    const activeChat = (this.props.chats || []).find(
      (chat: ChatData) => chat.id === this.props.activeChat
    );
    const title = activeChat?.title;
    
    this.setProps({
      onClickCreateChat: (e: Event) => {
        e.preventDefault();
        const overlay = document.querySelector('.overlay') as HTMLElement;
        const modal = document.querySelector('.modal-create-chat') as HTMLElement;

        overlay.classList.add('active');
        modal.classList.add('active');

        overlay.addEventListener('click', () => {
          modal.classList.remove('active');
          overlay.classList.remove('active');
        })
      },
      onCreateChat: (e: Event) => {
        e.preventDefault();
        const data = getFormData();
        ChatsController.createChat(data.chats);
      },
      activeChatTitle: title
    })
  }
  
  protected render(): string {
    return `   
    <div class="chats">
      <div class="chats__dialogues dialogues">
        <div class="dialogues__header">
          <a href="/profile" class="dialogues__link">Профиль</a>
          {{{ Button
            className="dialogues__add" 
            text="Создать чат" 
            onClick=onClickCreateChat
          }}}
          <div class="dialogues__search">
            <input class="dialogues__search--input" type="search" name="search" placeholder="Поиск" required>
            <label class="dialogues__search--label"></label>
          </div>
        </div>
        {{#each chats}}
          {{{ Dialogue 
            id=id
            title=title
            last_message=last_message.content
            time=last_message.time
            unread_count=unread_count
            activeChat=activeChat
          }}}
        {{/each}} 
      </div>
      <div class="chats__history">
        {{#if activeChat}}
          {{{ DialogueHeader activeChatTitle=activeChatTitle activeChatId=activeChat }}}
          {{{ DialogueMain messages=messages }}}
        {{else}}
          {{{ Stub }}}
        {{/if}}
      </div>
      {{{Modal className="modal-create-chat" title="Создать чат" name="chats" text="Создать" onClick=onCreateChat}}}
      <div class="overlay"></div>
    </div>
    `;
  }
}

const withChats = withStore((state) => {
  return {
    chats: [...(state.chats || [])],
    messages: [ ...(state.messages || [])],
    activeChat: state.activeChat
  };
});

export const ChatsPage = withChats(ChatsPageBase);