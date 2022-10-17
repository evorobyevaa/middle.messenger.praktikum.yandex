import { Block } from "core";

import "./profile.scss";

export class ProfilePage extends Block {
  protected render(): string {
    return `
      <div class="profile__container">
        <a class="link-back" href="/chats"></a>
        <div class="center">
          <form class="profile" action="">
            <div class="profile__avatar"></div>
            <div class="profile__name">Иван</div>
            <div class="profile__fields">
            {{{ ProfileInput
                label="Почта" 
                type="text" 
                name="email" 
                value="pochta@yandex.ru"
                readonly="readonly"
              }}}
            {{{ ProfileInput
                label="Логин" 
                type="text" 
                name="login" 
                value="ivanivanov"
                readonly="readonly"
              }}}
            {{{ ProfileInput
                label="Имя" 
                type="text" 
                name="first_name" 
                value="Иван"
                readonly="readonly"
              }}}
            {{{ ProfileInput
                label="Фамилия" 
                type="text" 
                name="second_name" 
                value="Иванов"
                readonly="readonly"
              }}}
            {{{ ProfileInput
                label="Имя в чате" 
                type="text" 
                name="display_name" 
                value="Иван"
                readonly="readonly"
              }}}
            {{{ ProfileInput
                label="Телефон" 
                type="tel" 
                name="phone" 
                value="+7(909)967-30-30"
                readonly="readonly"
              }}}
            </div>
            <div class="profile__links">
              {{{ Link 
                className="profile__link" 
                href="/profile/edit" 
                text="Изменить данные"
              }}}
              {{{ Link 
                className="profile__link" 
                href="/profile/edit-password" 
                text="Изменить пароль"
              }}}
              {{{ Link 
                className="profile__link profile__link--exit" 
                href="/login" 
                text="Выйти"
              }}}
            </div>
          </form>
        </div>
      </div>       
    `
  }
}

