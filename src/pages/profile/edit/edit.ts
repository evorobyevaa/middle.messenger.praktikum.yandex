import { Block } from "core";
import { withUser } from "../profile";
import UserController from "controllers/UserController";
import { getFormData } from "helpers/getFormData";
import { EditProfileData } from "api/userAPI";
import AuthController from "controllers/AuthController";
import { Validator } from 'helpers/ValidateForm';

export class ProfileEditPageBase extends Block {
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
        const avatar = document.querySelector('input[name="avatar"]') as HTMLInputElement | null;
        const formData = new FormData();
        if (avatar && (avatar as any).files[0]) {
          formData.append("avatar", (avatar as any).files[0]);
          UserController.editAvatar(formData);
        }
        
        UserController.editProfile(data as EditProfileData);
      }
    })
  }

  protected render(): string {
    return `
      <div class="profile__container">
        <a class="link-back" href="/profile"></a>
        <div class="center">
          {{# Form className="profile" onSubmit=onSubmit }}
            {{{ Avatar path=avatar }}}
            <div class="profile__fields">
            {{{ ProfileInputContainer
                label="Почта" 
                type="text" 
                name="email" 
                value=email
              }}}
            {{{ ProfileInputContainer
                label="Логин" 
                type="text" 
                name="login" 
                value=login
              }}}
            {{{ ProfileInputContainer
                label="Имя" 
                type="text" 
                name="first_name" 
                value=first_name
              }}}
            {{{ ProfileInputContainer
                label="Фамилия" 
                type="text" 
                name="second_name" 
                value=second_name
              }}}
            {{{ ProfileInputContainer
                label="Имя в чате" 
                type="text" 
                name="display_name" 
                value=display_name
              }}}
            {{{ ProfileInputContainer
                label="Телефон" 
                type="tel" 
                name="phone" 
                value=phone
              }}}
            {{{ ProfileInputContainer
              label="Аватар" 
              type="file" 
              name="avatar" 
              value=avatar
            }}}
            </div>
            {{{ Button 
              className="profile__save-btn" 
              type="submit" 
              text="Сохранить"
            }}}
          {{/Form}}
        </div>
      </div>       
    `
  }
}

export const ProfileEditPage = withUser(ProfileEditPageBase);
