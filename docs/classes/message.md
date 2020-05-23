[isignif-client - v0.0.9-alpha](../README.md) › [Globals](../globals.md) › [Message](message.md)

# Class: Message

## Hierarchy

* [Model](model.md)

  ↳ **Message**

## Index

### Properties

* [_signification](message.md#optional-_signification)
* [_user](message.md#optional-_user)
* [actId](message.md#optional-actid)
* [content](message.md#optional-content)
* [createdAt](message.md#optional-createdat)
* [id](message.md#optional-id)
* [readAt](message.md#optional-readat)
* [significationId](message.md#optional-significationid)
* [token](message.md#optional-token)
* [updatedAt](message.md#optional-updatedat)
* [userId](message.md#optional-userid)

### Accessors

* [createdAtDate](message.md#createdatdate)
* [formatedCreatedAt](message.md#formatedcreatedat)
* [formatedUpdatedAt](message.md#formatedupdatedat)
* [updatedAtDate](message.md#updatedatdate)

### Methods

* [getUser](message.md#getuser)
* [hydrateFromAttributes](message.md#hydratefromattributes)
* [save](message.md#save)
* [all](message.md#static-all)
* [get](message.md#static-get)

## Properties

### `Optional` _signification

• **_signification**? : *[Signification](signification.md)*

*Defined in [Message.ts:16](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L16)*

___

### `Optional` _user

• **_user**? : *[User](user.md)*

*Defined in [Message.ts:15](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L15)*

___

### `Optional` actId

• **actId**? : *undefined | number*

*Defined in [Message.ts:11](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L11)*

___

### `Optional` content

• **content**? : *undefined | string*

*Defined in [Message.ts:9](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L9)*

___

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L8)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L7)*

___

### `Optional` readAt

• **readAt**? : *undefined | string*

*Defined in [Message.ts:13](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L13)*

___

### `Optional` significationId

• **significationId**? : *undefined | number*

*Defined in [Message.ts:10](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L10)*

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

___

### `Optional` userId

• **userId**? : *undefined | number*

*Defined in [Message.ts:12](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L12)*

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

###  updatedAtDate

• **get updatedAtDate**(): *Date*

*Inherited from [Model](model.md).[updatedAtDate](model.md#updatedatdate)*

*Defined in [Model.ts:18](https://github.com/isignif/isignif-client/blob/cb04bee/src/Model.ts#L18)*

**Returns:** *Date*

## Methods

###  getUser

▸ **getUser**(): *Promise‹[User](user.md)›*

*Defined in [Message.ts:97](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L97)*

**Returns:** *Promise‹[User](user.md)›*

___

###  hydrateFromAttributes

▸ **hydrateFromAttributes**(`attributes`: any, `included`: any[]): *void*

*Defined in [Message.ts:46](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L46)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`attributes` | any | - |
`included` | any[] |  [] |

**Returns:** *void*

___

###  save

▸ **save**(`token`: string | undefined): *Promise‹[Message](message.md)›*

*Defined in [Message.ts:63](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`token` | string &#124; undefined |  undefined |

**Returns:** *Promise‹[Message](message.md)›*

___

### `Static` all

▸ **all**(`actId`: number, `significationId`: number, `token`: string): *Promise‹[Message](message.md)[]›*

*Defined in [Message.ts:18](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`significationId` | number |
`token` | string |

**Returns:** *Promise‹[Message](message.md)[]›*

___

### `Static` get

▸ **get**(`actId`: number, `significationId`: number, `id`: number, `token`: string): *Promise‹[Message](message.md)›*

*Defined in [Message.ts:34](https://github.com/isignif/isignif-client/blob/cb04bee/src/Message.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`significationId` | number |
`id` | number |
`token` | string |

**Returns:** *Promise‹[Message](message.md)›*
