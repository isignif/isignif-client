# iSignif client

[![npm version](https://badge.fury.io/js/isignif-client.svg)](https://badge.fury.io/js/isignif-client)

**en cours de développment**

Client javascript pour utiliser l'API de iSignif.

> Cette librairie est utilisée pour l'application Web [Vue.JS de isignif](https://github.com/isignif/vue-app/)

## Installation

~~~bash
$ yarn add isignif-client
$ # or
$ npm install isignif-client
~~~

## Exemple

Obetnir un jeton JWT pour un utilisateur:

~~~ts
import { User } from 'isignif-client';

const user = new User();
user.email = 'test@isignif.fr';

const token = await user.getToken('mon_password');
// => eyJhbGci...
~~~

Créer un acte

~~~ts
import { Act } from 'isignif-client';

const act = new Act();
act.actTypeId = this.actTypeId;
act.reference = this.reference;
act.token = 'eyJhbGci...';

await act.save();
~~~

On peu ensuite récupérer les actes de cet utilisateur facilement

~~~ts
import { Act } from 'isignif-client';

const acts = await Act.all(token)
~~~

TODO: ajoutes d'autres exemple
