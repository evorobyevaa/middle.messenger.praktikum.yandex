import { Block } from 'core';
import { getFormData } from 'helpers/getFormData';

import './login.scss';

export class LoginPage extends Block {
  constructor() {
    super();

    this.setProps({
      onSubmit: () => {
        getFormData();
      },
    })
  }
  protected render(): string {
    return `
    <div class="center">
      <div class="auth">
        <form class="auth__form" action="">
          <h1 class="auth__title">Вход</h1>
          <div class="auth__fields">
            {{{ InputContainer
              containinerClassName="auth__field"
              className="auth__input" 
              type="text" 
              name="login"
              label="Логин"
              onInput=onInput
              onFocus=onFocus
            }}}
            {{{ InputContainer
              containinerClassName="auth__field"
              className="auth__input" 
              type="password" 
              name="password"
              label="Пароль" 
              onInput=onInput
              onFocus=onFocus
            }}}
          </div>
          <div class="auth__btns">
            {{{ Button 
              className="auth__btn" 
              type="submit" 
              text="Авторизоваться"
              onClick=onSubmit
            }}}
            {{{ Link 
              className="auth__link" 
              href="/signin" 
              text="Нет аккаунта?"
            }}}
          </div>
        </form>
      </div>
    </div>
    `;
  }
}