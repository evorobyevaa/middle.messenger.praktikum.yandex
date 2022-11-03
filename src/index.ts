import { registerComponent } from 'core';
import Router from 'core/Router';
import store from 'core/Store';
import AuthController from 'controllers/AuthController';

import './styles/styles.scss';

import Page404 from 'pages/error/404';
import Page500 from 'pages/error/500';
import LoginPage from 'pages/login';
import SignUpPage from 'pages/signup';
import ChatsPage from 'pages/chats';
import ProfilePage from 'pages/profile';
import ProfileEditPasswordPage from 'pages/profile/edit-password';
import ProfileEditPage from 'pages/profile/edit';

import Error from 'components/Error';
import Link from 'components/Link';
import Button from 'components/Button';
import { Input, InputError, InputContainer} from 'components/Input';
import Dialogue from 'components/Dialogue';
import { ProfileInput,  ProfileInputContainer} from 'components/ProfileInput';
import Avatar from 'components/Avatar';
import Modal from 'components/Modal';
import Stub from 'components/Stub';
import DialogueMessage from 'components/DialogueMessage';
import DialogueHeader from 'components/DialogueHeader';
import DialogueMain from 'components/DialogueMain';

registerComponent(Error);
registerComponent(Link);
registerComponent(Button);
registerComponent(Input);
registerComponent(InputError);
registerComponent(InputContainer);
registerComponent(Dialogue);
registerComponent(ProfileInput);
registerComponent(ProfileInputContainer);
registerComponent(Avatar);
registerComponent(Modal);
registerComponent(Stub);
registerComponent(DialogueMessage);
registerComponent(DialogueHeader);
registerComponent(DialogueMain);

(window as any).store = store;
const redirectPaths = ['/', 'login'];

window.addEventListener("DOMContentLoaded", async () => {
  Router
  .use('/', LoginPage)
  .use('/login', LoginPage)
  .use('/signup', SignUpPage)
  .use('/chats', ChatsPage)
  .use('/profile', ProfilePage)
  .use('/profile/edit-password', ProfileEditPasswordPage)
  .use('/profile/edit', ProfileEditPage)
  .use('/404', Page404)
  .use('/500', Page500)

  try {
    await AuthController.fetchUser();
    Router.start();
    if (redirectPaths.includes(window.location.pathname)) {
      Router.go("/chats");
    }
  } catch (e) {
    Router.start();
  }

  
})
