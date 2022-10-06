import { Block } from "core";

export class HomePage extends Block {
  protected render(): string {
    return `   
      <ul class="page__list">
        <li><a href="/login">Вход</a></li>
        <li><a href="/signin">Регистрация</a></li>
        <li><a href="/chats">Чаты</a></li>
        <li><a href="/profile">Профиль</a></li>
        <li><a href="/profile/edit">Изменить данные профиля</a></li>
        <li><a href="/profile/edit-password">Изменить пароль</a></li>
        <li><a href="/404">404</a></li>
        <li><a href="/500">500</a></li>
      </ul> 
    `
  }
}
      