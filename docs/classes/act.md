[isignif-client - v0.0.9-alpha](../README.md) › [Globals](../globals.md) › [Act](act.md)

# Class: Act

Un acte représente une demande effectuée. Elle contient une (ou plusieurs) significations qui demanderons l'intervention d'un huissier de justice.

## Hierarchy

* [Model](model.md)

  ↳ **Act**

## Index

### Properties

* [actTypeId](act.md#optional-acttypeid)
* [advocateId](act.md#optional-advocateid)
* [archivedAt](act.md#optional-archivedat)
* [billAddress](act.md#optional-billaddress)
* [billEmail](act.md#optional-billemail)
* [billPhone](act.md#optional-billphone)
* [billRecipient](act.md#optional-billrecipient)
* [billReference](act.md#optional-billreference)
* [billSiret](act.md#optional-billsiret)
* [billTown](act.md#optional-billtown)
* [billZipCode](act.md#optional-billzipcode)
* [coefficient](act.md#optional-coefficient)
* [createdAt](act.md#optional-createdat)
* [currentStep](act.md#optional-currentstep)
* [downloadedAt](act.md#optional-downloadedat)
* [estimatedValueCache](act.md#optional-estimatedvaluecache)
* [express](act.md#optional-express)
* [id](act.md#optional-id)
* [reference](act.md#optional-reference)
* [step](act.md#optional-step)
* [token](act.md#optional-token)
* [updatedAt](act.md#optional-updatedat)

### Accessors

* [createdAtDate](act.md#createdatdate)
* [formatedCreatedAt](act.md#formatedcreatedat)
* [formatedUpdatedAt](act.md#formatedupdatedat)
* [name](act.md#name)
* [updatedAtDate](act.md#updatedatdate)

### Methods

* [confirm](act.md#confirm)
* [getActType](act.md#getacttype)
* [getAdvocate](act.md#getadvocate)
* [getSignifications](act.md#getsignifications)
* [hydrateFromAttributes](act.md#hydratefromattributes)
* [save](act.md#save)
* [all](act.md#static-all)
* [get](act.md#static-get)

## Properties

### `Optional` actTypeId

• **actTypeId**? : *undefined | number*

*Defined in [Act.ts:55](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L55)*

L'identifiant du type d'acte crée

___

### `Optional` advocateId

• **advocateId**? : *undefined | number*

*Defined in [Act.ts:51](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L51)*

L'identifiant de l'utilisateur qui a déposé cet acte

___

### `Optional` archivedAt

• **archivedAt**? : *undefined | string*

*Defined in [Act.ts:61](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L61)*

___

### `Optional` billAddress

• **billAddress**? : *undefined | string*

*Defined in [Act.ts:30](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L30)*

L'adresse de la facture

___

### `Optional` billEmail

• **billEmail**? : *undefined | string*

*Defined in [Act.ts:42](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L42)*

L'email de la facture

___

### `Optional` billPhone

• **billPhone**? : *undefined | string*

*Defined in [Act.ts:46](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L46)*

Le numéro de téléphone de la facture

___

### `Optional` billRecipient

• **billRecipient**? : *undefined | string*

*Defined in [Act.ts:22](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L22)*

Le destinataire de la facture

___

### `Optional` billReference

• **billReference**? : *undefined | string*

*Defined in [Act.ts:59](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L59)*

___

### `Optional` billSiret

• **billSiret**? : *undefined | string*

*Defined in [Act.ts:26](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L26)*

Le numéro SIRET de la facture

___

### `Optional` billTown

• **billTown**? : *undefined | string*

*Defined in [Act.ts:38](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L38)*

La ville de la facture

___

### `Optional` billZipCode

• **billZipCode**? : *undefined | string*

*Defined in [Act.ts:34](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L34)*

Le code postal de la facture

___

### `Optional` coefficient

• **coefficient**? : *undefined | number*

*Defined in [Act.ts:56](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L56)*

___

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L8)*

___

### `Optional` currentStep

• **currentStep**? : *undefined | string*

*Defined in [Act.ts:64](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L64)*

___

### `Optional` downloadedAt

• **downloadedAt**? : *undefined | string*

*Defined in [Act.ts:60](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L60)*

___

### `Optional` estimatedValueCache

• **estimatedValueCache**? : *undefined | string*

*Defined in [Act.ts:62](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L62)*

___

### `Optional` express

• **express**? : *undefined | false | true*

*Defined in [Act.ts:57](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L57)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L7)*

___

### `Optional` reference

• **reference**? : *undefined | string*

*Defined in [Act.ts:58](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L58)*

___

### `Optional` step

• **step**? : *undefined | string*

*Defined in [Act.ts:18](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L18)*

___

### `Optional` token

• **token**? : *undefined | string*

*Inherited from [Model](model.md).[token](model.md#optional-token)*

*Defined in [Model.ts:11](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L11)*

___

### `Optional` updatedAt

• **updatedAt**? : *undefined | string*

*Inherited from [Model](model.md).[updatedAt](model.md#optional-updatedat)*

*Defined in [Model.ts:9](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L9)*

## Accessors

###  createdAtDate

• **get createdAtDate**(): *Date*

*Inherited from [Model](model.md).[createdAtDate](model.md#createdatdate)*

*Defined in [Model.ts:13](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L13)*

**Returns:** *Date*

___

###  formatedCreatedAt

• **get formatedCreatedAt**(): *string*

*Inherited from [Model](model.md).[formatedCreatedAt](model.md#formatedcreatedat)*

*Defined in [Model.ts:23](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L23)*

**Returns:** *string*

___

###  formatedUpdatedAt

• **get formatedUpdatedAt**(): *string*

*Inherited from [Model](model.md).[formatedUpdatedAt](model.md#formatedupdatedat)*

*Defined in [Model.ts:27](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L27)*

**Returns:** *string*

___

###  name

• **get name**(): *string*

*Defined in [Act.ts:233](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L233)*

**Returns:** *string*

___

###  updatedAtDate

• **get updatedAtDate**(): *Date*

*Inherited from [Model](model.md).[updatedAtDate](model.md#updatedatdate)*

*Defined in [Model.ts:18](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L18)*

**Returns:** *Date*

## Methods

###  confirm

▸ **confirm**(`token`: string | undefined): *Promise‹[Act](act.md)›*

*Defined in [Act.ts:240](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L240)*

Une fois confirmé, l'utilisateur s'engage à payer l'acte une fois signifié

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`token` | string &#124; undefined |  undefined |

**Returns:** *Promise‹[Act](act.md)›*

___

###  getActType

▸ **getActType**(): *Promise‹[ActType](acttype.md)›*

*Defined in [Act.ts:205](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L205)*

**Returns:** *Promise‹[ActType](acttype.md)›*

___

###  getAdvocate

▸ **getAdvocate**(): *Promise‹[User](user.md)›*

*Defined in [Act.ts:191](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L191)*

**Returns:** *Promise‹[User](user.md)›*

___

###  getSignifications

▸ **getSignifications**(): *Promise‹[Signification](signification.md)[]›*

*Defined in [Act.ts:217](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L217)*

**Returns:** *Promise‹[Signification](signification.md)[]›*

___

###  hydrateFromAttributes

▸ **hydrateFromAttributes**(`attributes`: any, `included`: any[]): *void*

*Defined in [Act.ts:150](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L150)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`attributes` | any | - |
`included` | any[] |  [] |

**Returns:** *void*

___

###  save

▸ **save**(`token`: string | undefined): *Promise‹[Act](act.md)›*

*Defined in [Act.ts:110](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L110)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`token` | string &#124; undefined |  undefined |

**Returns:** *Promise‹[Act](act.md)›*

___

### `Static` all

▸ **all**(`token`: string): *Promise‹[Act](act.md)[]›*

*Defined in [Act.ts:76](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L76)*

Récupère tous les actes appartenant à l'utilisateur lié au jeton JWT.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | string |   |

**Returns:** *Promise‹[Act](act.md)[]›*

___

### `Static` get

▸ **get**(`id`: number, `token`: string): *Promise‹[Act](act.md)›*

*Defined in [Act.ts:98](https://github.com/isignif/isignif-client/blob/cb04bee/src/Act.ts#L98)*

Récupère un acte

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | - |
`token` | string |   |

**Returns:** *Promise‹[Act](act.md)›*
