import { Block } from "core";
import AuthController from "controllers/AuthController";
import { withStore } from "core/Store";

import "./profile.scss";

export class ProfilePageBase extends Block {
  constructor() {
    super();
    AuthController.fetchUser();

    this.setProps({
      onLogout: (e: Event) => {
        e.preventDefault();
        AuthController.logout();
      }
    })
  }

  protected render(): string {
    return `
      <div class="profile__container">
        <a class="link-back" href="/chats"></a>
        <div class="center">
          <form class="profile" action="">
            {{{ Avatar path=avatar }}}
            <div class="profile__name">{{first_name}}</div>
            <div class="profile__fields">
            {{{ ProfileInputContainer
                label="Почта" 
                type="text" 
                name="email" 
                value=email
                readonly="readonly"
              }}}
            {{{ ProfileInputContainer
                label="Логин" 
                type="text" 
                name="login" 
                value=login
                readonly="readonly"
              }}}
            {{{ ProfileInputContainer
                label="Имя" 
                type="text" 
                name="first_name" 
                value=first_name
                readonly="readonly"
              }}}
            {{{ ProfileInputContainer
                label="Фамилия" 
                type="text" 
                name="second_name" 
                value=second_name
                readonly="readonly"
              }}}
            {{{ ProfileInputContainer
                label="Имя в чате" 
                type="text" 
                name="display_name" 
                value=display_name
                readonly="readonly"
              }}}
            {{{ ProfileInputContainer
                label="Телефон" 
                type="tel" 
                name="phone" 
                value=phone
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
                onClick=onLogout 
                text="Выйти"
              }}}
            </div>
          </form>
        </div>
      </div>       
    `
  }
}


export const withUser = withStore((state) => ({ ...state.user }));

export const ProfilePage = withUser(ProfilePageBase);