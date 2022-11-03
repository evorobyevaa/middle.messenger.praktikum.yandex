import { Block } from "core";
import { withUser } from "../profile";
import UserController from "controllers/UserController";
import { getFormData } from "helpers/getFormData";
import { EditProfilePassword } from "api/userAPI";
import AuthController from "controllers/AuthController";

export class ProfileEditPasswordPageBase extends Block {
  constructor() {
    super();
    AuthController.fetchUser();

    this.setProps({
      onSubmit: (e: Event) => {
        e.preventDefault();
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
          <form class="profile" action="">
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
              {{{ ProfileInputContainer 
                label="Повторите новый пароль" 
                type="password" 
                name="newPassword" 
              }}}
            </div>
            {{{ Button 
              type="submit" 
              text="Сохранить"
              onClick=onSubmit
            }}}
          </form>
        </div>
      </div>
    `
  }
}

export const ProfileEditPasswordPage = withUser(ProfileEditPasswordPageBase);