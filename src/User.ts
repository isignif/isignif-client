import axios from 'axios';
import { Model } from './Model';
import { configuration } from './Configuration';

export class User extends Model {
  public email?: string;
  public firstName?: string;
  public lastName?: string;
  public activated?: boolean;
  public lastWork?: string;
  public creatorId?: number;
  public competenceAreaId?: number;
  public mustResetPassword?: boolean;
  public approved?: boolean;
  public address1?: string;
  public address2?: string;
  public zipCode?: string;
  public town?: string;
  public companyName?: string;
  public siret?: string;
  public phone?: string;
  public premiumUntil?: string;

  static get(id: number, token: string): Promise<User> {
    const url = `${configuration.apiUrl}/advocates/${id}`;

    return axios.get(url, { headers: { Authorization: token } }).then(resp => {
      const user = new User();
      user.id = id;
      user.hydrateFromAttributes(resp.data.data.attributes);
      return user;
    });
  }

  public hydrateFromAttributes(attributes: any): void {
    this.email = attributes.email;
    this.firstName = attributes.firstname;
    this.lastName = attributes.lastname;
    this.activated = attributes.activated;
    this.createdAt = attributes.created_at;
    this.updatedAt = attributes.updated_at;
    this.lastWork = attributes.last_work;
    this.creatorId = Number(attributes.creator_id);
    this.competenceAreaId = Number(attributes.competence_area_id);
    this.mustResetPassword = attributes.must_reset_password;
    this.approved = attributes.approved;
    this.address1 = attributes.address_1;
    this.address2 = attributes.address_2;
    this.zipCode = attributes.zip_code;
    this.town = attributes.town;
    this.companyName = attributes.company_name;
    this.siret = attributes.siret;
    this.phone = attributes.phone;
    this.premiumUntil = attributes.premium_until;
  }

  get completeName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Make an HTTP request to get a JWT token
   * @param password
   */
  public getToken(password: string): Promise<string> {
    if (!this.email) {
      throw Error("Can't get a token if user email is undefined");
    }

    const url = `${configuration.apiUrl}/tokens`;

    const formData = new URLSearchParams();
    formData.append('user[email]', this.email);
    formData.append('user[password]', password);

    return axios
      .post(url, formData)
      .then(resp => resp.data.token)
      .catch(e => console.error(e));
  }
}
