import axios from 'axios';
import { Model } from './Model';
import { configuration } from './Configuration';

export class ActType extends Model {
  public name?: string;
  public value?: number;
  public actFamilyId?: number;
  public expressValue?: number;

  static all(token: string): Promise<ActType[]> {
    if (!token) throw Error('You must provide a valid JWT token.');
    const url = `${configuration.apiUrl}/act_types`;

    return axios.get(url, { headers: { Authorization: token } }).then(resp => {
      return resp.data.data.map((actTypeData: any) => {
        const actType = new ActType();
        actType.id = Number(actTypeData.id);
        actType.hydrateFromAttributes(actTypeData.attributes);

        return actType;
      });
    });
  }

  static get(id: number, token: string): Promise<ActType> {
    const url = `${configuration.apiUrl}/act_types/${id}`;

    return axios.get(url, { headers: { Authorization: token } }).then(resp => {
      const actType = new ActType();
      actType.id = id;
      return actType;
    });
  }

  public hydrateFromAttributes(attributes: any): void {
    this.name = attributes.name;
    this.value = attributes.value;
    this.actFamilyId = Number(attributes.act_family_id);
    this.expressValue = attributes.express_value;
  }
}
