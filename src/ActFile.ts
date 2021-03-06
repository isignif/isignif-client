import axios from 'axios';
import { Model } from './Model';
import { Act } from './Act';
import { User } from './User';
import { Signification } from './Signification';
import { configuration } from './Configuration';

export class ActFile extends Model {
  public name?: string;
  public kind?: 'default' | 'to_deliver' | 'instruction_letter' | 'appendices' | 'bill' | 'proof_of_service';
  public userId?: number;
  public actId?: number;
  public files?: FileList;
  public significationId?: number;

  private _user?: User;
  private _act?: Act;
  private _signification?: Signification;

  // CRUD

  static all(actId: number, token: string): Promise<ActFile[]> {
    const url = `${configuration.apiUrl}/acts/${actId}/act_files/`;

    return axios.get(url, { headers: { Authorization: token }, ...configuration.requestConfig }).then(resp => {
      const included = resp.data.included;

      return resp.data.data.map((rowData: any) => {
        const file = new ActFile();
        file.id = Number(rowData.id);
        file.token = token;
        file.hydrateFromAttributes(rowData.attributes, included);

        return file;
      });
    });
  }

  static get(actId: number, id: number, token: string): Promise<ActFile> {
    const url = `${configuration.apiUrl}/acts/${actId}/act_files/${id}`;

    return axios.get(url, { headers: { Authorization: token }, ...configuration.requestConfig }).then(resp => {
      const file = new ActFile();
      file.token = token;
      file.id = id;
      file.hydrateFromAttributes(resp.data.data.attributes, resp.data.included);
      return file;
    });
  }

  public save(): Promise<ActFile> {
    if (!this.token) throw Error("token is undefined");
    if (!this.actId) throw Error("actId is undefined");
    if (!this.kind) throw Error("kind is undefined");
    if (!this.name) throw Error("name is undefined");

    if (this.id) {
      return this.update();
    } else {
      return this.create();
    }
  }


  private update(): Promise<ActFile> {
    const url = `${configuration.apiUrl}/acts/${this.actId}/act_files/${this.id}`;

    return axios
      .put(url, this.formData, { headers: { Authorization: this.token }, ...configuration.requestConfig })
      .then(response => {
        const responseData = response.data;
        this.id = Number(responseData.data.id);
        this.hydrateFromAttributes(responseData.data.attributes);
        return this;
      });
  }

  private create(): Promise<ActFile> {
    const url = `${configuration.apiUrl}/acts/${this.actId}/act_files/`;

    return axios
      .post(url, this.formData, { headers: { Authorization: this.token }, ...configuration.requestConfig })
      .then(response => {
        const responseData = response.data;
        this.id = Number(responseData.data.id);
        this.hydrateFromAttributes(responseData.data.attributes);
        return this;
      });
  }

  private get formData(): FormData {
    const formData = new FormData();
    formData.append('act_file[kind]', String(this.kind));
    formData.append('act_file[name]', String(this.name));
    formData.append('act_file[signification_id]', String(this.significationId));

    if (this.files) {
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files.item(i);
        formData.append('act_file[files]', file as Blob);
      }
    }

    return formData;
  }

  public remove(): Promise<ActFile> {
    if (!this.id) throw Error('ActFile not created yet.');
    if (!this.token) throw Error("token is undefined");
    if (!this.actId) throw Error("actId is undefined");

    const url = `${configuration.apiUrl}/acts/${this.actId}/act_files/${this.id}`;

    return axios
      .delete(url, { headers: { Authorization: this.token }, ...configuration.requestConfig })
      .then(() => {
        this.id = undefined;
        return this;
      });
  }

  public hydrateFromAttributes(attributes: any, included: any[] = []): void {
    this.name = attributes.name;
    this.kind = attributes.kind;
    this.createdAt = attributes.created_at;
    this.updatedAt = attributes.updated_at;
    this.userId = Number(attributes.user_id);
    this.actId = Number(attributes.act_id);
    this.significationId = Number(attributes.signification_id);

    this.createdAt = attributes.created_at;
    this.updatedAt = attributes.updated_at;

    const actData = included.find(i => String(i.id) === String(this.actId) && i.type === 'act');

    if (actData) {
      this._act = new Act();
      this._act.id = this.actId;
      this._act.hydrateFromAttributes(actData.attributes);
    }
  }

  // RELATIONSHIPS

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

  public getSignification(): Promise<Signification> {
    if (this._signification) return Promise.resolve(this._signification);
    if (!this.significationId) throw Error("significationId is undefined");
    if (!this.actId) throw Error("actId is undefined");
    if (!this.token) throw Error("token is undefined");

    return Signification.get(this.actId, this.significationId, this.token).then(
      s => (this._signification = s)
    );
  }
}
