import { UserAPI, EditProfilePassword, EditProfileData } from "../api/UserAPI";
import store from "core/Store";

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  async editProfile(data: EditProfileData) {
    try {
      const editData = await this.api.editProfileData(data);
      store.set('user', editData);

      alert("Данные профиля обновлены!");
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async editPass(data: EditProfilePassword) {
    try {
      await this.api.editProfilePassword(data);

      alert("Пароль обновлен!");
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async editAvatar(data: any) {
    try {
      this.api.editProfileAvatar(data);

      alert("Аватар обновлен!");
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async searchUser(login: string) {
    try {
      return await this.api.searchUser(login);
    } catch (e: any) {
      console.error(e.message)
    }
  }
}

export default new UserController();