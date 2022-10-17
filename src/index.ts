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
      renderDOM('#app', new LoginPage());
      break;
    }
    case "/signin": {
      renderDOM('#app', new SigninPage());
      break;
    }
    case "/chats": {
      renderDOM('#app', new ChatsPage());
      break;
    }
    case "/profile": {
      renderDOM('#app', new ProfilePage());
      break;
    }
    case "/profile/edit": {
      renderDOM('#app', new ProfileEditPage());
      break;
    }
    case "/profile/edit-password": {
      renderDOM('#app', new ProfileEditPasswordPage());
      break;
    }
    case "/404": {
      renderDOM('#app', new Page404());
      break;
    }
    case "/500": {
      renderDOM('#app', new Page500());
      break;
    }

    default:
      renderDOM('#app', new HomePage());
  }
});
