[isignif-client - v0.0.11-alpha](../README.md) › [Globals](../globals.md) › [ActHistory](acthistory.md)

# Class: ActHistory

## Hierarchy

* [Model](model.md)

  ↳ **ActHistory**

## Index

### Properties

* [_act](acthistory.md#optional-_act)
* [_user](acthistory.md#optional-_user)
* [actId](acthistory.md#optional-actid)
* [createdAt](acthistory.md#optional-createdat)
* [id](acthistory.md#optional-id)
* [significationId](acthistory.md#optional-significationid)
* [step](acthistory.md#optional-step)
* [token](acthistory.md#optional-token)
* [updatedAt](acthistory.md#optional-updatedat)
* [userId](acthistory.md#optional-userid)

### Accessors

* [color](acthistory.md#color)
* [createdAtDate](acthistory.md#createdatdate)
* [formattedCreatedAt](acthistory.md#formattedcreatedat)
* [formattedUpdatedAt](acthistory.md#formattedupdatedat)
* [humanReadableStep](acthistory.md#humanreadablestep)
* [updatedAtDate](acthistory.md#updatedatdate)

### Methods

* [getAct](acthistory.md#getact)
* [getUser](acthistory.md#getuser)
* [hydrateFromAttributes](acthistory.md#hydratefromattributes)
* [fromAct](acthistory.md#static-fromact)
* [get](acthistory.md#static-get)

## Properties

### `Optional` _act

• **_act**? : *[Act](act.md)*

*Defined in [ActHistory.ts:15](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L15)*

___

### `Optional` _user

• **_user**? : *[User](user.md)*

*Defined in [ActHistory.ts:14](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L14)*

___

### `Optional` actId

• **actId**? : *undefined | number*

*Defined in [ActHistory.ts:11](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L11)*

___

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/208f3c5/src/Model.ts#L8)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/208f3c5/src/Model.ts#L7)*

___

### `Optional` significationId

• **significationId**? : *undefined | number*

*Defined in [ActHistory.ts:12](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L12)*

___

### `Optional` step

• **step**? : *undefined | string*

*Defined in [ActHistory.ts:9](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L9)*

___

### `Optional` token

• **token**? : *undefined | string*

*Inherited from [Model](model.md).[token](model.md#optional-token)*

*Defined in [Model.ts:11](https://github.com/isignif/isignif-client/blob/208f3c5/src/Model.ts#L11)*

___

### `Optional` updatedAt

• **updatedAt**? : *undefined | string*

*Inherited from [Model](model.md).[updatedAt](model.md#optional-updatedat)*

*Defined in [Model.ts:9](https://github.com/isignif/isignif-client/blob/208f3c5/src/Model.ts#L9)*

___

### `Optional` userId

• **userId**? : *undefined | number*

*Defined in [ActHistory.ts:10](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L10)*

## Accessors

###  color

• **get color**(): *string*

*Defined in [ActHistory.ts:94](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L94)*

**Returns:** *string*

___

###  createdAtDate

• **get createdAtDate**(): *Date*

*Inherited from [Model](model.md).[createdAtDate](model.md#createdatdate)*

*Defined in [Model.ts:13](https://github.com/isignif/isignif-client/blob/208f3c5/src/Model.ts#L13)*

**Returns:** *Date*

___

###  formattedCreatedAt

• **get formattedCreatedAt**(): *string*

*Inherited from [Model](model.md).[formattedCreatedAt](model.md#formattedcreatedat)*

*Defined in [Model.ts:23](https://github.com/isignif/isignif-client/blob/208f3c5/src/Model.ts#L23)*

**Returns:** *string*

___

###  formattedUpdatedAt

• **get formattedUpdatedAt**(): *string*

*Inherited from [Model](model.md).[formattedUpdatedAt](model.md#formattedupdatedat)*

*Defined in [Model.ts:27](https://github.com/isignif/isignif-client/blob/208f3c5/src/Model.ts#L27)*

**Returns:** *string*

___

###  humanReadableStep

• **get humanReadableStep**(): *string*

*Defined in [ActHistory.ts:77](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L77)*

**Returns:** *string*

___

###  updatedAtDate

• **get updatedAtDate**(): *Date*

*Inherited from [Model](model.md).[updatedAtDate](model.md#updatedatdate)*

*Defined in [Model.ts:18](https://github.com/isignif/isignif-client/blob/208f3c5/src/Model.ts#L18)*

**Returns:** *Date*

## Methods

###  getAct

▸ **getAct**(): *Promise‹[Act](act.md)›*

*Defined in [ActHistory.ts:61](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L61)*

**Returns:** *Promise‹[Act](act.md)›*

___

###  getUser

▸ **getUser**(): *Promise‹[User](user.md)›*

*Defined in [ActHistory.ts:69](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L69)*

**Returns:** *Promise‹[User](user.md)›*

___

###  hydrateFromAttributes

▸ **hydrateFromAttributes**(`attributes`: any, `included`: any[]): *void*

*Defined in [ActHistory.ts:44](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`attributes` | any | - |
`included` | any[] |  [] |

**Returns:** *void*

___

### `Static` fromAct

▸ **fromAct**(`actId`: number, `token`: string): *Promise‹[ActHistory](acthistory.md)[]›*

*Defined in [ActHistory.ts:17](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`token` | string |

**Returns:** *Promise‹[ActHistory](acthistory.md)[]›*

___

### `Static` get

▸ **get**(`actId`: number, `id`: number, `token`: string): *Promise‹[ActHistory](acthistory.md)›*

*Defined in [ActHistory.ts:33](https://github.com/isignif/isignif-client/blob/208f3c5/src/ActHistory.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`id` | number |
`token` | string |

**Returns:** *Promise‹[ActHistory](acthistory.md)›*
