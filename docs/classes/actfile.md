[isignif-client - v0.0.14-alpha](../README.md) › [Globals](../globals.md) › [ActFile](actfile.md)

# Class: ActFile

## Hierarchy

* [Model](model.md)

  ↳ **ActFile**

## Index

### Properties

* [actId](actfile.md#optional-actid)
* [createdAt](actfile.md#optional-createdat)
* [files](actfile.md#optional-files)
* [id](actfile.md#optional-id)
* [kind](actfile.md#optional-kind)
* [name](actfile.md#optional-name)
* [significationId](actfile.md#optional-significationid)
* [token](actfile.md#optional-token)
* [updatedAt](actfile.md#optional-updatedat)
* [userId](actfile.md#optional-userid)

### Accessors

* [createdAtDate](actfile.md#createdatdate)
* [formattedCreatedAt](actfile.md#formattedcreatedat)
* [formattedUpdatedAt](actfile.md#formattedupdatedat)
* [updatedAtDate](actfile.md#updatedatdate)

### Methods

* [getAct](actfile.md#getact)
* [getSignification](actfile.md#getsignification)
* [getUser](actfile.md#getuser)
* [hydrateFromAttributes](actfile.md#hydratefromattributes)
* [remove](actfile.md#remove)
* [save](actfile.md#save)
* [all](actfile.md#static-all)
* [get](actfile.md#static-get)

## Properties

### `Optional` actId

• **actId**? : *undefined | number*

*Defined in [ActFile.ts:12](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L12)*

___

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/5251eb8/src/Model.ts#L8)*

___

### `Optional` files

• **files**? : *FileList*

*Defined in [ActFile.ts:13](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L13)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/5251eb8/src/Model.ts#L7)*

___

### `Optional` kind

• **kind**? : *undefined | string*

*Defined in [ActFile.ts:10](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L10)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [ActFile.ts:9](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L9)*

___

### `Optional` significationId

• **significationId**? : *undefined | number*

*Defined in [ActFile.ts:14](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L14)*

___

### `Optional` token

• **token**? : *undefined | string*

*Inherited from [Model](model.md).[token](model.md#optional-token)*

*Defined in [Model.ts:11](https://github.com/isignif/isignif-client/blob/5251eb8/src/Model.ts#L11)*

___

### `Optional` updatedAt

• **updatedAt**? : *undefined | string*

*Inherited from [Model](model.md).[updatedAt](model.md#optional-updatedat)*

*Defined in [Model.ts:9](https://github.com/isignif/isignif-client/blob/5251eb8/src/Model.ts#L9)*

___

### `Optional` userId

• **userId**? : *undefined | number*

*Defined in [ActFile.ts:11](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L11)*

## Accessors

###  createdAtDate

• **get createdAtDate**(): *Date*

*Inherited from [Model](model.md).[createdAtDate](model.md#createdatdate)*

*Defined in [Model.ts:13](https://github.com/isignif/isignif-client/blob/5251eb8/src/Model.ts#L13)*

**Returns:** *Date*

___

###  formattedCreatedAt

• **get formattedCreatedAt**(): *string*

*Inherited from [Model](model.md).[formattedCreatedAt](model.md#formattedcreatedat)*

*Defined in [Model.ts:23](https://github.com/isignif/isignif-client/blob/5251eb8/src/Model.ts#L23)*

**Returns:** *string*

___

###  formattedUpdatedAt

• **get formattedUpdatedAt**(): *string*

*Inherited from [Model](model.md).[formattedUpdatedAt](model.md#formattedupdatedat)*

*Defined in [Model.ts:27](https://github.com/isignif/isignif-client/blob/5251eb8/src/Model.ts#L27)*

**Returns:** *string*

___

###  updatedAtDate

• **get updatedAtDate**(): *Date*

*Inherited from [Model](model.md).[updatedAtDate](model.md#updatedatdate)*

*Defined in [Model.ts:18](https://github.com/isignif/isignif-client/blob/5251eb8/src/Model.ts#L18)*

**Returns:** *Date*

## Methods

###  getAct

▸ **getAct**(): *Promise‹[Act](act.md)›*

*Defined in [ActFile.ts:146](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L146)*

**Returns:** *Promise‹[Act](act.md)›*

___

###  getSignification

▸ **getSignification**(): *Promise‹[Signification](signification.md)›*

*Defined in [ActFile.ts:162](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L162)*

**Returns:** *Promise‹[Signification](signification.md)›*

___

###  getUser

▸ **getUser**(): *Promise‹[User](user.md)›*

*Defined in [ActFile.ts:154](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L154)*

**Returns:** *Promise‹[User](user.md)›*

___

###  hydrateFromAttributes

▸ **hydrateFromAttributes**(`attributes`: any, `included`: any[]): *void*

*Defined in [ActFile.ts:126](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L126)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`attributes` | any | - |
`included` | any[] |  [] |

**Returns:** *void*

___

###  remove

▸ **remove**(): *Promise‹[ActFile](actfile.md)›*

*Defined in [ActFile.ts:110](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L110)*

**Returns:** *Promise‹[ActFile](actfile.md)›*

___

###  save

▸ **save**(): *Promise‹[ActFile](actfile.md)›*

*Defined in [ActFile.ts:51](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L51)*

**Returns:** *Promise‹[ActFile](actfile.md)›*

___

### `Static` all

▸ **all**(`actId`: number, `significationId`: number, `token`: string): *Promise‹[ActFile](actfile.md)[]›*

*Defined in [ActFile.ts:22](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`significationId` | number |
`token` | string |

**Returns:** *Promise‹[ActFile](actfile.md)[]›*

___

### `Static` get

▸ **get**(`actId`: number, `significationId`: number, `id`: number, `token`: string): *Promise‹[ActFile](actfile.md)›*

*Defined in [ActFile.ts:39](https://github.com/isignif/isignif-client/blob/5251eb8/src/ActFile.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`actId` | number |
`significationId` | number |
`id` | number |
`token` | string |

**Returns:** *Promise‹[ActFile](actfile.md)›*
