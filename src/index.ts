import { renderDOM, registerComponent } from 'core';
import './styles/styles.scss';

import HomePage from 'pages/home';
import Page404 from 'pages/error/404';
import Page500 from 'pages/error/500';
import LoginPage from 'pages/login';
import SigninPage from 'pages/signin';
import ChatsPage from 'pages/chats';
import ProfilePage from 'pages/profile';
import ProfileEditPasswordPage from 'pages/profile/edit-password';
import ProfileEditPage from 'pages/profile/edit';

import Error from 'components/Error';
import Link from 'components/Link';
import Button from 'components/Button';
import { Input, InputError, InputContainer} from 'components/Input';
import Dialogue from 'components/Dialogue';
import ProfileInput from 'components/ProfileInput';

registerComponent(Error);
registerComponent(Link);
registerComponent(Button);
registerComponent(Input);
registerComponent(InputError);
registerComponent(InputContainer);
registerComponent(Dialogue);
registerComponent(ProfileInput);

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  switch (path) {
    case "/login": {
      renderDOM(new LoginPage());
      break;
    }
    case "/signin": {
      renderDOM(new SigninPage());
      break;
    }
    case "/chats": {
      renderDOM(new ChatsPage());
      break;
    }
    case "/profile": {
      renderDOM(new ProfilePage());
      break;
    }
    case "/profile/edit": {
      renderDOM(new ProfileEditPage());
      break;
    }
    case "/profile/edit-password": {
      renderDOM(new ProfileEditPasswordPage());
      break;
    }
    case "/404": {
      renderDOM(new Page404());
      break;
    }
    case "/500": {
      renderDOM(new Page500());
      break;
    }

    default:
      renderDOM(new HomePage());
  }
});
