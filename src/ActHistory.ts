import axios from 'axios';

import { Model } from './Model';
import { configuration } from './Configuration';
import { User } from './User';
import { Act } from './Act';

export class ActHistory extends Model {
  public step?: string;
  public userId?: number;
  public actId?: number;
  public significationId?: number;

  public _user?: User;
  public _act?: Act;

  static fromAct(actId: number, token: string): Promise<ActHistory[]> {
    const url = `${configuration.apiUrl}/acts/${actId}/act_histories`;

    return axios.get(url, { headers: { Authorization: token }, ...configuration.requestConfig }).then(resp => {
      const included = resp.data.included;

      return resp.data.data.map((actHistoryData: any) => {
        const actHistory = new ActHistory();
        actHistory.id = Number(actHistoryData.id);
        actHistory.hydrateFromAttributes(actHistoryData.attributes, included);

        return actHistory;
      });
    });
  }

  static get(actId: number, id: number, token: string): Promise<ActHistory> {
    const url = `${configuration.apiUrl}/acts/${actId}/act_histories/${id}`;

    return axios.get(url, { headers: { Authorization: token }, ...configuration.requestConfig }).then(resp => {
      const actHistory = new ActHistory();
      actHistory.id = id;
      actHistory.hydrateFromAttributes(resp.data.data.attributes, resp.data.included);
      return actHistory;
    });
  }

  public hydrateFromAttributes(attributes: any, included: any[] = []): void {
    this.step = attributes.step;
    this.userId = Number(attributes.user_id);
    this.actId = Number(attributes.act_id);
    this.significationId = Number(attributes.signification_id);

    this.createdAt = attributes.created_at;
    this.updatedAt = attributes.updated_at;

    const userData = included.find(i => i.id === String(this.userId) && i.type === 'user');

    if (userData) {
      this._user = new User();
      this._user.id = this.userId;
      this._user.hydrateFromAttributes(userData.attributes);
    }
  }

  public getAct(): Promise<Act> {
    if (this._act) return Promise.resolve(this._act);
    if (!this.actId) throw Error("actId is undefined");
    if (!this.token) throw Error("token is undefined");

    return Act.get(this.actId, this.token).then(act => (this._act = act));
  }

  public getUser(): Promise<User> {
    if (this._user) return Promise.resolve(this._user);
    if (!this.userId) throw Error("userId is undefined");
    if (!this.token) throw Error("token is undefined");

    return User.get(this.userId, this.token).then(user => (this._user = user));
  }

  get humanReadableStep(): string {
    switch (this.step) {
      case 'created':
        return 'Crée';
      case 'confirmed':
        return 'Confirmé';
      case 'read':
        return 'Lu';
      case 'signified':
        return 'Signifié';
      case 'complete':
        return 'Complet';
      default:
        return this.step || '???';
    }
  }

  get color(): string {
    switch (this.step) {
      case 'created':
        return 'danger';
      case 'confirmed':
        return 'primary';
      case 'read':
        return 'info';
      case 'signified':
        return 'success';
      case 'complete':
        return 'success';
      case 'ask_cancel':
        return 'danger';
      case 'canceled':
        return 'danger';
      case 'archive':
        return 'secondary';
      default:
        return 'secondary';
    }
  }
}
