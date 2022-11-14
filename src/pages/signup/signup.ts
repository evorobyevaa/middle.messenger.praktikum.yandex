import { Block } from 'core';
import { getFormData } from 'helpers/getFormData';
import { SignupData } from 'api/authAPI';
import AuthController from 'controllers/AuthController';
import { Validator } from 'helpers/ValidateForm';

export class SignUpPage extends Block {
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
        AuthController.signup(data as SignupData);
      }
    }) 
  }

  protected render(): string {
    return `
      <div class="center">
      <div class="auth">
        {{# Form className="auth__form" onSubmit=onSubmit }}
          <h1 class="auth__title">Регистрация</h1>
          <div class="auth__fields">
            {{{ InputContainer
              containinerClassName="auth__field"
              className="auth__input" 
              type="text" 
              name="email"
              label="Почта" 
              onInput=onInput
              onFocus=onFocus
            }}}
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
              type="text" 
              name="first_name"
              label="Имя" 
              onInput=onInput
              onFocus=onFocus
            }}}
            {{{ InputContainer
              containinerClassName="auth__field"
              className="auth__input" 
              type="text" 
              name="second_name"
              label="Фамилия" 
              onInput=onInput
              onFocus=onFocus
            }}}
            {{{ InputContainer
              containinerClassName="auth__field"
              className="auth__input" 
              type="tel" 
              name="phone"
              label="Телефон" 
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
            {{{ InputContainer
              containinerClassName="auth__field"
              className="auth__input" 
              type="password" 
              name="password"
              label="Пароль (ещё раз)" 
              onInput=onInput
              onFocus=onFocus
            }}}
          </div>
          <div class="auth__btns">
            {{{ Button 
              className="btn auth__btn" 
              type="submit" 
              text="Зарегистрироваться"
            }}}
            {{{ Link 
              className="auth__link link" 
              href="/login" 
              text="Войти"
            }}}
          </div>
        {{/Form}}
      </div>
    </div>
    `;
  }
}

