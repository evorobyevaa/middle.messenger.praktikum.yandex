/* eslint-disable no-useless-escape */
export enum ValidateType {
  Login = "login",
  Password = "password",
  NewPassword = "newPassword",
  OldPassword = "oldPassword",
  FirstName = "first_name",
  SecondName = "second_name",
  Email = "email",
  Phone = "phone",
  Message = "message",
}

export class Validator {
  login(value: string): [boolean, string] {
    return [
      /(?!^\d+$)[a-zA-Z0-9\-_]{3,20}/.test(value),
      "Логин должен состоять из латинских букв и цифр, допустимы дефис и нижнее подчёркивание. Размер от 3 до 20 символов",
    ];
  }

  password(value: string): [boolean, string] {
    return [
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,40}$/.test(value),
      "Пароль должен содержать хотя бы одну заглавную букву и цифру. Размер от 8 до 40 символов",
    ];
  }

  name(value: string): [boolean, string] {
    return [
      /^[A-ZА-Я][a-zA-Zа-яА-Я\-]*$/.test(value),
      "Первая букава должна быть заглавная. Не допустимы цифры и спецсимволы, кроме дефиса",
    ];
  }

  email(value: string): [boolean, string] {
    return [
      /^[\w\-]+@[\w\-]+\.[\w\-]+$/.test(value),
      "Email должен быть формата name@domen.com",
    ];
  }

  phone(value: string): [boolean, string] {
    return [
      /^[+\d]\d{9,14}$/.test(value),
      "Телефон должен содержать от 10 до 15 цифр, может начинается с плюса",
    ];
  }

  message(value: string): [boolean, string] {
    return [!!value, "Сообщение не может быть пустым"];
  }

  validate(type: string, value: string): (boolean | string)[] {
    switch (type) {
      case ValidateType.Login:
        return this.login(value);
      case ValidateType.Password:
      case ValidateType.NewPassword:
      case ValidateType.OldPassword:
        return this.password(value);
      case ValidateType.FirstName:
      case ValidateType.SecondName:
        return this.name(value);
      case ValidateType.Email:
        return this.email(value);
      case ValidateType.Phone:
        return this.phone(value);
      case ValidateType.Message:
        return this.message(value);
      default: {
        return [true, ""];
      }
    }
  }

  validateForm(selector: string) {
    const form = document.querySelector(selector) as HTMLFormElement;
    const errorMsg = form.querySelectorAll(".input__error");
    let error = 0;
    errorMsg.forEach((err) => {
      if (err.textContent !== "") {
        error = error + 1;
      }
    })
  
    if (error === 0) {
      return true;
    } else {
      alert("Заполните все поля правильно");
      return false;
    }
  }
}
