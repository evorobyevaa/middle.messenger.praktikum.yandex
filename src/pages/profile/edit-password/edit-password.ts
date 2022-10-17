import { Block } from "core";

export class ProfileEditPasswordPage extends Block {
  protected render(): string {
    return `
      <div class="profile__container">
        <a class="link-back" href="/profile"></a>     
        <div class="center">
          <form class="profile" action="">
            <div class="profile__avatar"></div>
            <div class="profile__fields">
              {{{ ProfileInput 
                label="Старый пароль" 
                type="password" 
                name="oldPassword" 
                value="•••••••••"
              }}}
              {{{ ProfileInput 
                label="Новый пароль" 
                type="password" 
                name="newPassword" 
                value="•••••••••••"
              }}}
              {{{ ProfileInput 
                label="Повторите новый пароль" 
                type="password" 
                name="newPassword" 
                value="•••••••••••"
              }}}
            </div>
            {{{ Button 
              type="submit" 
              text="Сохранить"
            }}}
          </form>
        </div>
      </div>
    `
  }
}

