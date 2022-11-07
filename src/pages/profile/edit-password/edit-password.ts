import { Block } from "core";
import { withUser } from "../profile";
import UserController from "controllers/UserController";
import { getFormData } from "helpers/getFormData";
import { EditProfilePassword } from "api/userAPI";
import AuthController from "controllers/AuthController";
import { Validator } from "helpers/ValidateForm";

export class ProfileEditPasswordPageBase extends Block {
  constructor() {
    super();
    AuthController.fetchUser();
    const validator = new Validator();

    this.setProps({
      onSubmit: (e: Event) => {
        e.preventDefault();

        if(!validator.validateForm('form')) {
          return
        }

        const data = getFormData();
        UserController.editPass(data as EditProfilePassword);
      }
    })
  }
  protected render(): string {
    return `
      <div class="profile__container">
        <a class="link-back" href="/profile"></a>     
        <div class="center">
          {{# Form className="profile" onSubmit=onSubmit }}
            <div class="profile__fields">
              {{{ ProfileInputContainer 
                label="Старый пароль" 
                type="password" 
                name="oldPassword" 
              }}}
              {{{ ProfileInputContainer 
                label="Новый пароль" 
                type="password" 
                name="newPassword" 
              }}}
            </div>
            {{{ Button 
              type="submit" 
              text="Сохранить"
            }}}
          {{/Form}}
        </div>
      </div>
    `
  }
}

export const ProfileEditPasswordPage = withUser(ProfileEditPasswordPageBase);
