[isignif-client - v0.0.17-alpha](README.md) › [Globals](globals.md)

# isignif-client - v0.0.17-alpha

## Index

### Classes

* [Act](classes/act.md)
* [ActFile](classes/actfile.md)
* [ActHistory](classes/acthistory.md)
* [ActType](classes/acttype.md)
* [Message](classes/message.md)
* [Model](classes/model.md)
* [Signification](classes/signification.md)
* [Town](classes/town.md)
* [User](classes/user.md)

### Interfaces

* [IDefinitionAttributes](interfaces/idefinitionattributes.md)

### Variables

* [configuration](globals.md#const-configuration)

## Variables

### `Const` configuration

• **configuration**: *Configuration‹›* =  Configuration.getInstance()

*Defined in [Configuration.ts:31](https://github.com/isignif/isignif-client/blob/3700107/src/Configuration.ts#L31)*

Permet de modifier globalement la configuration de la librairie.

Exemple:

~~~ts
const { configuration } = require('isignif-client');
configuration.apiUrl = "https://test.isignif.fr/api/v1";
~~~
