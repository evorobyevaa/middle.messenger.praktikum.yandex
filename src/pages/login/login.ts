import { Block } from 'core';
import { getFormData } from 'helpers/getFormData';
import { SigninData } from 'api/authAPI';
import AuthController from 'controllers/AuthController';
import { Validator } from 'helpers/ValidateForm';

import './login.scss';

export class LoginPage extends Block {

  constructor() {
    super();

    const validator = new Validator();

    this.setProps({
      onSubmit: (e: Event) => {
        e.preventDefault();
        
        if(!validator.validateForm('form')) {
          return
        }

        const data = getFormData();
        AuthController.signin(data as SigninData)
      },
    })
  }
  protected render(): string {
    return `
    <div class="center">
      <div class="auth">
        {{# Form className="auth__form" onSubmit=onSubmit}}
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
            }}}
            {{{ Link 
              className="auth__link" 
              href="/signup" 
              text="Нет аккаунта?"
            }}}
          </div>
        {{/Form}}
      </div>
    </div>
    `;
  }
}
