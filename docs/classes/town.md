[isignif-client - v0.0.15-alpha](../README.md) › [Globals](../globals.md) › [Town](town.md)

# Class: Town

## Hierarchy

* [Model](model.md)

  ↳ **Town**

## Index

### Properties

* [createdAt](town.md#optional-createdat)
* [id](town.md#optional-id)
* [name](town.md#optional-name)
* [token](town.md#optional-token)
* [updatedAt](town.md#optional-updatedat)

### Accessors

* [createdAtDate](town.md#createdatdate)
* [formattedCreatedAt](town.md#formattedcreatedat)
* [formattedUpdatedAt](town.md#formattedupdatedat)
* [updatedAtDate](town.md#updatedatdate)

### Methods

* [search](town.md#static-search)

## Properties

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/d3f5678/src/Model.ts#L8)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/d3f5678/src/Model.ts#L7)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [Town.ts:8](https://github.com/isignif/isignif-client/blob/d3f5678/src/Town.ts#L8)*

___

### `Optional` token

• **token**? : *undefined | string*

*Inherited from [Model](model.md).[token](model.md#optional-token)*

*Defined in [Model.ts:11](https://github.com/isignif/isignif-client/blob/d3f5678/src/Model.ts#L11)*

___

### `Optional` updatedAt

• **updatedAt**? : *undefined | string*

*Inherited from [Model](model.md).[updatedAt](model.md#optional-updatedat)*

*Defined in [Model.ts:9](https://github.com/isignif/isignif-client/blob/d3f5678/src/Model.ts#L9)*

## Accessors

###  createdAtDate

• **get createdAtDate**(): *Date*

*Inherited from [Model](model.md).[createdAtDate](model.md#createdatdate)*

*Defined in [Model.ts:13](https://github.com/isignif/isignif-client/blob/d3f5678/src/Model.ts#L13)*

**Returns:** *Date*

___

###  formattedCreatedAt

• **get formattedCreatedAt**(): *string*

*Inherited from [Model](model.md).[formattedCreatedAt](model.md#formattedcreatedat)*

*Defined in [Model.ts:23](https://github.com/isignif/isignif-client/blob/d3f5678/src/Model.ts#L23)*

**Returns:** *string*

___

###  formattedUpdatedAt

• **get formattedUpdatedAt**(): *string*

*Inherited from [Model](model.md).[formattedUpdatedAt](model.md#formattedupdatedat)*

*Defined in [Model.ts:27](https://github.com/isignif/isignif-client/blob/d3f5678/src/Model.ts#L27)*

**Returns:** *string*

___

###  updatedAtDate

• **get updatedAtDate**(): *Date*

*Inherited from [Model](model.md).[updatedAtDate](model.md#updatedatdate)*

*Defined in [Model.ts:18](https://github.com/isignif/isignif-client/blob/d3f5678/src/Model.ts#L18)*

**Returns:** *Date*

## Methods

### `Static` search

▸ **search**(`term`: string): *Promise‹[Town](town.md)[]›*

*Defined in [Town.ts:10](https://github.com/isignif/isignif-client/blob/d3f5678/src/Town.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`term` | string |

**Returns:** *Promise‹[Town](town.md)[]›*
