import { AuthAPI, SigninData, SignupData } from "api/authAPI";
import Router from "core/Router";
import store from "core/Store";

class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);

      Router.go('/chats');
    } catch (e: any) {
      console.log(e.reason);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();

      Router.go('/chats');
    } catch (e: any) {
      console.log(e.reason);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.getUser();
      store.set('user', user); 
      return user;
    } catch (e: any) {
      console.log(e.reason);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      Router.go('/login');
    } catch (e: any) {
      console.log(e.reason);
    }
  }
}

export default new AuthController();
