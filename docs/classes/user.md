[isignif-client - v0.0.10-alpha](../README.md) › [Globals](../globals.md) › [User](user.md)

# Class: User

## Hierarchy

* [Model](model.md)

  ↳ **User**

## Index

### Properties

* [activated](user.md#optional-activated)
* [address1](user.md#optional-address1)
* [address2](user.md#optional-address2)
* [approved](user.md#optional-approved)
* [companyName](user.md#optional-companyname)
* [competenceAreaId](user.md#optional-competenceareaid)
* [createdAt](user.md#optional-createdat)
* [creatorId](user.md#optional-creatorid)
* [email](user.md#optional-email)
* [firstName](user.md#optional-firstname)
* [id](user.md#optional-id)
* [lastName](user.md#optional-lastname)
* [lastWork](user.md#optional-lastwork)
* [mustResetPassword](user.md#optional-mustresetpassword)
* [phone](user.md#optional-phone)
* [premiumUntil](user.md#optional-premiumuntil)
* [siret](user.md#optional-siret)
* [token](user.md#optional-token)
* [town](user.md#optional-town)
* [updatedAt](user.md#optional-updatedat)
* [zipCode](user.md#optional-zipcode)

### Accessors

* [completeName](user.md#completename)
* [createdAtDate](user.md#createdatdate)
* [formattedCreatedAt](user.md#formattedcreatedat)
* [formattedUpdatedAt](user.md#formattedupdatedat)
* [updatedAtDate](user.md#updatedatdate)

### Methods

* [getToken](user.md#gettoken)
* [hydrateFromAttributes](user.md#hydratefromattributes)
* [get](user.md#static-get)

## Properties

### `Optional` activated

• **activated**? : *undefined | false | true*

*Defined in [User.ts:9](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L9)*

___

### `Optional` address1

• **address1**? : *undefined | string*

*Defined in [User.ts:15](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L15)*

___

### `Optional` address2

• **address2**? : *undefined | string*

*Defined in [User.ts:16](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L16)*

___

### `Optional` approved

• **approved**? : *undefined | false | true*

*Defined in [User.ts:14](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L14)*

___

### `Optional` companyName

• **companyName**? : *undefined | string*

*Defined in [User.ts:19](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L19)*

___

### `Optional` competenceAreaId

• **competenceAreaId**? : *undefined | number*

*Defined in [User.ts:12](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L12)*

___

### `Optional` createdAt

• **createdAt**? : *undefined | string*

*Inherited from [Model](model.md).[createdAt](model.md#optional-createdat)*

*Defined in [Model.ts:8](https://github.com/isignif/isignif-client/blob/b42d22a/src/Model.ts#L8)*

___

### `Optional` creatorId

• **creatorId**? : *undefined | number*

*Defined in [User.ts:11](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L11)*

___

### `Optional` email

• **email**? : *undefined | string*

*Defined in [User.ts:6](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L6)*

___

### `Optional` firstName

• **firstName**? : *undefined | string*

*Defined in [User.ts:7](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L7)*

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Model](model.md).[id](model.md#optional-id)*

*Defined in [Model.ts:7](https://github.com/isignif/isignif-client/blob/b42d22a/src/Model.ts#L7)*

___

### `Optional` lastName

• **lastName**? : *undefined | string*

*Defined in [User.ts:8](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L8)*

___

### `Optional` lastWork

• **lastWork**? : *undefined | string*

*Defined in [User.ts:10](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L10)*

___

### `Optional` mustResetPassword

• **mustResetPassword**? : *undefined | false | true*

*Defined in [User.ts:13](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L13)*

___

### `Optional` phone

• **phone**? : *undefined | string*

*Defined in [User.ts:21](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L21)*

___

### `Optional` premiumUntil

• **premiumUntil**? : *undefined | string*

*Defined in [User.ts:22](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L22)*

___

### `Optional` siret

• **siret**? : *undefined | string*

*Defined in [User.ts:20](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L20)*

___

### `Optional` token

• **token**? : *undefined | string*

*Inherited from [Model](model.md).[token](model.md#optional-token)*

*Defined in [Model.ts:11](https://github.com/isignif/isignif-client/blob/b42d22a/src/Model.ts#L11)*

___

### `Optional` town

• **town**? : *undefined | string*

*Defined in [User.ts:18](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L18)*

___

### `Optional` updatedAt

• **updatedAt**? : *undefined | string*

*Inherited from [Model](model.md).[updatedAt](model.md#optional-updatedat)*

*Defined in [Model.ts:9](https://github.com/isignif/isignif-client/blob/b42d22a/src/Model.ts#L9)*

___

### `Optional` zipCode

• **zipCode**? : *undefined | string*

*Defined in [User.ts:17](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L17)*

## Accessors

###  completeName

• **get completeName**(): *string*

*Defined in [User.ts:57](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L57)*

**Returns:** *string*

___

###  createdAtDate

• **get createdAtDate**(): *Date*

*Inherited from [Model](model.md).[createdAtDate](model.md#createdatdate)*

*Defined in [Model.ts:13](https://github.com/isignif/isignif-client/blob/b42d22a/src/Model.ts#L13)*

**Returns:** *Date*

___

###  formattedCreatedAt

• **get formattedCreatedAt**(): *string*

*Inherited from [Model](model.md).[formattedCreatedAt](model.md#formattedcreatedat)*

*Defined in [Model.ts:23](https://github.com/isignif/isignif-client/blob/b42d22a/src/Model.ts#L23)*

**Returns:** *string*

___

###  formattedUpdatedAt

• **get formattedUpdatedAt**(): *string*

*Inherited from [Model](model.md).[formattedUpdatedAt](model.md#formattedupdatedat)*

*Defined in [Model.ts:27](https://github.com/isignif/isignif-client/blob/b42d22a/src/Model.ts#L27)*

**Returns:** *string*

___

###  updatedAtDate

• **get updatedAtDate**(): *Date*

*Inherited from [Model](model.md).[updatedAtDate](model.md#updatedatdate)*

*Defined in [Model.ts:18](https://github.com/isignif/isignif-client/blob/b42d22a/src/Model.ts#L18)*

**Returns:** *Date*

## Methods

###  getToken

▸ **getToken**(`password`: string): *Promise‹string›*

*Defined in [User.ts:65](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L65)*

Make an HTTP request to get a JWT token

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`password` | string |   |

**Returns:** *Promise‹string›*

___

###  hydrateFromAttributes

▸ **hydrateFromAttributes**(`attributes`: any): *void*

*Defined in [User.ts:35](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`attributes` | any |

**Returns:** *void*

___

### `Static` get

▸ **get**(`id`: number, `token`: string): *Promise‹[User](user.md)›*

*Defined in [User.ts:24](https://github.com/isignif/isignif-client/blob/b42d22a/src/User.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`token` | string |

**Returns:** *Promise‹[User](user.md)›*
