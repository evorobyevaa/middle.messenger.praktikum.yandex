import { Block } from "core";

export class ProfileEditPage extends Block {
  protected render(): string {
    return `
      <div class="profile__container">
        <a class="link-back" href="/profile"></a>
        <div class="center">
          <form class="profile" action="">
            <div class="profile__avatar"></div>
            <div class="profile__fields">
            {{{ ProfileInput
                label="Почта" 
                type="text" 
                name="email" 
                value="pochta@yandex.ru"
              }}}
            {{{ ProfileInput
                label="Логин" 
                type="text" 
                name="login" 
                value="ivanivanov"
              }}}
            {{{ ProfileInput
                label="Имя" 
                type="text" 
                name="first_name" 
                value="Иван"
              }}}
            {{{ ProfileInput
                label="Фамилия" 
                type="text" 
                name="second_name" 
                value="Иванов"
              }}}
            {{{ ProfileInput
                label="Имя в чате" 
                type="text" 
                name="display_name" 
                value="Иван"
              }}}
            {{{ ProfileInput
                label="Телефон" 
                type="tel" 
                name="phone" 
                value="+7(909)967-30-30"
              }}}
            </div>
            {{{ Button 
              className="profile__save-btn" 
              type="submit" 
              text="Сохранить"
            }}}
          </form>
        </div>
      </div>       
    `
  }
}

