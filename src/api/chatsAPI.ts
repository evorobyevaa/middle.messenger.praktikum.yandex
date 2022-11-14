import HTTPTransport from "core/HTTPTransport";
import { User } from './authAPI';

export interface ChatData {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  }
}

export interface Message {
  chat_id: string;
  content: string;
  file: string;
  id: number;
  is_read: boolean;
  time: string;
  type: string;
  user_id: number;
}

export class ChatsAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('/chats');
  }

  getChat(): Promise<ChatData> {
    return this.http.get('/', {});
  }

  createChat(title: string) {
    return this.http.post('/', { data: { title } });
  }

  deleteChat(id: number) {
    return this.http.delete('/', { data: { chatId: id } });
  }

  addUserToChat(data: { users: number[], chatId: number }) {
    return this.http.put('/users', { data });
  }

  deleteUserFromChat(data: { users: number[], chatId: number }) {
    return this.http.delete('/users', { data });
  }

  getToken(chatId: number):Promise<{ token: string }> {
    return this.http.post(`/token/${chatId}`, {});
  }
  getChatUsers(id: number, data: ChatData): Promise<ChatData[]> {
    return this.http.get(`/${id}/users`, { data });
  }
}
