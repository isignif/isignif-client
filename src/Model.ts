export interface IDefinitionAttributes{
  created_at: string;
  updated_at: string;
}

export abstract class Model {
  public id?: number;
  public createdAt?: string;
  public updatedAt?: string;

  public token?: string;

  get createdAtDate(): Date {
    if (!this.createdAt) throw new Error('createdAt is undefined');
    return new Date(this.createdAt);
  }

  get updatedAtDate(): Date {
    if (!this.updatedAt) throw new Error('updatedAt is undefined');
    return new Date(this.updatedAt);
  }

  get formatedCreatedAt(): string {
    return `${this.createdAtDate.toLocaleDateString('fr-FR')} ${this.createdAtDate.getHours()}:${this.createdAtDate.getMinutes()}`;
  }

  get formatedUpdatedAt(): string {
    return `${this.updatedAtDate.toLocaleDateString('fr-FR')} ${this.updatedAtDate.getHours()}:${this.updatedAtDate.getMinutes()}`;
  }
}