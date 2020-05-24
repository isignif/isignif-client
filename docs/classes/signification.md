[isignif-client - v0.0.13-alpha](../README.md) › [Globals](../globals.md) › [Signification](signification.md)

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
* [formattedCreatedAt](signification.md#formattedcreatedat)
* [formattedUpdatedAt](signification.md#formattedupdatedat)
* [updatedAtDate](signification.md#updatedatdate)

### Methods

* [getAct](signification.md#getact)
* [getBailiff](signification.md#getbailiff)
* [remove](signification.md#remove)
* [save](signification.md#save)
* [all](signification.md#static-all)
* [get](signification.md#static-get)

## Properties

### `Optional` actId

• **actId**? : *undefined | number*

*Defined in [Signification.ts:11](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L11)*

___

### `Optional` bailiffComment

• **bailiffComment**? : *undefined | string*

*Defined in [Signification.ts:13](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L13)*

___

### `Optional` bailiffId

• **bailiffId**? : *undefined | number*

*Defined in [Signification.ts:10](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L10)*

___

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/21fb240/src/Model.ts#L8)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/21fb240/src/Model.ts#L7)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [Signification.ts:9](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L9)*

___

### `Optional` token

• **token**? : *undefined | string*

*Inherited from [Model](model.md).[token](model.md#optional-token)*

*Defined in [Model.ts:11](https://github.com/isignif/isignif-client/blob/21fb240/src/Model.ts#L11)*

___

### `Optional` townId

• **townId**? : *undefined | number*

*Defined in [Signification.ts:12](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L12)*

___

### `Optional` updatedAt

• **updatedAt**? : *undefined | string*

*Inherited from [Model](model.md).[updatedAt](model.md#optional-updatedat)*

*Defined in [Model.ts:9](https://github.com/isignif/isignif-client/blob/21fb240/src/Model.ts#L9)*

## Accessors

###  createdAtDate

• **get createdAtDate**(): *Date*

*Inherited from [Model](model.md).[createdAtDate](model.md#createdatdate)*

*Defined in [Model.ts:13](https://github.com/isignif/isignif-client/blob/21fb240/src/Model.ts#L13)*

**Returns:** *Date*

___

###  formattedCreatedAt

• **get formattedCreatedAt**(): *string*

*Inherited from [Model](model.md).[formattedCreatedAt](model.md#formattedcreatedat)*

*Defined in [Model.ts:23](https://github.com/isignif/isignif-client/blob/21fb240/src/Model.ts#L23)*

**Returns:** *string*

___

###  formattedUpdatedAt

• **get formattedUpdatedAt**(): *string*

*Inherited from [Model](model.md).[formattedUpdatedAt](model.md#formattedupdatedat)*

*Defined in [Model.ts:27](https://github.com/isignif/isignif-client/blob/21fb240/src/Model.ts#L27)*

**Returns:** *string*

___

###  updatedAtDate

• **get updatedAtDate**(): *Date*

*Inherited from [Model](model.md).[updatedAtDate](model.md#updatedatdate)*

*Defined in [Model.ts:18](https://github.com/isignif/isignif-client/blob/21fb240/src/Model.ts#L18)*

**Returns:** *Date*

## Methods

###  getAct

▸ **getAct**(): *Promise‹[Act](act.md)›*

*Defined in [Signification.ts:151](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L151)*

Récupère l'acte lié à cette signification

**Returns:** *Promise‹[Act](act.md)›*

___

###  getBailiff

▸ **getBailiff**(): *Promise‹[User](user.md)›*

*Defined in [Signification.ts:138](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L138)*

Récupère l'huissier assigné à cette signification

**Returns:** *Promise‹[User](user.md)›*

___

###  remove

▸ **remove**(): *Promise‹[Signification](signification.md)›*

*Defined in [Signification.ts:119](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L119)*

**Returns:** *Promise‹[Signification](signification.md)›*

___

###  save

▸ **save**(): *Promise‹[Signification](signification.md)›*

*Defined in [Signification.ts:75](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L75)*

**Returns:** *Promise‹[Signification](signification.md)›*

___

### `Static` all

▸ **all**(`actId`: number, `token`: string): *Promise‹[Signification](signification.md)[]›*

*Defined in [Signification.ts:20](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`token` | string |

**Returns:** *Promise‹[Signification](signification.md)[]›*

___

### `Static` get

▸ **get**(`actId`: number, `id`: number, `token`: string): *Promise‹[Signification](signification.md)›*

*Defined in [Signification.ts:37](https://github.com/isignif/isignif-client/blob/21fb240/src/Signification.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`id` | number |
`token` | string |

**Returns:** *Promise‹[Signification](signification.md)›*
