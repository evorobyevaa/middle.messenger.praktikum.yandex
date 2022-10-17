/* eslint-disable no-useless-escape */
export enum ValidateType {
  Login = "login",
  Password = "password",
  FirstName = "first_name",
  SecondName = "second_name",
  Email = "email",
  Phone = "phone",
  Message = "message",
}

type ValidateRule = {
  type: string;
  value: string;
};

export function validateForm(rules: ValidateRule[]): string {
  let errorMessage: string | null = "";

  for (let i = 0; i < rules.length; i++) {
    const { type, value } = rules[i];
    if (type === ValidateType.Login) {
      if (value.length < 3 || value.length > 20) {
        errorMessage = "Логин должен содержать от 3 до 20 символов";
        break;
      }
      if (!/^[a-zA-Z1-9\-_]+$/.test(value)) {
        errorMessage = "Логин должен содержать только латинские символы и цифры";
        break;
      }
      if (/^\d+$/.test(value)) {
        errorMessage = "Логин не должен содержать только цифры";
        break;
      }
    } else if (type == ValidateType.Password) {
      if (!/^.{8,40}$/.test(value)) {
        errorMessage = "Пароль должен содержать от 8 до 40 символов";
        break;
      }
      if (!/^.*[A-Z\d]+.*$/.test(value)) {
        errorMessage = "Пароль должен содержать хотя бы одну заглавную букву или цифру";
        break;
      }
    } else if (type == ValidateType.FirstName || type == ValidateType.SecondName) {
      if (!/^[A-ZА-Я][a-zA-Zа-яА-Я\-]*$/.test(value)) {
        errorMessage = "Первая букава должна быть заглавная. Не допустимы цифры и спец символы, кроме дефиса";
        break;
      }
    } else if (type == ValidateType.Email) {
      if (!/^[\w\-]+@[\w\-]+\.[\w\-]+$/.test(value)) {
        errorMessage = "Email должен быть формата name@domen.com";
        break;
      }
    } else if (type == ValidateType.Phone) {
      if (!/^[+\d]\d{9,14}$/.test(value)) {
        errorMessage = "Телефон должен содержать от 10 до 15 цифр, может начинается с плюса";
        break;
      }
    } else if (type == ValidateType.Message) {
      if (value.length < 1) {
        errorMessage = "Сообщение не может быть пустым";
        break;
      }
    }
  }

  return errorMessage;
}