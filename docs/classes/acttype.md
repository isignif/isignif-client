[isignif-client](../README.md) › [Globals](../globals.md) › [ActType](acttype.md)

# Class: ActType

## Hierarchy

* [Model](model.md)

  ↳ **ActType**

## Index

### Properties

* [actFamilyId](acttype.md#optional-actfamilyid)
* [createdAt](acttype.md#optional-createdat)
* [expressValue](acttype.md#optional-expressvalue)
* [id](acttype.md#optional-id)
* [name](acttype.md#optional-name)
* [token](acttype.md#optional-token)
* [updatedAt](acttype.md#optional-updatedat)
* [value](acttype.md#optional-value)

### Accessors

* [createdAtDate](acttype.md#createdatdate)
* [formatedCreatedAt](acttype.md#formatedcreatedat)
* [formatedUpdatedAt](acttype.md#formatedupdatedat)
* [updatedAtDate](acttype.md#updatedatdate)

### Methods

* [hydrateFromAttributes](acttype.md#hydratefromattributes)
* [all](acttype.md#static-all)
* [get](acttype.md#static-get)

## Properties

### `Optional` actFamilyId

• **actFamilyId**? : *undefined | number*

*Defined in [ActType.ts:9](https://github.com/isignif/isignif-client/blob/d14fb8a/src/ActType.ts#L9)*

___

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L8)*

___

### `Optional` expressValue

• **expressValue**? : *undefined | number*

*Defined in [ActType.ts:10](https://github.com/isignif/isignif-client/blob/d14fb8a/src/ActType.ts#L10)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L7)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [ActType.ts:7](https://github.com/isignif/isignif-client/blob/d14fb8a/src/ActType.ts#L7)*

___

### `Optional` token

• **token**? : *undefined | string*

*Inherited from [Model](model.md).[token](model.md#optional-token)*

*Defined in [Model.ts:11](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L11)*

___

### `Optional` updatedAt

• **updatedAt**? : *undefined | string*

*Inherited from [Model](model.md).[updatedAt](model.md#optional-updatedat)*

*Defined in [Model.ts:9](https://github.com/isignif/isignif-client/blob/d14fb8a/src/Model.ts#L9)*

___

### `Optional` value

• **value**? : *undefined | number*

*Defined in [ActType.ts:8](https://github.com/isignif/isignif-client/blob/d14fb8a/src/ActType.ts#L8)*

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

###  hydrateFromAttributes

▸ **hydrateFromAttributes**(`attributes`: any): *void*

*Defined in [ActType.ts:36](https://github.com/isignif/isignif-client/blob/d14fb8a/src/ActType.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`attributes` | any |

**Returns:** *void*

___

### `Static` all

▸ **all**(`token`: string): *Promise‹[ActType](acttype.md)[]›*

*Defined in [ActType.ts:12](https://github.com/isignif/isignif-client/blob/d14fb8a/src/ActType.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *Promise‹[ActType](acttype.md)[]›*

___

### `Static` get

▸ **get**(`id`: number, `token`: string): *Promise‹[ActType](acttype.md)›*

*Defined in [ActType.ts:26](https://github.com/isignif/isignif-client/blob/d14fb8a/src/ActType.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`token` | string |

**Returns:** *Promise‹[ActType](acttype.md)›*
