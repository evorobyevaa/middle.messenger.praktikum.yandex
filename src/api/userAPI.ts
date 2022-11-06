import HTTPTransport from "core/HTTPTransport";

interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface EditProfilePassword {
  newPassword: string;
  oldPassword: string;
}

export interface EditProfileData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export class UserAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('/user');
  }

  getUser(id: string):Promise<User> {
    return this.http.get(`/${id}`, {});
  }

  editProfileData(data: EditProfileData) {
    return this.http.put('/profile', { data });
  }

  editProfilePassword(data: EditProfilePassword) {
    return this.http.put('/password', { data });
  }

  editProfileAvatar(data: FormData) {
    return this.http.put('/profile/avatar', {
      data,
      headers: { "Content-Type": "multipart/form-data" }
    });
  }

  searchUser(login: string) {
    return this.http.post('/search', { data: { login } });
  }
}
