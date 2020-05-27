import axios from 'axios';

import { Model } from './Model';
import { configuration } from './Configuration';
import { User } from './User';
import { Act } from './Act';

export class Signification extends Model {
  public name?: string;
  public bailiffId?: number;
  public actId?: number;
  public townId?: number;
  public bailiffComment?: string;

  private _bailiff?: User;
  private _act?: Act;

  // CRUD

  static all(actId: number, token: string): Promise<Signification[]> {
    const url = `${configuration.apiUrl}/acts/${actId}/significations`;

    return axios.get(url, { headers: { Authorization: token }, ...configuration.requestConfig }).then(resp => {
      const included = resp.data.included;

      return resp.data.data.map((rowData: any) => {
        const signification = new Signification();
        signification.id = Number(rowData.id);
        signification.token = token;
        signification.hydrateFromAttributes(rowData.attributes, included);

        return signification;
      });
    });
  }

  static get(actId: number, id: number, token: string): Promise<Signification> {
    const url = `${configuration.apiUrl}/acts/${actId}/significations/${id}`;

    return axios.get(url, { headers: { Authorization: token }, ...configuration.requestConfig }).then(resp => {
      const signification = new Signification();
      signification.token = token;
      signification.id = id;
      signification.hydrateFromAttributes(resp.data.data.attributes, resp.data.included);
      return signification;
    });
  }

  private hydrateFromAttributes(attributes: any, included: any[] = []): void {
    this.name = attributes.name;
    this.createdAt = attributes.created_at;
    this.updatedAt = attributes.updated_at;
    this.bailiffId = Number(attributes.bailiff_id);
    this.actId = Number(attributes.act_id);
    this.townId = Number(attributes.town_id);
    this.bailiffComment = attributes.bailiff_comment;

    const userData = included.find(i => i.id === String(this.bailiffId) && i.type === 'bailiff');

    if (userData) {
      this._bailiff = new User();
      this._bailiff.id = this.bailiffId;
      this._bailiff.hydrateFromAttributes(userData.attributes);
    }

    const actData = included.find(i => i.id === String(this.actId) && i.type === 'act');

    if (actData) {
      this._act = new Act();
      this._act.id = this.actId;
      this._act.hydrateFromAttributes(actData.attributes);
    }
  }

  public save(): Promise<Signification> {
    if (!this.token) return Promise.reject(Error('You must provide a valid JWT token.'));
    if (!this.actId) throw new Error('actId is undefined');
    if (!this.townId) throw new Error('townId is undefined');

    if (this.id) {
      return this.update();
    } else {
      return this.create();
    }
  }

  private update(): Promise<Signification> {
    const url = `${configuration.apiUrl}/acts/${this.actId}/significations`;

    return axios.put(url, this.formData, { headers: { Authorization: this.token }, ...configuration.requestConfig })
      .then(response => {
        const responseData = response.data;
        this.id = Number(responseData.data.id);
        this.hydrateFromAttributes(responseData.data.attributes);
        return this;
      });
  }


  private create(): Promise<Signification> {
    const url = `${configuration.apiUrl}/acts/${this.actId}/significations`;

    return axios.post(url, this.formData, { headers: { Authorization: this.token }, ...configuration.requestConfig })
      .then(response => {
        const responseData = response.data;
        this.id = Number(responseData.data.id);
        this.hydrateFromAttributes(responseData.data.attributes);
        return this;
      });
  }

  private get formData(): URLSearchParams {
    const formData = new URLSearchParams();
    formData.append('signification[town_id]', String(this.townId));
    formData.append('signification[name]', String(this.name));
    return formData;
  }

  public remove(): Promise<Signification> {
    if (!this.id) throw Error('Act not created yet.');
    if (!this.token) throw Error("token is undefined");

    const url = `${configuration.apiUrl}/acts/${this.actId}/significations/${this.id}`;

    return axios
      .delete(url, { headers: { Authorization: this.token }, ...configuration.requestConfig })
      .then(() => {
        this.id = undefined;
        return this;
      });
  }

  // RELATIONSHIPS

  /**
   * Récupère l'huissier assigné à cette signification
   */
  public getBailiff(): Promise<User> {
    if (this._bailiff) return Promise.resolve(this._bailiff);
    if (!this.bailiffId) {
      return Promise.reject(Error("Can't get bailiff because bailiffId si undefined"));
    }
    if (!this.token) return Promise.reject(Error("Can't get bailiff because token si undefined"));

    return User.get(this.bailiffId, this.token).then(advocate => (this._bailiff = advocate));
  }

  /**
   * Récupère l'acte lié à cette signification
   */
  public getAct(): Promise<Act> {
    if (this._act) return Promise.resolve(this._act);
    if (!this.actId) return Promise.reject(Error("Can't get act because actId si undefined"));
    if (!this.token) throw Promise.reject(Error("Can't get bailiff because token si undefined"));

    return Act.get(this.actId, this.token).then(act => (this._act = act));
  }
}
