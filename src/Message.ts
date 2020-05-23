import axios from 'axios';

import { Model } from './Model';
import { apiUrl } from './config';
import { User } from './User';
import { Signification } from './Signification';

export class Message extends Model {
  public content?: string;
  public significationId?: number;
  public actId?: number;
  public userId?: number;
  public readAt?: string;

  public _user?: User;
  public _signification?: Signification;

  static all(actId: number, significationId: number, token: string): Promise<Message[]> {
    const url = `${apiUrl}/acts/${actId}/significations/${significationId}/messages`;

    return axios.get(url, { headers: { Authorization: token } }).then(resp => {
      const included = resp.data.included;

      return resp.data.data.map((rowData: any) => {
        const message = new Message();
        message.id = Number(rowData.id);
        message.actId = Number(rowData.actId);
        message.hydrateFromAttributes(rowData.attributes, included);
        return message;
      });
    });
  }

  static get(actId: number, significationId: number, id: number, token: string): Promise<Message> {
    const url = `acts/${actId}/significations/${significationId}/messages/${id}`;

    return axios.get(url, { headers: { Authorization: token } }).then(resp => {
      const message = new Message();
      message.id = id;
      message.actId = actId;
      message.hydrateFromAttributes(resp.data.data.attributes, resp.data.included);
      return message;
    });
  }

  public hydrateFromAttributes(attributes: any, included: any[] = []): void {
    this.content = attributes.content;
    this.significationId = Number(attributes.signification_id);
    this.userId = Number(attributes.user_id);
    this.createdAt = attributes.created_at;
    this.updatedAt = attributes.updated_at;
    this.readAt = attributes.read_at;

    const userData = included.find(i => i.id === String(this.userId) && i.type === 'user');

    if (userData) {
      this._user = new User();
      this._user.id = this.userId;
      this._user.hydrateFromAttributes(userData.attributes);
    }
  }

  public save(): Promise<Message> {
    if (!this.token) throw Error("token is undefined");
    if (!this.actId) throw Error("actId is undefined");
    if (!this.significationId) throw Error("significationId is undefined");
    if (!this.content) throw Error("content is undefined");

    if (this.id) {
      return this.update();
    } else {
      return this.create();
    }
  }

  private update(): Promise<Message> {
    throw new Error('TODO: Not implemented');
  }

  private create(): Promise<Message> {
    if (!this.token) throw Error("token is undefined");
    if (!this.actId) throw Error("actId is undefined");
    if (!this.significationId) throw Error("significationId is undefined");

    const formData = new URLSearchParams();
    formData.append('message[content]', String(this.content));

    const url = `${apiUrl}/acts/${this.actId}/significations/${this.significationId}/messages`;

    return axios.post(url, formData, { headers: { Authorization: this.token } }).then(response => {
      const responseData = response.data;
      this.id = Number(responseData.data.id);
      return this;
    });
  }

  // RELATIONSHIPS

  public getUser(): Promise<User> {
    if (this._user) return Promise.resolve(this._user);
    if (!this.userId) throw Error("userId is undefined");
    if (!this.token) throw Error("token is undefined");

    return User.get(this.userId, this.token).then(user => (this._user = user));
  }

  // public getSignification(): Promise<User> {
  //   if (this._user) return Promise.resolve(this._user);
  //   if (!this.significationId) return Promise.reject(new Error("Can't get signification because userId si undefined"));
  //   if (!this.token) return Promise.reject(new Error("Can't get signification because token si undefined"));

  //   return Signification.get(this. this.significationId, this.token)
  //     .then(user => this._user = user);
  // }
}
