import axios from 'axios'

import { Model } from './Model'
import { apiUrl } from './config'
import { User } from './User'
import { ActType } from './ActType'
import { Signification } from './Signification'

interface ActSignificationParams {
  town_id: number
  name: string
}

export class Act extends Model {
  public step?: string
  public billRecipient?: string
  public billSiret?: string
  public billAddress?: string
  public billZipCode?: string
  public billTown?: string
  public billEmail?: string
  public billPhone?: string

  public advocateId?: number
  public actTypeId?: number
  public coefficient?: number
  public express?: boolean
  public reference?: string
  public billReference?: string
  public downloadedAt?: string
  public archivedAt?: string
  public estimatedValueCache?: string

  public currentStep?: string

  private _advocate?: User
  private _actType?: ActType
  private _significations?: Signification[]

  // CRUD

  static all(token: string): Promise<Act[]> {
    const url = `${apiUrl}/acts`

    return axios.get(url, { headers: { Authorization: token } }).then(resp => {
      const included = resp.data.included

      return resp.data.data.map((actData: any) => {
        const act = new Act()
        act.id = Number(actData.id)
        act.token = token
        act.hydrateFromAttributes(actData.attributes, included)

        return act
      })
    })
  }

  static get(id: number, token: string): Promise<Act> {
    const url = `${apiUrl}/acts/${id}`

    return axios.get(url, { headers: { Authorization: token } }).then(resp => {
      const act = new Act()
      act.token = token
      act.id = id
      act.hydrateFromAttributes(resp.data.data.attributes, resp.data.included)
      return act
    })
  }

  public save(token: string | undefined = undefined): Promise<Act> {
    if (token !== undefined) this.token = token
    if (!this.token) throw new Error('You must provide a valid JWT token.')
    if (!this.actTypeId) throw new Error('You must provide an actTypeId.')

    if (this.id) {
      return this.update()
    } else {
      return this.create()
    }
  }

  private update(): Promise<Act> {
    throw new Error('TODO: Not implemented')
  }

  private create(): Promise<Act> {
    const formData = new URLSearchParams()
    if (this.express) formData.append('act[express]', String(this.express))
    if (this.actTypeId) formData.append('act[act_type_id]', String(this.actTypeId))
    if (this.reference) formData.append('act[reference]', this.reference)
    if (this.billReference) formData.append('act[bill_reference]', this.billReference)
    if (this.billRecipient) formData.append('act[bill_recipient]', this.billRecipient)
    if (this.billZipCode) formData.append('act[bill_zip_code]', this.billZipCode)
    if (this.billTown) formData.append('act[bill_town]', this.billTown)
    if (this.billAddress) formData.append('act[bill_address]', this.billAddress)
    if (this.billSiret) formData.append('act[bill_siret]', this.billSiret)
    if (this.billEmail) formData.append('act[bill_email]', this.billEmail)
    if (this.billPhone) formData.append('act[bill_phone]', this.billPhone)

    return axios
      .post(`${apiUrl}/acts`, formData, { headers: { Authorization: this.token } })
      .then(response => {
        const responseData = response.data
        this.id = Number(responseData.data.id)
        this.hydrateFromAttributes(responseData.data.attributes)
        return this
      })
  }

  public hydrateFromAttributes(attributes: any, included: any[] = []): void {
    this.billRecipient = attributes.bill_recipient
    this.billSiret = attributes.bill_siret
    this.billAddress = attributes.bill_address
    this.billZipCode = attributes.bill_zip_code
    this.billTown = attributes.bill_town
    this.billEmail = attributes.bill_email
    this.billPhone = attributes.bill_phone

    this.advocateId = attributes.advocate_id
    this.actTypeId = Number(attributes.act_type_id)
    this.coefficient = Number(attributes.coefficient)
    this.express = attributes.express
    this.reference = attributes.reference
    this.billReference = attributes.billReference
    this.estimatedValueCache = attributes.estimated_value_cache
    this.currentStep = attributes.current_step

    const userData = included.find(
      i => String(i.id) === String(this.advocateId) && i.type === 'advocate'
    )

    if (userData) {
      this._advocate = new User()
      this._advocate.id = this.advocateId
      this._advocate.hydrateFromAttributes(userData.attributes)
    }

    const actTypeData = included.find(
      i => String(i.id) === String(this.actTypeId) && i.type === 'act_type'
    )

    if (actTypeData) {
      this._actType = new ActType()
      this._actType.id = this.actTypeId
      this._actType.hydrateFromAttributes(actTypeData.attributes)
    }
  }

  // RELATIONSHIPS

  public getAdvocate(): Promise<User> {
    if (this._advocate) return Promise.resolve(this._advocate)
    if (!this.advocateId)
      return Promise.reject(new Error("Can't get advocate because advocateId si undefined"))
    if (!this.token)
      return Promise.reject(new Error("Can't get bailiff because token si undefined"))

    return User.get(this.advocateId, this.token).then(advocate => (this._advocate = advocate))
  }

  public getActType(): Promise<ActType> {
    if (this._actType) return Promise.resolve(this._actType)
    if (!this.actTypeId)
      return Promise.reject(new Error("Can't get actType because actTypeId si undefined"))
    if (!this.token)
      return Promise.reject(new Error("Can't get bailiff because token si undefined"))

    return ActType.get(this.actTypeId, this.token).then(actType => (this._actType = actType))
  }

  public getSignifications(): Promise<Signification[]> {
    if (this._significations) return Promise.resolve(this._significations)
    if (!this.id)
      return Promise.reject(new Error("Can't get significations because id si undefined"))
    if (!this.token)
      return Promise.reject(new Error("Can't get bailiff because token si undefined"))

    return Signification.all(this.id, this.token).then(
      significations => (this._significations = significations)
    )
  }

  // METHODS

  get name(): string {
    return this.reference || `Acte N°${this.id}`
  }

  /**
   * Une fois confirmé, l'utilisateur s'engage à payer l'acte une fois signifié
   */
  confirm(token: string | undefined = undefined): Promise<Act> {
    if (token !== undefined) this.token = token
    if (!this.token) throw new Error('You must provide a valid JWT token.')
    if (!this.id) throw new Error('Act not saved yet.')
    if (this.currentStep !== 'created') throw new Error('Act has already been confirmed.')


    return axios.post(`${apiUrl}/acts/${this.id}/confirm`, {}, { headers: { Authorization: this.token } })
      .then(() => this)
  }
}
