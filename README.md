# iSignif client

[![npm version](https://badge.fury.io/js/isignif-client.svg)](https://badge.fury.io/js/isignif-client)

**en cours de développement**

Client javascript pour utiliser l'API de iSignif.

> Cette librairie est utilisée pour l'application Web [Vue.JS de isignif](https://github.com/isignif/vue-app/)

## Installation

~~~bash
$ yarn add isignif-client
$ # or
$ npm install isignif-client
~~~

## Exemple

Obtenir un jeton JWT pour un utilisateur:

~~~ts
import { User } from 'isignif-client';

const user = new User();
user.email = 'test@isignif.fr';

const token = await user.getToken('mon_password');
// => eyJhbGci...
~~~

On peu ensuite récupérer les actes de cet utilisateur facilement

~~~ts
import { Act } from 'isignif-client';
const acts = await Act.all(token)
~~~

### Créer un acte

~~~ts
import { Act, ActType, Town, Signification } from 'isignif-client';

const actTypes = await ActType.all(token)
const actType = actTypes.find(a => a.name === 'Acte de saisie-contrefaçon')
if (actType === undefined) throw new Error('Cannot find act type')

const towns = await Town.search('Lyons la foret');
const town = towns[0]
if (town === undefined) throw new Error('Cannot find town')

const act = new Act
act.actTypeId = Number(actType.id)
act.reference = 'Unit testing'
await act.save(token).catch(e => console.error(e))

const signification = new Signification
signification.actId = act.id
signification.name = "Chez Pépé"
signification.townId = town.id
await signification.save(token).catch(e => console.error(e))
~~~

Il suffit ensuite de le confirmer. Les huissiers recevront un mail à ce moment là

~~~ts
await act.confirm()
~~~

### Récupérer et créer un message

Créer un message

~~~ts
const message = new Message()
message.actId = act.id
message.significationId = signification.id
message.content = 'bonjour le monde'
await message.save(token).catch(e => {
    throw e
})
~~~

Récupérer les messages

TODO: ajoutes d'autres exemple

## Documentation

Vous pouvez générer la documentation en clonant le projet et en laçant la commande suivante:

~~~
$ npm run build
~~~

La documentation apparaîtra dans le dossier `doc`.
