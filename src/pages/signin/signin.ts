import { Block } from 'core';
import { getFormData } from 'helpers/getFormData';

export class SigninPage extends Block {
  constructor() {
    super();

    this.setProps({
      onSubmit: () => {
        getFormData();
      }
    }) 
  }

  protected render(): string {
    return `
      <div class="center">
      <div class="auth">
        <form class="auth__form" action="">
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
              className="auth__btn" 
              type="submit" 
              text="Зарегистрироваться"
              onClick=onSubmit
            }}}
            {{{ Link 
              className="auth__link" 
              href="#" 
              text="Войти"
            }}}
          </div>
        </form>
      </div>
    </div>
    `;
  }
}

