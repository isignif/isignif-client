[isignif-client](../README.md) › [Globals](../globals.md) › [Signification](signification.md)

# Class: Signification

## Hierarchy

* [Model](model.md)

  ↳ **Signification**

## Index

### Properties

* [actId](signification.md#optional-actid)
* [bailiffComment](signification.md#optional-bailiffcomment)
* [bailiffId](signification.md#optional-bailiffid)
* [createdAt](signification.md#optional-createdat)
* [id](signification.md#optional-id)
* [name](signification.md#optional-name)
* [token](signification.md#optional-token)
* [townId](signification.md#optional-townid)
* [updatedAt](signification.md#optional-updatedat)

### Accessors

* [createdAtDate](signification.md#createdatdate)
* [formatedCreatedAt](signification.md#formatedcreatedat)
* [formatedUpdatedAt](signification.md#formatedupdatedat)
* [updatedAtDate](signification.md#updatedatdate)

### Methods

* [getAct](signification.md#getact)
* [getBailiff](signification.md#getbailiff)
* [save](signification.md#save)
* [all](signification.md#static-all)
* [get](signification.md#static-get)

## Properties

### `Optional` actId

• **actId**? : *undefined | number*

*Defined in [Signification.ts:11](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L11)*

___

### `Optional` bailiffComment

• **bailiffComment**? : *undefined | string*

*Defined in [Signification.ts:13](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L13)*

___

### `Optional` bailiffId

• **bailiffId**? : *undefined | number*

*Defined in [Signification.ts:10](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L10)*

___

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L8)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L7)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [Signification.ts:9](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L9)*

___

### `Optional` token

• **token**? : *undefined | string*

*Inherited from [Model](model.md).[token](model.md#optional-token)*

*Defined in [Model.ts:11](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L11)*

___

### `Optional` townId

• **townId**? : *undefined | number*

*Defined in [Signification.ts:12](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L12)*

___

### `Optional` updatedAt

• **updatedAt**? : *undefined | string*

*Inherited from [Model](model.md).[updatedAt](model.md#optional-updatedat)*

*Defined in [Model.ts:9](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L9)*

## Accessors

###  createdAtDate

• **get createdAtDate**(): *Date*

*Inherited from [Model](model.md).[createdAtDate](model.md#createdatdate)*

*Defined in [Model.ts:13](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L13)*

**Returns:** *Date*

___

###  formatedCreatedAt

• **get formatedCreatedAt**(): *string*

*Inherited from [Model](model.md).[formatedCreatedAt](model.md#formatedcreatedat)*

*Defined in [Model.ts:23](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L23)*

**Returns:** *string*

___

###  formatedUpdatedAt

• **get formatedUpdatedAt**(): *string*

*Inherited from [Model](model.md).[formatedUpdatedAt](model.md#formatedupdatedat)*

*Defined in [Model.ts:27](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L27)*

**Returns:** *string*

___

###  updatedAtDate

• **get updatedAtDate**(): *Date*

*Inherited from [Model](model.md).[updatedAtDate](model.md#updatedatdate)*

*Defined in [Model.ts:18](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L18)*

**Returns:** *Date*

## Methods

###  getAct

▸ **getAct**(): *Promise‹[Act](act.md)›*

*Defined in [Signification.ts:124](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L124)*

Récupère l'acte lié à cette signification

**Returns:** *Promise‹[Act](act.md)›*

___

###  getBailiff

▸ **getBailiff**(): *Promise‹[User](user.md)›*

*Defined in [Signification.ts:112](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L112)*

Récupère l'huissier assigné à cette signification

**Returns:** *Promise‹[User](user.md)›*

___

###  save

▸ **save**(`token`: string | undefined): *Promise‹[Signification](signification.md)›*

*Defined in [Signification.ts:75](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L75)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`token` | string &#124; undefined |  undefined |

**Returns:** *Promise‹[Signification](signification.md)›*

___

### `Static` all

▸ **all**(`actId`: number, `token`: string): *Promise‹[Signification](signification.md)[]›*

*Defined in [Signification.ts:20](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`token` | string |

**Returns:** *Promise‹[Signification](signification.md)[]›*

___

### `Static` get

▸ **get**(`actId`: number, `id`: number, `token`: string): *Promise‹[Signification](signification.md)›*

*Defined in [Signification.ts:37](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Signification.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`id` | number |
`token` | string |

**Returns:** *Promise‹[Signification](signification.md)›*
