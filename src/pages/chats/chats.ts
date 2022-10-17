import { Block } from "core";

import './chats.scss';

export class ChatsPage extends Block {
  protected render(): string {
    return `   
      <div class="chats">
      <div class="chats__dialogues dialogues">
        <div class="dialogues__header">
          <a href="/profile" class="dialogues__link">Профиль</a>
          <div class="dialogues__search">
            <input class="dialogues__search--input" type="search" name="search" placeholder="Поиск" required>
            <label class="dialogues__search--label"></label>
          </div>
        </div>
        {{{ Dialogue 
          name="Андрей" 
          textYou="" 
          text="Изображение" 
          time="10:49" 
          count="2"
        }}}
        {{{ Dialogue 
          name="Вадим" 
          textYou="" 
          text="Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну." time="12:00" 
          count="1"
        }}}
      </div>
      <div class="chats__history">
        <div class="chats__header">
          <div class="dialogue__photo"></div>
          <div class="dialogue__name">Вадим</div>
          <button class="chats__action-btn" type="button"></button>
        </div>
        <div class="chats__messages messages">
          <time class="messages__date">19 июня</time>
          <div class="messages__text messages__text--in">Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

          Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</div>
          <div class="messages__photo"></div>
          <div class="messages__text messages__text--out">Круто!</div>
        </div>
        <div class="chats__footer">
          <form class="chats__form" action="">
            <button class="chats__attach-btn" type="button"></button>
            <input class="chats__input" type="text" name="message" placeholder="Сообщение">
            <button class="chats__submit-btn" type="submit"></button>
          </form>
        </div>
      </div>
    </div>
    `
  }
}

