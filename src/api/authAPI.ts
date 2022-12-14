import HTTPTransport from "core/HTTPTransport";

export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export class AuthAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('/auth');
  }

  getUser(): Promise<User> {
    return this.http.get('/user', {});
  }

  signin(data: SigninData) {
    return this.http.post('/signin', { data });
  }

  signup(data: SignupData) {
    return this.http.post('/signup', { data });
  }

  logout() {
    return this.http.post('/logout', {});
  }
}
